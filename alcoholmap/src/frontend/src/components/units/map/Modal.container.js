import React, { useRef, useEffect, useState } from 'react';
import ModalPresenter from './Modal.presenter';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { FaStar } from 'react-icons/fa';

const apiUrl = '/users/place/review';

const ModalContainer = (props) => {
    const stars = Array.from({ length: 5 }, (_, index) => index + 1);
    const [rvError, setRvError] = useState("");
    const [starError, setStarError] = useState("");
    const [reviewForm, setReviewForm] = useState({
        placeId: 0,
        content: '',
        starRate: 0,
    });
    const modalRef = useRef();

    useEffect(() => {
        console.log(props.selectedPlace)
        setReviewForm({
            ...reviewForm,
            placeId: props.selectedPlace.id,
        })
        document.addEventListener('mousedown', onClickCloseModal);
        return () => {
            document.removeEventListener('mousedown', onClickCloseModal);
        }
    },[]);

    /*const extractEmailfromToken = () => {
        const token = localStorage.getItem('jwtToken');
        const decodedToken = jwt.decode(token);

        // decode된 토큰에서 사용자 이메일 추출
        const userEmail = decodedToken.email;
        return userEmail;
    }*/

    const onChangeReviewForm = (event) => {
        const { name, value } = event.target;
        //const email = extractEmailfromToken();
        setReviewForm({
            ...reviewForm,
            [name]: name === 'starRate' ? Number(value) : value,
        });
        if(name === "content" && event.target.value !== ""){
            setRvError("")
        }
        if(name === "starRate" && event.target.value !== 0){
            setStarError("")
        }       
    };

    const onClickReviewFormCheck = () => {
        let errorcode = 0;
        if(!reviewForm.content) {
            setRvError("리뷰를 입력해주세요.")
            errorcode = 1
        }

        if(reviewForm.starRate === 0) {
            setStarError("술점을 매겨주세요.")
            errorcode = 1
        }
        
        if(errorcode === 0){
            console.log(props.selectedPlace)
            console.log(reviewForm)
            submitReviewForm(null,reviewForm)
        }
        
    };

    const onClickWishList = () => {
        alert("찜했슴다!")
    }

    const onClickCloseModal = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target) && e.target !== modalRef.current) {
            props.closeModal();
        }
    };

    const submitReviewForm = async (e, formData) => {
        const token = localStorage.getItem('jwtToken');
        const jsonformData = JSON.stringify(formData);
        try {
            const response = await axios.post(apiUrl, jsonformData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            console.log('Response from server:', response.data);
        } catch (error){
            console.error('error submitting data:', error);
        }
    };

    return (
        <ModalPresenter
            selectedPlace={props.selectedPlace}
            closeModal={props.closeModal}
            isLoggedIn = {props.isLoggedIn}
            reviewForm = {reviewForm}
            rvError = {rvError}
            starError = {starError}
            stars = {stars}
            modalRef = {modalRef}
            onChangeReviewForm = {onChangeReviewForm}
            onClickReviewFormCheck = {onClickReviewFormCheck}
            onClickWishList = {onClickWishList}
            onClickCloseModal = {onClickCloseModal}
        />
    );
};

export default ModalContainer;