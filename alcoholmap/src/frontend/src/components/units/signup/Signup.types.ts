import { SubmitHandler, UseFormReturn } from "react-hook-form";

// Signup container interface
export interface SignupForm {
    email: string;
    password: string;
    nickname: string;
    capaSoju: number;
}

type PickFormMethods = Pick<UseFormReturn<SignupForm>, 'register' | 'handleSubmit' | 'formState'>;

// Signup presenter interface
export interface SignupUIProps {
    formMethods: PickFormMethods;
    onSubmit: SubmitHandler<SignupForm>;
    onClickMoveToMainpage: () => void;
}