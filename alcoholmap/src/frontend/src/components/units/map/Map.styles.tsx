import styled from "@emotion/styled";

export const Wrapper = styled.div`
    position: absolute;
    width: 95%;
    height: 95%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    margin: 10 10 10 10px;
    padding-top: 80px;
    padding-bottom: 100px;
    padding-left: 102px;
    padding-right: 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid gray;
    border-radius: 30px;
    box-shadow: 0px 0px 10px gray;
    background-color: #fffffa;
    boxing: border-box;

    /* Style for the container that will hold the custom scrollbar */
    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 12px; /* Width of the scrollbar */
        background-color: rgba(0, 0, 0, 0.5); /* Color of the scrollbar */
        border-radius: 6px; /* Border radius of the scrollbar */
        transition: opacity 0.3s ease; /* Smooth transition for the scrollbar */
        opacity: 0; /* Initially hide the scrollbar */
        z-index: 1; /* Ensure the scrollbar is above the content */
    }

    /* Show the scrollbar on hover */
    &:hover::before {
        opacity: 1;
    }

    /* Smooth scrolling behavior */
    overflow-y: scroll; /* Enable scrolling */
    scrollbar-width: none; /* Hide default scrollbar in Firefox */
    -webkit-overflow-scrolling: touch; /* Enable smooth scrolling on iOS devices */

    /* Customize the scrollbar thumb */
    &::-webkit-scrollbar-thumb {
        background-color: transparent; /* Make the scrollbar thumb transparent */
    }

    /* Customize the scrollbar track */
    &::-webkit-scrollbar-track {
        background-color: transparent; /* Make the scrollbar track transparent */
    }

    /* Disable arrows for IE, Edge */
    &::-ms-scrollbar-base {
        display: none;
    }

    /* Hide scrollbar on WebKit-based browsers */
    &::-webkit-scrollbar {
        display: none;
    }

    @media all and (min-width:359px) and (max-width: 799px) {
        // 모바일 세로
        width: 100%;
        height: 100%;
        padding-top: 10px;
        padding-left: 0px;
        padding-right: 0px;
        padding-bottom: 10px;
        overflow: auto;
        overflow-x: hidden;
        overflow-y: hidden;
        border: none;
        border-radius: 0px;
    }
`;

export const GBHeader = styled.header`
    @media all and (min-width: 359px) and (max-width: 799px) {
        width: 60%;
        height: 10%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

export const Logo = styled.img`
    cursor: pointer
` 

export const MapNav = styled.nav`
    width: 60%;
    display: inline-block;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    @media all and (min-width: 359px) and (max-width: 799px) {
        width: 95%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        display: none;
    }
`

export const footer = styled.footer`

`

export const LoginButton = styled.button`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;
    width: 100px;
    float: right;
    margin-left: 10px;
    background-color: #B7F0B1;
    border: 5px solid #47C83E;
    border-radius: 8px;
    @media all and (min-width: 359px) and (max-width: 799px) {
        font-size: 13px;
        float: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`

export const LogoutButton = styled.button`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;
    width: 120px;
    float: right;
    margin-left: 10px;
    background-color: #B7F0B1;
    border: 5px solid #47C83E;
    border-radius: 8px;
    @media all and (min-width: 359px) and (max-width: 799px) {
        font-size: 13px;
        float: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`

export const SignupButton = styled.button`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;
    width: 110px;
    float: right;
    margin-left: 10px;
    background-color: #B7F0B1;
    border: 5px solid #47C83E;
    border-radius: 8px;
    @media all and (min-width: 359px) and (max-width: 799px) {
        font-size: 13px;
        float: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`

export const MypageButton = styled.button`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;
    width: 130px;
    float: right;
    margin-left: 10px;
    background-color: #B7F0B1;
    border: 5px solid #47C83E;
    border-radius: 8px;
    @media all and (min-width: 359px) and (max-width: 799px) {
        font-size: 13px;
        float: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`

/*export const ToggleButton1 = styled.button`
    font-size: 90%;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
    border: 1px solid #47C83E;
    border-radius: 20px;
    z-index: 2;
    visibility: hidden;

    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        position: relative;
        width: 60%;
        height: 20px;
        visibility: visible;
    }
`;*/

export const ToggleButton = styled.button`
    position: fixed;
    height: 33%;
    top: 33%;
    left: 0;
    font-size: 100%;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
    border: 1px solid #47C83E;
    border-radius: 20px;
    z-index: 2;
    @media all and (min-width: 359px) and (max-width: 799px) {
        display: none;
    }
`;

export const SearchWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-contents: center;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 20px;
`

export const HamburgerWrapper = styled.div`
    position: fixed;
    left: 13px;
    top: 20px;
    display: inline-block;
    cursor: pointer;
    z-index: 500;
    visibility: hidden;
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        visibility: visible;
    }

`

export const HamburgerLine = styled.div`
    width: 25px;
    height: 4px;
    background-color: #4caf50;
    margin: 6px 0;
    border: 1px solid #47C83E;
    border-radius: 2px;
`

export const SearchButton = styled.button`
    width: 20%;
    height: 100%;
    background-color: #4caf50;
    color: white;
    border: none;
    text-align: center;
    text-decoration: none; 
    float: right; 
    cursor: pointer;
    border-radius: 4px;
`

export const InputKeyword = styled.input`
    width: 40%;
    height: 20px;
    margin-top: 0px;
    margin-left: 5px;
`

export const SelectRadius = styled.select`
    width: 20%;
    height: 20px;
    font-size: 13px;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 10px;
    margin-right: 3px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        font-size: 13px;
    }
`
export const Label = styled.span`
    width: 15%;
    font-size: 15px;
`

export const SearchFilterWrapper = styled.div`
    display: inline-block;
    padding-top: 12px;
    padding-bottom: 10px;
    border-bottom: 4px solid #47C83E;
    border-top: 1px solid gray;

`

export const SortOption = styled.select`
    float: right;
    font-size: 14px;
    option{

    }
`

export const MapWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        width: 100%;
        height: 90%;
    }
`

export const MapMain = styled.main`
    width: 65%;
    height: 100%;
    position: relative;
    overflow: hidden;
    border: 5px solid #47C83E;
    border-radius: 10px;
    margin-bottom: 10px;

    .overlay{
        background-color: #f0fdef;
        color:black;
        padding: 10px;
        font-size: 15px;
        font-weight: bold;
        border: 2px solid black;
        border-radius: 10px;
    }
    
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        width: 100%;
        height: 90%;
        margin-top: 10px;
        border: 3px solid #47C83E;
        border-radius: 5px;
    }
`

export const MapAssistantWrapper = styled.div`
    width: 60%;
    margin-right: 10px;
    font-size: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        width: 90%;
    }
`
export const DragSearchLabel = styled.label`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        font-size: 12px;
    }
`

export const DragSearchSwitch = styled.input`
    margin-left: 3px;
`

export const RefreshUserLocButton = styled.button`
    background-color: #4caf50;
    color: white;
    cursor: pointer;
    border: 1px solid #47C83E;
    border-radius: 4px;
    pointer: cursor;
    font-size: 18px;
    padding: 7px;
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        font-size: 12px;
        padding: 3px;
    }
`

// -----------------

export const MenuWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 20%;
    margin: 10px 0 10px 20px;
    padding: 5px;
    padding-right: 10px;
    padding-left: 10px;
    overflow-y: auto;
    overflow-x: hidden;
    background: rgba(255, 255, 255, 0.7);
    z-index: 1;
    font-size: 18px;
    border: 5px solid #b7f0b1;
    border-radius: 10px;
    resize: horizontal; /* 수평 리사이즈만 허용 */
    min-width: 200px; /* 최소 너비 설정 */

    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;

    div {
        font-size: 18px; 
        font-weight: bold;
        margin-bottom: 10px;
    }
    
    span{
        font-size: 12px;
    }

    .option{
        text-align: center;
    }

    &.close {
        display: none;
    }

    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 6px;
        transition: background-color 0.3s ease;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 8px;
    }

    &:hover {
        &::-webkit-scrollbar {
            width: 12px;
        }
    }

    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        position: relative;
        width: 95%;
        height: 70%;
        margin: 10px 10px 10px 10px;
        max-height: 80vh; /* 최대 높이 설정 */
        div {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 5px;
        }
        
        span{
            font-size: 11px;
        }

        &.close {
            display: block;
        }
    }
`;

export const Option = styled.div`
    text-align: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
`;

export const PlacesList = styled.ul`
    list-style: none;
`;

export const Pagination = styled.div`
  margin: 10px auto;
  text-align: center;

  a {
    display: inline-block;
    margin-right: 10px;
    text-decoration: none;
  }

  .on {
    font-weight: bold;
    cursor: default;
    color: #777;
  }
`;