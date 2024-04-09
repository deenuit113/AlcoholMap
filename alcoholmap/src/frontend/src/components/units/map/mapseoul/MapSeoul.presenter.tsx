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
                <S.TopBarList>
                    {props.top10Bars.map((bar, index) => (
                        <S.TopBar key={index}>
                            <S.RankWrapper>{index+1}</S.RankWrapper>
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