// WishListSlider container interface
export interface Place {
    id: number;
    name: string;
    thumbnailUrl: string;
}

export interface WishListSliderProps {
    isMine: boolean;
    userId: string;
}

// WishListSlider presenter interface
export interface WishListSliderUIProps {
    places: Place[];
    isLoading: boolean;
    isMine: boolean;
    userId: string;
}