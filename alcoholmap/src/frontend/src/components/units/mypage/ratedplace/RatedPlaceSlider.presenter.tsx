import * as S from "./RatedPlaceSlider.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { RatedPlaceSliderUIProps } from "./RatedPlaceSlider.types";
import { useRouter } from "next/router";

export default function RatedPlaceSliderUI (props: RatedPlaceSliderUIProps): JSX.Element{
    const router = useRouter();

    const onClickMovetoPlace = (placeId: number) => {
        router.push({
            pathname: `/mypage/wishlist/${placeId}`,
            query: {
                placename: "영화장",
                address: "서울 동대문구 이문동 288-23",
            },
        });
    };

    return (
        <S.SliderWrapper id = "SliderWrapper">
            <S.Slider id = "RatedPlaceSlider">
                {props.places.map((place) => (
                    <S.PlaceWrapper key={place.id} onClick={() => onClickMovetoPlace(place.id)}>
                        <S.ImgWrapper id="imgwrapper">
                            <S.Image src={place.thumbnailUrl} alt={`Thumbnail ${place.id}`} />
                        </S.ImgWrapper>
                        <S.PlaceName id="placename">{place.name}</S.PlaceName>
                    </S.PlaceWrapper>
                ))}
                {props.isLoading && 
                    <S.LoadingSkeletonWrapper>
                        <FontAwesomeIcon id="LoadingIcon" icon={faSpinner} spin />
                    </S.LoadingSkeletonWrapper>
                }
            </S.Slider>
        </S.SliderWrapper>
    );
}