import {useState} from 'react'
import { Wrapper,
         Title,
         Smalltitle,
         Logo,
         EmailWrapper,
         WishListWrapper,
         RatedListWrapper,
         EditButton,
         Label} from '../../styles/mypageStyle'


/*  수정 버튼 누를 시에 수정페이지로 이동
    수정 내용 비밀번호?
    찜 - 최근 5개 ~ 누르면 찜목록 페이지로 이동
    내가 평가한 가게 - 최근 5개 ~ 누르면 평가한 가게 리스트로 이동
    이메일 받아오기
*/

export default function MyPagePage(){

    return (
        <Wrapper>
            <Logo></Logo>
            <Title>알콜맵 마이페이지</Title>
            <EmailWrapper>
                <Smalltitle>ID</Smalltitle>
                <Label>kirakinseyoung@gmail.com</Label>
            </EmailWrapper>
            <WishListWrapper>
                <Smalltitle>찜목록</Smalltitle>
                <Label>찜한 가게들의 리스트입니다.</Label>
            </WishListWrapper>
            <RatedListWrapper>
                <Smalltitle>평가한 가게</Smalltitle>
                <Label>평가한 가게들의 리스트입니다.</Label>
            </RatedListWrapper>
            <EditButton>수정</EditButton>
        </Wrapper>
        
    )
}