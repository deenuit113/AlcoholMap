// ModalReview container interface
export interface IModalReviewProps{
    selectedPlace: any;
}

// ModalReview presenter interface
export interface IModalReviewUIProps {
    isloading: boolean;
    data: {
        userId: string;
        review: string;
        starRate: number;
    }[];
}