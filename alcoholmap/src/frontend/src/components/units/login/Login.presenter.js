import * as S from "./Login.styles";

export default function LoginUI(props){
    return (
        <S.Wrapper>
            <S.Logo onClick={props.onClickMoveToMainpage}>AlcoholMap</S.Logo>
            <S.Title>로그인</S.Title>
                <S.InfoWrapper>
                    <S.Label>이메일: </S.Label>
                    <S.InputInfo type = "text" name = "email" value = {props.formData.email} onChange={props.onChangeInput} />
                </S.InfoWrapper>
                <S.ErrorMsgWrapper>{props.emailError}</S.ErrorMsgWrapper>
            
                <S.InfoWrapper>
                    <S.Label>비밀번호: </S.Label>
                    <S.InputInfo type="password" name = "password" value = {props.formData.password} onChange={props.onChangeInput} />
                </S.InfoWrapper>
                <S.ErrorMsgWrapper>{props.pwError}</S.ErrorMsgWrapper>
                <S.ButtonWrapper>
                    <S.LoginButton onClick={props.onClickSubmit}>로그인</S.LoginButton>
                    <S.SignUpButton onClick={props.onClickMoveToSignup}>회원가입</S.SignUpButton>
                </S.ButtonWrapper>
                
        </S.Wrapper>
        
    )
}