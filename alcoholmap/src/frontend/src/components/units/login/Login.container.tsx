import { useState } from 'react'
import { useRouter } from 'next/router'
import LoginUI from './Login.presenter'
import axios from 'axios';
import { LoginForm } from './Login.types';
import { useForm, SubmitHandler } from 'react-hook-form';

/*  백엔드 서버에 이메일, 비밀번호 보내기
    로그인 성공 시 메인페이지 라우터
*/
const apiUrl = '/users/login';

export default function LoginPage(): JSX.Element{
    const router = useRouter()

    const { register, handleSubmit, formState } = useForm<LoginForm>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: {
          email: '',
          password: '',
        },
        shouldFocusError: true,
        shouldUnregister: true,
      });
    const [jwtToken, setJwtToken] = useState("");
    //const [disabledbutton, setButton] = useState(true) //버튼 비활성화 추후 추가

    const onSubmit: SubmitHandler<LoginForm> = (data: LoginForm) => {
        // 로그인 처리 로직 추가
        console.log(data);
        onSendtoServer(data);
      };

    const onSendtoServer = async (loginForm: LoginForm) => {
        const loginFormJson = JSON.stringify(loginForm);
        try {
            const response = await axios.post(apiUrl, loginFormJson, {
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

    const onClickMoveToSignup = (): void => {
        router.push("../signup")
    }

    const onClickMoveToMainpage = (): void => {
        router.push("../map")
    }
    console.log("rerendering")
    return (
        <LoginUI
            formMethods={{ register, handleSubmit, formState }}
            onSubmit={onSubmit}
            onClickMoveToSignup = {onClickMoveToSignup}
            onClickMoveToMainpage = {onClickMoveToMainpage}
        />
    )
}