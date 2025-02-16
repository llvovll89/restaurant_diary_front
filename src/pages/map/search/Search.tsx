import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { KAKAO_ADDRESS_API } from "../../../api/api";
import { useMap } from "../context/MapContext";

interface Props {
    setAddressList: React.Dispatch<React.SetStateAction<any[]>>;
}

export const Search = ({ setAddressList }: Props) => {
    const [isVisibleSearchForm, setIsVisibleSearchForm] = useState(false);
    const [address, setAdress] = useState("");
    const { map } = useMap();

    const searchRef = useRef(null);

    const toggleSearchForm = () => {
        if (address) {
            setAdress("");
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
            getPoiSearch();
        } else if (event.key === "Escape") {
            resetState();
        }
    };

    const getPoiSearch = () => {
        const API_KEY = import.meta.env.VITE_KAKAO_MAP_API;
        const mapLat = map.getCenter().Ma;
        const mapLon = map.getCenter().La;

        const params = {
            query: address.trim(),
            x: mapLon,
            y: mapLat,
            radius: 5000,
            sort: "distance",
        };

        console.log(params);

        axios
            .get(KAKAO_ADDRESS_API, {
                params,
                headers: {
                    Authorization: `KakaoAK ${API_KEY}`,
                },
            })
            .then((response) => {
                const data = response.data;

                if (data.documents.length === 0) {
                    alert("검색 결과가 없습니다.");
                } else {
                    const items = data.documents.map((item: any) => ({
                        y: parseFloat(item.y),
                        x: parseFloat(item.x),
                        jibunAddress: item.address_name,
                        roadAddress: item.road_address_name,
                        title: item.place_name,
                        link: item.place_url,
                        distance: parseFloat(item.distance),
                    }));

                    console.log("list items: " + items);
                    // setAddressList(items);
                }
            })
            .catch((error) => {
                console.log("카카오 API 요청 실패:", error);
                alert(error.message);
            });
    };

    useEffect(() => {
        return () => {
            resetState();
        };
    }, []);

    return (
        <article className="flex items-center w-full h-[50px] p-1 text-white border-b border-solid border-gray-300 font-bold">
            {isVisibleSearchForm ? (
                <div className="flex items-center justify-between w-full h-full gap-1">
                    <input
                        type="text"
                        className="w-[calc(100%-46px)] rounded-[5px] border border-solid border-black text-black text-xs h-full focus:outline-none p-2"
                        placeholder="Search..."
                        value={address}
                        onChange={(e) => setAdress(e.target.value)}
                        onKeyDown={onKeydown}
                        ref={searchRef}
                    />
                    <button
                        onClick={toggleSearchForm}
                        className="w-[42px] h-full flex items-center justify-center rounded-[5px] bg-[#09f]"
                    >
                        <img
                            src="/images/icons/ico_x.svg"
                            alt="close"
                            className="w-6 h-6"
                        />
                    </button>
                </div>
            ) : (
                <button
                    onClick={toggleSearchForm}
                    className="gap-2 w-full h-full bg-[#09f] flex items-center justify-center rounded-[5px]"
                >
                    <img
                        src="/images/icons/ico_search.svg"
                        className="w-6 h-6"
                        alt="검색"
                    />
                    <span>검색</span>
                </button>
            )}
        </article>
    );
};
