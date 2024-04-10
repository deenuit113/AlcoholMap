import * as S from "./UserInfo.styles"
import { UserInfoPageUIProps } from "./UserInfo.types";

export default function UserInfoPageUI (props: UserInfoPageUIProps): JSX.Element {
    return (
        <>
            <S.Wrapper>
                <S.Logo onClick={props.onClickMoveToMainPage} src="/GreenBottleLogo1.png"></S.Logo>
                <S.Title>{props.userData?.nickname}</S.Title>
                {props.userData && (
                    <S.UserInfoWrapper>
                        <img src={props.userData.profilePicture} alt="User Profile" />
                        <p>Nickname: {props.userData.nickname}</p>
                        <p>Alcohol Tolerance: {props.userData.capaSoju}</p>
                        <h2>Reviewed Stores</h2>
                        <ul>
                            {props.userData.reviews.map((store: any, index: number) => (
                                <li key={index}>
                                    <p>Review: {store.review}</p>
                                    <p>Rating: {store.rating}</p>
                                    <p>Name: {store.name}</p>
                                    <p>Address: {store.address}</p>
                                </li>
                            ))}
                        </ul>
                        <h2>Bookmarked Stores</h2>
                        <ul>
                            {props.userData.bookmarks.map((store: any, index: number) => (
                                <li key={index}>
                                    <p>Name: {store.name}</p>
                                    <p>Address: {store.address}</p>
                                </li>
                            ))}
                        </ul>
                    </S.UserInfoWrapper>
                )}
            </S.Wrapper>
        </>
    );
}