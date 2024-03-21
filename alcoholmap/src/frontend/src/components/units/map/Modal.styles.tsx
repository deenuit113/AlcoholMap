import styled from "@emotion/styled";
import { FaStar } from 'react-icons/fa';

const modalStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경 투명도 조절
        zIndex: 990,
    },
    content: {
        top: '50%',
        left: '50%',
        width: '5%',
        height: '1%',
    }
};

export const ModalContainer = styled.div`
    position: fixed;
    width: 95%;
    height: 95%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f2f2f2;
    padding: 20px;
    border: 5px solid #47C83E;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    overflow: hidden;
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        height: 70%;
        border: 5px solid #47C83E;
    }
`

export const ModalContent = styled.div`
    position: relative;
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const placeInfo = styled.div`
    margin: 3px;
    font-size: 16px;
    font-weight: normal;
    font-family: sans-serif;
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        font-size: 12px;
    }
`

export const placeLink = styled.a`
    font-weight: bold;
    text-decoration: none;
    color: #0A3711;
`

export const reviewInput = styled.textarea`
    font-family: sans-serif;
    font-size: 15px;
    height: 40px;
    width: 50%;
    margin: 3px;
    radius: 5px;
    resize: none;
`

export const closeButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 30px;
    cursor: pointer;
    background: none;
    border: none;
    margin-right: 10px;
    margin: 0;
    color: #333;
`

export const reviewSubmitButton = styled.button`
    background-color: #47C83E;
    font-size: 15px;
    padding: 3px;
    border: 1px solid black;
    border-radius: 7px;
    margin: 3px;
    width: 80px;
    box-shadow: 0px 0px 1px 1px rgb(0,0,0);

    :hover{
        background-color: #B7F0B1;
    }
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        font-size: 12px;
    }
`

export const wishListButton = styled.button`
    background-color: #47C83E;
    font-size: 15px;
    padding: 3px;
    border: 1px solid black;
    border-radius: 7px;
    margin: 3px;
    width: 80px;
    box-shadow: 0px 0px 1px 1px rgb(0,0,0);

    :hover{
        background-color: #B7F0B1;
    }
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        font-size: 12px;
    }
`

export const ErrorMsgWrapper = styled.div`
    width: 300px;
    display: inline-block;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2px;
    color: red;
`

export const starRateWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const starRate = styled(FaStar)`
    cursor: pointer;
    box-sizing: content-box;
    padding: 4px;
    font-size: 35px;
`

export const placeinfoWrapper = styled.div`
    padding-bottom: 5px;
`

export const reviewWrapper = styled.div`
    padding-top: 10px;
    display: inline-block;
    flex-direction: column;
    align-items: center;
`

export const rvinputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const reviewerWrapper = styled.div`
    border-radius: 8px;
    padding: 5px;
    width: 100%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    margin-bottom: 5px;
`
export const CenterWrapper = styled.div`
    display: flex;
    height: 65%;
    justify-content: center;
    align-items: center;
`

export default modalStyles;