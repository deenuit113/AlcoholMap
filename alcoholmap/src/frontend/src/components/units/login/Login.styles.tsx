import styled from "@emotion/styled";

// ------------공통---------------

export const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
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

    @media all and (min-width: 480px) and (max-width: 1439px) {
        // 태블릿
        width: 95%;
        height: 95%;
    }
`;

export const Logo = styled.img`
    cursor: pointer;

    @media all and (min-width: 480px) and (max-width: 1439px) {
        // 태블릿
        width: 40%;
    }
`
// ------------공통---------------




export const Label = styled.div`
    padding-bottom: 8px;
    font-size: 16px;
    font-weight: bold;
    float: left;
`;

export const InfoWrapper = styled.div`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    margin-top: 16px;
    display: flex;
    justify-content: end;
`;

export const ErrorMsgWrapper = styled.div`
    width: 100%;
    padding-top: 8px;
    padding-left: 20px;
    margin-bottom: 10px;
    color: red;
`;

export const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
`;

export const LoginButton = styled.button`
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
`;

export const InputInfo = styled.input`
    width: 100%;
    padding: 10px;
    margin-left: 13px;
    box-sizing: border-box;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;

    @media all and (min-width: 480px) and (max-width: 1439px) {
        width: 95%;
    }
`;