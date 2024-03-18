import styled from "@emotion/styled";


export const HBMenuWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 90%;
    margin: 10px 0 10px -5px;
    padding-top: 6px;
    padding-right: 30px;
    padding-left: 70px;
    overflow-y: auto;
    overflow-x: hidden;
    background: rgba(255, 255, 255, 0.8);
    z-index: 2;
    font-size: 18px;
    border: 5px solid #b7f0b1;
    border-left: none;
    border-radius: 10px;

    &.closed {
        display: none;
    }

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
`;

export const MyInfoWrapper = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    flex-direction: column
    align-items: center;
    justify-content: space-evenly;
`

export const LoginButton = styled.button`
    font-family: Arial, Helvetica, sans-serif;
    width: 40%;
    height: 100%;
    background-color: #B7F0B1;
    border: 2px solid #47C83E;
    border-radius: 3px;
    cursor: pointer;
`

export const MypageButton = styled.button`
    font-family: Arial, Helvetica, sans-serif;
    width: 40%;
    height: 100%;
    background-color: #B7F0B1;
    border: 2px solid #47C83E;
    border-radius: 3px;
    cursor: pointer;
`

export const SignupButton = styled.button`
    font-family: Arial, Helvetica, sans-serif;
    width: 40%;
    height: 100%;
    background-color: #B7F0B1;
    border: 2px solid #47C83E;
    border-radius: 3px;
    cursor: pointer;
`

export const LogoutButton = styled.button`
    font-family: Arial, Helvetica, sans-serif;
    width: 40%;
    height: 100%;
    background-color: #B7F0B1;
    border: 2px solid #47C83E;
    border-radius: 3px;
    cursor: pointer;
`

export const HBMenuList = styled.ul`
    list-style: none;
    width: 100%;
    height: 90%;
    border: 1px solid #b7f0b1;
`

export const HBMenuListEl = styled.li` 
    height: 50px;
`