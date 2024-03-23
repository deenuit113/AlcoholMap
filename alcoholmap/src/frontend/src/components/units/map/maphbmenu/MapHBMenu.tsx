import { IHBMenuProps } from "./MapHBMenu.types"
import * as S from "./MapHBMenu.styles";

export default function MapHBMenu (props: IHBMenuProps): JSX.Element {
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
                        <S.HBMenuList>
                            <S.HBMenuListEl></S.HBMenuListEl>
                        </S.HBMenuList>
                    </S.HBMenuWrapper>
            )}
        </>
    )
}