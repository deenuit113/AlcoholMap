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
`;

export const Slider = styled.div`
    display: flex;
    flex-wrap: nowrap;
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
`

export const Image = styled.img`
    margin: auto;
    display: block;
`;

export const PlaceWrapper = styled.div`
    position: relative;
    width:100px;
    height:100px;
    box-shadow: 0px 0px 10px gray;
    border: 1px solid gray;
    border-radius: 20%;
    display: inline-block;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    text-align: center;
`

export const ImgWrapper = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    border: 3px solid blue;
    filter: brightness(100%);
    transition: filter 0.5s ease-in-out;
    :hover{
        filter: brightness(50%);
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
    :hover{
        opacity: 1;
    }
`;

