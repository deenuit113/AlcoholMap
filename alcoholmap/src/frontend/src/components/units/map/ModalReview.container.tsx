import React, { useState, useEffect } from 'react';
import ModalReviewUI from './ModalReview.presenter';
import axios from 'axios';

const apiUrl = '/users/place/reviewList';

const ModalReview = (): JSX.Element => {
    const [data, setData] = useState<{ userId: string; review: string; starRate: number;}[]>([]);
    const [isloading, setisLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;
    
            if (scrollTop + clientHeight >= scrollHeight - 5 && !isloading) {
                fetchData();
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
    /*
    const fetchData = async () => {
        setisLoading(true);
        setTimeout(() => {
            //const newData = [...data, ...new Array(10).fill('New Data')];
            
            const newData = [...data, ...generateData(data.length + 1, data.length + 10)];
            setData(newData);
            setisLoading(false);
        }, 500);
    };*/

    // --------------- test -----------------
    
    const fetchData = async () => {
        setisLoading(true);
        const token = localStorage.getItem('jwtToken');
        try {
            const response = await axios.get(apiUrl, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setData(prevData => [...prevData, ...response.data]);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setisLoading(false);
        }
    };
    
    return(
        <ModalReviewUI
            isloading = {isloading}
            data = {data}
        />
    );
};

export default ModalReview;