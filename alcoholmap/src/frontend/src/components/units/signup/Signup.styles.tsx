import styled from "@emotion/styled";

export const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
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

    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        width: 100%;
        height: 100%;
        padding-top: 60px;
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

export const SignupForm = styled.form`
    width: 100%;
`

export const InfoWrapper = styled.div`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
`;

export const ErrorMsgWrapper = styled.div`
    width: 100%;
    font-size: 16px;
    display: inline-block;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2px;
    color: red;
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        font-size: 13px;
    }
`

export const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
`;

export const Logo = styled.img`
    cursor: pointer;

    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        width: 60%;
    }
`

export const ButtonWrapper = styled.div`
    width: 100%;
    margin-top: 16px;
    display: flex;
    justify-content: end;
`;

export const SignUpButton = styled.button`
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
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        padding: 5px 10px;
        margin-right: 15px;
    }
`;

export const InputInfo = styled.input`
    width: 100%;
    padding: 10px;
    margin-left: 10px;
    box-sizing: border-box;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;

    @media all and (min-width: 359px) and (max-width: 799px) {
        width: 95%;
    }
`;