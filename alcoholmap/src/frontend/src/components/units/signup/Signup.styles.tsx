import styled from "@emotion/styled";

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
        // 모바일 세로
        width: 95%;
        min-height: 95%;
        padding-top: 10px;
        padding-left: 50px;
        padding-right: 50px;
    }
`;


export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  margin-right: 5px;
  margin-left: 5px;
  display: inline-block;
`;

export const InfoWrapper = styled.div`
  width: 500px;
  display: inline-block;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 0px;
`

export const ErrorMsgWrapper = styled.div`
  width: 300px;
  display: inline-block;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2px;
  color: red;
`

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 15px;
`;

export const Logo = styled.img`
    cursor: pointer;

    @media all and (min-width: 480px) and (max-width: 1439px) {
        // 태블릿
        width: 40%;
    }
`

export const ButtonWrapper = styled.div`
  text-align: center;
`

export const SignUpButton = styled.button`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  width: 100px;
  float: right;
`

export const InputInfo = styled.input`
  width: 200px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  margin-left: 10px; 
  float: lefts;
`
