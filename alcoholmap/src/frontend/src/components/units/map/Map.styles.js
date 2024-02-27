import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 600px;
    /* height: 1847px; */
    border: 1px solid black;
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 100px;
    padding-left: 102px;
    padding-right: 102px;
    display: flex;
    flex-direction: column;
    align-items: ;
    justify-content: flex-start;
    border: none;
    box-shadow: 0px 0px 10px gray;
`;

export const AMHeader = styled.header`
    
`

export const AMTitle = styled.h1`
    cursor:pointer;
` 

export const MapNav = styled.nav`
    width: 600px;
    display: inline-block;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const footer = styled.footer`

`

export const LoginButton = styled.button`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: bold;
    width: 100px;
    float: right;
    margin-left: 10px;
    border-radius: 3px 3px 3px 3px;
`

export const SignupButton = styled.button`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: bold;
    width: 100px;
    float: right;
    margin-left: 10px;
    border-radius: 3px 3px 3px 3px;
`

export const MypageButton = styled.button`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: bold;
    width: 100px;
    float: right;
    margin-left: 10px;
    border-radius: 3px 3px 3px 3px;
`

export const SearchWrapper = styled.div`
    width: 500px;
    display: inline-block;
    flex-direction: column;
    align-items: center;
`

export const SearchButton = styled.button`
    margin-left:5px;
    width: 100px;
`

export const InputKeyword = styled.input`
    width: 200px;
    height: 20px;
    font-size: 15px;
    margin-top: 15px;
`

export const MapWrapper = styled.div`
    margin: 0px;
    padding: 0px;
    font-family: 'Malgun Gothic',dotum,'돋움',sans-serif;
    font-size: 12px;
`

export const MapMain = styled.main`
    width: 600px;
    height: 500px;
    position: relative;
    overflow: hidden;
`

// -----------------

export const MapWrap = styled.div`
    font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;
    font-size: 12px;
`;

export const MapContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
`;

export const MenuWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 400px;
    margin: 10px 0 30px 10px;
    padding: 5px;
    overflow-y: auto;
    background: rgba(255, 255, 255, 0.7);
    z-index: 1;
    font-size: 18px;
    border-radius: 10px;

    .bg_white{
        background: #fff;
    }

    .option{
        text-align: center;
        
    }
`;

export const Option = styled.div`
    text-align: center;
`;

export const Form = styled.form``;

export const KeywordInput = styled.input`
    width: 200px;
    height: 20px;
    font-size: 15px;
    margin-top: 15px;
`;

export const PlacesList = styled.ul`
    list-style: none;
`;

export const PlacesListItem = styled.li`
    position: relative;
    border-bottom: 1px solid #888;
    overflow: hidden;
    cursor: pointer;
    min-height: 65px;

    span {
        display: block;
        margin-top: 4px;
    }

    h5,
    .info {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .info {
        padding: 10px 0 10px 55px;

        .gray {
            color: #8a8a8a;
        }

        .jibun {
            padding-left: 26px;
            background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_jibun.png) no-repeat;
        }

        .tel {
            color: #009900;
        }
    }

    .markerbg {
        float: left;
        position: absolute;
        width: 36px;
        height: 37px;
        margin: 10px 0 0 10px;
        background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png) no-repeat;
    }

    .marker_1 {
        background-position: 0 -10px;
    }

    .marker_2 {
        background-position: 0 -56px;
    }

    .marker_3 {
        background-position: 0 -102px;
    }

    .marker_4 {
        background-position: 0 -148px;
    }

    .marker_5 {
        background-position: 0 -194px;
    }

    .marker_6 {
        background-position: 0 -240px;
    }

    .marker_7 {
        background-position: 0 -286px;
    }

    .marker_8 {
        background-position: 0 -332px;
    }

    .marker_9 {
        background-position: 0 -378px;
    }

    .marker_10 {
        background-position: 0 -423px;
    }

    .marker_11 {
        background-position: 0 -470px;
    }

    .marker_12 {
        background-position: 0 -516px;
    }

    .marker_13 {
        background-position: 0 -562px;
    }

    .marker_14 {
        background-position: 0 -608px;
    }

    .marker_15 {
        background-position: 0 -654px;
    }
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