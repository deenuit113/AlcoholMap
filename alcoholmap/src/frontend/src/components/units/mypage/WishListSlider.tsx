import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import * as S from "./WishListSlider.styles";

const apiUrl = '/api/places';

const WishListSlider: React.FC = () => {
    const [places, setPlaces] = useState<{id: number; name: string; thumbnailUrl: string;}[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isEndOfList, setIsEndOfList] = useState<boolean>(false);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fetchData();
    }, []);

    const generateDummyPlaces = (start: number, end: number): Array<{id: number; name: string; thumbnailUrl: string;}> => {
        const dummyPlaces = [];
        for (let i = start; i <= end; i++) {
            dummyPlaces.push({
                id: i,
                name: "GreenBottle",
                thumbnailUrl: `/greensoju.png`, // 예시 이미지 경로
            });
        }
        return dummyPlaces;
    };

    useEffect(() => {
        const handleScroll = () => {
            const SliderWrapper = document.getElementById('SliderWrapper');
            console.log(SliderWrapper)
            const scrollWidth = SliderWrapper?.scrollWidth;
            const scrollLeft = SliderWrapper?.scrollLeft;
            const clientWidth = SliderWrapper?.clientWidth;
            console.log("scrollWidth:", scrollWidth);
            console.log("scrollLeft:", scrollLeft);
            console.log("clientWidth:", clientWidth);
            // @ts-ignore
            if ((scrollLeft + clientWidth) / scrollWidth >= 0.99 && !loading) {
                fetchData();
                console.log("fetching data...");
            }
        };
        const SliderWrapper = document.getElementById('SliderWrapper');
        SliderWrapper?.addEventListener('scroll', handleScroll);
        return () => {
            if (SliderWrapper) {
                SliderWrapper.removeEventListener('scroll', handleScroll);
            }
        };
    }, [loading]);

    const fetchData = async () => {
        setLoading(true);
        setTimeout(() => {
            //const newData = [...data, ...new Array(10).fill('New Data')];
            
            const newPlaces = [...places, ...generateDummyPlaces(places.length + 1, places.length + 10)];
            setPlaces(newPlaces);
            setLoading(false);
        }, 500);
    };

    return (
        <S.SliderWrapper>
            <S.Slider>
                {places.map((place) => (
                    <S.PlaceWrapper key={place.id}>
                        <S.ImgWrapper>
                            <S.Image src={place.thumbnailUrl} alt={`Thumbnail ${place.id}`} />
                        </S.ImgWrapper>
                        <S.PlaceName>{place.name}</S.PlaceName>
                    </S.PlaceWrapper>
                ))}
            </S.Slider>
        </S.SliderWrapper>
    );
};

export default WishListSlider;