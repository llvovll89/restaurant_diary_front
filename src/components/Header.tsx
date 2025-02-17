import { Link, useLocation } from "react-router-dom";
import { routes } from "../routes/RoutePath";
import { SignIn } from "../pages/signin/SignIn";
import { useContext, useState } from "react";
import { useMap } from "../pages/map/context/MapContext";
import GlobalContext from "../context/globalContext";

export const Header = () => {
    const [isActiveSignIn, setIsActiveSignIn] = useState(false);
    const locationPath = useLocation().pathname;
    const { toggleIsVisibleSidebar, isVisibleSidebar } = useMap();
    const { isMobile } = useContext(GlobalContext);

    const toggleActiveSignIn = () => setIsActiveSignIn((prev) => !prev);

    // ✅ 공통 버튼 컴포넌트
    const SidebarToggleButton = () => (
        <button className={`${isMobile ? "py-1" : "py-3"} relative h-full flex flex-col justify-evenly`} onClick={toggleIsVisibleSidebar}>
            {[...Array(3)].map((_, i) => (
                <span
                    key={i}
                    className={`${isVisibleSidebar ? "bg-[#09f]" : "bg-black"} w-[20px] h-[5px] transition-all duration-150 ease-linear`}
                />
            ))}
        </button>
    );

    // ✅ 공통 네비게이션 링크 컴포넌트
    const NavLinks = () => (
        <ul className="flex items-center gap-4 h-full font-bold">
            {routes.map((r) => (
                <Link
                    to={r.path}
                    key={r.path}
                    className={`${locationPath === r.path && "bg-[#09f]"} w-[56px] text-black h-full flex items-center justify-center pointerHover:hover:scale-[0.97] pointerHover:hover:bg-sub_navy duration-150 ease-in-out`}
                    title={r.name}
                >
                    {r.icons ? <img src={r.icons} alt={r.name} className="w-6 h-6" /> : <span>{r.name}</span>}
                </Link>
            ))}
        </ul>
    );

    return (
        <header
            className={`fixed left-0 top-0 z-[100] flex items-center justify-between ${isMobile ? "w-full h-[32px] text-xs px-1" : "bg-white w-screen h-[50px] pl-2 pr-6"}`}
        >
            <div className="text-white flex items-center gap-2 h-full">
                <SidebarToggleButton />
                <h1 className="font-bold text-black select-none">Restaurant_diary</h1>
            </div>

            <NavLinks />

            {!isMobile && (
                <div className="w-[120px] h-full">
                    <button
                        onClick={toggleActiveSignIn}
                        className={`${isActiveSignIn && "bg-[#09f]"} w-[56px] text-white h-full flex items-center justify-center pointerHover:hover:scale-[0.97] pointerHover:hover:bg-sub_navy duration-150 ease-in-out`}
                    >
                        <img src="images/icons/ico_user.svg" alt="sign-in" className="w-6 h-6" />
                    </button>
                </div>
            )}

            {isActiveSignIn && <SignIn toggleActiveSignIn={toggleActiveSignIn} />}
        </header>
    );
};
