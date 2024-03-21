import styled from "@emotion/styled";

export const ReviewDataWrapper = styled.div`
    width: 100%;
    height: 90%;
    overflow-y: auto;
    padding-left: 15px;
    border: 10px solid #b7f0b1;
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
`

export const ReviewListUl = styled.ul`
    height: auto;
    min-height: 100%;
`

export const ReviewInfo = styled.li`
    margin-top: 2px;
    margin-bottom: 2px;
    font-size: 20px;
    border-bottom: 1px solid gray;
    display: flex; /* Flex 컨테이너로 설정 */
    align-items: center; /* 세로 중앙 정렬 */
    justify-content: space-between; /* 자식 요소 사이의 간격을 최대화하여 왼쪽과 오른쪽 끝에 정렬 */
`;

export const StarRateWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const StarRate = styled.div`
    float: right;
`;