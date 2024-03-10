import React from 'react';
import * as S from './ModalReview.styles'
import { IModalReviewUIProps } from './ModalReview.types';

const ModalReviewUI = (props: IModalReviewUIProps): JSX.Element => {
    return(
        <S.ReviewDataWrapper id = "ReviewDataWrapper">
            <S.ReviewListUl>
                {props.data.map((item, index) => (
                    <S.Reviewinfo key={index}>
                        <div>{item.userId}: {item.review}</div>
                    </S.Reviewinfo>
                ))}
            </S.ReviewListUl>
            {props.isloading && <div>Loading...</div>}
        </S.ReviewDataWrapper>
    );
};

export default ModalReviewUI;