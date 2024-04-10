import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RatedPlaceSliderUI from './RatedPlaceSlider.presenter';
import { Place } from './RatedPlaceSlider.types';

const apiUrl = '/api/places';

export default function RatedPlaceSlider(): JSX.Element{
    const [places, setPlaces] = useState<Place[]>([]);
    const [isLoading, setisLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isEndOfList, setIsEndOfList] = useState<boolean>(false);

    useEffect(() => {
        fetchData();
    }, []);

    const generateDummyPlaces = (start: number, end: number): Array<{id: number; name: string; thumbnailUrl: string;}> => {
        const dummyPlaces = [];
        for (let i = start; i <= end; i++) {
            dummyPlaces.push({
                id: i,
                name: "GreenBottle",
                thumbnailUrl: `/redsoju.png`, // 예시 이미지 경로
            });
        }
        return dummyPlaces;
    };

    useEffect(() => {
        const handleScroll = () => {
            const Slider = document.getElementById('RatedPlaceSlider');
            const scrollWidth = Slider?.scrollWidth;
            const scrollLeft = Slider?.scrollLeft;
            const clientWidth = Slider?.clientWidth;
            // @ts-ignore
            if ((scrollLeft + clientWidth) / scrollWidth >= 0.99 && !isLoading) {
                fetchData();
                console.log("fetching data...");
            }
        };
        const Slider = document.getElementById('RatedPlaceSlider');
        Slider?.addEventListener('scroll', handleScroll);
        return () => {
            Slider?.removeEventListener('scroll', handleScroll);
        };
    }, [isLoading]);

    const fetchData = async () => {
        setisLoading(true);
        setTimeout(() => {
            //const newData = [...data, ...new Array(10).fill('New Data')];
            
            const newPlaces = [...places, ...generateDummyPlaces(places.length + 1, places.length + 10)];
            setPlaces(newPlaces);
            setisLoading(false);
        }, 1500);
    };

    return (
        <RatedPlaceSliderUI
            places = {places}
            isLoading = {isLoading}
        />
    );
};
