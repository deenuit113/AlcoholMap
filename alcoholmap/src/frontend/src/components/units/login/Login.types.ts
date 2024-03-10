import { ChangeEvent } from "react";

// Login container interface

export interface LoginForm {
    email: string;
    password: string;
}

// Login presenter interface

export interface LoginUIProps {
    loginForm: {
        email: string;
        password: string;
    };
    onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
    onClickMoveToMainpage: () => void;
    onClickMoveToSignup: () => void;
    onClickSubmit: () => void;
    emailError: string;
    pwError: string;
}