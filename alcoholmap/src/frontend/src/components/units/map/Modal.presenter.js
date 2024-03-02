import React from 'react';
import * as S from './Modal.styles'

const ModalPresenter = ({ selectedPlace, closeModal, review, onReviewChange, onClickSubmitReview, onClickWish }) => {
    return (
        <S.modalContainer>  {/* 모달 스타일을 적용합니다 */}
            {selectedPlace && (
                <>
                    <S.closeButton onClick={closeModal}>X</S.closeButton>
                    <S.modalContent>
                        {/* 모달 상단에 닫기 버튼(X) 추가 */}
                        
                        
                        <S.divInfo>장소명: {selectedPlace.place_name}</S.divInfo>
                        <S.divInfo>주소: {selectedPlace.address_name}</S.divInfo>
                        <S.divInfo>카테고리: {selectedPlace.category_group_name}</S.divInfo>
                        <S.divInfo>전화번호: {selectedPlace.phone}</S.divInfo>
                        <S.divInfo>장소 URL: <S.placeLink href={selectedPlace.place_url}>정보 확인</S.placeLink></S.divInfo>
                        리뷰: <S.reviewInput type="text" placeholder="리뷰를 입력하세요" value={review} onChange={onReviewChange} />
                        <S.reviewSubmitButton onClick={onClickSubmitReview}>리뷰 제출</S.reviewSubmitButton>
                        <S.wishListButton onClick={onClickWish}>찜하기</S.wishListButton>
                    </S.modalContent>
                </>
            )}
        </S.modalContainer>
    );
};

export default ModalPresenter;