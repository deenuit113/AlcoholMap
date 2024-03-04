import { useState, useEffect } from 'react'
import MypageUI from './Mypage.presenter'
import axios from 'axios';
import { useRouter } from 'next/router'
import jwt from 'jsonwebtoken';

/*  수정 버튼 누를 시에 수정페이지로 이동
    수정 내용 비밀번호?
    찜 - 최근 5개 ~ 누르면 찜목록 페이지로 이동
    내가 평가한 가게 - 최근 5개 ~ 누르면 평가한 가게 리스트로 이동
    이메일 받아오기
*/

const apiUrl = '/users/profile/${userEmail}';


export default function MyPagePage(){
    const router = useRouter()
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [userData, setUserData] = useState({
        userEmail: '',
        capaSoju: 0,
        nickname: '',
        // 찜한가게 (가게 이름, 위도 경도 값)
        // 평가한 가게 (가게 이름, 위도 경도 값, 평점, 리뷰)
    });

    useEffect(() => {
        checkIsLoggedIn();
        if(!isLoggedIn){
            alert("로그인 후 이용해주세요");
            setUserData({
                ...userData,
                userEmail: "kimseyoung@gmail.com",
                capaSoju: 3,
                nickname: "kimtax0",
            });
            //router.push('../login');
        } else{
            //fetchData();
        }

    }, []);

    const fetchData = async () => {
        try {
            // 토큰 decode
            const token = localStorage.getItem('jwtToken');
            const decodedToken = jwt.decode(token);

            // decode된 토큰에서 사용자 이메일 추출
            const userEmail = decodedToken.email;

            // API 호출
            const response = await axios.get(apiUrl, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
                },
                params: {
                    email: userEmail,
                },
            });
            // 가져온 데이터를 상태에 저장
            setUserData(response.data);

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

    const onClickMoveToMainpage = () => {
        router.push("../map")
    }


    return (
        <MypageUI
            userData = {userData}
            onClickMoveToMainpage = {onClickMoveToMainpage}
        />
        
    )
}