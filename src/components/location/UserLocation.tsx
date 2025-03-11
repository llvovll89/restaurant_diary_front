import { useMap } from "../../pages/map/context/MapContext";
import { getGeoLocationApi } from "../../utils/getGeoLocationApi";

export const UserLocation = () => {
    const { map, setMarker } = useMap();

    const onClickHandler = () => {
        getGeoLocationApi().then((geolocation) => {
            const position = new window.kakao.maps.LatLng(geolocation.lat, geolocation.lng);

            setMarker(null);

            const newMarker = new window.kakao.maps.Marker({
                position,
            });

            setMarker(newMarker);
            newMarker.setMap(map);
            map.setCenter(position);
        });
    }

    return (
        <button title="현재 내 위치로" onClick={onClickHandler} className="fixed bottom-[16px] right-[6px] w-[36px] h-[36px] rounded-[5px] bg-[rgba(0,0,0,0.77)] flex items-center justify-center z-[10]">
            <img src="/images/icons/ico_map.svg" className="w-4 h-4" />
        </button>
    )
}