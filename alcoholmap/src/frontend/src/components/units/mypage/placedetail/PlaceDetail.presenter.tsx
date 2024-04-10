import * as S from "./PlaceDetail.styles"
import { PlaceDetailUIProps } from "./PlaceDetail.types"

export default function PlaceDetailUI (props: PlaceDetailUIProps): JSX.Element {
    return (
        <>
            <S.Wrapper>
                <S.MapWrapper id="map" style={{ width: '100%', height: '400px' }}></S.MapWrapper>
                <S.MoveToMainPage onClick={props.onClickMoveToMainpage}>지도페이지에서 보기</S.MoveToMainPage>
                <div>{props.placeName}</div>
                <div>{props.address}</div>
            </S.Wrapper>
        </>
    )
}