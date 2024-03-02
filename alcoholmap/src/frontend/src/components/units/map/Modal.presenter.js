import React from 'react';

const ModalPresenter = ({ selectedPlace, closeModal, review, onReviewChange, onClickSubmitReview, onClickWish }) => {
    return (
        <div>
            {selectedPlace && (
                <>
                    <div>
                        <div>장소명: {selectedPlace.place_name}</div>
                        <div>주소: {selectedPlace.address_name}</div>
                        <div>카테고리: {selectedPlace.category_group_name}</div>
                        <div>전화번호: {selectedPlace.phone}</div>
                        <div>장소 URL: <a href={selectedPlace.place_url}>{selectedPlace.place_url}</a></div>
                        리뷰: <input type="text" value={review} onChange={onReviewChange} />
                        <button onClick={onClickSubmitReview}>리뷰 제출</button>
                        <button onClick={onClickWish}>찜하기</button>
                    </div>
                    <button onClick={closeModal}>닫기</button>
                </>
            )}
        </div>
    );
};

export default ModalPresenter;