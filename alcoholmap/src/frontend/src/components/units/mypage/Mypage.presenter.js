import * as S from "./Mypage.styles"

export default function MypageUI(props) {
    return(
        <S.Wrapper>
            <S.Logo onClick={props.onClickMoveToMainpage}>AlcoholMap</S.Logo>
            <S.Title>마이페이지</S.Title>
            <S.UserInfoWrapper>
                <S.Smalltitle>이메일</S.Smalltitle>
                <S.UserInfo>{props.userData.userEmail}</S.UserInfo>
                <S.Smalltitle>주량</S.Smalltitle>
                <S.UserInfo>{props.userData.capaSoju}</S.UserInfo>
                <S.Smalltitle>닉네임</S.Smalltitle>
                <S.UserInfo>{props.userData.nickname}</S.UserInfo>
            </S.UserInfoWrapper>
            <S.WishListWrapper>
                <S.Smalltitle>찜목록</S.Smalltitle>
                <S.Label>찜한 가게들의 리스트입니다.</S.Label>
            </S.WishListWrapper>
            <S.RatedListWrapper>
                <S.Smalltitle>평가한 가게</S.Smalltitle>
                <S.Label>평가한 가게들의 리스트입니다.</S.Label>
            </S.RatedListWrapper>
            <S.EditButton>수정</S.EditButton>
        </S.Wrapper>
    )
}

