import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 800px;
    height: 850px;
    border: 1px solid black;
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 100px;
    padding-left: 102px;
    padding-right: 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid gray;
    border-radius: 30px;
    box-shadow: 0px 0px 10px gray;
    background-color: #B7F0B1;
`;

export const AMHeader = styled.header`
    
`

export const AMTitle = styled.img`
    cursor: pointer
` 

export const MapNav = styled.nav`
    width: 800px;
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
    font-size: 20px;
    font-weight: bold;
    width: 100px;
    float: right;
    margin-left: 10px;
    background-color: #B7F0B1;
    border: 5px solid #47C83E;
    border-radius: 8px;
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
`

export const SignupButton = styled.button`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;
    width: 100px;
    float: right;
    margin-left: 10px;
    background-color: #B7F0B1;
    border: 5px solid #47C83E;
    border-radius: 8px;
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
`

export const SearchWrapper = styled.div`
    width: 500px;
    display: flex;
    align-contents: center;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 20px;
`

export const SearchButton = styled.button`
    margin-left:5px;
    width: 100px;
    font-size: 20px;
`

export const InputKeyword = styled.input`
    width: 150px;
    height: 20px;
    font-size: 20px;
    margin-top: 0px;
    margin-left: 5px;
`

export const InputRadius = styled.input`
    width: 50px;
    height: 20px;
    font-size: 20px;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 10px;
    margin-right: 3px;
`

export const MapWrapper = styled.div`
    margin: 0px;
    padding: 0px;
    font-family: 'Malgun Gothic',dotum,'돋움',sans-serif;
    font-size: 12px;
`

export const MapMain = styled.main`
    width: 800px;
    height: 650px;
    position: relative;
    overflow: hidden;
    border: 20px solid #47C83E;
    margin-right: 10px;
    border-radius: 30px;
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
    width: 450px;
    margin: 10px 0 10px 10px;
    padding: 5px;
    padding-right: 30px;
    overflow-y: auto;
    overflow-x: hidden;
    background: rgba(255, 255, 255, 0.7);
    z-index: 1;
    font-size: 18px;
    border-radius: 10px;
    width: 450px;

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

export const Form = styled.form`
    display: flex;
    align-items: center;
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