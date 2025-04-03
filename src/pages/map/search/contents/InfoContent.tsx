import {SearchDto} from "../../aside/dto/SearchListDto";
import {Riview} from "./Riview";

interface Props {
    selectedAddress: SearchDto;
}

export const InfoContent = ({selectedAddress}: Props) => {
    console.log(selectedAddress);

    return (
        <div className="w-full h-full flex flex-col gap-4">
            <header className="w-full h-[52px] flex justify-between items-center">
                <div className="flex flex-col">
                    <span className="text-lg">
                        {selectedAddress.place_name}
                    </span>
                    <span>({selectedAddress.category_name})</span>
                </div>
            </header>

            <div className="w-full flex flex-col h-[800px] border border-solid border-[#CECECE] bg-white ">
                <div className="p-2 border-b border-solid border-[#CECECE] flex justify-between gap-1 w-full h-[40px]">
                    <h2>{"<Review>"}</h2>
                    <a
                        href={selectedAddress.place_url}
                        target="_blank"
                        className="pr-4 text-xs flex items-center cursor-pointer text-primary"
                    >
                        {selectedAddress.place_url}
                    </a>
                </div>

                <Riview />
            </div>
        </div>
    );
};
