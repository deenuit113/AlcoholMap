import React, { useRef, useEffect, useState, ChangeEvent, MouseEvent } from 'react';
import ModalPresenter from './Modal.presenter';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { IModalProps, ReviewForm } from './Modal.types';

const apiUrl = '/users/place/review';

const ModalContainer = (props: IModalProps): JSX.Element => {
    const modalRef = useRef<HTMLDivElement>(null);

    const stars = Array.from({ length: 5 }, (_, index) => index + 1);
    const [rvError, setRvError] = useState("");
    const [starError, setStarError] = useState("");
    const [isReviewed, setIsReviewed] = useState(false)
    const [reviewForm, setReviewForm] = useState<ReviewForm>({
        placeId: 0,
        content: "",
        starRate: 0,
    });

    // 리뷰 제출 후 빈 form 위한 리렌더링
    useEffect(() => {
        setReviewForm({
            placeId: 0,
            content: "",
            starRate: 0,
        });
    },[isReviewed]);
    // 초기 설정
    useEffect(() => {
        setReviewForm({
            ...reviewForm,
            placeId: +props.selectedPlace.id,
        })
        document.addEventListener('mousedown', onClickCloseModal as EventListener);
        return () => {
            document.removeEventListener('mousedown', onClickCloseModal as EventListener);
        }
    },[]);
    // 리뷰 폼 채우기 함수
    const onChangeReviewForm = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        const { name, value } = event.target as HTMLTextAreaElement;
        const numValue = name === 'starRate' ? +value : value;
        setReviewForm((prevReviewForm) => ({
            ...prevReviewForm,
            [name]: numValue,
        }));
        if (name === "content" && value !== "") {
            setRvError("");
        }
        if (name === "starRate" && +value !== 0) {
            setStarError("");
        }
    };
    // 리뷰 폼 확인 함수
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
    // 리뷰 폼 제출 함수
    const submitReviewForm = async (reviewFormData: ReviewForm) => {
        const token = localStorage.getItem('jwtToken');
        const jsonformData = JSON.stringify(reviewFormData);
        console.log(jsonformData)
        try {
            const response = await axios.post(apiUrl, jsonformData, {
                headers: {
                    //'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            console.log('Response from server:', response.data);
            alert("리뷰가 등록되었습니다.")
            setIsReviewed(true);
        } catch (error){
            console.error('error submitting data:', error);
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