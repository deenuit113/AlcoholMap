import * as S from "./Signup.styles";

export default function SignupUI(props) {
    return(
        <S.Wrapper>
            <S.Logo></S.Logo>
            <S.Title>알콜맵 회원가입</S.Title>
                <S.EmailWrapper>
                    <S.Label>이메일: </S.Label>
                    <S.InputEmail type="text" onChange={props.onChangeEmail} />
                    <S.Label>@</S.Label>
                    <S.InputDomain type="text" disabled ={true} onChange={props.onChangeDomain} />

                    <S.EmailDropbox onChange={props.onChangeDomain}>
                        <S.EmailDropboxOption disabled selected>--선택--</S.EmailDropboxOption>
                        <S.EmailDropboxOption>gmail.com</S.EmailDropboxOption>
                        <S.EmailDropboxOption>naver.com</S.EmailDropboxOption>
                        <S.EmailDropboxOption>daum.net</S.EmailDropboxOption>
                        <S.EmailDropboxOption>직접 입력</S.EmailDropboxOption>
                    </S.EmailDropbox>
                </S.EmailWrapper>
                <S.ErrorMsgWrapper>{props.emailError}</S.ErrorMsgWrapper>
            
                <S.PasswordWrapper>
                    <S.Label>비밀번호: </S.Label>
                    <S.InputPassword type="password" onChange={props.onChangePassword} />
                </S.PasswordWrapper>
                <S.ErrorMsgWrapper>{props.pwError}</S.ErrorMsgWrapper>

                <S.SignUpButton onClick={props.onClickSubmit}>회원가입</S.SignUpButton>
        </S.Wrapper>
    )
}