import * as S from "./Mypage.styles"
import { ChangeEvent } from "react";
import { MypageUIProps } from "./Mypage.types";



export default function MypageUI(props: MypageUIProps): JSX.Element {
    return(
        <S.Wrapper>
            <S.Logo onClick={props.onClickMoveToMainpage}>AlcoholMap</S.Logo>
            <S.Title>마이페이지</S.Title>
            <S.UserInfoWrapper>
                <S.Smalltitle>이메일</S.Smalltitle>
                {props.isEdit ? (
                    <input
                        type="text"
                        name="userEmail"
                        value={props.userData.userEmail}
                        onChange={props.onChangeInput}
                    />
                ) : (
                    <S.UserInfo>{props.userData.userEmail}</S.UserInfo>
                )}
                <S.Smalltitle>주량</S.Smalltitle>
                {props.isEdit ? (
                    <input
                        type="number"
                        name="capaSoju"
                        value={props.userData.capaSoju}
                        onChange={props.onChangeInput}
                    />
                ) : (
                    <S.UserInfo>{props.userData.capaSoju}</S.UserInfo>
                )}
                <S.Smalltitle>닉네임</S.Smalltitle>
                {props.isEdit ? (
                    <input
                        type="text"
                        name="nickname"
                        value={props.userData.nickname}
                        onChange={props.onChangeInput}
                    />
                ) : (
                    <S.UserInfo>{props.userData.nickname}</S.UserInfo>
                )}
            </S.UserInfoWrapper>
            <S.WishListWrapper>
                <S.Smalltitle>찜목록</S.Smalltitle>
                <S.Label>찜한 가게들의 리스트입니다.</S.Label>
            </S.WishListWrapper>
            <S.RatedListWrapper>
                <S.Smalltitle>평가한 가게</S.Smalltitle>
                <S.Label>평가한 가게들의 리스트입니다.</S.Label>
            </S.RatedListWrapper>
            <S.ButtonWrapper>
                {props.isEdit ? (
                    <S.ConfirmButton onClick={props.onClickEditSubmit}>확인</S.ConfirmButton>
                ) : (
                    <S.EditButton onClick={props.onClickEdit}>수정</S.EditButton>
                )}
            </S.ButtonWrapper>
        </S.Wrapper>
    )
}

