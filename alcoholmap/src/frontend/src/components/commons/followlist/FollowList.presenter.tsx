import * as S from "./FollowList.styles";
import { FollowListPageUIProps } from "./FollowList.types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function FollowListPageUI(props: FollowListPageUIProps): JSX.Element {
    return (
        <S.Wrapper>
            <S.SearchIdInput></S.SearchIdInput>
            <S.ListWrapper id = "ListWrapper">
                <S.FollowListUl>
                    {props.data.map((item, index) => (
                        <S.FollowInfo key = {index}>
                            <div>{item.userId}</div>
                            <div>{item.userName}</div>
                        </S.FollowInfo>
                    ))}
                </S.FollowListUl>
                {props.isloading && 
                    <S.LoadingSkeletonUl>
                        <FontAwesomeIcon icon={faSpinner} spin />
                    </S.LoadingSkeletonUl>
                }
            </S.ListWrapper>
        </S.Wrapper>
    );
}