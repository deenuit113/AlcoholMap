import styled from "@emotion/styled";

export const ReviewDataWrapper = styled.div`
    width: 100%;
    height: 80%;
    overflow-y: auto;
    padding-left: 15px;
    margin-top: 10px;
    border: 5px solid #b7f0b1;
    border-radius: 10px;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 6px;
        transition: background-color 0.3s ease;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 8px;
    }

    &:hover {
        &::-webkit-scrollbar {
            width: 12px;
        }
    }

    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        height: 95%;
    }
`

export const ReviewListUl = styled.ul`
    height: auto;
    min-height: 100%;
`

export const LoadingSkeletonUl = styled.ul`
    height: 30px;
    min-height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const ReviewInfo = styled.li`
    margin-top: 2px;
    margin-bottom: 2px;
    height: auto;
    min-height: 110px;
    font-size: 20px;
    border-bottom: 1px solid gray;
    display: flex;
    align-items: center;
`;

export const UserWrapper = styled.div`
    display: flex;
    width: 15%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-right: 20px;

    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        margin-right: 10px;
    }
    
`

export const ProfileWrapper = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid gray;
    border-radius: 50%;
`

export const ProfileImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: contain;
`

export const UserId = styled.span`
    width: 100%;
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        font-size: 18px;
    }
`

export const MoreButton = styled.button`
    background-color: transparent;
    border: none;
    color: black;
    cursor: pointer;
    font-size: 16px;
    margin-left: 5px; // "더보기" 버튼과 리뷰 내용 사이 여백 조절
    &:hover {
        text-decoration: underline;
    }
`;

export const UserReview = styled.span`
    float: left;
    width: 80%;
    margin-right: 15px;
    word-break: break-all;
    word-wrap: break-word;
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        font-size: 15px;
        width: 60%;
        margin-right: 5px;
    }
`

export const RateandLikeWrapper = styled.div`
    width: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        margin-right: 5px;
        width: 20%;
    }
`

export const StarRateWrapper = styled.div`
    float: right;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

export const StarRate = styled.div`
    float: right;
`;

export const StarImg = styled.img`
    width: 15px;
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        width: 10px;
    }
`

export const ReviewLike = styled.span`
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        font-size: 12px;
    }
`

export const LikeButton = styled.button`
`