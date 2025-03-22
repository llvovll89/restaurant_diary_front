import {Sidebar} from "../../components/sidebar/Sidebar";
import {useMap} from "../map/context/MapContext"

export const Ranking = () => {
    const { isVisibleSidebar } = useMap();

    return (
        <section className="w-full min-h-[calc(100vh-50px)] relative top-[50px] left-0">
            <span>랭킹</span>

            {isVisibleSidebar && <Sidebar />}
        </section>
    )
}