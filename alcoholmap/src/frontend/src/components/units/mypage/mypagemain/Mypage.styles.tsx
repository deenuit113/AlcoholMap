import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const ANIMATION_DURATION = 0.3;

const slideDown = keyframes`
    from {
        max-height: 0px;
        opacity: 0;
    }
    to {
        max-height: 500px;
        opacity: 1;
    }
`;

const slideUp = keyframes`
    from {
        max-height: 500px;
        opacity: 1;
    }
    to {
        max-height: 0px;
        opacity: 0;
    }
`;

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


export const Label = styled.div`
    padding-bottom: 8px;
    font-size: 16px;
    font-weight: bold;
    float: left;
`;

export const InfoLabel = styled.span`
    padding-bottom: 8px;
    font-size: 12px;
    font-weight: bold;
    float: left;
`;

export const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
`;

export const InfoTitle = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 7px;
`;

export const UserInfo = styled.div`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    font-size: 16px;
    border-bottom: 1px solid #47C83E;

    @media all and (min-width: 359px) and (max-width: 799px) {
        width: 95%;
    }
`;

export const InputInfo = styled.input`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    font-size: 16px;
    border-radius: 4px;

    @media all and (min-width: 359px) and (max-width: 799px) {
        width: 95%;
    }
`;

export const Logo = styled.img`
    cursor: pointer;

    @media all and (min-width: 359px) and (max-width: 799px) {
        // 태블릿
        width: 60%;
    }
`

export const ProfilePicWrapper = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid #47C83E;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 태블릿
        height: 100px;
        width: 100px;
    }
`

export const ProfilePic = styled.img`
    width: 30%;
`

export const ProfilePicEditButton = styled.label`
    background-color: #008CBA;
    color: white;
    border: none;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 10px;
`

export const ToggleFormButton = styled.button`
    width: 200px;
    margin-top: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: #77C83E;
    color: white;
    border: none;
    padding: 3px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    cursor: pointer;
`;

export const UserInfoForm = styled.form<{ isOpen: boolean }>`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    animation-duration: ${ANIMATION_DURATION}s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    animation-name: ${({ isOpen }) => (isOpen ? slideDown : slideUp)};
    overflow: hidden;
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        width: 80%;
    }
`

export const InfoWrapper = styled.div`
    width: 100%;
    display: flex;
    height: 25%;
    padding: 10px 0px 10px 0px;
    box-sizing: border-box;
    flex-direction: column;
`;

export const FollowWrapper = styled.div`
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #47C83E;
    border-radius: 8px;
    margin-bottom: 5px;
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 태블릿
        height: 100px;
        border: none;
        border-top: 1px solid #47C83E;
        border-radius: 0px;
    }
`

export const FollowerWrapper = styled.div`
    min-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
    border-radius: 10px;
    cursor: pointer;
    padding-top: 20px;
    padding-bottom: 20px;

    &:hover {
        background-color: gray;
    }
`;

export const FollowingWrapper = styled.div`
    min-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
    border-radius: 10px;
    cursor: pointer;
    padding-top: 20px;
    padding-bottom: 20px;

    &:hover {
        background-color: gray;
    }
`;

export const WishListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 15px;
    padding-bottom: 0px;
    margin-bottom: 20px;
    border: 4px solid #47C83E;
    border-radius: 8px;
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 태블릿
        width: 100%;
        padding: 15px 10px 10px 10px;
        border: none;
        border-top: 1px solid #47C83E;
        border-bottom: 1px solid #47C83E;
        border-radius: 0px;
    }
`

export const RatedListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 15px;
    padding-bottom: 0px;
    margin-bottom: 20px;
    border: 4px solid #47C83E;
    border-radius: 8px;
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 태블릿
        width: 100%;
        padding: 15px 10px 10px 10px;
        border: none;
        border-bottom: 1px solid #47C83E;
        border-radius: 0px;
    }
`

export const SliderWrapper = styled.div`
    height: 320px;
    width: 100%;
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 5px 0px 5px 0px;

    @media all and (min-width: 359px) and (max-width: 799px) {
        // 태블릿
        width: 100%;
        height: 100px;
    }
`

export const ButtonWrapper = styled.div`
    position: relative;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
    margin: 5px;
    float: right;
`

export const ErrorMsgWrapper = styled.div`
    width: 300px;
    display: inline-block;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2px;
    color: red;
`

export const EditButton = styled.button`
    background-color: #008CBA;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
`

export const ConfirmButton = styled.button`
    background-color: #008CBA;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
`