import { useRouter } from 'next/router';
import MainUI from "./Main.presenter"
import { useCarouselImg } from '../../../hooks/main/useCarouselImg';

export default function MainPage(): JSX.Element {
    const router = useRouter();
    const { mobImages, webImages, currentImageIndex, isFlashing, isTransitioning, nextSlide, prevSlide } = useCarouselImg();

    const onClickMoveToLogin = (): void => {
        router.push("../login");
    };

    const onClickMoveToSignup = (): void => {
        router.push("../signup");
    };

    const onClickMoveToMainpage = (): void => {
        router.push("../map");
    };

    return (
        <>
            <MainUI
                mobImages={mobImages}
                webImages={webImages}
                currentImageIndex={currentImageIndex}
                isFlashing={isFlashing}
                isTransitioning={isTransitioning}
                onClickMoveToMainpage={onClickMoveToMainpage}
                onClickMoveToLogin={onClickMoveToLogin}
                onClickMoveToSignup={onClickMoveToSignup}
                prevSlide={prevSlide}
                nextSlide={nextSlide}
            />
        </>
    );
}