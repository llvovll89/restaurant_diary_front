import { createContext, useEffect, useState } from "react";

interface GlobalContextType {
    isMobile: boolean;
}

const GlobalContext = createContext<GlobalContextType>({
    isMobile: false,
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // 모바일 기기 감지
        const checkIsMobile = () => {
            const mobileCheck = /iPhone|iPad|Android/i.test(navigator.userAgent);
            const isSmallScreen = window.innerWidth <= 768; // 너비가 768px 이하일 경우 모바일로 간주
            setIsMobile(mobileCheck || isSmallScreen);
        };

        checkIsMobile(); // 초기 실행

        // 화면 크기 변경 이벤트 추가
        window.addEventListener("resize", checkIsMobile);

        // 이벤트 정리 (메모리 누수 방지)
        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, []);

    return (
        <GlobalContext.Provider value={{ isMobile }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;