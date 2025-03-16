import {useState} from "react";
import {useMap} from "../../context/MapContext";
import {SearchDto} from "../dto/SearchListDto";

const { kakao } = window as any;
interface Props {
    address: SearchDto;
    handleSelectAddress: (address: SearchDto) => void;
    selectedAddress: SearchDto | null;
}

export const Form = ({ address, handleSelectAddress, selectedAddress }: Props) => {
    const { map } = useMap();

    const mapTobounds = () => {
        const bounds = new kakao.maps.LatLngBounds();
        bounds.extend(new kakao.maps.LatLng(address.y, address.x));
        map.setBounds(bounds);

        handleSelectAddress(address);
    };

    return (    
        <article
            key={address.id}
            onClick={mapTobounds}
            className={`${selectedAddress?.address_name === address.address_name ? "border-[#09f]" : "border-[#DEDEDE]"} flex flex-col w-full h-[146px] justify-between py-3 px-2 bg-white border border-solid rounded-[5px] cursor-pointer text-black`}
        >
            <header className="flex items-center justify-between">
                <div className="flex items-center gap-2 select-none">
                    <span
                        title={address.place_name}
                        className="max-w-[190px] overflow-hidden text-ellipsis whitespace-nowrap"
                    >
                        {address.place_name}
                    </span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                    <button className="w-[26px] h-[26px] overflow-hidden rounded-full border border-solid border-[#DEDEDE] bg-gray-100">💕</button>
                    <button className="w-[26px] h-[26px] overflow-hidden rounded-full border border-solid border-[#DEDEDE] bg-gray-100">✅</button>
                </div>
            </header>

            <div className="flex flex-col gap-1 text-xs select-none">
                <div className="flex items-center">
                    <span>{address.address_name}</span>
                </div>

                <div className="flex items-center">
                    <span>{address.road_address_name}</span>
                </div>

                <div>
                    <span>영업시간</span>
                </div>

                <div className="w-full flex gap-1 itemes-center">
                    <span>사이트:</span>
                    <a
                        href={address.place_url}
                        target="_blank"
                        className="text-blue-500"
                    >
                        {address.place_url}
                    </a>
                </div>

                <div>
                    <span>{address.phone}</span>
                </div>
            </div>
        </article>
    );
};
