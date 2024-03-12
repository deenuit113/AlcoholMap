import * as S from "./Login.styles";
import { LoginUIProps } from "./Login.types";

export default function LoginUI({ formMethods, onSubmit, ...props }: LoginUIProps): JSX.Element {
    const { register, handleSubmit, formState: { errors } } = formMethods;
    return (
        <>
            <S.Wrapper>
                <S.Logo onClick={props.onClickMoveToMainpage} src="/GreenBottleLogo1.png"></S.Logo>
                <S.Title>로그인</S.Title>
                <S.LoginForm onSubmit= {handleSubmit(onSubmit)}>
                    <S.InfoWrapper>
                        <S.Label>이메일: </S.Label>
                        <S.InputInfo
                            type="text"
                            {...register('email', {
                                required: '이메일을 입력하세요.',
                                pattern: {
                                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
                                message: '올바른 이메일 형식이 아닙니다.',
                                },
                            })}
                        />
                        {errors?.email && <S.ErrorMsgWrapper>{errors.email.message}</S.ErrorMsgWrapper>}
                    </S.InfoWrapper>

                    <S.InfoWrapper>
                        <S.Label>비밀번호: </S.Label>
                        <S.InputInfo
                            type="password"
                            {...register('password', {
                            required: '비밀번호를 입력하세요.',
                            })}
                        />
                        {errors?.password && <S.ErrorMsgWrapper>{errors.password.message}</S.ErrorMsgWrapper>}
                    </S.InfoWrapper>
                
                    <S.ButtonWrapper>
                        <S.LoginButton type="submit">로그인</S.LoginButton>
                        <S.SignUpButton type="button" onClick={props.onClickMoveToSignup}>회원가입</S.SignUpButton>
                    </S.ButtonWrapper>
                </S.LoginForm>
            </S.Wrapper>
        </>
  );
}
