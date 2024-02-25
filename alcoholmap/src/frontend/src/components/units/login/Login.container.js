import { useState } from 'react'
import { useRouter } from 'next/router'
import LoginUI from './Login.presenter'


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

    const onClickMoveToSignup = () => {
        router.push("../signup")
    }

    return (
        <LoginUI
            onChangeEmail = {onChangeEmail} 
            onChangePassword = {onChangePassword}
            onClickSignup = {onClickMoveToSignup}
            onClickSubmit = {onClickSubmit}
            emailError = {emailError}
            pwError = {pwError}
        />
    )
}