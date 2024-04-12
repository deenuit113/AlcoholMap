import { useRouter } from "next/router";
import FollowListPageUI from "./FollowList.presenter";
import { useEffect, useState } from "react";

interface UserInfo {
    userId: string;
    userName: string;
    profilePicture: string;
  }

export default function FollowListPage(): JSX.Element {
    const router = useRouter();
    const [data, setData] = useState<{ userId: string; userName: string; profilePicture: string}[]>([]);
    const [isloading, setisLoading] = useState(false);
    const { who : who } = router.query;
    const listName = who;

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
            userName: `User ${i}`,
            profilePicture: `/greensoju.png`,
          });
        }
        return data;
    };

    const fetchData = async () => {
        setisLoading(true);
        setTimeout(() => {
            //const newData = [...data, ...new Array(10).fill('New Data')];
            
            const newData = [...data, ...generateDummyUsers(data.length + 1, data.length + 15)];
            setData(newData);
            setisLoading(false);
        }, 1000);
    };


    return (
        <>
            <FollowListPageUI
                isloading = {isloading}
                data = {data}
            />
        </>
    );
}