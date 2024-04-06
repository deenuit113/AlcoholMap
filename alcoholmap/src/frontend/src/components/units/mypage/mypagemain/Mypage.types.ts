import { SubmitHandler, UseFormReturn } from "react-hook-form"

// Mypage container interface
export interface userData {
    userEmail: string;
    password: string;
    capaSoju: number;
    nickname: string;
}

type PickFormMethods = Pick<UseFormReturn<userData>, 'register' | 'handleSubmit' | 'formState'>;

// Mypage presenter interface
export interface IMypageUIProps {
    userInfo: userData;
    profilePic: string;
    isEdit: boolean;
    isPicEdit: boolean;
    formMethods: PickFormMethods;
    onSubmit: SubmitHandler<userData>;
    onClickEdit: () => void;
    onClickMoveToMainpage: () => void;
    setIsPicEdit: (value: boolean) => void;
}