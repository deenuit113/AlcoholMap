import * as S from "./Main.styles";
import { IMainUIProps } from "./Main.types";

export default function MainUI( props: IMainUIProps ): JSX.Element {
    return (
        <>
            <S.Wrapper>
                <S.Logo onClick={props.onClickMoveToMainpage} src="/GreenBottleLogo1.png"></S.Logo>
                <S.MainWebNav>
                <S.LoginButton onClick={props.onClickMoveToLogin} flashing={props.isFlashing}>로그인</S.LoginButton>
                <S.SignUpButton onClick={props.onClickMoveToSignup} flashing={props.isFlashing}>회원가입</S.SignUpButton>
                </S.MainWebNav>
                <S.CarouselWrapper>
                    <S.CarouselImgWrapper isTransitioning={props.isTransitioning}>
                        <S.MobCarouselImg src={props.mobImages[props.currentImageIndex]} alt={`Image ${props.currentImageIndex + 1}`}/>
                        <S.WebCarouselImg src={props.webImages[props.currentImageIndex]} alt={`Image ${props.currentImageIndex + 1}`}/>
                    </S.CarouselImgWrapper>
                    <S.CarouselButtonWrapper>
                        <S.CarouselPrevButton onClick={props.prevSlide}>◀</S.CarouselPrevButton>
                        <S.CarouselNextButton onClick={props.nextSlide}>▶</S.CarouselNextButton>
                    </S.CarouselButtonWrapper>
                </S.CarouselWrapper>
                <S.MainMobNav>
                    <S.MobLoginButton onClick={props.onClickMoveToLogin} flashing={props.isFlashing}>시작하기</S.MobLoginButton>
                    <S.MobSignUpButton onClick={props.onClickMoveToSignup} flashing={props.isFlashing}>아직 회원이 아니신가요?</S.MobSignUpButton>
                </S.MainMobNav>
            </S.Wrapper>
        </>
  );
}
