import { MapKoreaPageUIProps } from "./MapKorea.types"
import * as S from "./MapKorea.styles"

export default function MapKoreaPageUI(props: MapKoreaPageUIProps): JSX.Element {
    return (
        <>
            <S.Wrapper>
                <S.GBHeader>
                    <S.Logo onClick={props.onClickMoveToMainPage} src="/GreenBottleLogo1.png"></S.Logo>
                </S.GBHeader>
                <S.KoreaMap ref={props.svgRef}></S.KoreaMap>
                <div>{props.name}</div>
                <button onClick={props.onClickMoveToMapPage}>이동하기</button>
                <S.TopBarList>
                    {props.top10Bars.map((bar, index) => (
                        <S.TopBar key={index}>
                            <S.BarInfoWrapper>
                                <div>Name: {bar.name}</div>
                                <div>Rating: {bar.rating}</div>
                                <div>Review Count: {bar.reviewCount}</div>
                                <div>Address: {bar.address}</div>
                            </S.BarInfoWrapper>
                            <S.MoveToThisBarButton onClick={() => props.onClickMoveToThisBar(bar.address)}>이동하기</S.MoveToThisBarButton>
                        </S.TopBar>
                    ))}
                </S.TopBarList>
            </S.Wrapper>
        </>
    )
}