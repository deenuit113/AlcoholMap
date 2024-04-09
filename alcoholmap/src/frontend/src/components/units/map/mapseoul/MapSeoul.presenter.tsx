import { MapSeoulPageUIProps } from "./MapSeoul.types"
import * as S from "./MapSeoul.styles"

export default function MapSeoulPageUI(props: MapSeoulPageUIProps): JSX.Element {
    return (
        <>
            <S.Wrapper>
                <S.GBHeader>
                    <S.Logo onClick={props.onClickMoveToMainPage} src="/GreenBottleLogo1.png"></S.Logo>
                </S.GBHeader>
                <S.SeoulMap ref={props.svgRef}></S.SeoulMap>
                <div>{props.name}</div>
                <button onClick={props.onClickMoveToMapPage}>이동하기</button>
            </S.Wrapper>
        </>
    )
}