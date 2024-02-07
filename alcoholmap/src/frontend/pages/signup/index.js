import {useState} from 'react'
import { Wrapper,
         Title,
         Logo,
         SignUpButton,
         InputEmail,
         InputPassword,
         EmailWrapper,
         PasswordWrapper,
         ErrorMsgWrapper,
         Label,
         EmailDropbox,
         EmailDropboxOption,
         InputDomain} from '../../styles/signupStyle'

/*  백엔드 서버에 이메일아이디 + @ + 도메인 합쳐서 보내기
    비밀번호 보내기
    도메인에서 직접입력 선택하면 도메인 입력창 활성화하기
    셋 다 입력이 되어있는 상태라면 회원가입 버튼 활성화 시키기
    회원가입 성공 시, 로그인 상태로 메인페이지 라우터
*/

export default function SignUpPage(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [domain, setDomain] = useState("")
    //const [disabledbutton, setButton] = useState(true) //버튼 비활성화 추후 추가

    const [emailError, setEmailError] = useState("")
    const [pwError, setPwError] = useState("")
    
    const onChangeEmail = (event) => {
        setEmail(event.target.value)
        if(event.target.value !== ""){
            setEmailError("")
        }
    };

    const onChangeDomain = (event) => {
        setDomain(event.target.value)
        if(event.target.value !== ""){
            setEmailError("")
        }
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value)
        if(event.target.value !== ""){
            setPwError("")
        }
    };

    const onClickSubmit = () => {
        if(!email) {
            setEmailError("이메일을 입력해주세요.")
        }

        if(!domain) {
            setEmailError("도메인을 선택해주세요.")
        }

        if(!password) {
            setPwError("비밀번호를 입력해주세요.")
        }

        if(email && password && domain) {
            alert("회원가입 완료")
        }
    };

    return (
        <Wrapper>
            <Logo></Logo>
            <Title>알콜맵 회원가입</Title>
                <EmailWrapper>
                    <Label>이메일: </Label>
                    <InputEmail type="text" onChange={onChangeEmail} />
                    <Label>@</Label>
                    <InputDomain type="text" disabled ={true} onChange={onChangeDomain} />

                    <EmailDropbox onChange={onChangeDomain}>
                        <EmailDropboxOption disabled selected>--선택--</EmailDropboxOption>
                        <EmailDropboxOption>gmail.com</EmailDropboxOption>
                        <EmailDropboxOption>naver.com</EmailDropboxOption>
                        <EmailDropboxOption>daum.net</EmailDropboxOption>
                        <EmailDropboxOption>직접 입력</EmailDropboxOption>
                    </EmailDropbox>
                </EmailWrapper>
                <ErrorMsgWrapper>{emailError}</ErrorMsgWrapper>
            
                <PasswordWrapper>
                    <Label>비밀번호: </Label>
                    <InputPassword type="password" onChange={onChangePassword} />
                </PasswordWrapper>
                <ErrorMsgWrapper>{pwError}</ErrorMsgWrapper>

                <SignUpButton onClick={onClickSubmit}>회원가입</SignUpButton>
        </Wrapper>
        
    )
}