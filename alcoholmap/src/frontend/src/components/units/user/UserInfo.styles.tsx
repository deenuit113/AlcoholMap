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
        min-height: 100%;
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
    padding: 5px 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 10px;
`

export const UserInfoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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
    text-align: center;
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

export const FollowButton = styled.button`
    padding: 5px 10px 5px 10px;
    font-size: 15px;
    font-weight: bold;
    background-color: #B7F0B1;
    border: 2px solid #47C83E;
    border-radius: 10px;
    margin-top: 10px;

    :hover{
        background-color: #47C83E;
        color: white;
    }
`