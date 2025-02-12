declare global {
    interface Window {
        kakao: any;
    }
}

export const Map = () => {
    return (
        <div id="map" className="w-screen h-[calc(100vh-50px)] fixed top-[50px] bg-gray-300 left-0"></div>
    )
}