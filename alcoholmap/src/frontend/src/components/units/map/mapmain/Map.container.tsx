import { ChangeEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import MapUI from './Map.presenter';
import _debounce from 'lodash/debounce'
import Modal from 'react-modal';
import ModalContainer from '../modal/Modal.container';
import modalStyles from '../modal/Modal.styles';
import { Coordinates, Options, PlaceInfo } from './Map.types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

Modal.setAppElement('#__next');

export default function MapPage(): JSX.Element{
    const router = useRouter()
    const { address: initialAddress, placeName: initialPlaceName } = router.query;
    const { keyword: querykeyword } = router.query;
    const initialKeyword = querykeyword ? `${querykeyword}` : '술집';
    const [keyword, setKeyword] = useState<string>(initialKeyword);
    const [kwError, setKwError] = useState("");
    const [options, setOptions] = useState<Options | null>({
        center: null,
        level: 2,
    });
    const [map, setMap] = useState<any | null>(null);
    const [ps, setPs] = useState<any | null>(null);
    const [markers, setMarkers] = useState<any[]>([])
    const [userPosition,setUserPosition] = useState<Coordinates | null>({
        coords:{latitude: 0, longitude: 0},
    });
    const [selectedPlace, setSelectedPlace] = useState<any | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [radius, setRadius] = useState(500);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isDragSearch, setIsDragSearch] = useState(false)
    const [sortOption, setSortOption] = useState(1)
    const [isSearchClick, setIsSearchClick] = useState(0)
    const [placeData, setPlaceData] = useState<PlaceInfo[] | null>(null)
    const [pagination, setPagination] = useState<any[] | null>(null)

    // 초기 로그인 확인
    useEffect(() => {
        checkIsLoggedIn();
    }, []);
    // 초기 kakao map 로드
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
    // 반경 설정변경 시
    useEffect(() => {
        if (ps && map) {
            if(keyword === "") {
                toast.configure();
                toast.dismiss();
                toast.warn("키워드를 입력해주세요.");
                return;
            }
            const center = map.getCenter();
            const latitude = center.getLat();
            const longitude = center.getLng();
            ps.keywordSearch(keyword, displaySearchResult, {
                location: new window.kakao.maps.LatLng(latitude, longitude),
                radius: radius === 0 ? 500 : radius,
                category_group_code: "FD6",
                level: 5,
            });
        }
    }, [radius]);
    // 정렬 기준 변경 시
    useEffect(() => {
        if(placeData){
            const sortedData = selectSort(sortOption, placeData);
            displayPlaces(sortedData);
            displayPagination(pagination);
                return;
            } 
    }, [sortOption]);
    // 드래그 검색 ON/OFF 시
    useEffect(() => {
        if (map && isDragSearch) {
            window.kakao.maps.event.addListener(map, 'dragend', searchPlacesbyDrag);
        }
        return () => {
            if (map) {
                window.kakao.maps.event.removeListener(map, 'dragend', searchPlacesbyDrag);
            }
        };
    }, [map, isDragSearch, isSearchClick]);
    // ----------------------------------------------
    //로그인 확인 함수
    const checkIsLoggedIn = async () => { 
        const token = localStorage.getItem("your_token_key_here");
        if (!token) {
            console.error("Token not found in local storage");
            setLoggedIn(true); //토큰이 없을 시 false
            return;
        } else setLoggedIn(true);
    };
    // 초기 지도 설정
    const fetchData = async () => {
        try {
            const userPosition= await getUserPosition();
            setUserPosition(userPosition as Coordinates)
            const options = {
                center: new window.kakao.maps.LatLng(
                    (userPosition as Coordinates | null)?.coords.latitude,
                    (userPosition as Coordinates | null)?.coords.longitude
                ),
                level: 2,
            };
            setOptions(options);
            const newMap = map || new window.kakao.maps.Map(
                document.getElementById('map'),
                options
            );
            setMap(newMap);
            const newPs = ps || new window.kakao.maps.services.Places();
            setPs(newPs);
            const center = map?.getCenter();
            const latitude = center?.getLat();
            const longitude = center?.getLng(); 
            await ps?.keywordSearch(keyword, displaySearchResult, {
                location: new window.kakao.maps.LatLng(latitude, longitude),
                category_group_code: "FD6", // 주점만 검색
                level: 5,
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    // 유저 위치 반환 함수
    const getUserPosition = async (): Promise<Coordinates | null> => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position) => resolve(position),
                (error) => reject(error)
            );
        });
    };
    // 드래그 검색 함수
    const searchPlacesbyDrag = _debounce(async () => {
        try {
            if (ps && map){ // 맵의 중심 좌표를 가져와서 검색 수행
                const keyword = (document.getElementById('keyword') as HTMLInputElement).value || '';
                if(keyword === "") {
                    toast.configure();
                    toast.dismiss();
                    toast.warn("키워드를 입력해주세요.");
                    return;
                }
                //@ts-ignore // kakao api 함수
                const center = map.getCenter();
                const latitude = center.getLat();
                const longitude = center.getLng(); //@ts-ignore // kakao api 함수
                const level = map.getLevel();
                removePlaceMarker();
                
                //@ts-ignore // kakao api 함수
                const result = await ps.keywordSearch(keyword, displaySearchResult, {
                    location: new window.kakao.maps.LatLng(latitude, longitude),
                    radius: (radius===0? 500: radius),
                    category_group_code: "FD6",
                    level: 5,
                    //level = level,
                });
                console.log(result);
            } else{
                //console.error('Error handling map drag end: ps is null')
            }
            
        } catch (error) {
            console.error('Error handling map drag end:', error);
        }
    }, 500);
    // 키워드 검색 함수
    const searchPlacesbyKeyword = async (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const keyword = (document.getElementById('keyword') as HTMLInputElement).value || '';
            if (!keyword.replace(/^\s+|\s+$/g, '')) {
                toast.configure();
                toast.dismiss();
                toast.warn('키워드를 입력해주세요!');
                return false;
            }
            const latitude = userPosition?.coords.latitude;
            const longitude = userPosition?.coords.longitude;
            ps?.keywordSearch(keyword, displaySearchResult, {
                location: new window.kakao.maps.LatLng(latitude, longitude),
                radius: (radius===0? 500: radius),// 반경 설정 안 할 시 기본 500m로
                category_group_code: "FD6", // 주점만 검색
            });
        } catch (error) {
            console.error('Error searching places:', error);
        }
    };
    // 서버 response 예시
    const serverResponse: any[] = [
        {
            id: "1805535326",
            rating: 4.5, // 반올림 후: 5
            reviewCount: 120
        },
        {
            id: "1714692366",
            rating: 3.8, // 반올림 후: 4
            reviewCount: 85
        },
        {
            id: "596803138",
            rating: 3.3, // 반올림 후: 3
            reviewCount: 95
        },
        {
            id: "1648050966",
            rating: 2.6, // 반올림 후: 3
            reviewCount: 110
        },
        {
            id: "2075548768",
            rating: 1.9, // 반올림 후: 2
            reviewCount: 100
        },
        {
            id: "695042590",
            rating: 1.1, // 반올림 후: 1
            reviewCount: 150
        },
        {
            id: "782044578",
            rating: 3.7, // 반올림 후: 4
            reviewCount: 105
        },
        {
            id: "1332590568",
            rating: 4.4, // 반올림 후: 4
            reviewCount: 130
        },
        {
            id: "260149239",
            rating: 2.2, // 반올림 후: 2
            reviewCount: 160
        },
        {
            id: "455859409",
            rating: 1.5, // 반올림 후: 2
            reviewCount: 90
        },
        {
            id: "27305404",
            rating: 4.8, // 반올림 후: 5
            reviewCount: 170
        },
        {
            id: "1985864891",
            rating: 2.9, // 반올림 후: 3
            reviewCount: 95
        },
        {
            id: "1376591946",
            rating: 4.5, // 반올림 후: 5
            reviewCount: 125
        },
        {
            id: "20373658",
            rating: 3.7, // 반올림 후: 4
            reviewCount: 80
        }
    ];
    //서버에 보내기 위한 아이디 추출함수
    const extractIds = (data: PlaceInfo[]): number[] => {
        const PlaceIds = data.map(item => +item.id);
        return PlaceIds;
    }
    // 서버에 현재 장소들의 평점과 리뷰를 요청하는 함수
    const sendIdsToServer = async (PlaceIds: string[]) => {
        const apiUrl = '/places/id'
        try {
            const response = await axios.post(apiUrl, PlaceIds, {
                headers: {
                  'Content-Type': 'application/json',
                },
              });
            // 서버 응답 확인
            console.log('서버 응답:', response.data);
            return response.data;
        } catch (error) {
            console.error('서버 요청 에러:', error);
            throw new Error('서버 요청 에러 발생');
        }
    }
    // 검색 결과를 표시하는 함수
    const displaySearchResult = (data: any, status: string, pagination: any): void => {        
        //const serverResponse = sendIdsToServer(extractIds(data))
        addRatingAndReviewCount(data,serverResponse);
        setPagination(pagination);
        setPlaceData(data);
        const sortedData = selectSort(sortOption, data);
        if (status === kakao.maps.services.Status.OK) {
            displayPlaces(sortedData);
            displayPagination(pagination);
            return;
        } 
        else if (status === kakao.maps.services.Status.ZERO_RESULT) {
            toast.configure();
            toast.dismiss();
            toast.warn('검색 결과가 없습니다.', {
                position: toast.POSITION.TOP_RIGHT
            });
            return;
        }
        else if (status === kakao.maps.services.Status.ERROR) {
            toast.configure();
            toast.dismiss();
            toast.warn('오류가 발생했습니다.', {
                position: toast.POSITION.TOP_RIGHT
            });
            return;
        }
    }
    // 정렬 방법 고르기 함수
    const selectSort = (option: number, data: PlaceInfo[]): PlaceInfo[] => {
        switch (option) {
            case 1: // 거리순
                setSortOption(1);
                return sortByDistance(data);
            case 2: // 별점순
                setSortOption(2);
                return sortByStarRate(data);
            case 3: // 리뷰순
                setSortOption(3);
                return sortByReview(data);
            default: // 기본은 거리순
                setSortOption(1);
                return sortByDistance(data);
        }
    };
    // 거리순 정렬 함수
    const sortByDistance = (data: PlaceInfo[]): PlaceInfo[] => { //거리순 정렬
        return data.sort((a: PlaceInfo, b: PlaceInfo) => {
            const distanceA = parseInt(a.distance);
            const distanceB = parseInt(b.distance);
            return distanceA - distanceB;
        });
    };
    // 평점순 정렬 함수
    const sortByStarRate = (data: PlaceInfo[]): PlaceInfo[] => { // 별점순 정렬
        return data.sort((a: PlaceInfo, b: PlaceInfo) => {
            const ratingA = a.rating !== undefined ? a.rating : 0;
            const ratingB = b.rating !== undefined ? b.rating : 0;
            return ratingB - ratingA // 내림차순 정렬
        });
    };
    // 리뷰순 정렬 함수
    const sortByReview = (data: PlaceInfo[]): PlaceInfo[] => { // 리뷰순 정렬
        return data.sort((a: PlaceInfo, b: PlaceInfo) => {
            const reviewCountA = a.reviewCount !== undefined ? a.reviewCount : 0;
            const reviewCountB = b.reviewCount !== undefined ? b.reviewCount : 0; 
    
            return reviewCountB - reviewCountA; // 내림차순 정렬
        });
    };
    // 서버로부터 받아온 별점과 리뷰개수 넣기.
    const addRatingAndReviewCount = (places: PlaceInfo[], serverResponse: { id: string; rating: number; reviewCount: number }[]): PlaceInfo[] => {
        return places?.map(place => {
            const data = serverResponse.find(item => item.id === place.id);
            if (data) {
                place.rating = data.rating;
                place.reviewCount = data.reviewCount;
            }
            return place;
        });
    };
    // 장소 마커, 검색 결과 리스트 표시 함수
    const displayPlaces = (places: any): void => {
        let listEl = document.getElementById('placesList'),
            menuEl = document.getElementById('menu_wrap'),
            fragment = document.createDocumentFragment(), 
            bounds = new kakao.maps.LatLngBounds();
        
        // 검색 결과 목록에 추가된 항목들을 제거합니다
        if(listEl){
            removeAllChildNods(listEl);
        }

        removePlaceMarker();
        setMarkers([])

        for (let i=0; i<places.length; i++ ) { 
            let placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
                marker = addPlaceMarker(placePosition, i, places[i].rating), // 마커 생성
                itemEl = addPlaceList(i, places[i]); // 검색 결과 리스트 생성
            
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정
            bounds.extend(placePosition);
    
            (function (marker, title, place) {
                // 마커 클릭 시 인포윈도우
                kakao.maps.event.addListener(marker, 'click', function () {
                    displayInfowindow(marker, title, true);
                    onPlaceClick(place);
                });
                // 장소 리스트 클릭시 인포윈도우
                itemEl.onclick = function () {
                    displayInfowindow(marker, title, true);
                    onPlaceClick(place);
                };
            })(marker, places[i].place_name, places[i]);
            
            (function(marker, title) {
                // 마커 마우스 오버 시 인포윈도우
                kakao.maps.event.addListener(marker, 'mouseover', function() {
                    displayInfowindow(marker, title, false);
                });
                // 장소 리스트 마우스 오버 시 인포윈도우
                itemEl.onmouseover =  function () {
                    displayListInfowindow(marker, title, itemEl, false);
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
        if (map) {
            map.setBounds(bounds);
        }
    }
    // 검색 결과 생성 함수
    const addPlaceList = (index: number, places: any): any => {
        const roundedRating = Math.round(places.rating);
        const el: HTMLElement = document.createElement('li');
        let itemStr : string = (`<span style ="float:right"><img src ="/soju1.png"/></span>`).repeat(roundedRating);
        itemStr += `<div>${places.place_name}</div>`;
        itemStr += `<span>리뷰(${places.reviewCount ? places.reviewCount : 0})<br/></span>`
    
        if (places.road_address_name) {
            itemStr += `<span>${places.road_address_name}</span><br/>`;
        } else {
            itemStr += `<span>${places.address_name}</span><br/>`; 
        }
        if (places.phone){
            itemStr += `<span class="tel">☎ ${places.phone}</span><hr/>`;     
        } else {
            itemStr += '<hr/>';
        }
                
        el.innerHTML = itemStr;
        el.className = 'item';
    
        return el;
    }
    // 장소 마커 추가 함수
    const addPlaceMarker = (position: any, idx: number, rating: number): any => {
        let imageSrc = selectPlaceMarkerImgbyRating(rating); // 평점에 따라 이미지를 선택
        let imageSize = new window.kakao.maps.Size(20, 50),  // 마커 이미지의 크기
        markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize),
        marker = new window.kakao.maps.Marker({
            position: position,
            image: markerImage
        });
        marker.setMap(map);
        setMarkers(prevMarkers => [...prevMarkers, marker]);
        return marker;
    };
    // 장소 마커 이미지 평점에 따라 선택 함수
    const selectPlaceMarkerImgbyRating = (rating: number): string => {
        if (rating >= 4.5 && rating <= 5.0) {
            return '/bluesoju.png';
        } else if (rating >= 3.5 && rating < 4.5) {
            return '/orangesoju.png';
        } else if (rating < 3.5){
            return '/redsoju.png';
        } else {
            return '/greensoju.png';
        }
    };
    // 장소 마커 삭제 함수
    const removePlaceMarker = (): any => {
        setMarkers(prevMarkers => {
            prevMarkers.forEach(marker => marker.setMap(null));
            return [];
        });
    }
    // 장소 검색 결과 페이지네이션 표시 함수
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
    // 장소 마커에 마우스오버, 클릭 시 인포윈도우 표시 함수 
    const displayInfowindow = (marker: any, title: string, click: boolean) => {
        let content = 
            `<div class="overlay">
            ${title}
            </div>`;
        let lat = marker.getPosition().getLat();
        let lng = marker.getPosition().getLng(); 
        let position = new kakao.maps.LatLng(lat, lng);
        let newInfowindow = new kakao.maps.CustomOverlay({ 
            position: position,
            content: content,
            zIndex: 9999,
        });
        newInfowindow.setMap(map);
        if (click) {
            // 클릭 이벤트가 발생하면 5초 후에 인포윈도우를 닫음
            setTimeout(() => {
                newInfowindow.setMap(null);
            }, 5000);
        } else {
            kakao.maps.event.addListener(marker, 'mouseout', function() {
                newInfowindow.setMap(null);
            });
        }
    };
    // 검색 결과 리스트에 마우스오버, 클릭 시 인포윈도우 표시 함수
    const displayListInfowindow = (marker: any, title: string, itemEl : any, click: boolean): void => {
        let content = 
            `<div class="overlay">
            ${title}
            </div>`;
        let lat = marker.getPosition().getLat();
        let lng = marker.getPosition().getLng(); 
        let position = new kakao.maps.LatLng(lat, lng);
        let newInfowindow = new kakao.maps.CustomOverlay({ 
            position: position,
            content: content,
            zIndex: 9999,
        });
        newInfowindow.setMap(map);
        if (click) {
            // 클릭 이벤트가 발생하면 5초 후에 인포윈도우를 닫음
            setTimeout(() => {
                newInfowindow.setMap(null);
            }, 5000);
        } else {
            // 마우스가 마커에서 벗어났을 때 인포윈도우를 닫음
            itemEl.onmouseout =  function () { //@ts-ignore // kakao api 함수
                newInfowindow.setMap(null);
            };
        }
    }
    // 페이지 이동 시 리스트 삭제 함수
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
    // 사용자 위치 갱신 함수
    const onClickRefreshLocation = async (): Promise<void> => {
        try {
            const newPosition = await getUserPosition();
            setUserPosition(newPosition);
            const newPositionLatLng = new kakao.maps.LatLng(
                userPosition?.coords.latitude,
                userPosition?.coords.longitude
            );
            const UserMarkerPos = new window.kakao.maps.LatLng( //지도에 사용자 위치 표시
                (userPosition as Coordinates | null)?.coords.latitude,
                (userPosition as Coordinates | null)?.coords.longitude
            );
            createAndRemoveUserMarker(UserMarkerPos);

            map.panTo(newPositionLatLng);
        } catch (error) {
            console.error('Error handling button click:', error);
        }
    };
    // 사용자 마커 생성, 제거 함수
    const createAndRemoveUserMarker = (userMarkerPos: any) => {
        const newMarker = new kakao.maps.Marker({
            position: userMarkerPos,
            map: map,
            title: '마커',
        });
        setTimeout(() => {
            if (newMarker) {
                newMarker.setMap(null);
            }
        }, 5000);
    };
    // -------------------모달 관련-----------------------
    const onPlaceClick = (place: any): void => {
        setSelectedPlace(place);
        openModal(); // 모달창 열기
    };
    
    const openModal = (): void => {
        setIsModalOpen(true);
    };
    
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
    const onClickDragSearch = () => {
        setIsDragSearch(prevIsDragSearch => !prevIsDragSearch);
    };

    const onClickMoveToMypage = () => {
        router.push("../mypage")
    }

    const onClickMoveToLogin = () => {
        router.push("../login");
    }

    const onClickMoveToSignup = () => {
        router.push("../signup");
    };

    const onClickLogout = () => {
        setLoggedIn(false);
        localStorage.removeItem("jwtToken");
    };

    const onClickReload = () => {
        window.location.reload();
    };

    const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>): void => {
        setKeyword(event.target.value)
        if(event.target.value !== ""){
            setKwError("");
        }
    };

    const onChangeRadius = (event: ChangeEvent<HTMLSelectElement>): void => {
        setRadius(+event.target.value);
    };

    const onChangeSelectOption = (event: ChangeEvent<HTMLSelectElement>): void => {
        setSortOption(+event.target.value);
    };
    
    const onClickSearch = () => {
        setIsSearchClick(prevIsSearchClick => prevIsSearchClick + 1);
    }

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
                searchPlaces = {searchPlacesbyKeyword}
                keyword = {keyword}
                radius = {radius}
                isLoggedIn = {isLoggedIn}
                isDragSearch = {isDragSearch}
                sortOption = {sortOption}
                onClickRefreshLocation = {onClickRefreshLocation}
                onClickDragSearch = {onClickDragSearch}
                onChangeSelectOption = {onChangeSelectOption}
                onClickSearch = {onClickSearch}
            />
        </>
        
    )
}