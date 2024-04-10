import React from 'react';
import { useState } from 'react';
import * as S from './ModalReview.styles'
import { IModalReviewUIProps } from './ModalReview.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const ModalReviewUI = (props: IModalReviewUIProps): JSX.Element => {
    const [islike, setisLike] = useState(true);
    const [expandedReviews, setExpandedReviews] = useState<{ [key: number]: boolean }>({});

    const toggleReviewExpansion = (index: number) => {
        setExpandedReviews((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const truncateText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    };

    return(
        <S.ReviewDataWrapper id = "ReviewDataWrapper">
            <S.ReviewListUl>
            {props.data.map((item, index) => (
                    <S.ReviewInfo key={index}>
                        <>
                            <S.UserWrapper>
                                <S.ProfileWrapper>
                                    <S.ProfileImg src="/redsoju.png" alt="Profile" />
                                </S.ProfileWrapper>
                                <S.UserId>{item.userId}</S.UserId>
                            </S.UserWrapper>
                            <S.UserReview>
                                {expandedReviews[index] ? item.review : truncateText(item.review, 50)}
                                {item.review.length > 50 && (
                                <S.MoreButton onClick={() => toggleReviewExpansion(index)}>
                                    {expandedReviews[index] ? '간략히' : '더보기'}
                                </S.MoreButton>
                            )}
                            </S.UserReview>
                            <S.RateandLikeWrapper>
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
                            </S.RateandLikeWrapper>
                            
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