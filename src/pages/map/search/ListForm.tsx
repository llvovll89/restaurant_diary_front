import {useState} from "react";
import {Form} from "../aside/content/Form";
import {SearchDto} from "../aside/dto/SearchListDto";

interface Props {
    addressList: SearchDto[];
    handleSelectAddress: (address: SearchDto) => void;
    selectedAddress: SearchDto | null;
}

export const ListForm = ({addressList, handleSelectAddress, selectedAddress}: Props) => {
    return (
        <div className="w-[350px] h-full flex flex-col items-center gap-2 max-h-[calc(100vh-100px)] overflow-y-auto">
            {addressList.map((address) => (
                <Form key={address.x} address={address} handleSelectAddress={handleSelectAddress} selectedAddress={selectedAddress} />
            ))}
        </div>
    )
}