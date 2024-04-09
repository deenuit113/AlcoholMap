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
            </S.Wrapper>
        </>
    )
}