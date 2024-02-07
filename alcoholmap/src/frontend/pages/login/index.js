import {useState} from 'react'
import { Wrapper,
         Title,
         LoginButton,
         InputEmail,
         InputPassword,
         EmailWrapper,
         PasswordWrapper,
         ErrorMsgWrapper,
         Logo,
         Label} from '../../styles/loginStyle'


/*  백엔드 서버에 이메일, 비밀번호 보내기
    로그인 성공 시 메인페이지 라우터
    추후 추가
*/

export default function LoginPage(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [emailError, setEmailError] = useState("")
    const [pwError, setPwError] = useState("")
    

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
        if(event.target.value !== ""){
            setEmailError("")
        }
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value)
        if(event.target.value !== ""){
            setPwError("")
        }
    }

    const onClickSubmit = () => {
        if(!email) {
            setEmailError("이메일을 입력해주세요.")
        }

        if(!password) {
            setPwError("비밀번호를 입력해주세요.")
        }

        if(email && password) {
            alert("회원가입 완료")
        }
    }


    return (
        <Wrapper>
            <Logo></Logo>
            <Title>알콜맵 로그인</Title>
                <EmailWrapper>
                    <Label>이메일: </Label>
                    <InputEmail type="text" onChange={onChangeEmail} />
                </EmailWrapper>
                <ErrorMsgWrapper>{emailError}</ErrorMsgWrapper>
            
                <PasswordWrapper>
                    <Label>비밀번호: </Label>
                    <InputPassword type="password" onChange={onChangePassword} />
                </PasswordWrapper>
                <ErrorMsgWrapper>{pwError}</ErrorMsgWrapper>

                <LoginButton onClick={onClickSubmit}>로그인</LoginButton>
        </Wrapper>
        
    )
}