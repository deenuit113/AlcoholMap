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
                <S.SelectedLocation>{props.name}</S.SelectedLocation>
                <S.MovetoThisLocationButton onClick={props.onClickMoveToMapPage}>이동하기</S.MovetoThisLocationButton>
                <S.TopBarList>
                    {props.top10Bars.map((bar, index) => (
                        <S.TopBar key={index}>
                            <S.RankWrapper>{index+1}</S.RankWrapper>
                            <S.BarInfoWrapper>
                                <S.BarInfo>이름: <S.BarLabel>{bar.name}</S.BarLabel></S.BarInfo>
                                <S.BarInfo>평점: <S.BarLabel>{bar.rating}</S.BarLabel></S.BarInfo>
                                <S.BarInfo>리뷰: <S.BarLabel>{bar.reviewCount}</S.BarLabel></S.BarInfo>
                                <S.BarInfo>주소: <S.BarLabel>{bar.address}</S.BarLabel></S.BarInfo>
                            </S.BarInfoWrapper>
                            <S.MoveToThisBarButton onClick={() => props.onClickMoveToThisBar(bar.address)}>▶</S.MoveToThisBarButton>
                        </S.TopBar>
                    ))}
                </S.TopBarList>
            </S.Wrapper>
        </>
    )
}