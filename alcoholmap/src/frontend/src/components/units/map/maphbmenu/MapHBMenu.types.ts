export interface IHBMenuProps {
    isHBMenuOpen: boolean;
    isLoggedIn: boolean;
    onClickMoveToMypage: () => void;
    onClickMoveToLogin: () => void;
    onClickMoveToSignup: () => void;
    onClickLogout: () => void;
    onClickMoveToKorea: () => void;
    onClickMoveToSeoul: () => void;
}