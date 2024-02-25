import * as S from "./Mypage.styles"

export default function MypageUI(props) {
    return(
        <S.Wrapper>
            <S.Logo></S.Logo>
            <S.Title>알콜맵 마이페이지</S.Title>
            <S.EmailWrapper>
                <S.Smalltitle>ID</S.Smalltitle>
                <S.Label>kirakinseyoung@gmail.com</S.Label>
            </S.EmailWrapper>
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

