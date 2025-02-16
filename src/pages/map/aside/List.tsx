import { useState } from "react"
import { Search } from "../search/Search"

export const List = () => {
    const [addressList, setAddressList] = useState([]);

    return (
        <aside className="fixed left-0 top-[50px] w-[350px] h-[calc(100vh-50px)] bg-white z-[10]">
            <Search setAddressList={setAddressList} />
        </aside>
    )
}