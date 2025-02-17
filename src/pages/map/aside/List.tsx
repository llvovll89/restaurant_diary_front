import { useState } from "react"
import { Search } from "../search/Search"

export const List = () => {
    const [addressList, setAddressList] = useState([]);

    return (
        <aside className="fixed left-0 top-[50px] w-[350px] h-[calc(100vh-50px)] bg-white z-[10]">
            <Search setAddressList={setAddressList} />

            <div className="w-full h-[calc(100vh-132px)] overflow-y-auto">
                {/* 검색 리스트  */}
            </div>
        </aside>
    )
}