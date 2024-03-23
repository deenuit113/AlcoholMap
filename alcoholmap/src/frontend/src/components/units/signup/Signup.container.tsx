import SignupUI from './Signup.presenter'
import axios from 'axios';
import { useRouter } from 'next/router'
import { SignupForm } from './Signup.types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from "../../../commons/util/yupSchemas";

const apiUrl = '/users/signup';

export default function SignupPage(){
    const router = useRouter()
    // react-hook-form과 yup 이용한 회원정보 폼 관리
    const { register, handleSubmit, formState } = useForm<SignupForm>({
        mode: 'onChange',
        resolver: yupResolver(signupSchema),
        reValidateMode: 'onChange',
        defaultValues: {
          email: "",
          password: "",
          nickname: "",
          capaSoju: 0,
        },
        shouldFocusError: true,
        shouldUnregister: true,
    });
    // 회원가입 폼 제출 함수
    const onSubmitSignupForm: SubmitHandler<SignupForm> = (data: SignupForm) => {
        onSendSignupForm(data);
    };
    // 회원가입 폼 서버에 보내는 함수
    const onSendSignupForm = async (signupForm: any) => {
        signupForm.roles = "USER";
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
    // 메인 페이지로 이동
    const onClickMoveToMainpage = (): void => {
        router.push("../map")
    }

    return (
        <SignupUI
            formMethods={{ register, handleSubmit, formState }}
            onSubmit={onSubmitSignupForm}
            onClickMoveToMainpage = {onClickMoveToMainpage}
        />
    )
}