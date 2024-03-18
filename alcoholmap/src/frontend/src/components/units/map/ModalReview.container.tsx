import React, { useState, useEffect } from 'react';
import ModalReviewUI from './ModalReview.presenter';
import { IModalReviewProps } from './ModalReview.types';
import axios from 'axios';

const apiUrl = '/place/review';

const ModalReview = (props: IModalReviewProps): JSX.Element => {
    const [data, setData] = useState<{ userId: string; review: string; starRate: number;}[]>([]);
    const [isloading, setisLoading] = useState(false);
    const [curPage, setCurPage] = useState(1);

    useEffect(() => {
        fetchData(curPage);
    }, []);
    
    useEffect(() => {
        const handleScroll = () => {
            const ReviewDataWrapper = document.getElementById('ReviewDataWrapper');
            const scrollHeight = ReviewDataWrapper?.scrollHeight;
            const scrollTop = ReviewDataWrapper?.scrollTop;
            const clientHeight = ReviewDataWrapper?.clientHeight;
    
            // @ts-ignore
            if ((scrollTop + clientHeight) / scrollHeight >= 0.99 && !isloading) {
                fetchData(curPage);
            }
        };
    
        const ReviewDataWrapper = document.getElementById('ReviewDataWrapper');
        ReviewDataWrapper?.addEventListener('scroll', handleScroll);
    
        return () => {
            ReviewDataWrapper?.removeEventListener('scroll', handleScroll);
        };
    }, [isloading]);

    // -------test--------

    const generateData = (start: number, end: number): Array<{ userId: string; review: string; starRate: number;}> => {
        const data = [];
        for (let i = start; i <= end; i++) {
            data.push({
                userId: `user${i}`,
                review: `Review ${i}`,
                starRate: i,
            });
        }
        return data;
    };
    
    // -------test--------
    
    const fetchData = async (curpage: number) => {
        setisLoading(true);
        setTimeout(() => {
            //const newData = [...data, ...new Array(10).fill('New Data')];
            
            const newData = [...data, ...generateData(data.length + 1, data.length + 10)];
            setData(newData);
            setCurPage(prevCount => prevCount + 1)
            console.log(curPage);
            setisLoading(false);
        }, 500);
    };

    // --------------- test -----------------
    
    /*const fetchData = async (page : number) => {
        setisLoading(true);
        const token = localStorage.getItem('jwtToken');
        const apiUrlPlaceId = `/place/review/${props.selectedPlace.id}`;
        const pageSize = 10;
        try {
            const response = await axios.get(apiUrlPlaceId, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params:{
                    page: page,
                    pageSize: pageSize,
                },
            });
            setData(prevData => [...prevData, ...response.data]);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setCurPage(prevCount => prevCount + 1)
            setisLoading(false);
        }
    };*/
    
    return(
        <ModalReviewUI
            isloading = {isloading}
            data = {data}
        />
    );
};

export default ModalReview;