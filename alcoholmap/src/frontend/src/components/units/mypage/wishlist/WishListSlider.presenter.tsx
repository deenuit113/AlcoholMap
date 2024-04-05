import * as S from "./WishListSlider.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { WishListSliderUIProps } from "./WishListSlider.types";


export default function WishListSliderUI (props: WishListSliderUIProps): JSX.Element{

    return (
        <S.SliderWrapper id = "SliderWrapper">
            <S.Slider id = "Slider">
                {props.places.map((place) => (
                    <S.PlaceWrapper key={place.id}>
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