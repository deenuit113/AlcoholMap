import * as yup from 'yup';

// 이메일 정규표현식
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
// 비밀번호 정규표현식 최소 8자 이상, 최소 하나의 알파벳 및 하나의 숫자, 특수문자
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()-_+=]{8,}$/;

export const loginSchema = yup.object({
    email: yup
        .string()
        .required('이메일을 입력하세요.')
        .matches(emailRegex, '올바른 이메일 형식이 아닙니다.1'),
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

export const mypageEditSchema = (currentEmail: string, currentPassword: string, currentNickname: string, currentCapaSoju: number) => yup.object({
    userEmail: yup
        .string()
        .required('이메일을 입력하세요')
        .matches(emailRegex, '올바른 이메일 형식이 아닙니다.')
        .test('unique-password', '현재 이메일과 동일합니다. 다른 이메일로 시도하세요.', function(value) {
            // 수정 버튼을 눌렀을 때 검사하고, 값이 같으면 에러 메시지를 반환
            return value !== currentEmail || this.createError({ message: '현재 이메일과 동일합니다. 다른 이메일로 시도하세요.' });
        }),
    password: yup
        .string()
        .required('비밀번호를 입력하세요')
        .matches(passwordRegex, '비밀번호는 최소 8자 이상, 최소 하나의 알파벳 및 하나의 숫자, 특수문자를 포함해야 합니다.')
        .test('unique-password', '현재 비밀번호와 동일합니다. 다른 비밀번호로 시도하세요.', function(value) {
            // 수정 버튼을 눌렀을 때 검사하고, 값이 같으면 에러 메시지를 반환
            return value !== currentPassword || this.createError({ message: '현재 비밀번호와 동일합니다. 다른 비밀번호로 시도하세요.' });
        }),
    nickname: yup
        .string()
        .required('닉네임을 입력하세요.')
        .test('unique-nickname', '현재 닉네임과 동일합니다. 다른 닉네임으로 시도하세요.', function(value) {
            // 수정 버튼을 눌렀을 때 검사하고, 값이 같으면 에러 메시지를 반환
            return value !== currentNickname || this.createError({ message: '현재 닉네임과 동일합니다. 다른 닉네임으로 시도하세요.' });
        }),

    capaSoju: yup
        .number()
        .required('주량을 입력하세요.')
        .integer('자연수를 입력하세요.')
        .typeError('자연수를 입력하세요.')
        .positive('자연수를 입력하세요.')
        .test('unique-capaSoju', '현재 주량과 동일합니다. 다른 값을 넣어주세요.', function(value) {
            // 수정 버튼을 눌렀을 때 검사하고, 값이 같으면 에러 메시지를 반환
            return value !== currentCapaSoju || this.createError({ message: '현재 주량과 동일합니다. 다른 값을 넣어주세요.' });
        }),
});