export interface FollowListPageUIProps {
    isloading: boolean;
    data: {
        userId: string;
        userName: string;
        profilePicture: string;
    }[];
}