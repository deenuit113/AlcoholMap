import { ChangeEvent, useState } from 'react'
import SignupUI from './Signup.presenter'
import axios from 'axios';
import { useRouter } from 'next/router'
import { SignupForm } from './Signup.types';

/*  백엔드 서버에 이메일아이디 + @ + 도메인 합쳐서 보내기
    비밀번호 보내기
    도메인에서 직접입력 선택하면 도메인 입력창 활성화하기
    셋 다 입력이 되어있는 상태라면 회원가입 버튼 활성화 시키기
    회원가입 성공 시, 로그인 상태로 메인페이지 라우터
*/

const apiUrl = '/user/signup';

export default function SignupPage(){

    const router = useRouter()

    const [emailError, setEmailError] = useState("")
    const [pwError, setPwError] = useState("")
    const [nnError, setNnError] = useState("")
    const [capaError, setCapaError] = useState("")
    const [isDuplicate, setIsDuplicate] = useState(false)
    const [signupForm, setSignupForm] = useState<SignupForm>({
        email: '',
        password: '',
        nickname: '',
        capaSoju: 0,
    });

    const validateEmail = (email: string): boolean => {
        // 이메일 형식 검증을 위한 정규표현식 사용
        const emailForm = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
        return emailForm.test(email);
    };

    const validatePassword = (password: string): boolean => {
        // 비밀번호가 최소 8자 이상, 대문자 및 숫자를 포함하는지 검증
        return password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password);
    };
    
    /*const checkDuplicateEmail = async () => {
        try {
            const response = await axios.get(`/api/check-email?email=${email}`);
            setDuplicate(response.data.exists); // 서버에서 중복 여부를 응답으로 받아서 처리
        } catch (error) {
            console.error('Error checking duplicate email:', error);
            setDuplicate(false);
            return false;
        }
    };*/


    const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setSignupForm({
            ...signupForm,
            [name]: name === 'capaSoju' ? Number(value) : value,
        });
        if(name === "email" && event.target.value !== ""){
            setEmailError("")
        }
        if(name === "password" && event.target.value !== ""){
            setPwError("")
        }
        if(name === "capaSoju" && event.target.value !== ""){
            setCapaError("")
        }
        if(name === "nickname" && event.target.value !== ""){
            setNnError("")
        }
        
    };

    const onClickSubmit = (): void => {
        let errorcode = 0;
        //checkDuplicateEmail();
        if(!signupForm.email) {
            setEmailError("이메일을 입력해주세요.")
            errorcode = 1
        }

        else if (!validateEmail(signupForm.email)) {
            setEmailError('올바른 이메일 형식이 아닙니다.');
            errorcode = 1
        }

        else if (isDuplicate) {
            setEmailError('이미 사용 중인 이메일입니다.');
            errorcode = 1;
        }

        if(!signupForm.password) {
            setPwError("비밀번호를 입력해주세요.")
            errorcode = 1
        }

        else if (!validatePassword(signupForm.password)) {
            setPwError('비밀번호는 최소 8자 이상, 대문자와 숫자를 포함해야 합니다.');
            errorcode = 1
        }
      
        if(!signupForm.nickname) {
            setNnError("닉네임을 입력해주세요.")
            errorcode = 1
        }

        if(!signupForm.capaSoju) {
            setCapaError("주량을 입력하세요.")
            errorcode = 1
        }
        
        if(errorcode === 0){
            console.log(signupForm)
            submitSignupForm(signupForm)
        }
        
    };

    const submitSignupForm = async (signupForm: SignupForm) => {
        const jsonSignupForm = JSON.stringify(signupForm);
        console.log(jsonSignupForm)
        try {
            const response = await axios.post(apiUrl, jsonSignupForm, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Response from server:', response.data);
        } catch (error){
            console.error('error submitting data:', error);
        }
    };

    const onClickMoveToMainpage = (): void => {
        router.push("../map")
    }

    

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
            nnError = {nnError}
            capaError = {capaError}
            onClickSubmit = {onClickSubmit}
            onChangeInput = {onChangeInput}
            signupForm = {signupForm}
            submitSignupForm = {submitSignupForm}
            onClickMoveToMainpage = {onClickMoveToMainpage}
        />
    )
}