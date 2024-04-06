import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
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

    .overlay{
        background-color: #f0fdef;
        color:black;
        padding: 10px;
        font-size: 15px;
        font-weight: bold;
        border: 2px solid black;
        border-radius: 10px;
    }

    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        position: static;
        transform: none;
        width: 100%;
        height: 100%;
        padding-top: 40px;
        padding-left: 0px;
        padding-right: 0px;
        padding-bottom: 50px;
        overflow: auto;
        overflow-x: hidden;
        border: none;
        border-radius: 0px;
    }
`;

export const MapWrapper = styled.div`
    width: 60%;
    height: 50%;
    border: 2px solid #47C83E;
    border-radius: 5px;
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        width: 100%;
        height: auto;
    }

`