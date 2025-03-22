import {SearchDto} from "../aside/dto/SearchListDto"

interface Props {
    selectedAddress: SearchDto | null;
}

export const Info = ({selectedAddress}: Props) => {

    const notFoundSelectedAddress = () => {
        return (
            <span>DefaultAddress</span>
        );
    };

    return (
        <section className="w-[calc(100%-358px)] h-full bg-primary text-white py-3 px-4 select-none">
            {
                selectedAddress ? (
                    <>
                        <span>{selectedAddress.place_name}</span>
                        <span>{selectedAddress.address_name}</span>
                    </>
                ) : notFoundSelectedAddress()
            }
        </section>
    )
}