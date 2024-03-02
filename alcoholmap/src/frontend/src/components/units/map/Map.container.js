import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import MapUI from './Map.presenter';

import Modal from 'react-modal';
import _debounce from 'lodash/debounce'

export default function MapPage() {

    const router = useRouter()

    const [keyword, setKeyword] = useState("술집");
    const [kwError, setKwError] = useState("");
    //const [container, setContainer] = useState(null);
    const [options, setOptions] = useState(null);
    const [map, setMap] = useState(null);
    const [ps, setPs] = useState(null);
    const [infowindow, setInfowindow] = useState(null);
    const [markers, setMarkers] = useState([])
    const [userPosition,setUserPosition] = useState(null);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [radius, setRadius] = useState(0);
    const [review, setReview] = useState("")


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
    
        // Cleanup function to remove the script element when the component unmounts
        return () => {
            //document.head.removeChild(script);
        };
    }, [ps]);

    // ----------------------------------------------

    const fetchData = async () => {
        try {
            
            // 사용자의 현재 위치를 받아오기
            const userPosition = await getUserPosition();
            setUserPosition(userPosition)
            console.log('User Position:', userPosition);

            // 초기 지도 설정
            const options = {
                center: new window.kakao.maps.LatLng(
                    userPosition.coords.latitude,
                    userPosition.coords.longitude
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
            if (!ps) {
                const newPs = new window.kakao.maps.services.Places();
                setPs(newPs);
            }
            if (ps){
                // 맵의 중심 좌표를 가져와서 검색 수행
                const center = map.getCenter();
                const latitude = center.getLat();
                const longitude = center.getLng();
                const level = map.getLevel();
                removeMarker();
        
                // 검색어는 현재 입력된 keyword를 사용
                const result = await ps.keywordSearch(keyword, placesSearchCB, {
                    location: new window.kakao.maps.LatLng(latitude, longitude),
                    //level = level,
                });
        
                // 검색 결과를 목록에 표시
                if (result && result.length > 0) {
                    displayPlaces(result);
                }
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
    const searchPlaces = async (event) => {
        event.preventDefault();
        try {
            // 사용자의 위치를 기반으로 검색 수행
            const keyword = document.getElementById('keyword').value;
            if (!keyword.replace(/^\s+|\s+$/g, '')) {
                alert('키워드를 입력해주세요!');
                return false;
            }

            // 위도와 경도 추출
            const latitude = userPosition.coords.latitude;
            const longitude = userPosition.coords.longitude;

            ps.keywordSearch(keyword, placesSearchCB, {
                location: new window.kakao.maps.LatLng(latitude, longitude),
                radius: radius,
            });
        } catch (error) {
            console.error('Error searching places:', error);
        }
    };

    const placesSearchCB = (data, status, pagination) => {

        if (status === kakao.maps.services.Status.OK) {
    
            // 정상적으로 검색이 완료됐으면
            // 검색 목록과 마커를 표출합니다
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

    const displayPlaces = (places) => {
        let listEl = document.getElementById('placesList'),
            menuEl = document.getElementById('menu_wrap'),
            fragment = document.createDocumentFragment(), 
            bounds = new kakao.maps.LatLngBounds(), 
            listStr = '';
        
        // 검색 결과 목록에 추가된 항목들을 제거합니다
        removeAllChildNods(listEl);
    
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
                    if (infowindow) {
                        infowindow.close();
                    }
                });
    
                itemEl.onmouseover =  function () {
                    displayInfowindow(marker, title);
                };
    
                itemEl.onmouseout =  function () {
                    if (infowindow) {
                        infowindow.close();
                    }
                };
            })(marker, places[i].place_name);
    
            fragment.appendChild(itemEl);
        }
    
        // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
        listEl.appendChild(fragment);
        menuEl.scrollTop = 0;
    
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        if (map) {
            map.setBounds(bounds);
        }
    }

    const getListItem = (index, places) => {

        const el = document.createElement('li'),
        itemStr = '<span class="markerbg marker_' + (index+1) + '"></span>' +
                    '<div class="info">' +
                    '   <h5>' + places.place_name + '</h5>';
    
        if (places.road_address_name) {
            itemStr += '    <span>' + places.road_address_name + '</span>' +
                        '   <span class="jibun gray">' +  places.address_name  + '</span>';
        } else {
            itemStr += '    <span>' +  places.address_name  + '</span>'; 
        }
                     
          itemStr += '  <span class="tel">' + places.phone  + '</span>' +
                    '</div>';           
    
        el.innerHTML = itemStr;
        el.className = 'item';
    
        return el;
    }

    const addMarker = (position, idx, title) => {
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

    const removeMarker = () => {
        // 이전에 생성된 마커들 제거
        setMarkers(prevMarkers => {
            prevMarkers.forEach(marker => marker.setMap(null));
            return []; // Clear the markers array
        });
    }

    const displayPagination = (pagination) => {
        let paginationEl = document.getElementById('pagination'),
            fragment = document.createDocumentFragment(),
            i; 
    
        // 기존에 추가된 페이지번호를 삭제합니다
        while (paginationEl.hasChildNodes()) {
            paginationEl.removeChild (paginationEl.lastChild);
        }
    
        for (i=1; i<=pagination.last; i++) {
            let el = document.createElement('a');
            el.href = "#";
            el.innerHTML = i;
    
            if (i===pagination.current) {
                el.className = 'on';
            } else {
                el.onclick = (function(i) {
                    return function() {
                        pagination.gotoPage(i);
                    }
                })(i);
            }
    
            fragment.appendChild(el);
        }
        paginationEl.appendChild(fragment);
    }

    const displayInfowindow = (marker, title) => {

        let content = '<div style="padding:5px;z-index:1;">' + title + '</div>';
    
        if (infowindow) {
            infowindow.setContent(content);
            infowindow.open(map, marker);
        }
    }

    const removeAllChildNods = (el) => {
        if (!el) {
          console.error("Element is null");
          return;
        }
      
        while (el.hasChildNodes()) {
          el.removeChild(el.lastChild);
        }
    };

    // -------------------모달 관련 함수-----------------------

    // 마커 클릭 이벤트 핸들러
    const onMarkerClick = (place) => {
        setSelectedPlace(place);
        openModal(); // 모달창 열기
    };
    
    // 목록 항목 클릭 이벤트 핸들러
    const onListItemClick = (place) => {
        setSelectedPlace(place);
        openModal(); // 모달창 열기
    };
    
    // 모달창 열기 함수
    const openModal = () => {
        setIsModalOpen(true);
    };
    
    // 모달창 닫기 함수
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const onClickSubmitReview = (event) => {
        setReview(event.target.value)
    }

    const modalContent = selectedPlace && (
        <>
            <div>
                <div>장소명: {selectedPlace.place_name}</div>
                <div>주소: {selectedPlace.address_name}</div>
                <div>카테고리: {selectedPlace.category_group_name}</div>
                <div>전화번호: {selectedPlace.phone}</div>
                <div>
                장소 URL: <a href = {selectedPlace.place_url}>{selectedPlace.place_url}</a>
                </div>
                리뷰: <input type = "text"></input>
                <button onClick={onClickSubmitReview}>리뷰 제출</button>
            </div>
            
          <button onClick={closeModal}>닫기</button>
        </>
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

    const onClickReload = () => {
        window.location.reload();
    }

    const onChangeKeyword = (event) => {
        setKeyword(event.target.value)
        if(event.target.value !== ""){
            setKwError("")
        }
    }
    const onChangeRadius = (event) => {
        setRadius(event.target.value)
        if(event.target.value !== ""){
            setKwError("")
        }
    }

    // 별점 평점 -------


    return (
        <>
            
            {/* 모달창 컴포넌트 */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={{
                    overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경 투명도 조절
                    },
                    content: {
                    top: '50%',
                    left: 'auto',
                    right: '0',
                    bottom: '30%',
                    transform: 'translate(-50%, -50%)', // 중앙 정렬
                    zIndex: 1000, // 모달의 z-index 설정 (큰 값으로 지정)
                    },
                }}
                >
                {modalContent && [modalContent]} {/* 배열로 감싸주기 */}
            </Modal>

            <MapUI
                onClickMoveToMypage = {onClickMoveToMypage}
                onClickMoveToLogin = {onClickMoveToLogin}
                onClickMoveToSignup = {onClickMoveToSignup}
                onClickReload = {onClickReload}
                onChangeKeyword = {onChangeKeyword}
                onChangeRadius = {onChangeRadius}
                keyword = {keyword}
                radius = {radius}
                searchPlaces = {searchPlaces}
            />
        </>
        
    )
}