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
         Label,
         ButtonWrapper,
         SignUpButton} from '../../styles/loginStyle'  
import { useRouter } from 'next/router'
// presenter 만들기


/*  백엔드 서버에 이메일, 비밀번호 보내기
    로그인 성공 시 메인페이지 라우터
*/


export default function LoginPage(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    //const [disabledbutton, setButton] = useState(true) //버튼 비활성화 추후 추가

    const [emailError, setEmailError] = useState("")
    const [pwError, setPwError] = useState("")
    
    const router = useRouter()

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

    const onClickSignup = () => {
        router.push("../signup")
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
                <ButtonWrapper>
                    <LoginButton onClick={onClickSubmit}>로그인</LoginButton>
                    <SignUpButton onClick={onClickSignup}>회원가입</SignUpButton>
                </ButtonWrapper>
                
        </Wrapper>
        
    )
}