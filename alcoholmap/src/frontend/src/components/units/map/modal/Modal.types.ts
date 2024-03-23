import { ChangeEvent, MouseEvent } from 'react';

// Modal Container interface
export interface IModalProps{
    selectedPlace: any;
    closeModal: () => void;
    isLoggedIn: boolean;
    isOpen: boolean;
}

export interface ReviewForm {
    placeId: number;
    content: string;
    starRate: number;
}

// Modal presenter interface

export interface IModalUIProps {
    modalRef: React.RefObject<HTMLDivElement>;
    selectedPlace: any;
    closeModal: () => void;
    isLoggedIn: boolean;
    reviewForm: any;
    stars: number[];
    rvError: string;
    starError: string;
    onChangeReviewForm: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onClickReviewFormCheck: () => void;
    onClickWishList: () => void;
    onClickCloseModal: (event: CustomEvent<MouseEvent>) => void;
}