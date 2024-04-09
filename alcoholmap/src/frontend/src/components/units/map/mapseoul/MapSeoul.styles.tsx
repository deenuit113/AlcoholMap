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

    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        position: static;
        transform: none;
        width: 100%;
        height: auto;
        min-height: 100%;
        padding-top: 30px;
        padding-left: 0px;
        padding-right: 0px;
        padding-bottom: 50px;
        overflow: auto;
        overflow-x: hidden;
        border: none;
        border-radius: 0px;
    }
`;

export const SeoulMap = styled.svg`
    width: 370px;
    height: 370px;
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
    }
`

export const GBHeader = styled.header`
    @media all and (min-width: 359px) and (max-width: 799px) {
        width: 60%;
        height: 10%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

export const Logo = styled.img`
    cursor: pointer
`

export const TopBarList = styled.ul`
    width: 90%;
    list-style-type: none;
    border: 1px solid black;
`

export const TopBar = styled.li`
    width: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: 4px solid blue;
    align-items: center;
    justify-content: center;
`

export const BarInfoWrapper = styled.div`
    border: 2px solid red;
`

export const MoveToThisBarButton = styled.button`
    
`

export const RankWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bolder;
`