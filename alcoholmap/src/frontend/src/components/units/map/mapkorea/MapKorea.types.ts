import { RefObject } from 'react';

export interface MapKoreaPageUIProps {
    svgRef: RefObject<SVGSVGElement>;
    name: string;
    onClickMoveToMapPage: () => void;
    onClickMoveToMainPage: () => void;
}