export interface IMainUIProps {
    mobImages:string[];
    webImages:string[];
    currentImageIndex:number;
    isFlashing:boolean;
    isTransitioning:boolean;
    onClickMoveToMainpage: () => void;
    onClickMoveToLogin: () => void;
    onClickMoveToSignup: () => void;
    prevSlide: () => void;
    nextSlide: () => void;
}