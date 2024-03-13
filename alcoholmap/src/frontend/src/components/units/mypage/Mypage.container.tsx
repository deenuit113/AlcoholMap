import { useState, useEffect, ChangeEvent } from 'react'
import MypageUI from './Mypage.presenter'
import axios from 'axios';
import { useRouter } from 'next/router'
import jwt from 'jsonwebtoken';
import { userData } from './Mypage.types'
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { mypageEditSchema } from "../../../commons/yupSchemas";

/*  수정 버튼 누를 시에 수정페이지로 이동
    수정 내용 비밀번호?
    찜 - 최근 5개 ~ 누르면 찜목록 페이지로 이동
    내가 평가한 가게 - 최근 5개 ~ 누르면 평가한 가게 리스트로 이동
    이메일 받아오기
*/

const getUserInfoApiUrl = '/users/profile/${userEmail}';
const editUserInfoApiUrl = '/users/profile';


export default function MyPagePage(){
    const router = useRouter()
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [userInfo, setUserInfo] = useState<userData>({
        userEmail: '',
        password: '',
        nickname: '',
        capaSoju: 0,
        // 찜한가게 (가게 이름, 위도 경도 값)
        // 평가한 가게 (가게 이름, 위도 경도 값, 평점, 리뷰)
    });

    const { register, handleSubmit, formState } = useForm<userData>({
        mode: 'onChange',
        resolver: yupResolver(mypageEditSchema),
        reValidateMode: 'onChange',
        defaultValues: {
          userEmail: userInfo.userEmail,
          password: userInfo.password,
          nickname: userInfo.nickname,
          capaSoju: userInfo.capaSoju,
        },
        shouldFocusError: true,
        shouldUnregister: true,
    });

    useEffect(() => {

        /*setUserInfo({
            ...userInfo,
            userEmail: "kimseyoung@gmail.com",
            password: "kimseyoung123",
            nickname: "kimtax0",
            capaSoju: 3,
            
        });*/
        
        checkIsLoggedIn();
        if(!isLoggedIn){
            alert("로그인 후 이용해주세요");
            router.push('../login');
        } else{
            fetchData();
        }
        

    }, [isEdit]);

    const fetchData = async () => { // 사용자 정보 받아오기
        try {
            // 토큰 decode
            const token = localStorage.getItem('jwtToken');
            const decodedToken = jwt.decode(token);

            // decode된 토큰에서 사용자 이메일 추출
            const userEmail = decodedToken.email;

            // API 호출
            const response = await axios.get(getUserInfoApiUrl, {
                headers: {
                    Authorization: `Bearer ${token}}`,
                },
                params: {
                    email: userEmail,
                },
            });
            // 가져온 데이터를 상태에 저장
            setUserInfo(response.data);

            console.log('User data:', response.data);
        } catch (error) {
            console.log('Error fetching user data:', error);
        }
    };

    const checkIsLoggedIn = async () => { //로그인 확인 함수
        // 로컬 스토리지에서 토큰 가져오기
        const token = localStorage.getItem('jwtToken');

        // 토큰이 없으면 처리
        if (!token) {
            console.error("Token not found in local storage");
            setLoggedIn(true);
        }

        // API 요청 헤더에 토큰 추가
        /*const headers = {
            Authorization: `Bearer ${token}`,
            Content-Type: 'application/json',
            // 다른 헤더도 필요한 경우 추가
        };*/
        setLoggedIn(true);
    };

    const onSubmit: SubmitHandler<userData> = (data: userData) => {
        // 로그인 처리 로직 추가
        console.log(data);
        setIsEdit(false);
        onSendEditForm(data);
    };

    const onSendEditForm = async (editForm: userData) => {
        const jsonEditForm = JSON.stringify(editForm);
        const token = localStorage.getItem('jwtToken');
        console.log(jsonEditForm)
        try {
            const response = await axios.put(editUserInfoApiUrl, jsonEditForm, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}}`,
                },
            });
            console.log('Response from server:', response.data);
            alert("회원정보 수정 완료.")
        } catch (error){
            console.error('error submitting data:', error);
            alert("회원정보 수정 실패.")
        }
    };

    const onClickEdit = (): void => { //수정한 내용 제출
        setIsEdit(true);
    }

    const onClickMoveToMainpage = (): void => { // 메인페이지로 이동
        router.push("../map")
    }
    console.log(userInfo);

    return (
        <MypageUI
            userInfo = {userInfo}
            isEdit = {isEdit}
            formMethods={{ register, handleSubmit, formState }}
            onSubmit={onSubmit}
            onClickEdit={onClickEdit}
            onClickMoveToMainpage = {onClickMoveToMainpage}
        />
        
    )
}