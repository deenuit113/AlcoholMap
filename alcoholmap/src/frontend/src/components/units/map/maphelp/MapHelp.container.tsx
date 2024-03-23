import { useState, useRef, useEffect } from 'react'
import MapHelpUI from './MapHelp.presenter';

export default function MapHelp (): JSX.Element {
    const [isHelpVisible, setIsHelpVisible] = useState(false);
    const helpRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener('mousedown', onClickCloseHelp as EventListener);
        return () => {
            document.removeEventListener('mousedown', onClickCloseHelp as EventListener);
        }
    },[]);

    const onClickHelpToggleOpen = () :void =>{
        setIsHelpVisible(true);
    }

    const onClickCloseHelp = (event: CustomEvent<MouseEvent>): void => {
        const targetNode = event.target as Node;
        if (!helpRef.current?.contains(targetNode) && targetNode !== helpRef.current) {
            setIsHelpVisible(false);
        }
    };
    return(
        <MapHelpUI
            helpRef={helpRef}
            isHelpVisible={isHelpVisible}
            onClickHelpToggleOpen={onClickHelpToggleOpen}
            onClickCloseHelp={onClickCloseHelp}
        />
    )
}