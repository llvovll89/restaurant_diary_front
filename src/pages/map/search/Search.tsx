import React, {useEffect, useRef, useState} from "react";
import {useMap} from "../context/MapContext";
import {SearchDto} from "../aside/dto/SearchListDto";
import {List} from "./List";

const {kakao} = window as any;

export const Search = () => {
    const [isVisibleSearchForm, setIsVisibleSearchForm] = useState(false);
    const [addressList, setAddressList] = useState<SearchDto[]>([]);
    const [address, setAdress] = useState("");
    const markers = useRef<any[]>([]);
    const {map, toggleIsVisibleSidebar, isVisibleSidebar} = useMap();

    const searchRef = useRef(null);

    const toggleSearchForm = () => {
        if (address) {
            setAdress("");
            setAddressList([]);
            removeMarkers();
        } else {
            setAddressList([]);
            removeMarkers();
        }

        setIsVisibleSearchForm((prevState) => !prevState);

        setTimeout(() => {
            if (searchRef.current) {
                searchRef.current.focus();
            }
        }, 100);
    };

    const resetState = () => {
        setAdress("");
        setIsVisibleSearchForm(false);
    };

    const onKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            if (isVisibleSidebar) toggleIsVisibleSidebar();
            getPoiSearch();
        } else if (event.key === "Escape") {
            resetState();
        }
    };

    const placesSearchCB = (
        data: SearchDto[],
        status: any,
        pagination: any
    ) => {
        if (status === kakao.maps.services.Status.OK) {
            const bounds = new kakao.maps.LatLngBounds();

            setAddressList(data);

            if (data.length > 0) {
                removeMarkers();

                data.forEach((item, idx) => {
                    const placePosition = new kakao.maps.LatLng(item.y, item.x);

                    kakao.maps.event.addListener(
                        addMarker(placePosition, idx),
                        "click",
                        function () {
                            const infoWindow = new kakao.maps.InfoWindow({
                                content: `<div style="padding:5px;">${item.address_name}</div>`,
                                removable: true,
                            });

                            infoWindow.open(map, addMarker(placePosition, idx));
                        }
                    );

                    bounds.extend(placePosition);
                });

                map.setBounds(bounds);
            }
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
            alert("검색 결과가 존재하지 않습니다.");
            toggleSearchForm();

            return;
        } else if (status === kakao.maps.services.Status.ERROR) {
            alert("검색 결과 중 오류가 발생했습니다.");
            return;
        }
    };

    const getPoiSearch = () => {
        const ps = new kakao.maps.services.Places();
        ps.keywordSearch(address.trim(), placesSearchCB);
    };

    const addMarker = (position, idx: number) => {
        const imageSrc =
            "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png";
        const imageSize = new kakao.maps.Size(36, 37);
        const imgOptions = {
            spriteSize: new kakao.maps.Size(36, 691),
            spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10),
            offset: new kakao.maps.Point(13, 37),
        };
        const markerImage = new kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imgOptions
        );
        const marker = new kakao.maps.Marker({
            position,
            image: markerImage,
            clickable: true,
        });

        marker.setMap(map);
        markers.current.push(marker);

        return marker;
    };

    const removeMarkers = () => {
        if (markers.current.length > 0) {
            markers.current.forEach((marker) => marker.setMap(null));
            markers.current = [];
        }
    };

    const getSearchSubmitIcon = () => {
        const serchIcon = "/images/icons/ico_search.svg";
        const closeIcon = "/images/icons/ico_x.svg";

        return addressList.length > 0 ? closeIcon : serchIcon;
    };

    useEffect(() => {
        return () => {
            resetState();
        };
    }, []);

    return (
        <article className="flex w-full h-[50px] px-1 py-2 gap-2 text-white border-b border-solid border-gray-300 font-bold flex-col relative">
            <div className="flex items-center justify-between w-full h-[50px]">
                <input
                    type="text"
                    className="focus:border-[#09f] w-[calc(100%-46px)] rounded-[5px] border border-solid border-[#DEDEDE] tracking-[0.075rem] text-black text-sm h-full focus:outline-none px-2"
                    placeholder="장소, 주소, 키워드 검색"
                    value={address}
                    onChange={(e) => setAdress(e.target.value)}
                    onKeyDown={onKeydown}
                    ref={searchRef}
                />
                <button
                    onClick={toggleSearchForm}
                    className="w-[42px] h-full flex items-center justify-center rounded-[5px] bg-primary border border-solid border-white shadow-modal_shadow"
                >
                    <img
                        src={getSearchSubmitIcon()}
                        alt="close"
                        className="w-6 h-6"
                    />
                </button>
            </div>

            {addressList.length > 0 && <List addressList={addressList} />}
        </article>
    );
};
