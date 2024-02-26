import * as S from "./Signup.styles";

export default function SignupUI(props) {
    return(
        <S.Wrapper>
            <S.Logo>AlcoholMap</S.Logo>
            <S.Title>알콜맵 회원가입</S.Title>
                <S.EmailWrapper>
                    <S.Label>이메일: </S.Label>
                    <S.InputEmail type = "text" name = "email" value = {props.formData.email} onChange={props.onChangeInput} />
                    
                </S.EmailWrapper>
                <S.ErrorMsgWrapper>{props.idError}</S.ErrorMsgWrapper>
            
                <S.PasswordWrapper>
                    <S.Label>비밀번호: </S.Label>
                    <S.InputPassword type = "text" name = "password" value = {props.formData.password} onChange={props.onChangeInput} />
                </S.PasswordWrapper>
                <S.ErrorMsgWrapper>{props.pwError}</S.ErrorMsgWrapper>

                <S.CapaWrapper>
                    <S.Label>주량: </S.Label>
                    <S.InputCapa type = "number" name = "capaSoju" value = {props.formData.capaSoju} onChange={props.onChangeInput}/>
                </S.CapaWrapper>
                <S.ErrorMsgWrapper>{props.capaError}</S.ErrorMsgWrapper>

                <S.SignUpButton onClick={props.onClickSubmit}>콘솔로그 데이터 확인</S.SignUpButton>
                <S.SignUpButton onClick = {props.handleFormSubmit}>회원가입</S.SignUpButton>

        </S.Wrapper>
    )
}