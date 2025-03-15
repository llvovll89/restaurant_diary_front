import { Form } from "./content/Form";
import {SearchDto} from "./dto/SearchListDto";

interface Props {
    addressList: SearchDto[];
}

export const ListForm = ({addressList}: Props) => {
    return (
        <div className="w-full h-full flex flex-col gap-2">
            {addressList.map((address) => (
                <Form address={address} />
            ))}
        </div>
    )
}