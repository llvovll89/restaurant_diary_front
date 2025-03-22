import {Link, useLocation} from "react-router-dom";
import {Navbar} from "./content/Navbar";
import {MAIN} from "../../routes/Route";
import {useNetWorkCheck} from "../../hooks/useNetworkCheck";

export const Sidebar = () => {
    const locationPath = useLocation().pathname;
    const { isOnline } = useNetWorkCheck();

    return (
        <aside className={`${locationPath !== MAIN ? "h-[calc(100vh-50px)] top-[50px]" : "h-[calc(100vh-100px)] top-[100px]"} fixed left-0 w-[350px]  bg-white z-[50] overflow-hidden border-r border-solid border-[#DEDEDE]`}>
            <ul className="flex flex-col gap-2 p-2 h-[calc(100vh-160px)] overflow-y-hidden w-full">
                <Navbar  />
            </ul>

            <div className="w-full border-t border-solid border-[#DEDEDE] h-[56px] absolute bottom-0 left-0 flex items-center">
                <div className="w-[52px] h-full border-r border-solid border-[#DEDEDE] flex items-center justify-center">
                    <Link to={MAIN} className="text-xs">
                        HOME
                    </Link>
                </div>
                <div className={`${isOnline ? "" : "bg-[#DEDEDE] bg-opacity-70"} w-[52px] h-full border-r border-solid border-[#DEDEDE] flex items-center justify-center`}>
                    <img src="/images/icon/16x16/ico_signal.png" />
                </div>
            </div>
        </aside>    
    )
};