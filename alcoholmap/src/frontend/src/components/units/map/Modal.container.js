import React, { useEffect, useState } from 'react';
import ModalPresenter from './Modal.presenter';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const apiUrl = '/users/place/review';

const ModalContainer = (props) => {
    const [rvError, setRvError] = useState("");
    const [reviewForm, setReviewForm] = useState({
        userEmail: '',
        place_name: '',
        place_x: 0,
        place_y: 0,
        review: '',
    });

    useEffect(() => {
        setReviewForm({
            ...reviewForm,
            place_x: props.selectedPlace.x,
            place_y: props.selectedPlace.y,
        })
    },[]);

    const extractEmailfromToken = () => {
        const token = localStorage.getItem('jwtToken');
        const decodedToken = jwt.decode(token);

        // decode된 토큰에서 사용자 이메일 추출
        const userEmail = decodedToken.email;
        return userEmail;
    }

    const onChangeReviewForm = (event) => {
        const { name, value } = event.target;
        //const email = extractEmailfromToken();
        const email = "kimtax0@gmail.com"
        setReviewForm({
            ...reviewForm,
            userEmail: email,
            [name]: value,
        });
        if(name === "review" && event.target.value !== ""){
            setRvError("리뷰를 입력해주세요")
        }        
    };

    const onClickReviewFormCheck = () => {
        let errorcode = 0;
        if(!reviewForm.review) {
            setRvError("리뷰를 입력해주세요.")
            errorcode = 1
        }
        
        if(errorcode === 0){
            console.log(reviewForm)
            submitReviewForm(null,reviewForm)
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
            onChangeReviewForm = {onChangeReviewForm}
            onClickReviewFormCheck = {onClickReviewFormCheck}
        />
    );
};

export default ModalContainer;