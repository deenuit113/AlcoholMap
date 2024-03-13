import { useState } from 'react'
import SignupUI from './Signup.presenter'
import axios from 'axios';
import { useRouter } from 'next/router'
import { SignupForm } from './Signup.types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from "../../../commons/yupSchemas";

/*  백엔드 서버에 이메일아이디 + @ + 도메인 합쳐서 보내기
    비밀번호 보내기
    도메인에서 직접입력 선택하면 도메인 입력창 활성화하기
    셋 다 입력이 되어있는 상태라면 회원가입 버튼 활성화 시키기
    회원가입 성공 시, 로그인 상태로 메인페이지 라우터
*/

const apiUrl = '/user/signup';

export default function SignupPage(){

    const router = useRouter()

    const { register, handleSubmit, formState } = useForm<SignupForm>({
        mode: 'onChange',
        resolver: yupResolver(signupSchema),
        reValidateMode: 'onChange',
        defaultValues: {
          email: '',
          password: '',
          nickname: '',
          capaSoju: 0,
        },
        shouldFocusError: true,
        shouldUnregister: true,
    });
    const [isDuplicated, setIsDuplicated] = useState(false);
    
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

    const onSubmit: SubmitHandler<SignupForm> = (data: SignupForm) => {
        // 로그인 처리 로직 추가
        console.log(data);
        onSendSignupForm(data);
    };

    const onSendSignupForm = async (signupForm: SignupForm) => {
        const jsonSignupForm = JSON.stringify(signupForm);
        console.log(jsonSignupForm)
        try {
            const response = await axios.post(apiUrl, jsonSignupForm, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Response from server:', response.data);
            alert("회원 가입 성공.")
            router.push("../login")
        } catch (error){
            console.error('error submitting data:', error);
            alert("회원 가입 실패.")
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
            formMethods={{ register, handleSubmit, formState }}
            onSubmit={onSubmit}
            onClickMoveToMainpage = {onClickMoveToMainpage}
        />
    )
}