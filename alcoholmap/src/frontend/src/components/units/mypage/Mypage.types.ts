import { ChangeEvent } from "react";

// Mypage container interface
export interface userData {
    userEmail: string;
    capaSoju: number;
    nickname: string;
}

// Mypage presenter interface
export interface MypageUIProps {
    isEdit: boolean;
    userData: {
        userEmail: string;
        capaSoju: number;
        nickname: string;
    };
    onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
    onClickEdit: () => void;
    onClickMoveToMainpage: () => void;
    onClickEditSubmit: () => void;
}