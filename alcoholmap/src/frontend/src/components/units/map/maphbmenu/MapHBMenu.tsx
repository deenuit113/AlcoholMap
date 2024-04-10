import { IHBMenuProps } from "./MapHBMenu.types"
import * as S from "./MapHBMenu.styles";
import { useRouter } from "next/router";

export default function MapHBMenu (props: IHBMenuProps): JSX.Element {
    const router = useRouter();

    return(
        <>
            {props.isHBMenuOpen && (
                    <S.HBMenuWrapper>
                        <S.MyInfoWrapper>
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
                        </S.MyInfoWrapper>
                        <S.Line/>
                        <S.HBMenuList>
                            <S.HBMenuListEl onClick={props.onClickMoveToKorea}>지역별 Top 10 (전국)</S.HBMenuListEl>
                            <S.HBMenuListEl onClick={props.onClickMoveToSeoul}>지역별 Top 10 (서울)</S.HBMenuListEl>
                        </S.HBMenuList>
                    </S.HBMenuWrapper>
            )}
        </>
    )
}