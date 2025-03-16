import {SearchDto} from "./dto/SearchListDto";
import {ListForm} from "./ListForm";

interface Props {
    addressList: SearchDto[];
}
export const List = ({addressList}: Props) => {
    return (
        <aside className="fixed left-0 top-[100px] w-[350px] h-[calc(100vh-100px)] bg-white z-[10]">
            <div className="w-full h-[calc(100vh-132px)] overflow-y-auto p-2">
                <ListForm addressList={addressList} />
            </div>
        </aside>
    )
}