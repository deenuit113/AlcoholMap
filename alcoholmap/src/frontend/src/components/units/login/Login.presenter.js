import * as S from "./Login.styles";

export default function LoginUI(props){
    return (
        <S.Wrapper>
            <S.Logo></S.Logo>
            <S.Title>알콜맵 로그인</S.Title>
                <S.EmailWrapper>
                    <S.Label>이메일: </S.Label>
                    <S.InputEmail type="text" onChange={props.onChangeEmail} />
                </S.EmailWrapper>
                <S.ErrorMsgWrapper>{props.emailError}</S.ErrorMsgWrapper>
            
                <S.PasswordWrapper>
                    <S.Label>비밀번호: </S.Label>
                    <S.InputPassword type="password" onChange={props.onChangePassword} />
                </S.PasswordWrapper>
                <S.ErrorMsgWrapper>{props.pwError}</S.ErrorMsgWrapper>
                <S.ButtonWrapper>
                    <S.LoginButton onClick={props.onClickSubmit}>로그인</S.LoginButton>
                    <S.SignUpButton onClick={props.onClickMoveToSignup}>회원가입</S.SignUpButton>
                </S.ButtonWrapper>
                
        </S.Wrapper>
        
    )
}