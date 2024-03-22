import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import * as S from "./Main.styles";

export default function MainPage(): JSX.Element {
    const router = useRouter();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isFlashing, setIsFlashing] = useState(false);


    const images = [
        '/greenbottleindex0.png',
        '/dragsearch.png',
        '/setradius.png',
        '/sortopt.png',
        '/myloc.png',
        '/help.png',
        '/review.png',
        '/start.png',
    ];

    const onClickMoveToLogin = () => {
        router.push("../login");
    };

    const onClickMoveToSignup = () => {
        router.push("../signup");
    };

    const onClickMoveToMainpage = (): void => {
        router.push("../map");
    };

    const nextSlide = () => {
        setIsTransitioning(true); // 트랜지션 시작
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setIsTransitioning(false); // 트랜지션 종료
        }, 500); // 이미지 전환 후 트랜지션 종료
    };

    const prevSlide = () => {
        setIsTransitioning(true); // 트랜지션 시작
        setTimeout(() => {
            if (currentImageIndex !== 0) {
                setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            }
            setIsTransitioning(false); // 트랜지션 종료
        }, 500); // 이미지 전환 후 트랜지션 종료
    };

    useEffect(() => {
        if (currentImageIndex === images.length - 1) {
            setIsFlashing(true);
            const flashingInterval = setInterval(() => {
                setIsFlashing((prevFlashing) => !prevFlashing);
            }, 1000); // 1초마다 버튼이 점멸하도록 설정

            return () => clearInterval(flashingInterval); // 컴포넌트가 언마운트될 때 인터벌 클리어
        } else {
            setIsFlashing(false); // 마지막 이미지가 아니면 점멸 중지
        }
    }, [currentImageIndex]);

    return (
        <>
            <S.Wrapper>
                <S.Logo onClick={onClickMoveToMainpage} src="/GreenBottleLogo1.png"></S.Logo>
                <S.MainWebNav>
                <S.LoginButton onClick={onClickMoveToLogin} flashing={isFlashing}>로그인</S.LoginButton>
                <S.SignUpButton onClick={onClickMoveToSignup} flashing={isFlashing}>회원가입</S.SignUpButton>
                </S.MainWebNav>
                <S.CarouselWrapper>
                    <S.CarouselImgWrapper isTransitioning={isTransitioning}>
                        <S.CarouselImg src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`}/>
                    </S.CarouselImgWrapper>
                    <S.CarouselButtonWrapper>
                        <S.CarouselPrevButton onClick={prevSlide}>◀</S.CarouselPrevButton>
                        <S.CarouselNextButton onClick={nextSlide}>▶</S.CarouselNextButton>
                    </S.CarouselButtonWrapper>
                </S.CarouselWrapper>
                <S.MainMobNav>
                    <S.MobLoginButton onClick={onClickMoveToLogin} flashing={isFlashing}>시작하기</S.MobLoginButton>
                    <S.MobSignUpButton onClick={onClickMoveToSignup} flashing={isFlashing}>아직 회원이 아니신가요?</S.MobSignUpButton>
                </S.MainMobNav>
            </S.Wrapper>
        </>
    );
}