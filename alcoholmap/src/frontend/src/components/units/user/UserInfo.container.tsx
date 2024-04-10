import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import UserInfoPageUI from "./UserInfo.presenter";
import { UserData } from "./UserInfo.types";

export default function UserInfoPage(): JSX.Element {
    const router = useRouter();
    const userId = router.query?.userId as string;
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // 더미 데이터 생성
                const dummyData = generateDummyData();
                setUserData(dummyData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [userId]);

    // 더미 데이터 생성 함수
    const generateDummyData = () => {
        const reviews = [];
        const wishlists = [];

        // 리뷰한 가게 더미 데이터 생성
        for (let i = 1; i <= 10; i++) {
            reviews.push({
                review: `리뷰 ${i}`,
                rating: Math.floor(Math.random() * 5) + 1,
                name: `가게 ${i}`,
                address: `가게 ${i} 주소`
            });
        }

        // 찜한 가게 더미 데이터 생성
        for (let i = 1; i <= 10; i++) {
            wishlists.push({
                name: `가게 ${i}`,
                address: `가게 ${i} 주소`
            });
        }

        // 유저 데이터 더미 생성
        const dummyUserData = {
            nickname: '유저 닉네임',
            capaSoju: Math.floor(Math.random() * 10) + 1,
            profilePicture: '/greensoju.png', // 유저 프로필 사진 경로
            reviews: reviews,
            bookmarks: wishlists,
            isFollow: true
        };

        return dummyUserData;
    };

    const onClickMoveToMainPage = (): void => {
        router.push("../map")
    }

    const onClickFollow = (): void => {
        setUserData((prevUserData: UserData | null) => {
            if (prevUserData) {
                return {
                    ...prevUserData,
                    isFollow: !prevUserData.isFollow
                };
            }
            return prevUserData;
        });
    };

    return (
        <UserInfoPageUI
            userId={userId}
            userData={userData}
            onClickMoveToMainPage = {onClickMoveToMainPage}
            onClickFollow = {onClickFollow}
        />
    );
}