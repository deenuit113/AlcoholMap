import * as yup from 'yup';

// 이메일 정규표현식
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
// 비밀번호 정규표현식 최소 8자 이상, 최소 하나의 알파벳 및 하나의 숫자, 특수문자
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()-_+=]{8,}$/;

export const loginSchema = yup.object({
    email: yup
        .string()
        .required('이메일을 입력하세요.')
        .matches(emailRegex, '올바른 이메일 형식이 아닙니다.'),
    password: yup
        .string()
        .required('비밀번호를 입력하세요.'),
});

export const signupSchema = yup.object({
    email: yup
        .string()
        .required('이메일을 입력하세요')
        .matches(emailRegex, '올바른 이메일 형식이 아닙니다.'),
    password: yup
        .string()
        .required('비밀번호를 입력하세요.')
        .matches(passwordRegex, '비밀번호는 최소 8자 이상, 최소 하나의 알파벳 및 하나의 숫자, 특수문자를 포함해야 합니다.'),
    nickname: yup
        .string()
        .required('닉네임를 입력하세요.'),
    capaSoju: yup
        .number()
        .required('주량를 입력하세요.')
        .integer('자연수를 입력하세요.')
        .typeError('자연수를 입력하세요.')
        .positive('자연수를 입력하세요.'),
});

export const mypageEditSchema = yup.object({
    userEmail: yup
        .string()
        .required('이메일을 입력하세요')
        .matches(emailRegex, '올바른 이메일 형식이 아닙니다.'),
    password: yup
        .string()
        .required('비밀번호를 입력하세요')
        .matches(passwordRegex, '비밀번호는 최소 8자 이상, 최소 하나의 알파벳 및 하나의 숫자, 특수문자를 포함해야 합니다.'),
    nickname: yup
        .string()
        .required('닉네임을 입력하세요.'),
    capaSoju: yup
        .number()
        .required('주량을 입력하세요.')
        .integer('자연수를 입력하세요.')
        .typeError('자연수를 입력하세요.')
        .positive('자연수를 입력하세요.'),
});