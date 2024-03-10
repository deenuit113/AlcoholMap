import styled from "@emotion/styled";
import { FaStar } from 'react-icons/fa';

const modalStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경 투명도 조절
        zIndex: 990,
    },
    content: {
        width: 500,
        height: 600,
        top: '50%',
        left: '50%',
        right: '0',
        bottom: '30%',
        backgroundColor: '#47C83E', 
        transform: 'translate(-50%, -50%)', // 중앙 정렬
        zIndex: 1000, // 모달의 z-index 설정 (큰 값으로 지정)
        borderRadius: 20,
    },
};

export const modalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    max-width: 500px;  /* 모달 최대 너비 지정 */
    max-height: 600px;
    width: 100%;
    height: 600px;
    box-sizing: border-box;
`

export const modalContent = styled.div`
    position: relative;
    width: 450px;
    height: 400px;
    flex-direction: column;
`

export const placeInfo = styled.div`
    margin: 3px;
    font-size: 16px;
    font-weight: normal;
    font-family: sans-serif;
`

export const placeLink = styled.a`
    font-weight: bold;
    text-decoration: none;
    color: #0A3711;
`

export const reviewInput = styled.textarea`
    font-size: 17px;
    height: 40px;
    width: 210px;
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
    width: 300px;
    display: inline-block;
    flex-direction: column;
    align-items: center;
    padding-left: 2px;
    margin-left: 10px;
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
    padding-top: 3px;
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
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
    width: 400px;
    height: 265px;
    display: inline-block;
    flex-direction: column;
    align-items: center;
    overflow: auto;
`

export default modalStyles;