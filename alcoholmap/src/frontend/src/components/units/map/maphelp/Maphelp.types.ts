export interface IMapHelpUIProps {
    helpRef: React.RefObject<HTMLDivElement>;
    isHelpVisible: boolean;
    onClickHelpToggleOpen: () => void;
    onClickCloseHelp: (event: CustomEvent<MouseEvent>) => void;
}