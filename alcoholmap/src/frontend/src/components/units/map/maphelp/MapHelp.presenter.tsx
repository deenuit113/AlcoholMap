import * as S from "./MapHelp.styles";
import { IMapHelpUIProps } from "./Maphelp.types";

export default function MapHelpUI( props: IMapHelpUIProps ): JSX.Element {
    return (
        <>
            {!props.isHelpVisible && (
                <S.HelpButton onClick={props.onClickHelpToggleOpen}> ? </S.HelpButton>
            )}
            {props.isHelpVisible && (
                <S.HelpButtonFake> ? </S.HelpButtonFake>
            )}
            {props.isHelpVisible && (
                <S.HelpWrapper ref={props.helpRef}>
                    <S.HelpTitle>
                        도움말
                    </S.HelpTitle>
                    <S.HelpSmallTitle>• 검색 기능</S.HelpSmallTitle>
                    <S.HelpContent>
                        <span> ▸ 키워드와 반경을 선택하고 검색 버튼을 누르면 설정값이 반영된 검색 결과가 표시됩니다.</span>
                    </S.HelpContent>
                    <S.HelpContent>
                        <span> ▸ 장소 옆에 표시되는 소주병의 개수는 해당 가게의 평점을 반올림한 결과입니다.</span>
                    </S.HelpContent>
                    <S.HelpSmallTitle>• 장소 마커</S.HelpSmallTitle>
                    <S.HelpContent>
                        <span> ▸ 지도에 표시되는 장소의 평점에 따라 소주병의 뚜껑과 띠의 색이 다르게 표시됩니다.</span>
                    </S.HelpContent>
                    <S.MarkerHelpContent>
                    <img src='/bluesoju.png' alt='bluesoju'/> 파란색 뚜껑의 소주병은 평점 4.5점 이상인 식당을 의미합니다.
                    </S.MarkerHelpContent>
                    <S.MarkerHelpContent>
                    <img src='/orangesoju.png' alt='orangesoju'/> 주황색 뚜껑의 소주병은 평점 3.5점 이상, 4.5점 미만인 식당을 의미합니다.
                    </S.MarkerHelpContent>
                    <S.MarkerHelpContent>
                    <img src='/redsoju.png' alt='redsoju'/> 빨간색 뚜껑의 소주병은 평점 3.5점 미만인 식당을 의미합니다.
                    </S.MarkerHelpContent>
                    <S.MarkerHelpContent>
                    <img src='/greensoju.png' alt='greensoju'/> 초록색 뚜껑의 소주병은 아직 리뷰가 작성되지 않은 식당을 의미합니다.
                    </S.MarkerHelpContent>
                </S.HelpWrapper>
                )}
        </>
    )
}
