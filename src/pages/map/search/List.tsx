import {useState} from "react";
import {SearchDto} from "../aside/dto/SearchListDto";
import {Info} from "./Info";
import {ListForm} from "./ListForm";

interface Props {
    addressList: SearchDto[];
}
export const List = ({addressList}: Props) => {
    const [selectedAddress, setSelectedAddress] = useState<SearchDto | null>(
        null
    );

    const handleSelectAddress = (address: SearchDto) => {
        if (address === selectedAddress) {
            setSelectedAddress(null);
        } else {
            setSelectedAddress(address);
        }
    };

    const onCloseInfo = () => {
        setSelectedAddress(null);
    };

    return (
        <aside className="fixed left-0 top-[100px] w-[360px] h-[calc(100vh-100px)] bg-white z-[10]">
            <div className="w-full h-[calc(100vh-100px)] pl-2 py-2 flex items-center justify-between">
                <ListForm
                    addressList={addressList}
                    handleSelectAddress={handleSelectAddress}
                    selectedAddress={selectedAddress}
                />
                <Info
                    selectedAddress={selectedAddress}
                    onCloseInfo={onCloseInfo}
                />
            </div>
        </aside>
    );
};
