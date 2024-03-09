import { useState } from 'react'
import { useRouter } from 'next/router'
import LoginUI from './Login.presenter'
import axios from 'axios';


/*  백엔드 서버에 이메일, 비밀번호 보내기
    로그인 성공 시 메인페이지 라우터
*/


const apiUrl = '/users/login';

export default function LoginPage(){
    //const [disabledbutton, setButton] = useState(true) //버튼 비활성화 추후 추가
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [jwtToken, setJwtToken] = useState("");

    const [emailError, setEmailError] = useState("")
    const [pwError, setPwError] = useState("")
    
    const router = useRouter()


    //-----------중복 (추후 Custom Hook)-------------

    const validateEmail = (email) => {
        // 이메일 형식 검증을 위한 정규표현식 사용
        const emailForm = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
        return emailForm.test(email);
    };

    const validatePassword = (password) => {
        // 비밀번호가 최소 8자 이상, 대문자 및 숫자를 포함하는지 검증
        return password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password);
    };

    //-----------중복 (추후 Custom Hook)-------------

    const onChangeInput = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        if(name === "email" && event.target.value !== ""){
            setEmailError("")
        }
        if(name === "password" && event.target.value !== ""){
            setPwError("")
        }
    };

    const onClickSubmit = () => {
        let errorcode = 0;
        if(!formData.email) {
            setEmailError("이메일을 입력해주세요.")
            errorcode = 1
        }

        else if (!validateEmail(formData.email)) {
            setEmailError('올바른 이메일 형식이 아닙니다.');
            errorcode = 1
        }

        if(!formData.password) {
            setPwError("비밀번호를 입력해주세요.")
            errorcode = 1
        }

        else if (!validatePassword(formData.password)) {
            setPwError('비밀번호는 최소 8자 이상, 대문자와 숫자를 포함해야 합니다.');
            errorcode = 1
        }

        if(errorcode === 0) {
            handleFormSubmit(null, formData)
        }
    }

    const handleFormSubmit = async (e, formData) => {
        const jsonformData = JSON.stringify(formData);
        try {
            const response = await axios.post(apiUrl, jsonformData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const token = response.data.token;
            localStorage.setItem('jwtToken', token);
            router.push("../map"); //로그인 성공 시 메인페이지로 이동
        } catch (error){
            console.error('error submitting data:', error);
            alert("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.")
        }
    };

    const onClickMoveToSignup = () => {
        router.push("../signup")
    }

    const onClickMoveToMainpage = () => {
        router.push("../map")
    }

    return (
        <LoginUI
            formData = {formData}
            onChangeInput = {onChangeInput}
            onClickMoveToSignup = {onClickMoveToSignup}
            onClickMoveToMainpage = {onClickMoveToMainpage}
            onClickSubmit = {onClickSubmit}
            emailError = {emailError}
            pwError = {pwError}
        />
    )
}