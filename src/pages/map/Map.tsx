import { useContext, useEffect } from "react";
import { List } from "./aside/List";
import { getGeoLocationApi } from "../../utils/getGeoLocationApi";
import { useMap } from "./context/MapContext";
import { UserLocation } from "../../components/location/UserLocation";
import GlobalContext from "../../context/globalContext";

export const Map = () => {
    const { map, marker, setMap, setMarker, isVisibleSidebar } = useMap();
    const { isMobile } = useContext(GlobalContext);

    useEffect(() => {
        const initMap = async () => {
            try {
                const { lat, lng } = await getGeoLocationApi(); // 위치 정보 가져오기

                window.kakao.maps.load(() => {
                    const container = document.getElementById("map");
                    const options = {
                        center: new window.kakao.maps.LatLng(lat, lng),
                        level: 3,
                    };
                    const newMap = new window.kakao.maps.Map(
                        container,
                        options
                    );
                    const newMarker = new window.kakao.maps.Marker({
                        position: new window.kakao.maps.LatLng(lat, lng),
                        clickable: true
                    });

                    const infowindow = new window.kakao.maps.InfoWindow({
                        content: `<div style="padding:5px;">Hello World!</div>`,
                        removable: true,
                    });

                    newMarker.addListener("click", () => {
                        alert(`${lat} : ${lng}`);
                        infowindow.open(map, marker);
                    });

                    newMarker.setMap(newMap);
                    setMap(newMap);
                    setMarker(newMarker);
                });
            } catch (error) {
                console.error("위치 정보를 불러오는데 실패했습니다.", error);
            }
        };

        if (!map) {
            initMap();
        }

        return () => {
            setMap(null);
            setMarker(null);
        }
    }, []);

    return (
        <div
            id="map"
            className="w-screen h-[calc(100vh-50px)] fixed top-[50px] bg-gray-300 left-0"
        >
            <UserLocation />
            {
                isVisibleSidebar && (
                    <List />
                )
            }
        </div>
    );
};
