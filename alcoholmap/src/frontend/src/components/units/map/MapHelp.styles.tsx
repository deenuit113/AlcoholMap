import styled from "@emotion/styled";

export const HelpButton = styled.button`
    position: fixed;
    top: 30px;
    right: 30px;
    font-size: 30px;
    background-color: #47C83E;
    color: white;
    padding: 5px 12px 5px 12px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    z-index: 10;

    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        top: 19px;
        right: 17px;
    }
`

export const HelpButtonFake = styled.button`
    position: fixed;
    top: 30px;
    right: 30px;
    font-size: 30px;
    background-color: #47C83E;
    color: white;
    padding: 5px 12px 5px 12px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    z-index: 10;

    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        top: 19px;
        right: 17px;
    }
`
export const HelpWrapper = styled.div`
    position: fixed;
    height: 80%;
    width: 60%;
    display: flex:
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-right: 30px;
    padding-left: 30px;
    border: 1px solid #47C83E;
    border-radius: 10px;
    z-index: 2;
    background-color: #fffffa;
    box-shadow: 0px 0px 10px gray;
    background: rgba(255, 255, 250, 0.9);
    overflow-y: auto;
    overflow-x: hidden;

    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        margin-top: 65px;
        height: 80%;
        width: 90%;
        padding-top: 15px;
        padding-bottom: 30px;
        padding-right: 20px;
        padding-left: 20px;
    }
`
export const HelpTitle = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    height: 5%;
    font-size: 24px;
    font-weight: bolder;
    color: #4caf50;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const HelpSmallTitle = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    height: 5%;
    margin-top: 20px;
    font-size: 18px;
    font-weight: bolder;
    color: #4caf50;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const HelpContent = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    height: 5%;
    max-height: 20%;
    font-size: 12px;
    font-weight: bolder;
    color: black;;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 5px;
    margin-bottom: 10px;
`
