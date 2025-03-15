import React, { useEffect, useRef, useState } from "react";
import { useMap } from "../context/MapContext";
import { SearchDto } from "../aside/dto/SearchListDto";

interface Props {
    setAddressList: React.Dispatch<React.SetStateAction<SearchDto[]>>;
}

const { kakao } = window as any;

export const Search = ({ setAddressList }: Props) => {
    const [isVisibleSearchForm, setIsVisibleSearchForm] = useState(false);
    const [address, setAdress] = useState("");
    const { map } = useMap();

    const searchRef = useRef(null);

    const toggleSearchForm = () => {
        if (address) {
            setAdress("");
            setAddressList([]);
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

    const placesSearchCB = (data: SearchDto[], status: any, pagination: any) => {
        if (status === kakao.maps.services.Status.OK) {
            setAddressList(data);
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          alert('검색 결과가 존재하지 않습니다.');
          return;
        } else if (status === kakao.maps.services.Status.ERROR) {
          alert('검색 결과 중 오류가 발생했습니다.');
          return;
        }
      }

    const getPoiSearch = () => {
        const ps = new kakao.maps.services.Places();
        ps.keywordSearch(address.trim(), placesSearchCB);
    };

    useEffect(() => {
        return () => {
            resetState();
        };
    }, []);

    return (
        <article className="flex w-full h-[82px] px-3 py-2 gap-2 bg-[#09f] text-white border-b border-solid border-gray-300 font-bold flex-col">
            <span>맛집 다이어리</span>

            {isVisibleSearchForm ? (
                <div className="flex items-center justify-between w-full h-[50px] gap-1">
                    <input
                        type="text"
                        className="w-[calc(100%-46px)] rounded-[5px] border border-solid border-white text-black text-xs h-full focus:outline-none p-2"
                        placeholder="장소, 주소, 키워드 검색"
                        value={address}
                        onChange={(e) => setAdress(e.target.value)}
                        onKeyDown={onKeydown}
                        ref={searchRef}
                    />
                    <button
                        onClick={toggleSearchForm}
                        className="w-[42px] h-full flex items-center justify-center rounded-[5px] bg-[#09f] border border-solid border-white"
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
                    className="gap-2 w-full h-[36px] border border-solid flex items-center justify-center rounded-[5px]"
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
