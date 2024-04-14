import { useState, useEffect } from 'react';
export const useCarouselImg = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isFlashing, setIsFlashing] = useState(false);
  
    const mobImages = [
      '/mobgreenbottleindex0.png',
      '/mobdragsearch.png',
      '/mobsetradius.png',
      '/mobsortopt.png',
      '/mobmyloc.png',
      '/mobhelp.png',
      '/mobmodal.png',
      '/mobreview.png',
      '/mobstart.png',
    ];
  
    const webImages = [
      '/webgreenbottleindex0.png',
      '/webdragsearch.png',
      '/websetradius.png',
      '/websortopt.png',
      '/webmyloc.png',
      '/webhelp.png',
      '/webmodal.png',
      '/webreview.png',
      '/webstart.png',
    ];

    useEffect(() => {
      if (currentImageIndex === mobImages.length - 1) {
          setIsFlashing(true);
          const flashingInterval = setInterval(() => {
              setIsFlashing((prevFlashing) => !prevFlashing);
          }, 1000); // 1초마다 버튼이 점멸하도록 설정

          return () => clearInterval(flashingInterval); // 컴포넌트가 언마운트될 때 인터벌 클리어
      } else {
          setIsFlashing(false); // 마지막 이미지가 아니면 점멸 중지
      }
    }, [currentImageIndex]);
  
    const nextSlide = (): void => {
      setIsTransitioning(true); // 트랜지션 시작
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % mobImages.length);
        setIsTransitioning(false); // 트랜지션 종료
      }, 500); // 이미지 전환 후 트랜지션 종료
    };
  
    const prevSlide = (): void => {
      setIsTransitioning(true); // 트랜지션 시작
      setTimeout(() => {
        if (currentImageIndex !== 0) {
          setCurrentImageIndex((prevIndex) => (prevIndex - 1 + mobImages.length) % mobImages.length);
        }
        setIsTransitioning(false); // 트랜지션 종료
      }, 500); // 이미지 전환 후 트랜지션 종료
    };
  
    return { mobImages, webImages, currentImageIndex, isFlashing, isTransitioning, nextSlide, prevSlide };
  };
  
  export default useCarouselImg;