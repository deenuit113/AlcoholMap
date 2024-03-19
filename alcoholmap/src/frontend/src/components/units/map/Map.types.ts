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

// Map presenter interface

export interface IMapUIProps {
    onClickMoveToMypage: () => void;
    onClickMoveToLogin: () => void;
    onClickMoveToSignup: () => void;
    onClickLogout: () => void;
    onClickReload: () => void;
    onChangeKeyword: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeRadius: (event: ChangeEvent<HTMLInputElement>) => void;
    searchPlaces: (event: ChangeEvent<HTMLFormElement>) => void;
    isLoggedIn: boolean;
    keyword: string;
    radius: number;
    onClickRefreshLocation: () => void;
}