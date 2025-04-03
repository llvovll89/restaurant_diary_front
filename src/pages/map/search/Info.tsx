import {SearchDto} from "../aside/dto/SearchListDto";
import {InfoContent} from "./contents/InfoContent";

interface Props {
    selectedAddress: SearchDto | null;
}

export const Info = ({selectedAddress}: Props) => {
    const notFoundSelectedAddress = () => {
        return <span>DefaultAddress</span>;
    };

    return (
        <section className="w-[calc(100%-358px)] h-full bg-[#F5F7F8] text-black py-3 px-4 select-none">
            {selectedAddress ? (
                <InfoContent selectedAddress={selectedAddress} />
            ) : (
                notFoundSelectedAddress()
            )}
        </section>
    );
};
