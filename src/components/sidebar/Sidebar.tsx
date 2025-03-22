import {useLocation} from "react-router-dom";
import {Navbar} from "./content/Navbar";
import {MAIN} from "../../routes/Route";

export const Sidebar = () => {
    const locationPath = useLocation().pathname;

    return (
        <aside className={`${locationPath !== MAIN ? "h-[calc(100vh-50px)] top-[50px]" : "h-[calc(100vh-100px)] top-[100px]"} fixed left-0 w-[350px]  bg-white z-[10] overflow-hidden border-r border-solid border-[#DEDEDE]`}>
            <ul className="flex flex-col gap-2 p-2 h-full w-full">
                <Navbar  />
            </ul>
        </aside>    
    )
};