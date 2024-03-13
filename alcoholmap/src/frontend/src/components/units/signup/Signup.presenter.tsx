import * as S from "./Signup.styles";
import { SignupUIProps } from "./Signup.types";

export default function SignupUI({ formMethods, onSubmit, ...props }: SignupUIProps): JSX.Element {
    const { register, handleSubmit, formState: { errors } } = formMethods;
    return(
        <>
            <S.Wrapper>
                <S.Logo onClick={props.onClickMoveToMainpage} src="/GreenBottleLogo1.png"></S.Logo>
                <S.Title>회원가입</S.Title>
                <S.SignupForm onSubmit= {handleSubmit(onSubmit)}>
                    <S.InfoWrapper>
                        <S.Label>이메일: </S.Label>
                        <S.InputInfo
                            type="text"
                            {...register('email')}
                        />
                        {errors?.email && <S.ErrorMsgWrapper>{errors.email.message}</S.ErrorMsgWrapper>}
                    </S.InfoWrapper>

                    <S.InfoWrapper>
                        <S.Label>비밀번호: </S.Label>
                        <S.InputInfo
                            type="password"
                            {...register('password')}
                        />
                        {errors?.password && <S.ErrorMsgWrapper>{errors.password.message}</S.ErrorMsgWrapper>}
                    </S.InfoWrapper>

                    <S.InfoWrapper>
                        <S.Label>닉네임: </S.Label>
                        <S.InputInfo
                            type="text"
                            {...register('nickname')}
                        />
                        {errors?.nickname && <S.ErrorMsgWrapper>{errors.nickname.message}</S.ErrorMsgWrapper>}
                    </S.InfoWrapper>

                    <S.InfoWrapper>
                        <S.Label>주량: </S.Label>
                        <S.InputInfo
                            type="text"
                            {...register('capaSoju')}
                        />
                        {errors?.capaSoju && <S.ErrorMsgWrapper>{errors.capaSoju.message}</S.ErrorMsgWrapper>}
                    </S.InfoWrapper>
                
                    <S.ButtonWrapper>
                        <S.SignUpButton type="submit">회원가입</S.SignUpButton>
                    </S.ButtonWrapper>
                </S.SignupForm>
            </S.Wrapper>
        </>
    )
}