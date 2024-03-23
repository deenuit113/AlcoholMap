import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginUI from './Login.presenter';
import { LoginForm } from './Login.types';
import useLogin from '../../../hooks/login/useLogin';
import { loginSchema } from "../../../commons/util/yupSchemas";

export default function LoginPage(): JSX.Element{
    const router = useRouter()
    const { register, handleSubmit, formState } = useForm<LoginForm>({
        mode: 'onChange',
        resolver: yupResolver(loginSchema),
        reValidateMode: 'onChange',
        defaultValues: {
          email: '',
          password: '',
        },
        shouldFocusError: true,
        shouldUnregister: true,
    });

    const { onSendLoginForm } = useLogin();

    const onSubmit: SubmitHandler<LoginForm> = (data: LoginForm) => {
        onSendLoginForm(data);
    };

    const onClickMoveToSignup = (): void => {
        router.push("../signup")
    };

    const onClickMoveToMainpage = (): void => {
        router.push("../map")
    };

    return (
        <LoginUI
            formMethods={{ register, handleSubmit, formState }}
            onSubmit={onSubmit}
            onClickMoveToSignup = {onClickMoveToSignup}
            onClickMoveToMainpage = {onClickMoveToMainpage}
        />
    );
}