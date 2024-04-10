export interface UserData {
    nickname: string;
    capaSoju: number;
    profilePicture: string;
    isFollow: boolean;
    reviews: {
        review: string;
        rating: number;
        name: string;
        address: string;
    }[];
    bookmarks: {
        name: string;
        address: string;
    }[];
}

export interface UserInfoPageUIProps {
    userId: string;
    userData: UserData | null;
    onClickMoveToMainPage: () => void;
    onClickFollow: () => void;
}