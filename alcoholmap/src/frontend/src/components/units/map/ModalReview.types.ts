
// ModalReview presenter interface
export interface IModalReviewUIProps {
    isloading: boolean;
    data: {
        userId: string;
        review: string;
    }[];
}