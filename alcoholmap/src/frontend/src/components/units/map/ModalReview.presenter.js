import React from 'react';
import * as S from './ModalReview.styles'

const ModalReviewUI = (props) => {
    return(
        <S.ReviewDataWrapper id = "ReviewDataWrapper">
            <S.ReviewListUl>
                {props.data.map((item, index) => (
                    <S.Reviewinfo key={index}>
                        <div>{item.userId}: {item.review}</div>
                    </S.Reviewinfo>
                ))}
            </S.ReviewListUl>
            {props.loading && <div>Loading...</div>}
        </S.ReviewDataWrapper>
    );
};

export default ModalReviewUI;