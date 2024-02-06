import {useState} from 'react'

export default function SignUpPage(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function onChangeEmail(event){
        setEmail(event.target.value)
    }

    function onChangePassword(event){
        setPassword(event.target.value)
    }

    function onClickSignup(){

        // 1. 검증하기 이메일 & 패스워드 규칙 추후 도입
        if(email.includes("@") === false) {
            alert("이메일이 올바르지 않습니다.")
        } 
        else if(password === ("")){
            alert("비밀번호가 올바르지 않습니다.")
        }
        else{
            // 2. 백엔드 컴퓨터에 보내주기 (백엔드 개발자가 만든 함수, API)
            //    => 나중에

            // 3. 성공 알림 메시지
            alert("회원가입 완료")
        }
        
    }

    return (
        <div>
            이메일: <input type="text" onChange={onChangeEmail} />
            비밀번호: <input type="password" onChange={onChangePassword} />
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    )
}