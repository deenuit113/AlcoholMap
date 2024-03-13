import { SubmitHandler, UseFormReturn } from "react-hook-form";
// Login container interface

export interface LoginForm {
    email: string;
    password: string;
}

// Login presenter interface
type PickFormMethods = Pick<UseFormReturn<LoginForm>, 'register' | 'handleSubmit' | 'formState'>;

export interface LoginUIProps {
    formMethods: PickFormMethods;
    onSubmit: SubmitHandler<LoginForm>;
    onClickMoveToMainpage: () => void;
    onClickMoveToSignup: () => void;
}
