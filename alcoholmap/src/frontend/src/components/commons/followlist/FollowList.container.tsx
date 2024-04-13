import { useRouter } from "next/router";
import FollowListPageUI from "./FollowList.presenter";
import { ChangeEvent, useEffect, useState } from "react";

interface UserInfo {
    userId: string;
    userName: string;
    profilePicture: string;
  }

export default function FollowListPage(): JSX.Element {
    const router = useRouter();
    const [data, setData] = useState<{ userId: string; userName: string; profilePicture: string}[]>([]);
    const [isloading, setisLoading] = useState(false);
    const listName = router.query.who as string;

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const ListWrapper = document.getElementById('ListWrapper');
            const scrollHeight = ListWrapper?.scrollHeight;
            const scrollTop = ListWrapper?.scrollTop;
            const clientHeight = ListWrapper?.clientHeight;
            // @ts-ignore
            if ((scrollTop + clientHeight) / scrollHeight >= 0.99 && !isloading) {
                fetchData();
            }
        };
        const ListWrapper = document.getElementById('ListWrapper');
        ListWrapper?.addEventListener('scroll', handleScroll);
        return () => {
            ListWrapper?.removeEventListener('scroll', handleScroll);
        };
    }, [isloading]);

    const generateDummyUsers = (start: number, end: number): UserInfo[] => {
        const data: UserInfo[] = [];
        for (let i = start; i <= end; i++) {
          data.push({
            userId: `user_${i}`,
            userName: `NickName${i}`,
            profilePicture: `/greensoju.png`,
          });
        }
        return data;
    };

    const fetchData = async () => {
        setisLoading(true);
        setTimeout(() => {
            //const newData = [...data, ...new Array(10).fill('New Data')];
            
            const newData = [...data, ...generateDummyUsers(data.length + 1, data.length + 10)];
            setData(newData);
            setisLoading(false);
        }, 1000);
    };

    const onClickMoveToMainPage = () => {
        router.push('/map');
    };

    const onClickMoveToUserInfo = (userId: string) => {
        router.push({
            pathname: `/user/${userId}`,
            query: {
                userId: userId,
            },
        })
    };

    const onChangeSearchUserByName = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };


    return (
        <>
            <FollowListPageUI
                isloading = {isloading}
                data = {data}
                listName = {listName}
                onClickMoveToMainPage = {onClickMoveToMainPage}
                onClickMoveToUserInfo = {onClickMoveToUserInfo}
                onChangeSearchUserByName = {onChangeSearchUserByName}
            />
        </>
    );
}