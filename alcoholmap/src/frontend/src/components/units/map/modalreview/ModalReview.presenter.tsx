import React from 'react';
import * as S from './ModalReview.styles'
import { IModalReviewUIProps } from './ModalReview.types';

const ModalReviewUI = (props: IModalReviewUIProps): JSX.Element => {
    return(
        <S.ReviewDataWrapper id = "ReviewDataWrapper">
            <S.ReviewListUl>
            {props.data.map((item, index) => (
                    <S.ReviewInfo key={index}>
                        <>
                            {item.userId}: {item.review}{' '}
                            <S.StarRateWrapper>
                                {Array.from({ length: item.starRate }, (_, i) => (
                                    <S.StarRate key={i}>
                                        <img src="/soju1.png" alt="star" />
                                    </S.StarRate>
                                ))}
                            </S.StarRateWrapper>
                        </>
                    </S.ReviewInfo>
                ))}
            </S.ReviewListUl>
            {props.isloading && <div>Loading...</div>}
        </S.ReviewDataWrapper>
    );
};

export default ModalReviewUI;