import * as S from "./Mypage.styles"
import { userData, MypageUIProps } from "./Mypage.types";
import WishListSlider from "./WishListSlider";



export default function MypageUI({ formMethods, onSubmit, ...props }: MypageUIProps): JSX.Element {
    const { register, handleSubmit, formState: { errors } } = formMethods;
    const handleProfilePictureChange = (event: any) => {
        // 선택한 파일 처리
        const selectedFile = event.target.files[0];
        // 여기에서 파일 업로드 또는 다른 처리를 수행합니다.
        // 예: 서버에 업로드하거나 클라이언트 측에서 처리하거나 로컬 스토리지에 저장합니다.
    };
    return(
        <>
            <S.Wrapper>
                <S.Logo onClick={props.onClickMoveToMainpage} src="/GreenBottleLogo1.png"></S.Logo>
                <S.Title>마이페이지</S.Title>
                <S.ProfilePicWrapper>
                    <S.ProfilePic src={props.profilePic} alt="프로필 사진" />
                </S.ProfilePicWrapper>
                {props.isPicEdit && (
                        <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
                    )}
                <S.ProfilePicEditButton onClick={props.onClickPicEdit}>사진 수정</S.ProfilePicEditButton>
                <S.UserInfoForm onSubmit= {handleSubmit(onSubmit)}>
                    <S.InfoWrapper>
                        <S.InfoLabel>이메일: </S.InfoLabel>
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
                        <S.InfoLabel>비밀번호: </S.InfoLabel>
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
                        <S.InfoLabel>닉네임: </S.InfoLabel>
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
                        <S.InfoLabel>주량: </S.InfoLabel>
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
                </S.RatedListWrapper>   
            </S.Wrapper>
        </>
    )
}

