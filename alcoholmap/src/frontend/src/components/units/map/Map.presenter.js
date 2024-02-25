import * as S from "./Map.styles";

export default function MapUI(props) {
    return(
        <>
        <script 
                type="text/javascript" 
                src="//dapi.kakao.com/v2/maps/sdk.js?appkey=874eea7b48b7810e4c254737d3892e8f"
        ></script>
        <S.Wrapper>
            <S.AMHeader>
                <S.AMTitle onClick={props.onClickMoveToReload}>AlcoholMap</S.AMTitle>
            </S.AMHeader>
            <S.MapNav>
                <S.LoginButton onClick={props.onClickMoveToLogin}>로그인</S.LoginButton>
                <S.SignupButton onClick={props.onClickMoveToSignup}>회원가입</S.SignupButton>
                <S.MypageButton onClick={props.onClickMoveToMypage}>마이페이지</S.MypageButton>
            </S.MapNav>
            <S.MapMain id="map"></S.MapMain>
        </S.Wrapper>
        </>
    )
}