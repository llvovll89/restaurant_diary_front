import { SearchDto } from "../dto/SearchListDto";

interface Props {
    address: SearchDto;
}

export const Form = ({ address }: Props) => {
    return (
        <article
            key={address.id}
            className="flex flex-col w-full h-[146px] justify-between py-3 px-2 bg-white"
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
