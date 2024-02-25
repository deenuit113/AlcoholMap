import {useState} from 'react'
import SignupUI from './Signup.presenter'

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

    

    /*function onChangeDisabledButton(){
        setButton(!disabledbutton)
    }*/ //버튼 비활성화 추후 추가

    /*const onClickSignup = () => {
        let errorcode = 0
        // 1. 검증하기 이메일 & 비밀번호 규칙 추후 추가
        if(email.includes("@") === false) {
            //alert("이메일이 올바르지 않습니다.")
            //document.getElementById("EmailErrorMsg").innerText = "이메일이 올바르지 않습니다."
            errorcode = 1
        } 
        if(password === ("")){
            //alert("비밀번호가 올바르지 않습니다.")
            //document.getElementById("PasswordErrorMsg").innerText = "비밀번호가 올바르지 않습니다."
            errorcode = 1
        }

        if(errorcode === 0){
            // 2. 백엔드 컴퓨터에 보내주기 (백엔드 개발자가 만든 함수, API)
            //    => 나중에
            //onChangeDisabledButton() //버튼 비활성화 추후 추가
            // 3. 성공 알림 메시지
            alert("회원가입 완료")
        }
        ;
    }*/

    return (
        <SignupUI
            emailError = {emailError}
            pwError = {pwError}
            onChangeDomain = {onChangeDomain}
            onChangeEmail = {onChangeEmail}
            onChangePassword = {onChangePassword}
            onClickSubmit = {onClickSubmit}
        />
    )
}