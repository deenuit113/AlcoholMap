import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 400px;
    /* height: 1847px; */
    border: 1px solid black;
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 100px;
    padding-left: 102px;
    padding-right: 102px;
    display: flex;
    flex-direction: column;
    align-items: ;
    justify-content: flex-start;
    border: none;
    box-shadow: 0px 0px 10px gray;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  margin-right: 5px;
  margin-left: 5px;
  display: inline-block;
`;

export const EmailWrapper = styled.div`
  width: 500px;
  display: inline-block;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 0px;
`

export const PasswordWrapper = styled.div`
  width: 300px;
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
  font-size: 34px;
  font-weight: bold;
  padding-bottom: 15px;
`;

export const Logo = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 50px;
  font-weight: bold;
  padding-bottom: 15px;
`;

export const SignUpButton = styled.button`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  width: 100px;
  float: right;
`

export const InputEmail = styled.input`
  width: 100px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  margin-left: 10px; 
  float: lefts;
`

export const InputPassword = styled.input`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  float: right;
`

export const InputDomain = styled.input`
  width: 100px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  margin-right: 10px; 
  float: lefts;
`

export const EmailDropbox = styled.select`
  size: 30;
`

export const EmailDropboxOption = styled.option`
  
`

export const Smalltitle = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 15px;
`;

export const SmallInput = styled.input`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 15px;
`;