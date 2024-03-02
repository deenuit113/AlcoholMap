import React, { useState } from 'react';
import ModalPresenter from './Modal.presenter';

const ModalContainer = ({ selectedPlace, closeModal, onClickSubmitReview, onClickWish }) => {
    const [review, setReview] = useState("");

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    return (
        <ModalPresenter
            selectedPlace={selectedPlace}
            closeModal={closeModal}
            review={review}
            onReviewChange={handleReviewChange}
            onClickSubmitReview={onClickSubmitReview}
            onClickWish={onClickWish}
        />
    );
};

export default ModalContainer;