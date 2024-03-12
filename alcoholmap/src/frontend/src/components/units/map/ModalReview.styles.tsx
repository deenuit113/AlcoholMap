import styled from "@emotion/styled";

export const ReviewDataWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-left: 15px;
    border: 10px solid #b7f0b1;
    border-radius: 10px;

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

export const Reviewinfo = styled.li`
    margin-top: 2px;
    margin-bottom: 2px;
    font-size: 20px;
    border-bottom: 1px solid gray;
`