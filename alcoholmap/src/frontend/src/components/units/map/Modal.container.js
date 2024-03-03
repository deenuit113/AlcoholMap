import React, { useState } from 'react';
import ModalPresenter from './Modal.presenter';

const ModalContainer = (props) => {
    const [review, setReview] = useState("");

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    return (
        <ModalPresenter
            selectedPlace={props.selectedPlace}
            closeModal={props.closeModal}
            review={review}
            onReviewChange={handleReviewChange}
            onClickSubmitReview={props.onClickSubmitReview}
            onClickWish={props.onClickWish}
            isLoggedIn = {props.isLoggedIn}
        />
    );
};

export default ModalContainer;