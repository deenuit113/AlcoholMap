import styled from "@emotion/styled";
import { Carousel } from "antd";

// ------------공통---------------

export const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    margin: 10 10 10 10px;
    padding-top: 30px;
    padding-bottom: 100px;
    padding-left: 102px;
    padding-right: 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid gray;
    border-radius: 0px;
    box-shadow: 0px 0px 10px gray;
    background-color: #fffffa;
    boxing: border-box;

    /* Style for the container that will hold the custom scrollbar */
    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 12px; /* Width of the scrollbar */
        background-color: rgba(0, 0, 0, 0.5); /* Color of the scrollbar */
        border-radius: 6px; /* Border radius of the scrollbar */
        transition: opacity 0.3s ease; /* Smooth transition for the scrollbar */
        opacity: 0; /* Initially hide the scrollbar */
        z-index: 1; /* Ensure the scrollbar is above the content */
    }

    /* Show the scrollbar on hover */
    &:hover::before {
        opacity: 1;
    }

    /* Smooth scrolling behavior */
    overflow-y: scroll; /* Enable scrolling */
    scrollbar-width: none; /* Hide default scrollbar in Firefox */
    -webkit-overflow-scrolling: touch; /* Enable smooth scrolling on iOS devices */

    /* Customize the scrollbar thumb */
    &::-webkit-scrollbar-thumb {
        background-color: transparent; /* Make the scrollbar thumb transparent */
    }

    /* Customize the scrollbar track */
    &::-webkit-scrollbar-track {
        background-color: transparent; /* Make the scrollbar track transparent */
    }

    /* Disable arrows for IE, Edge */
    &::-ms-scrollbar-base {
        display: none;
    }

    /* Hide scrollbar on WebKit-based browsers */
    &::-webkit-scrollbar {
        display: none;
    }

    @media all and (min-width:359px) and (max-width: 799px) {
        // 모바일 세로
        width: 100%;
        height: 100%;
        padding-top: 10px;
        padding-left: 0px;
        padding-right: 0px;
        padding-bottom: 10px;
        overflow: auto;
        overflow-x: hidden;
        overflow-y: hidden;
        border: none;
        border-radius: 0px;
    }
`;

export const Logo = styled.img`
    cursor: pointer;

    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        width: 60%;
    }
`
// ------------공통---------------

export const MainWebNav = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 20px;

    @media all and (min-width: 359px) and (max-width: 799px) {
        display: none;
    }
`

export const MainMobNav = styled.nav`
    display: none;

    @media all and (min-width: 359px) and (max-width: 799px) {
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const LoginButton = styled.button<{ flashing: boolean }>`
    background-color: #4caf50;
    color: white;
    border: none;
    margin-right: 10px;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;

    /* 점멸 애니메이션 */
    animation: ${(props) => (props.flashing ? 'flash 1s infinite' : 'none')};

    @keyframes flash {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.2;
        }
    }

    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        padding: 5px 10px;
        margin-right: 0px;
        margin-bottom: 10px;
    }
`;

export const SignUpButton = styled.button<{ flashing: boolean }>`
    background-color: #008CBA;
    color: white;
    border: none;
    padding: 10px 20px;
    margin-right: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;

    /* 점멸 애니메이션 */
    animation: ${(props) => (props.flashing ? 'flash 1s infinite' : 'none')};

    @keyframes flash {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.4;
        }
    }

    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        padding: 5px 10px;
        margin-right: 0px;
        margin-bottom: 0px;
    }
`;

export const MobLoginButton = styled.button<{ flashing: boolean }>`
    background-color: #4caf50;
    width: 70%;
    color: white;
    border: none;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    margin-bottom: 10px;

    /* 점멸 애니메이션 */
    animation: ${(props) => (props.flashing ? 'flash 1s infinite' : 'none')};

    @keyframes flash {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.2;
        }
    }
`;

export const MobSignUpButton = styled.button<{ flashing: boolean }>`
    background-color: #008CBA;
    width: 70%;
    color: white;
    border: none;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    margin-bottom: 10px;

    /* 점멸 애니메이션 */
    animation: ${(props) => (props.flashing ? 'flash 1s infinite' : 'none')};

    @keyframes flash {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.2;
        }
    }
`;

export const CarouselWrapper = styled.div`
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    overflow: hidden;
`
export const CarouselImgWrapper = styled.div<{ isTransitioning: boolean }>`
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    opacity: ${(props) => (props.isTransitioning ? 0.3 : 1)}; /* 트랜지션 중일 때 투명도 설정 */
    transition: opacity 0.8s ease; /* opacity 속성에 대한 트랜지션 효과 추가 */
`;
export const CarouselImg = styled.img`
    width: 85%;
    height: 100%;
    object-fit: contain;
    border-radius: 20px;
`

export const CarouselButtonWrapper = styled.div`
    width: 100%;
    height: 7%;
    display: flex;
    padding: 0px 20px 0px 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const CarouselPrevButton = styled.button`
    background-color: #008CBA;
    color: white;
    border: none;
    padding: 10px 10px 10px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 80px;
`

export const CarouselNextButton = styled.button`
    background-color: #008CBA;
    color: white;
    border: none;
    padding: 10px 10px 10px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 80px;
`