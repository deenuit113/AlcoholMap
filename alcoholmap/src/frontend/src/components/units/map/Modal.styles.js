const modalStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경 투명도 조절
        zIndex: 990,
    },
    content: {
        width: 500,
        height: 300,
        top: '50%',
        left: '50%',
        right: '0',
        bottom: '30%',
        transform: 'translate(-50%, -50%)', // 중앙 정렬
        zIndex: 1000, // 모달의 z-index 설정 (큰 값으로 지정)
    },
};

export default modalStyles;