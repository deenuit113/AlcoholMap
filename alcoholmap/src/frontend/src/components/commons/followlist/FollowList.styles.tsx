import styled from "@emotion/styled";

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    margin: 10 10 10 10px;
    padding-top: 80px;
    padding-bottom: 100px;
    padding-left: 50px;
    padding-right: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid gray;
    border-radius: 30px;
    box-shadow: 0px 0px 10px gray;
    background-color: #f1ffff;
    overflow-x: hidden;

    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        padding-top: 30px;
        padding-left: 0px;
        padding-right: 0px;
        padding-bottom: 50px;
        overflow: hidden;
        overflow-x: hidden;
        border: none;
        border-radius: 0px;
    }
`;

export const SearchIdInput = styled.input`
    width: 80%;
    margin-bottom: 30px;
    border-radius: 20px;
    font-size: 25px;
    padding: 5px 10px 5px 10px;
    
`

export const ListWrapper = styled.div`
    width: 90%;
    height: 95%;
    border: 3px solid #b7f0b1;
    padding: 20px 30px 20px 30px;;
    border-radius: 30px;
    overflow-y: scroll;

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

export const FollowListUl = styled.ul`

`

export const FollowInfo = styled.li`
    padding: 10px 0px 10px 0px;
    border-bottom: 1px solid gray;
`

export const LoadingSkeletonUl = styled.ul`
    height: 30px;
    min-height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`