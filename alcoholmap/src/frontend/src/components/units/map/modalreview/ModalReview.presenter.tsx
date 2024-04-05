import React from 'react';
import { useState } from 'react';
import * as S from './ModalReview.styles'
import { IModalReviewUIProps } from './ModalReview.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const ModalReviewUI = (props: IModalReviewUIProps): JSX.Element => {
    const [islike, setisLike] = useState(true);
    return(
        <S.ReviewDataWrapper id = "ReviewDataWrapper">
            <S.ReviewListUl>
            {props.data.map((item, index) => (
                    <S.ReviewInfo key={index}>
                        <>
                            <S.UserId>{item.userId}</S.UserId>
                            <S.UserReview>{item.review}</S.UserReview>
                            <S.StarRateWrapper>
                                {Array.from({ length: item.starRate }, (_, i) => (
                                    <S.StarRate key={i}>
                                        <S.StarImg src="/soju1.png" alt="star" />
                                    </S.StarRate>
                                ))}
                            </S.StarRateWrapper>
                            {islike ?
                                <button>♥</button>:
                                <button>♡</button>
                            }
                            <S.ReviewLike>{item.like}</S.ReviewLike>
                        </>
                    </S.ReviewInfo>
                ))}
            </S.ReviewListUl>
            {props.isloading && 
                <S.LoadingSkeletonUl>
                    <FontAwesomeIcon icon={faSpinner} spin />
                </S.LoadingSkeletonUl>}
        </S.ReviewDataWrapper>
    );
};

export default ModalReviewUI;