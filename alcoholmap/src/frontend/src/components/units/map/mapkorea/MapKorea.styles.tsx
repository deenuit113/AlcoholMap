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

export const SelectedLocation = styled.div`
    font-size: 25px;
    font-weight: bolder;
    margin-bottom: 10px;
`

export const MovetoThisLocationButton = styled.button`
    padding: 5px 10px 5px 10px;
    font-size: 15px;
    font-weight: bold;
    background-color: #B7F0B1;
    border: 2px solid #47C83E;
    border-radius: 10px;

    :hover{
        background-color: #47C83E;
        color: white;
    }
`

export const TopBarList = styled.ul`
    width: 90%;
    list-style-type: none;
`

export const TopBar = styled.li`
    width: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid gray;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    padding: 10px 0px 10px 0px;
`

export const BarInfoWrapper = styled.div`
    width: 75%;
`

export const BarInfo = styled.div`
    font-size: 16px;
    font-weight: bold;
`

export const BarLabel = styled.label`
    font-weight: normal;
`

export const MoveToThisBarButton = styled.button`
    width: 50px;
    margin: auto;
    border-radius: 50%;
    padding: 10px;
    font-size: 20px;
    background-color: #B7F0B1;
    border: 2px solid #47C83E;

    :hover{
        background-color: #47C83E;
        color: white;
    }
`

export const RankWrapper = styled.div`
    display: flex;
    width: 10%;
    height: 100%;
    min-height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: bolder;
    margin-right: 20px;
    margin-left: 10px;
`
