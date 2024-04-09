import { RefObject } from 'react';

export interface MapSeoulPageUIProps {
    svgRef: RefObject<SVGSVGElement>;
    name: string;
    onClickMoveToMapPage: () => void;
    onClickMoveToMainPage: () => void;
}