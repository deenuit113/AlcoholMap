export interface IHBMenu {
    isHBMenuOpen: boolean;
    isLoggedIn: boolean;
    onClickMoveToMypage: () => void;
    onClickMoveToLogin: () => void;
    onClickMoveToSignup: () => void;
    onClickLogout: () => void;
}