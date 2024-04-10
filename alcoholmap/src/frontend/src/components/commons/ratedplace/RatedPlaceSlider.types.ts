// WishListSlider container interface
export interface Place {
    id: number;
    name: string;
    thumbnailUrl: string;
}

export interface RatedPlaceSliderProps {
    isMine: boolean;
    userId: string;
}

// WishListSlider presenter interface
export interface RatedPlaceSliderUIProps {
    places: Place[];
    isLoading: boolean;
    isMine: boolean;
    userId: string;
}