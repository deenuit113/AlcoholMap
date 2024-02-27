import * as S from "./Map.styles";

export default function MapUI(props) {
    return(
            <S.Wrapper>
                <S.AMHeader>
                    <S.AMTitle onClick={props.onClickMoveToReload}>AlcoholMap</S.AMTitle>
                </S.AMHeader>
                <S.MapNav>
                    <S.LoginButton onClick={props.onClickMoveToLogin}>로그인</S.LoginButton>
                    <S.SignupButton onClick={props.onClickMoveToSignup}>회원가입</S.SignupButton>
                    <S.MypageButton onClick={props.onClickMoveToMypage}>마이페이지</S.MypageButton>
                </S.MapNav>
                <S.MapWrap>
                    <S.MapMain id="map"></S.MapMain>
                    <S.MenuWrap id="menu_wrap" className="bg_white">
                        <S.SearchWrapper>
                        <S.Form onSubmit={props.searchPlaces}>
                            키워드 : 
                            <S.InputKeyword type="text" value={props.keyword} id="keyword" size="15" onChange={props.onChangeKeyword}/>
                            <S.SearchButton type="submit">검색하기</S.SearchButton>
                        </S.Form>
                        </S.SearchWrapper>
                        <hr />
                        <S.PlacesList id="placesList"></S.PlacesList>
                        <S.Pagination id="pagination"></S.Pagination>
                    </S.MenuWrap>
                </S.MapWrap>
            </S.Wrapper>
    )
}