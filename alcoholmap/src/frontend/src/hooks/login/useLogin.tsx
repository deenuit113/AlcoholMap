import { useRouter } from 'next/router';
import axios from 'axios';
import { LoginForm } from '../../components/units/login/Login.types';

const useLogin = () => {
  const router = useRouter();

  const apiUrl = '/users/login';

  const onSendLoginForm = async (loginForm: LoginForm) => {
    const loginFormJson = JSON.stringify(loginForm);
    try {
      const response = await axios.post(apiUrl, loginFormJson, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const token = response.data.accessToken;
      localStorage.setItem('jwtToken', token);
      router.push("../map"); //로그인 성공 시 메인페이지로 이동
    } catch (error){
      console.error('error submitting data:', error);
      alert("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.")
    }
  };

  return { onSendLoginForm };
};

export default useLogin;