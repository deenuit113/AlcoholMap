import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function testing() {
  const router = useRouter();

  const handleClick = () => {
    // 클릭한 장소의 이름을 keyword로 설정하여 페이지 라우팅
    router.push({
      pathname: '/map', // 라우팅할 페이지 경로
      query: { keyword: "서울 동대문구 이문동 288-23" }, // 쿼리 파라미터로 전달할 값
    });
  };

  return (
    <div>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}