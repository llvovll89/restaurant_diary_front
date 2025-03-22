import { useContext, useEffect } from "react";
import { List } from "./search/List";
import { getGeoLocationApi } from "../../utils/getGeoLocationApi";
import { useMap } from "./context/MapContext";
import { UserLocation } from "../../components/location/UserLocation";

import GlobalContext from "../../context/globalContext";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Sidebar } from "../../components/sidebar/Sidebar";

const { kakao } = window as any;

export const Map = () => {
    const { map, setMap, setMarker, isVisibleSidebar } = useMap();
    const [userId] = useLocalStorage<string>("userId", "");
    const { isMobile } = useContext(GlobalContext);

    const initMap = async () => {
        try {
            const { lat, lng } = await getGeoLocationApi(); // 위치 정보 가져오기

            kakao.maps.load(() => {
                const container = document.getElementById("map");
                const options = {
                    center: new kakao.maps.LatLng(lat, lng),
                    level: 3,
                };
                const newMap = new kakao.maps.Map(container, options);
                // const newMarker = new kakao.maps.Marker({
                //     position: new kakao.maps.LatLng(lat, lng),
                //     clickable: true
                // });

                const userMarker = new kakao.maps.CustomOverlay({
                    position: new kakao.maps.LatLng(lat, lng),
                    content: `<div class="w-8 h-8 rounded-full border border-solid border-white bg-primary flex items-center justify-center">
                        <span class="text-md text-white">${userId.slice(0, 1)}</span>
                    </div>`,
                    offset: new kakao.maps.Size(27, 35)
                })

                // newMarker.setMap(newMap);
                userMarker.setMap(newMap);   
                setMap(newMap);
                setMarker(userMarker);
            });
        } catch (error) {
            console.error("위치 정보를 불러오는데 실패했습니다.", error);
        }
    };

    useEffect(() => {
        if (!map) {
            initMap();
        }

        return () => {
            setMap(null);
            setMarker(null);
        };
    }, []);

    return (
        <div id="map" className="w-screen h-[calc(100vh-50px)] fixed top-[50px] bg-gray-300 left-0">
            <UserLocation />
            {isVisibleSidebar && <Sidebar />}
        </div>
    );
};
