import * as S from "./Mypage.styles"

export default function MypageUI(props) {
    return(
        <S.Wrapper>
            <S.Logo></S.Logo>
            <S.Title>알콜맵 마이페이지</S.Title>
            <S.EmailWrapper>
                <S.Smalltitle>ID</S.Smalltitle>
                <S.SmallInput type = "text" name = "email" value = {props.formData.email} onChange={props.handleInputChange}></S.SmallInput>
                <S.Smalltitle>PW</S.Smalltitle>
                <S.SmallInput type = "text" name = "password" value = {props.formData.password} onChange={props.handleInputChange}></S.SmallInput>
                <S.Smalltitle>CAPA</S.Smalltitle>
                <S.SmallInput type = "number" name = "capaSoju" value = {props.formData.capaSoju} onChange={props.handleInputChange}></S.SmallInput>
                <S.EditButton onClick = {props.handleFormSubmit}>버튼</S.EditButton>
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

