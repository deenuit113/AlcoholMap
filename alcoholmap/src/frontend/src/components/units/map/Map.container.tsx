import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import MapUI from './Map.presenter';
import _debounce from 'lodash/debounce'
import Modal from 'react-modal';
import ModalContainer from './Modal.container';
import modalStyles from './Modal.styles';
import { Coordinates ,Options } from './Map.types';

Modal.setAppElement('#__next');

export default function MapPage(): JSX.Element{
    const router = useRouter()

    const [keyword, setKeyword] = useState("술집");
    const [kwError, setKwError] = useState("");
    const [options, setOptions] = useState<Options | null>({
        center: null,
        level: 2,
    });
    const [map, setMap] = useState<any | null>(null);
    const [ps, setPs] = useState<any | null>(null);
    const [infowindow, setInfowindow] = useState<any | null>(null);
    const [markers, setMarkers] = useState<any[]>([])
    const [userPosition,setUserPosition] = useState<Coordinates | null>({
        coords:{latitude: 0, longitude: 0},
    });
    const [selectedPlace, setSelectedPlace] = useState<any | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [radius, setRadius] = useState(0);
    const [isLoggedIn, setLoggedIn] = useState(false);
    //const [testtoken, setToken] = useState(false);
    
    useEffect(() => {
        checkIsLoggedIn();
    }, []);

    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src =
            "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=874eea7b48b7810e4c254737d3892e8f&libraries=services";
    
        script.onload = () => {
            console.log('Kakao Maps SDK loaded successfully!');
            window.kakao.maps.load(() => {
                fetchData();
            });
        };
        document.head.appendChild(script);
    
        return () => {
        };
    }, [ps]);

    // ----------------------------------------------

    const checkIsLoggedIn = async () => { //로그인 확인 함수
        // 로컬 스토리지에서 토큰 가져오기
        const token = localStorage.getItem("your_token_key_here");

        // 토큰이 없으면 처리
        if (!token) {
            console.error("Token not found in local storage");
            setLoggedIn(true); //토큰이 없을 시 false
            return;
        }

        // API 요청 헤더에 토큰 추가
        /*const headers = {
            Authorization: `Bearer ${token}`,
            Content-Type: 'application/json',
            // 다른 헤더도 필요한 경우 추가
        };*/
        setLoggedIn(true);
    };

    const fetchData = async () => {
        try {
            
            // 사용자의 현재 위치를 받아오기
            const userPosition= await getUserPosition();
            setUserPosition(userPosition as Coordinates)
            console.log('User Position:', userPosition);
            console.log(typeof userPosition);
            // 초기 지도 설정
            const options = {
                center: new window.kakao.maps.LatLng(
                    (userPosition as Coordinates | null)?.coords.latitude,
                    (userPosition as Coordinates | null)?.coords.longitude
                ),
                level: 2,
            };
            console.log(options);

            setOptions(options);

            // 기존의 맵이 있으면 그 맵을 사용하고, 없으면 새로운 맵을 생성
            const newMap = map || new window.kakao.maps.Map(
                document.getElementById('map'),
                options
            );
            setMap(newMap);

            const newPs = ps || new window.kakao.maps.services.Places();
            setPs(newPs);

            if (!infowindow) {
                const newInfowindow = new window.kakao.maps.InfoWindow({
                    map: newMap,
                    position: options.center,
                    content: '',
                });
            setInfowindow(newInfowindow);

            newInfowindow.close();
            }
            kakao.maps.event.addListener(newMap, 'dragend', handleMapDragEnd);
            //kakao.maps.event.addListener(newMap, 'zoom_changed', handleMapDragEnd);
            //고려사항 zoom in/out 할때도 검색 진행?
            handleMapDragEnd();
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleMapDragEnd = _debounce(async () => {
        try {
            // ps가 초기화되지 않았을 때의 처리
            if (!ps || !map) {
                const newPs = new window.kakao.maps.services.Places();
                setPs(newPs);
            }
            if (ps && map){ // 맵의 중심 좌표를 가져와서 검색 수행
                 //@ts-ignore // kakao api 함수
                const center = map.getCenter();
                const latitude = center.getLat();
                const longitude = center.getLng(); //@ts-ignore // kakao api 함수
                const level = map.getLevel();
                removeMarker();
                
                //@ts-ignore // kakao api 함수
                const result = await ps.keywordSearch(keyword, placesSearchCB, {
                    location: new window.kakao.maps.LatLng(latitude, longitude),
                    //level = level,
                });
            } else{
                //console.error('Error handling map drag end: ps is null')
            }

            
        } catch (error) {
            console.error('Error handling map drag end:', error);
        }
    }, 500);


    const getUserPosition = async () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position) => resolve(position),
                (error) => reject(error)
            );
        });
    };

    // 키워드 검색을 요청하는 함수입니다
    const searchPlaces = async (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            // 사용자의 위치를 기반으로 검색 수행
            const keyword = (document.getElementById('keyword') as HTMLInputElement).value || '';
            if (!keyword.replace(/^\s+|\s+$/g, '')) {
                alert('키워드를 입력해주세요!');
                return false;
            }

            // 위도와 경도 추출
            const latitude = userPosition?.coords.latitude;
            const longitude = userPosition?.coords.longitude;

            //@ts-ignore // kakao api 함수
            ps?.keywordSearch(keyword, placesSearchCB, {
                location: new window.kakao.maps.LatLng(latitude, longitude),
                radius: (radius===0? 1000: radius), // 반경 설정 안 할 시 기본 1000m로
            });
        } catch (error) {
            console.error('Error searching places:', error);
        }
    };

    const placesSearchCB = (data: any, status: string, pagination: any): void => {
        console.log(data, status, pagination);
        if (status === kakao.maps.services.Status.OK) {
            // 정상적으로 검색이 완료됐으면 검색 목록과 마커를 표출합니다
            displayPlaces(data);
            // 페이지 번호를 표출합니다
            displayPagination(pagination);
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
            alert('검색 결과가 존재하지 않습니다.');
            return;
        } else if (status === kakao.maps.services.Status.ERROR) {
            alert('검색 결과 중 오류가 발생했습니다.');
            return;
        }
    }

    const displayPlaces = (places: any): void => {
        let listEl = document.getElementById('placesList'),
            menuEl = document.getElementById('menu_wrap'),
            fragment = document.createDocumentFragment(), 
            bounds = new kakao.maps.LatLngBounds();
        
        // 검색 결과 목록에 추가된 항목들을 제거합니다
        if(listEl){
            removeAllChildNods(listEl);
        }
    
        // 지도에 표시되고 있는 마커를 제거합니다
        removeMarker();
        
        // 마커 배열 초기화
        setMarkers([])
        for (let i=0; i<places.length; i++ ) {
            // 마커를 생성하고 지도에 표시합니다
            let placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
                marker = addMarker(placePosition, i), 
                itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다
    
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            bounds.extend(placePosition);
    
            // 마커와 검색결과 항목에 mouseover 했을때
            // 해당 장소에 인포윈도우에 장소명을 표시합니다
            // mouseout 했을 때는 인포윈도우를 닫습니다

            (function (marker, title, place) {
                kakao.maps.event.addListener(marker, 'click', function () {
                    //displayInfowindow(marker, title, place);
                    onMarkerClick(place);
                    
                });
    
                itemEl.onclick = function () {
                    //displayInfowindow(marker, title, place);
                    onMarkerClick(place);
                };
            })(marker, places[i].place_name, places[i]);
            
            (function(marker, title) {
                kakao.maps.event.addListener(marker, 'mouseover', function() {
                    displayInfowindow(marker, title);
                });
                
                kakao.maps.event.addListener(marker, 'mouseout', function() {
                    if (infowindow) { //@ts-ignore // kakao api 함수
                        infowindow.close();
                    }
                });
    
                itemEl.onmouseover =  function () {
                    displayInfowindow(marker, title);
                };
    
                itemEl.onmouseout =  function () {
                    if (infowindow) { //@ts-ignore // kakao api 함수
                        infowindow.close();
                    }
                };
            })(marker, places[i].place_name);
    
            fragment.appendChild(itemEl);
        }
    
        // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
        listEl?.appendChild(fragment);
        if (menuEl) {
            menuEl.scrollTop = 0;
        }
    
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        if (map) { //@ts-ignore // kakao api 함수
            map.setBounds(bounds);
        }
    }

    const getListItem = (index: number, places: any): any => {
        const el: HTMLElement = document.createElement('li');
        let itemStr : string = (`<span style ="float:right"><img src ="/soju1.png"/></span>`).repeat(5);
        itemStr += `<div style="font-size: 25px; font-weight:bold;margin-bottom:10px;">${places.place_name}</div>`;
    
        if (places.road_address_name) {
            itemStr += `<span>${places.road_address_name}</span>
                        <span style="overflow:hidden">${places.address_name}</span><br/>`;
        } else {
            itemStr += `<span>${places.address_name}</span><br/>`; 
        }
        if (places.phone){
            itemStr += `<span class="tel">☎ ${places.phone}</span><hr/></div>`;     
        } else {
            itemStr += '<hr/>';
        }
                
        el.innerHTML = itemStr;
        el.className = 'item';
    
        return el;
    }

    const addMarker = (position: any, idx: number): any => {
        let imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
            imageSize = new window.kakao.maps.Size(36, 37),  // 마커 이미지의 크기
            imgOptions = {
                spriteSize: new window.kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
                spriteOrigin: new window.kakao.maps.Point(0, (idx * 46) + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
                offset: new window.kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
            },
        markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
        marker = new window.kakao.maps.Marker({
            position: position, // 마커의 위치
            image: markerImage
        });
    
        marker.setMap(map); // 지도 위에 마커를 표출합니다

        setMarkers(prevMarkers => [...prevMarkers, marker]);  // 배열에 생성된 마커를 추가합니다
    
        return marker;
      };

    const removeMarker = (): any => {
        // 이전에 생성된 마커들 제거
        setMarkers(prevMarkers => { //@ts-ignore // kakao api 함수
            prevMarkers.forEach(marker => marker.setMap(null));
            return []; // Clear the markers array
        });
    }

    const displayPagination = (pagination: any): any => {
        let paginationEl = document.getElementById('pagination'),
            fragment = document.createDocumentFragment(),
            i; 
    
        if (paginationEl) {
            // 기존에 추가된 페이지번호를 삭제합니다
            paginationEl.innerHTML = '';
        
            for (i = 1; i <= pagination.last; i++) {
                let el = document.createElement('a');
                el.href = "#";
                el.innerHTML = String(i);
        
                if (i === pagination.current) {
                el.className = 'on';
                } else {
                el.onclick = (function (i) {
                    return function () {
                    pagination.gotoPage(i);
                    }
                })(i);
                }
                fragment.appendChild(el);
            }
            paginationEl.appendChild(fragment);
        }
    }

    const displayInfowindow = (marker: any, title: string): void => {

        let content = '<div style="padding:10px;z-index:1;font-size:15px;">' + title + '</div>';
    
        if (infowindow) {
            //@ts-ignore // kakao api 객체 
            infowindow.setContent(content);
            //@ts-ignore // kakao api 객체
            infowindow.open(map, marker);
        }
    }

    const removeAllChildNods = (el : HTMLElement) => {
        if (!el) {
          console.error("Element is null");
          return;
        }
      
        while (el.hasChildNodes()) {
            const lastChild = el.lastChild;
            if (lastChild !== null) {
              el.removeChild(lastChild);
            } else {
              console.error("lastChild is null");
            }
          }
    };

    // -------------------모달 관련 함수-----------------------

    // 마커 클릭 이벤트 핸들러
    const onMarkerClick = (place: any): void => {
        setSelectedPlace(place);
        openModal(); // 모달창 열기
    };
    
    // 목록 항목 클릭 이벤트 핸들러
    /*const onListItemClick = (place) => {
        setSelectedPlace(place);
        openModal(); // 모달창 열기
    };*/
    
    // 모달창 열기 함수
    const openModal = (): void => {
        setIsModalOpen(true);
    };
    
    // 모달창 닫기 함수
    const closeModal = (): void => {
        setIsModalOpen(false);
    };

    const modalContent = selectedPlace && (
        <ModalContainer
            selectedPlace={selectedPlace}
            closeModal={closeModal}
            isLoggedIn={isLoggedIn}
            isOpen ={isModalOpen}
        />
    );
        
    // -------------------------------------------------------

    const onClickMoveToMypage = () => {
        router.push("../mypage")
    }

    const onClickMoveToLogin = () => {
        router.push("../login")
    }

    const onClickMoveToSignup = () => {
        router.push("../signup")
    }

    const onClickLogout = () => {
        setLoggedIn(false)
    }

    const onClickReload = () => {
        window.location.reload();
    }

    const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>): void => {
        setKeyword(event.target.value)
        if(event.target.value !== ""){
            setKwError("")
        }
    }
    const onChangeRadius = (event: ChangeEvent<HTMLInputElement>) => {
        setRadius(+event.target.value)
        if(event.target.value !== ""){
            setKwError("")
        }
    }

    
    // 별점 평점 -------


    return (
        <>
            <Modal
                isOpen={isModalOpen}
                style={modalStyles}
            >
                {modalContent}
            </Modal>

            <MapUI
                onClickMoveToMypage = {onClickMoveToMypage}
                onClickMoveToLogin = {onClickMoveToLogin}
                onClickMoveToSignup = {onClickMoveToSignup}
                onClickLogout = {onClickLogout}
                onClickReload = {onClickReload}
                onChangeKeyword = {onChangeKeyword}
                onChangeRadius = {onChangeRadius}
                searchPlaces = {searchPlaces}
                keyword = {keyword}
                radius = {radius}
                isLoggedIn = {isLoggedIn}
            />
        </>
        
    )
}