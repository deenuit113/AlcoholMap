import { useState, useEffect, ChangeEvent } from 'react'
import MypageUI from './Mypage.presenter'
import axios from 'axios';
import { useRouter } from 'next/router'
import jwt from 'jsonwebtoken';
import { userData } from './Mypage.types'
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { mypageEditSchema } from "../../../../commons/util/yupSchemas";

const UserInfoApiUrl = '/users/profile';

export default function MyPagePage(){
    const router = useRouter()
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isPicEdit, setIsPicEdit] = useState(false);
    const [profilePic, setProfilePic] = useState("/greensoju.png");
    const [userInfo, setUserInfo] = useState<userData>({
        userEmail: "",
        password: "",
        nickname: "",
        capaSoju: 0,
        // 찜한가게 (가게 이름, 주소 값)
        // 평가한 가게 (가게 이름, 주소 값, 평점, 리뷰)
    });
    // react-hook-form과 yup 이용한 회원정보 폼 관리
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
        checkIsLoggedIn();
        if(!isLoggedIn){
            //alert("로그인 후 이용해주세요");
            //router.push('../login');
        } else{
            getUserInfo();
            setIsPicEdit(false);
            console.log("rerendering");
        }
    }, [isEdit, isPicEdit]);
    // 사용자 정보 받아오기
    const getUserInfo = async () => { 
        try {
            const token = localStorage.getItem('jwtToken');
            const decodedToken = jwt.decode(token);
            // decode된 토큰에서 사용자 이메일 추출
            const userEmail = decodedToken.sub;
            const getUserInfoApiUrl = `${UserInfoApiUrl}/${userEmail}`;
            // API 호출
            const response = await axios.get(getUserInfoApiUrl, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    userEmail: userEmail,
                },
            });
            // 가져온 데이터를 상태에 저장
            setUserInfo(response.data);
            //setProfilePic(response.data.pic);
            console.log('User data:', response.data);
        } catch (error) {
            console.log('Error fetching user data:', error);
        }
    };
    //로그인 확인 함수
    const checkIsLoggedIn = async () => {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
            console.error("Token not found in local storage");
            //alert("마이페이지 조회 실패.")
        }
        setLoggedIn(true);
    };
    // 수정 폼 제출 함수
    const onSubmitEditform: SubmitHandler<userData> = (data: userData) => {
        setIsEdit(false);
        onSendEditForm(data);
    };
    // 수정 폼 서버에 보내는 함수
    const onSendEditForm = async (editForm: userData) => {
        const jsonEditForm = JSON.stringify(editForm);
        const token = localStorage.getItem('jwtToken');
        const editUserInfoApiUrl = UserInfoApiUrl
        console.log(jsonEditForm)
        try {
            const response = await axios.put(editUserInfoApiUrl, jsonEditForm, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('Response from server:', response.data);
            alert("회원정보 수정 완료.")
        } catch (error){
            console.error('error submitting data:', error);
            alert("회원정보 수정 실패.")
        }
    };
    // 수정 버튼
    const onClickEdit = (): void => {
        setIsEdit(true);
    }
    // 메인페이지로 이동
    const onClickMoveToMainpage = (): void => {
        router.push("../map")
    }

    return (
        <MypageUI
            userInfo = {userInfo}
            isEdit = {isEdit}
            isPicEdit={isPicEdit}
            profilePic = {profilePic}
            formMethods={{ register, handleSubmit, formState }}
            onSubmit={onSubmitEditform}
            onClickEdit={onClickEdit}
            onClickMoveToMainpage = {onClickMoveToMainpage}
            setIsPicEdit={setIsPicEdit}
        />
        
    )
}