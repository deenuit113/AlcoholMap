import {useState} from 'react'
import MypageUI from './Mypage.presenter'
import axios from 'axios';

/*  수정 버튼 누를 시에 수정페이지로 이동
    수정 내용 비밀번호?
    찜 - 최근 5개 ~ 누르면 찜목록 페이지로 이동
    내가 평가한 가게 - 최근 5개 ~ 누르면 평가한 가게 리스트로 이동
    이메일 받아오기
*/

const baseUrl = "http://localhost:8080";


export default function MyPagePage(){
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        capaSoju: 0,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(baseUrl + '/users/profile/' + formData.email, formData);
            console.log('Response from server:', response.data);
        } catch (error){
            console.error('error submitting data:', error);
        }
    };


    return (
        <MypageUI
            handleInputChange = {handleInputChange}
            handleFormSubmit = {handleFormSubmit}
            formData = {formData}
        />
        
    )
}