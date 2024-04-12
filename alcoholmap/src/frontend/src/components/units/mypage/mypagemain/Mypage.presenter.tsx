import * as S from "./Mypage.styles"
import { userData, IMypageUIProps } from "./Mypage.types";
import WishListSlider from "../../../commons/wishlist/WishListSlider.container";
import RatedPlaceSlider from "../../../commons/ratedplace/RatedPlaceSlider.container";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function MypageUI({ formMethods, onSubmit, ...props }: IMypageUIProps): JSX.Element {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = formMethods;
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleProfilePictureChange = (event: any) => {
        const selectedFile = event.target.files[0];
        const formData = new FormData();
        formData.append('profilePicture', selectedFile);
        console.log(formData.get('profilePicture'));
        axios.post('/uploadProfilePicture', formData)
        .then(response => {
            // 응답 처리
            console.log(response.data); // 서버로부터의 응답 데이터 출력
            console.log('Profile picture uploaded successfully');
            props.setIsPicEdit(true);
        })
        .catch(error => {
            // 오류 처리
            console.error('Error uploading profile picture:', error);
        });
    };

    const onClickToggleForm = () => {
        setIsFormOpen(prevState => !prevState);
    };

    const onClickMoveToFollower = () => {
        router.push({
            pathname: './mypage/follower',
            query: {
                who: `follower`
            }
        })
    };

    const onClickMoveToFollowing = () => {
        router.push({
            pathname: './mypage/following',
            query: {
                who: `following`
            }
        })
    };

    return(
        <>
            <S.Wrapper>
                <S.Logo onClick={props.onClickMoveToMainpage} src="/GreenBottleLogo1.png"></S.Logo>
                <S.Title>마이페이지</S.Title>
                <S.ProfilePicWrapper>
                    <S.ProfilePic src={props.profilePic} alt="프로필 사진" />
                </S.ProfilePicWrapper>
                <S.ProfilePicEditButton htmlFor="fileInput">사진 선택</S.ProfilePicEditButton>
                <input type="file" id="fileInput" accept="image/*" style={{ display: 'none' }} onChange={handleProfilePictureChange} />
                <S.ToggleFormButton onClick={onClickToggleForm}>{isFormOpen ? '▲ 접기 ▲' : '▼ 내 정보 ▼'}</S.ToggleFormButton>
                
                <S.UserInfoForm isOpen={isFormOpen} onSubmit= {handleSubmit(onSubmit)}>
                    <S.InfoWrapper>
                        <S.InfoLabel>이메일</S.InfoLabel>
                        {props.isEdit ? (
                        <S.InputInfo
                            type="text"
                            {...register('userEmail',{value:props.userInfo.userEmail})}
                        />
                    ) : (
                        <S.UserInfo>{props.userInfo.userEmail}</S.UserInfo>
                        )}
                        {errors?.userEmail && <S.ErrorMsgWrapper>{errors.userEmail.message}</S.ErrorMsgWrapper>}
                    </S.InfoWrapper>

                    <S.InfoWrapper>
                        <S.InfoLabel>비밀번호</S.InfoLabel>
                        {props.isEdit ? (
                        <S.InputInfo
                            type="password"
                            
                            {...register('password',{value:props.userInfo.password})}
                        />
                    ) : (
                        <S.UserInfo>{props.userInfo.password}</S.UserInfo>
                        )}
                        {errors?.password && <S.ErrorMsgWrapper>{errors.password.message}</S.ErrorMsgWrapper>}
                    </S.InfoWrapper>

                    <S.InfoWrapper>
                        <S.InfoLabel>닉네임</S.InfoLabel>
                        {props.isEdit ? (
                        <S.InputInfo
                            type="text"
                            {...register('nickname',{value:props.userInfo.nickname})}
                        />
                    ) : (
                        <S.UserInfo>{props.userInfo.nickname}</S.UserInfo>
                        )}
                        {errors?.nickname && <S.ErrorMsgWrapper>{errors.nickname.message}</S.ErrorMsgWrapper>}
                    </S.InfoWrapper>

                    <S.InfoWrapper>
                        <S.InfoLabel>주량</S.InfoLabel>
                        {props.isEdit ? (
                        <S.InputInfo
                            type="text"
                            {...register('capaSoju',{value:props.userInfo.capaSoju})}
                        />
                    ) : (
                        <S.UserInfo>{props.userInfo.capaSoju}</S.UserInfo>
                        )}
                        {errors?.capaSoju && <S.ErrorMsgWrapper>{errors.capaSoju.message}</S.ErrorMsgWrapper>}
                    </S.InfoWrapper>
                    <S.ButtonWrapper>
                        {props.isEdit ? (
                            <S.ConfirmButton type="submit">확인</S.ConfirmButton>
                        ) : (
                            <S.EditButton onClick={props.onClickEdit}>수정</S.EditButton>
                        )}
                    </S.ButtonWrapper>
                </S.UserInfoForm>
                <S.FollowWrapper>
                    <S.FollowerWrapper onClick={onClickMoveToFollower}>
                        <S.InfoTitle>팔로워</S.InfoTitle>
                        <S.Label>{props.follower}</S.Label>
                    </S.FollowerWrapper>
                    <S.FollowingWrapper onClick={onClickMoveToFollowing}>
                        <S.InfoTitle>팔로잉</S.InfoTitle>
                        <S.Label>{props.following}</S.Label>
                    </S.FollowingWrapper>
                </S.FollowWrapper>
                <S.WishListWrapper>
                    <S.InfoTitle>찜목록</S.InfoTitle>
                    <S.Label>찜한 가게들의 리스트입니다.</S.Label>
                    <S.SliderWrapper>
                        <WishListSlider
                            isMine={props.isMine}
                            userId={""}
                        />
                    </S.SliderWrapper>
                </S.WishListWrapper>
                <S.RatedListWrapper>
                    <S.InfoTitle>평가한 가게</S.InfoTitle>
                    <S.Label>평가한 가게들의 리스트입니다.</S.Label>
                    <S.SliderWrapper>
                        <RatedPlaceSlider
                            isMine={props.isMine}
                            userId={""}
                        />
                    </S.SliderWrapper>
                </S.RatedListWrapper>
            </S.Wrapper>
        </>
    )
}

