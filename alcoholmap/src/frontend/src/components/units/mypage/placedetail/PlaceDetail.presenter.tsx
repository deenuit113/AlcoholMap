import * as S from "./PlaceDetail.styles"

export default function PlaceDetailUI (): JSX.Element {
    return (
        <>
            <S.Wrapper>
                <S.MapWrapper id="map" style={{ width: '100%', height: '400px' }}></S.MapWrapper>
            </S.Wrapper>
        </>
    )
}