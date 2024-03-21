import { ChangeEvent, MouseEvent } from "react";

// Map container interface

export interface Coordinates {
    coords: {
        latitude: number;
        longitude: number;
    }  
}

export interface Options {
    center: Coordinates | null;
    level: number;
}

export interface PlaceInfo {
    address_name: string;
    category_group_code: string;
    category_group_name: string;
    category_name: string;
    distance: string;
    id: string;
    phone: string;
    place_name: string;
    place_url: string;
    road_address_name: string;
    x: string;
    y: string;
    rating?: number; // 별점 속성 추가
    reviewCount?: number; // 리뷰 갯수 속성 추가
}

// Map presenter interface

export interface IMapUIProps {
    onClickMoveToMypage: () => void;
    onClickMoveToLogin: () => void;
    onClickMoveToSignup: () => void;
    onClickLogout: () => void;
    onClickReload: () => void;
    onChangeKeyword: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeRadius: (event: ChangeEvent<HTMLSelectElement>) => void;
    searchPlaces: (event: ChangeEvent<HTMLFormElement>) => void;
    isLoggedIn: boolean;
    keyword: string;
    radius: number;
    isDragSearch: boolean;
    sortOption: number;
    onClickRefreshLocation: () => void;
    onClickDragSearch: () => void;
    onChangeSelectOption: (event: ChangeEvent<HTMLSelectElement>) => void;
    onClickSearch: () => void;
}