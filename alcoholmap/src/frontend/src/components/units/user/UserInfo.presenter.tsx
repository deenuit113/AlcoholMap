import * as S from "./UserInfo.styles"
import { UserInfoPageUIProps } from "./UserInfo.types";
import WishListSlider from "../mypage/wishlist/WishListSlider.container";
import RatedPlaceSlider from "../mypage/ratedplace/RatedPlaceSlider.container";
export default function UserInfoPageUI (props: UserInfoPageUIProps): JSX.Element {
    return (
        <>
            <S.Wrapper>
                <S.Logo onClick={props.onClickMoveToMainPage} src="/GreenBottleLogo1.png"></S.Logo>
                <S.Title>{props.userData?.nickname}</S.Title>
                <S.ProfilePicWrapper>
                    <S.ProfilePic src={props.userData?.profilePicture} alt="프로필 사진" />
                </S.ProfilePicWrapper>
                <S.FollowButton onClick={props.onClickFollow}>
                    {props.userData?.isFollow ? '언팔로우' : '팔로우'}
                </S.FollowButton>
                {props.userData && (
                    <S.UserInfoWrapper>
                        <S.InfoWrapper>
                            <S.UserInfo>{props.userData.nickname}</S.UserInfo>
                            <S.UserInfo>주량: {props.userData.capaSoju}</S.UserInfo>
                        </S.InfoWrapper>
                    </S.UserInfoWrapper>
                )}
                <S.WishListWrapper>
                    <S.InfoTitle>찜목록</S.InfoTitle>
                    <S.Label>찜한 가게들의 리스트입니다.</S.Label>
                    <S.SliderWrapper>
                        <WishListSlider />
                    </S.SliderWrapper>
                </S.WishListWrapper>
                <S.RatedListWrapper>
                    <S.InfoTitle>평가한 가게</S.InfoTitle>
                    <S.Label>평가한 가게들의 리스트입니다.</S.Label>
                    <S.SliderWrapper>
                        <RatedPlaceSlider />
                    </S.SliderWrapper>
                </S.RatedListWrapper>
            </S.Wrapper>
        </>
    );
}