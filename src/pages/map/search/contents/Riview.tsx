import {useState} from "react";
import {RiviewDto, mockRiviewList} from "../constants/Riview.dto";
import {formatDateTime} from "../../../../utils/formatDateTime";

export const Riview = () => {
    const [riviewList, setRiviewList] = useState<RiviewDto[]>(mockRiviewList);

    const overListScrollStyle = () => {
        const MAX_SIZE = 25;

        if (riviewList.length >= MAX_SIZE) {
            return "overflow-y-scroll scroll h-[760px]";
        }
    };

    return (
        <ul className={`w-full flex flex-col gap-1 ${overListScrollStyle()}`}>
            {riviewList.map((r) => (
                <li
                    className="w-full min-h-[38px] flex items-center gap-2 px-2 border-b border-solid border-[#CECECE] text-[13px]"
                    key={r.id}
                >
                    <span className="max-w-[10%] w-[10%] h-full overflow-hidden text-ellipsis whitespace-nowrap border-r border-solid border-[#CECECE] flex items-center">
                        {r.userName}
                    </span>
                    <span className="flex items-center w-[70%] h-full border-r border-solid border-[#CECECE]">
                        {r.content}
                    </span>
                    <div className="flex items-center gap-1 w-[10%] h-full border-r border-solid border-[#CECECE]">
                        <span>좋아요</span>
                        <span className="text-red-600">{r.like}</span>
                    </div>
                    <span className="block w-[10%]">
                        {formatDateTime(r.createdAt)}
                    </span>
                </li>
            ))}
        </ul>
    );
};
