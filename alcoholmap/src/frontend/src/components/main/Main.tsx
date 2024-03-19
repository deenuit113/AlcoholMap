import { useRouter } from 'next/router'
import * as S from "./Main.styles";

export default function MainPage (): JSX.Element {
    const router = useRouter()
    const onClickMoveToLogin = () => {
          router.push("../login")
    }
    const onClickMoveToSignup = () => {
      router.push("../signup")
    }
    return(
        <>
            <p>
                안녕하세요, 그린보틀입니다.
            </p>
          <button onClick={onClickMoveToLogin}>로그인</button>
          <button onClick={onClickMoveToSignup}>회원가입</button>
        </>
          

    )
}