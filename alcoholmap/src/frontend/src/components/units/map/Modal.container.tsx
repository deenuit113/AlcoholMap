import React, { useRef, useEffect, useState, ChangeEvent, MouseEvent } from 'react';
import ModalPresenter from './Modal.presenter';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { IModalProps, ReviewForm } from './Modal.types';
import baseUrl from "../../../commons/baseUrl";

const apiUrl = baseUrl +  '/users/place/review';

const ModalContainer = (props: IModalProps): JSX.Element => {
    const stars = Array.from({ length: 5 }, (_, index) => index + 1);
    const [rvError, setRvError] = useState("");
    const [starError, setStarError] = useState("");
    const [isReviewed, setIsReviewed] = useState(false)
    const [reviewForm, setReviewForm] = useState({
        placeId: 0,
        content: '',
        starRate: 0,
    });
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        
    },[isReviewed]);

    useEffect(() => {
        console.log(props.selectedPlace)
        setReviewForm({
            ...reviewForm,
            placeId: +props.selectedPlace.id,
        })
        document.addEventListener('mousedown', onClickCloseModal as EventListener);
        return () => {
            document.removeEventListener('mousedown', onClickCloseModal as EventListener);
        }
    },[]);

    /*const extractEmailfromToken = (): void => {
        const token = localStorage.getItem('jwtToken');
        const decodedToken = jwt.decode(token);

        // decode된 토큰에서 사용자 이메일 추출
        const userEmail = decodedToken.email;
        return userEmail;
    }*/

    const onChangeReviewForm = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        const { name, value } = event.target as HTMLTextAreaElement;
    
        // value를 number로 변환
        const numValue = name === 'starRate' ? +value : value;
    
        setReviewForm({
            ...reviewForm,
            [name]: numValue,
        });
    
        if (name === "content" && value !== "") {
            setRvError("");
        }
        if (name === "starRate" && +value !== 0) {
            setStarError("");
        }
    };

    const onClickReviewFormCheck = (): void => {
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
            submitReviewForm(reviewForm)
        }
        
    };

    const onClickWishList = (): void => {
        alert("찜했슴다!")
    }

    const onClickCloseModal = (event: CustomEvent<MouseEvent>): void => {
        const targetNode = event.target as Node;
        if (!modalRef.current?.contains(targetNode) && targetNode !== modalRef.current) {
            props.closeModal();
        }
    };

    const submitReviewForm = async (reviewForm: ReviewForm) => {
        const token = localStorage.getItem('jwtToken');
        const jsonformData = JSON.stringify(reviewForm);
        console.log(jsonformData)
        try {
            const response = await axios.post(apiUrl, jsonformData, {
                headers: {
                    //'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            console.log('Response from server:', response.data);

            setReviewForm({
                placeId: 0,
                content: '',
                starRate: 0,
            });
            setIsReviewed(true);

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