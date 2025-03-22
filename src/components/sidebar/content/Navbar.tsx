import {Link} from "react-router-dom"
import {routes} from "../../../routes/RoutePath"
import {useMap} from "../../../pages/map/context/MapContext";

export const Navbar = () => {
    const { toggleIsVisibleSidebar } = useMap();

    return (
        <>
            {routes.map((r) => (
                <li key={r.name} className="pointerHover:hover:border-primary pointerHover:hover:scale-[1.025] transition-all duration-150 ease-linear cursor-pointer w-full h-[42px] border-b border-solid border-[#DEDEDE] flex items-center px-2">
                    <Link to={r.path} onClick={toggleIsVisibleSidebar} key={r.path} className="w-full h-full leading-[42px]">
                        {r.name}
                    </Link>
                </li>
            ))}  
        </>
    )
}   