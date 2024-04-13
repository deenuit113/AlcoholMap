import * as S from "./FollowList.styles";
import { FollowListPageUIProps } from "./FollowList.types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function FollowListPageUI(props: FollowListPageUIProps): JSX.Element {
    const title = props.listName === "follower" ? "팔로워 목록" : "팔로잉 목록";
    return (
        <S.Wrapper>
            <S.GBHeader>
                <S.Logo onClick={props.onClickMoveToMainPage} src="/GreenBottleLogo1.png"></S.Logo>
            </S.GBHeader>
            <S.Title>{title}</S.Title>
            <S.SearchIdInput onChange={props.onChangeSearchUserByName}></S.SearchIdInput>
            <S.ListWrapper id = "ListWrapper">
                <S.FollowListUl>
                    {props.data.map((item, index) => (
                        <S.FollowInfo key = {index}>
                            <S.UserInfoWrapper>
                                <S.ProfileWrapper onClick={() => props.onClickMoveToUserInfo(item.userId)}>
                                    <S.ProfileImg src="/redsoju.png" alt="Profile" />
                                </S.ProfileWrapper>
                                <S.UserName>{item.userName}</S.UserName>
                            </S.UserInfoWrapper>
                            <S.GoToUserInfoButton onClick={() => props.onClickMoveToUserInfo(item.userId)}>정보 보기</S.GoToUserInfoButton>
                        </S.FollowInfo>
                    ))}
                </S.FollowListUl>
                {props.isloading && 
                    <S.LoadingSkeletonUl>
                        <FontAwesomeIcon id = "LoadingIcon" icon={faSpinner} spin />
                    </S.LoadingSkeletonUl>
                }
            </S.ListWrapper>
        </S.Wrapper>
    );
}