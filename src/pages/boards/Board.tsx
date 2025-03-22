import {Sidebar} from "../../components/sidebar/Sidebar";
import {useMap} from "../map/context/MapContext";

export const Board = () => {
    const { isVisibleSidebar } = useMap();

    return (
        <section className="w-full min-h-[calc(100vh-50px)] relative top-[50px] left-0">
            <span>게시판</span>

            {isVisibleSidebar && <Sidebar />}
        </section>
    )
}