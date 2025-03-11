import { useState } from "react"
import { Search } from "../search/Search"
import { ListForm } from "./ListForm";

export const List = () => {
    const [addressList, setAddressList] = useState<any[]>([]);

    return (
        <aside className="fixed left-0 top-[50px] w-[350px] h-[calc(100vh-50px)] bg-white z-[10]">
            <Search setAddressList={setAddressList} />

            <div className="w-full h-[calc(100vh-132px)] overflow-y-auto p-2 bg-gray-100">
                {addressList.length > 0 && <ListForm addressList={addressList} />}
            </div>
        </aside>
    )
}