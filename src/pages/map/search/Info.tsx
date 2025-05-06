import {SearchDto} from "../aside/dto/SearchListDto";
import {InfoContent} from "./contents/InfoContent";

interface Props {
    selectedAddress: SearchDto | null;
    onCloseInfo: () => void;
}

export const Info = ({selectedAddress, onCloseInfo}: Props) => {
    return (
        <>
            {selectedAddress && (
                <section className="fixed left-[360px] w-[calc(100%-360px)] h-[calc(100vh-100px)] bg-[#F5F7F8] text-black py-3 px-4 select-none">
                    <InfoContent
                        selectedAddress={selectedAddress}
                        onCloseInfo={onCloseInfo}
                    />
                </section>
            )}
        </>
    );
};
