import { ChangeEvent } from "react";

export interface FollowListPageUIProps {
    isloading: boolean;
    data: {
        userId: string;
        userName: string;
        profilePicture: string;
    }[];
    listName: string;
    onClickMoveToMainPage: () => void;
    onClickMoveToUserInfo: (userId: string) => void;
    onChangeSearchUserByName: (event: ChangeEvent<HTMLInputElement>) => void;
}