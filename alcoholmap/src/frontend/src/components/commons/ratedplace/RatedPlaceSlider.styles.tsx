import styled from "@emotion/styled";

interface ImgWrapperProps {
    isHover: boolean;
}

export const SliderWrapper = styled.div`
    width: 100%;
    padding: 10px 0px 10px 0px;
    display: inline-block;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 태블릿
        ::-webkit-scrollbar {
            display: none;
        }
    }
`;

export const Slider = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    &::-webkit-scrollbar {
        width: 15px;
        height: 10px;
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
        // 태블릿
        ::-webkit-scrollbar {
            display: none;
        }
    }
`

export const Image = styled.img`
    margin: auto;
    display: block;
`;

export const PlaceWrapper = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    box-shadow: 0px 0px 10px gray;
    border: 1px solid gray;
    border-radius: 20%;
    display: inline-block;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    text-align: center;

    :hover{
        #placename {
            opacity: 1;
        }
        
        #imgwrapper {
            filter: brightness(50%);
        }

    }

    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        width: 100px;
        height: 100px;
    }
`

export const LoadingSkeletonWrapper = styled.div`
    position: relative;
    width: 300px;
    min-width: 300px;
    height: 300px;
    box-shadow: 0px 0px 10px gray;
    border: 1px solid gray;
    border-radius: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    text-align: center;

    #LoadingIcon{
        font-size: 50px;
    }

    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        width: 100px;
        min-width: 100px;
        height: 100px;

        #LoadingIcon{
            font-size: 30px;
        }
    }
`

export const ImgWrapper = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    filter: brightness(100%);
    transition: filter 0.5s ease-in-out;
    @media all and (min-width: 359px) and (max-width: 799px) {
        // 모바일 세로
        width: 100px;
        height: 100px;
    }
`

export const PlaceName = styled.div`
    position: absolute;
    bottom: 0%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    padding: 8px;
    text-align: center;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
`;

