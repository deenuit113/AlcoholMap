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
    font-size: 20px;
    border-bottom: 1px solid gray;
    display: flex;
    align-items: center;
`;

export const UserId = styled.span`
    float: left;
    width: 10%;
    border: 3px solid red;
    margin-right: 15px;
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        font-size: 15px;
    }
`

export const UserReview = styled.span`
    float: left;
    width: 70%;
    border: 3px solid blue;
    margin-right: 15px;
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        font-size: 11px;
        width: 55%;
        margin-right: 5px;
    }
`

export const StarRateWrapper = styled.div`
    float: right;
    width: 15%;
    justify-content: flex-end;
    border: 1px solid red;
    margin-right: 10px;
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        margin-right: 5px;
        width: 25%;
    }
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
    radius: right;
`