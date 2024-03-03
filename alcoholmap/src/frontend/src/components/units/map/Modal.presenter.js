import React from 'react';
import * as S from './Modal.styles'

const ModalPresenter = (props) => {
    return (
        <S.modalContainer>  {/* 모달 스타일을 적용합니다 */}
            {props.selectedPlace && (
                <>
                    <S.closeButton onClick={props.closeModal}>X</S.closeButton>
                    <S.modalContent>
                        {/* 모달 상단에 닫기 버튼(X) 추가 */}
                        
                        
                        <S.divInfo>장소명: {props.selectedPlace.place_name}</S.divInfo>
                        <S.divInfo>주소: {props.selectedPlace.address_name}</S.divInfo>
                        <S.divInfo>카테고리: {props.selectedPlace.category_group_name}</S.divInfo>
                        <S.divInfo>전화번호: {props.selectedPlace.phone}</S.divInfo>
                        <S.divInfo>장소 URL: <S.placeLink href={props.selectedPlace.place_url}  target='_blank'>정보 확인</S.placeLink></S.divInfo>
                        {props.isLoggedIn ? (
                            <>
                                리뷰: <S.reviewInput type="text" placeholder="리뷰를 입력하세요" value={props.review} onChange={props.onReviewChange} />
                                <S.reviewSubmitButton onClick={props.onClickSubmitReview}>리뷰 제출</S.reviewSubmitButton>
                                <S.wishListButton onClick={props.onClickWish}>찜하기</S.wishListButton>
                            </>
                        ) : (
                            <>
                                <div>리뷰를 작성하려면 로그인이 필요합니다.</div>
                            </>
                        )}
                        
                    </S.modalContent>
                </>
            )}
        </S.modalContainer>
    );
};

export default ModalPresenter;