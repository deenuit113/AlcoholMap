import { ChangeEvent } from "react";

// Signup container interface
export interface SignupForm {
    email: string;
    password: string;
    nickname: string;
    capaSoju: number;
}

// Signup presenter interface
export interface SignupUIProps {
    emailError: string;
    pwError: string;
    nnError: string;
    capaError: string;
    onClickSubmit: () => void;
    onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
    onClickMoveToMainpage: () => void;
    submitSignupForm: (signupForm: SignupForm) => void;
    signupForm: {
        email: string;
        password: string;
        nickname: string;
        capaSoju: number;
    };
}