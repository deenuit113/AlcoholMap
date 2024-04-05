// WishListSlider container interface
export interface Place {
    id: number;
    name: string;
    thumbnailUrl: string;
}
// WishListSlider presenter interface
export interface RatedPlaceSliderUIProps {
    places: Place[];
    isLoading: boolean;
}