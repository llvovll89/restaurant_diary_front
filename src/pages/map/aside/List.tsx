import {useState} from "react"
import {Search} from "../search/Search"
import {ListForm} from "./ListForm";
import {SearchDto} from "./dto/SearchListDto";

export const List = () => {
    const [addressList, setAddressList] = useState<SearchDto[]>([]);

    return (
        <aside className="fixed left-0 top-[50px] w-[350px] h-[calc(100vh-50px)] bg-white z-[10]">
            <Search setAddressList={setAddressList} />

            <div className="w-full h-[calc(100vh-132px)] overflow-y-auto p-2">
                {addressList.length > 0 && <ListForm addressList={addressList} />}
                {addressList.length === 0 && <div className="w-full h-full flex items-center justify-center flex-col gap-1">
                    <span className="text-black select-none">검색 해주시기 바랍니다.</span>    
                    <span>키워드로 검색 할 수 있습니다.</span>
                </div>}
            </div>
        </aside>
    )
}