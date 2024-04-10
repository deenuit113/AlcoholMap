import { RefObject } from 'react';

export interface BarData {
    name: string;
    rating: number;
    reviewCount: number;
    address: string;
}

export interface MapSeoulPageUIProps {
    svgRef: RefObject<SVGSVGElement>;
    name: string;
    onClickMoveToMapPage: () => void;
    onClickMoveToMainPage: () => void;
    top10Bars: BarData[];
    onClickMoveToThisBar: (address: string) => void;
}