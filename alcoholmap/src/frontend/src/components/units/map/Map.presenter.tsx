import * as S from "./Map.styles";
import { IMapUIProps } from "./Map.types";

export default function MapUI(props: IMapUIProps): JSX.Element{
    return(
            <S.Wrapper>
                <S.AMHeader>
                    <S.AMTitle onClick={props.onClickReload} src="/GreenBottleLogo1.png"></S.AMTitle>
                </S.AMHeader>
                <S.MapNav>
                    {props.isLoggedIn ? (
                        <>
                            <S.MypageButton onClick={props.onClickMoveToMypage}>마이페이지</S.MypageButton>
                            <S.LogoutButton onClick={props.onClickLogout}> 로그아웃</S.LogoutButton>
                        </>
                    ) : (
                        <>
                            <S.LoginButton onClick={props.onClickMoveToLogin}>로그인</S.LoginButton>
                            <S.SignupButton onClick={props.onClickMoveToSignup}>회원가입</S.SignupButton>
                        </>
                    )}
                    
                    
                </S.MapNav>
                <S.MapWrap>
                    <S.MapMain id="map"></S.MapMain>
                    <S.MenuWrap id="menu_wrap" className="bg_white">
                        <S.SearchWrapper>
                        <S.Form onSubmit={props.searchPlaces}>
                            <span> 키워드 :  </span> 
                            <S.InputKeyword type="text" value={props.keyword} id="keyword" onChange={props.onChangeKeyword}/>
                            <S.InputRadius type="number" value={props.radius} onChange={props.onChangeRadius}></S.InputRadius>
                            <span> m</span>
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