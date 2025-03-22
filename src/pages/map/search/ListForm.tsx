import {useState} from "react";
import {Form} from "../aside/content/Form";
import {SearchDto} from "../aside/dto/SearchListDto";

interface Props {
    addressList: SearchDto[];
}

export const ListForm = ({addressList}: Props) => {
    const [selectedAddress, setSelectedAddress] = useState<SearchDto | null>(null);

    const handleSelectAddress = (address: SearchDto) => {
        if (address === selectedAddress) {
            setSelectedAddress(null);
        } else {
            setSelectedAddress(address);
        }
    };

    return (
        <div className="w-full h-full grid grid-cols-5 gap-2">
            {addressList.map((address) => (
                <Form key={address.x} address={address} handleSelectAddress={handleSelectAddress} selectedAddress={selectedAddress} />
            ))}
        </div>
    )
}