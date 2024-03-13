import styled from "@emotion/styled";

export const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    transform: translate(-50%, -50%);
    margin: 10 10 10 10px;
    padding-top: 80px;
    padding-bottom: 100px;
    padding-left: 102px;
    padding-right: 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid gray;
    border-radius: 30px;
    box-shadow: 0px 0px 10px gray;
    background-color: #f0fdef;
    overflow: auto;

    @media all and (min-width: 480px) and (max-width: 1439px) {
        // 태블릿
        width: 95%;
        height: 95%;
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
    font-size: 16px;
    font-weight: bold;
    float: left;
`;

export const Title = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 34px;
    font-weight: bold;
    padding-bottom: 15px;
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
    margin-left: 13px;
    box-sizing: border-box;
    font-size: 16px;
    border: 4px solid #47C83E;
    border-radius: 8px;

    @media all and (min-width: 480px) and (max-width: 1439px) {
        width: 95%;
    }
`;

export const InputInfo = styled.input`
    width: 100%;
    padding: 10px;
    margin-left: 13px;
    box-sizing: border-box;
    font-size: 16px;
    border-radius: 4px;

    @media all and (min-width: 480px) and (max-width: 1439px) {
        width: 95%;
    }
`;

export const Logo = styled.img`
    cursor: pointer;

    @media all and (min-width: 480px) and (max-width: 1439px) {
        // 태블릿
        width: 40%;
    }
`

export const UserInfoForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`

export const InfoWrapper = styled.div`
    width: 100%;
    display: flex;
    height: 25%;
    padding: 10px;
    box-sizing: border-box;
    flex-direction: column;
`;

export const WishListWrapper = styled.div`
    width: 80%;
    display: inline-block;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 0px;
    padding-left: 5px;
    margin: 5px;
    border: 1px solid black;
    border-radius: 10px 10px 10px 10px;
`

export const RatedListWrapper = styled.div`
    width: 80%;
    display: inline-block;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 0px;
    padding-left: 5px;
    margin: 5px;
    border: 1px solid black;
    border-radius: 10px 10px 10px 10px;
`

export const ButtonWrapper = styled.div`
    position: relative;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 5px;
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