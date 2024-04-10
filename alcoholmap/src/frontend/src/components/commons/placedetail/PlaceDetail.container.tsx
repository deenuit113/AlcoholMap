import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PlaceDetailUI from "./PlaceDetail.presenter";

export default function PlaceDetail(): JSX.Element {
    const router = useRouter();
    const { address: initialAddress, placename: initialPlaceName } = router.query;
    const [address, setAddress] = useState<string | undefined>(initialAddress ? String(initialAddress) : undefined);
    const [placeName, setPlaceName] = useState<string | undefined>(initialPlaceName ? String(initialPlaceName) : undefined);
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
    }, []);

    const fetchData = () => {
        const mapContainer = document.getElementById('map');
        const mapOption = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption); 
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(address, function(result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
                const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
                const marker = new window.kakao.maps.Marker({
                    map: map,
                    position: coords
                });
                let lat = marker.getPosition().getLat();
                let lng = marker.getPosition().getLng(); 
                let position = new kakao.maps.LatLng(lat, lng);
                const infowindow = new window.kakao.maps.CustomOverlay({
                    content: `<div class="overlay">${placeName}</div>`,
                    position: position,
                    zIndex: 9999,
                });
                infowindow.setMap(map);
                map.setCenter(coords);
                console.log("result",result);
            } 
        }); 
    };

    const onClickMoveToMainpage = () => {
        router.push({
            pathname: "/map",
            query: {
                address: address,
                placeName: placeName,
            },
        })
    }


    return (
        <>
            <PlaceDetailUI
                placeName = {placeName}
                address = {address}
                onClickMoveToMainpage = {onClickMoveToMainpage}
            />
        </>
    );
};