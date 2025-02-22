import { Link, useLocation, useNavigate } from "react-router-dom";
import { routes } from "../routes/RoutePath";
import { SignIn } from "../components/account/signin/SignIn";
import { useContext, useEffect, useState } from "react";
import { useMap } from "../pages/map/context/MapContext";
import GlobalContext from "../context/globalContext";
import useLocalStorage from "../hooks/useLocalStorage";

export const Header = () => {
    const [isActiveSignIn, setIsActiveSignIn] = useState(false);
    const locationPath = useLocation().pathname;
    const { toggleIsVisibleSidebar, isVisibleSidebar } = useMap();
    const { isMobile } = useContext(GlobalContext);
    const [userId, , deleteValue] = useLocalStorage<string>("userId", "");
    const navigate = useNavigate();

    const toggleActiveSignIn = () => setIsActiveSignIn((prev) => !prev);

    // ✅ 공통 버튼 컴포넌트
    const SidebarToggleButton = () => (
        <button
            className={`${
                isMobile ? "py-1" : "py-3"
            } relative h-full flex flex-col justify-evenly`}
            onClick={toggleIsVisibleSidebar}
        >
            {[...Array(3)].map((_, i) => (
                <span
                    key={i}
                    className={`${
                        isVisibleSidebar ? "bg-[#09f]" : "bg-black"
                    } w-[20px] h-[5px] transition-all duration-150 ease-linear`}
                />
            ))}
        </button>
    );

    // ✅ 공통 네비게이션 링크 컴포넌트
    const NavLinks = () => {
        const handleClick = (r: { path: string }) => {
            if (!userId && r.path === "/diary") {
                alert("로그인이 필요합니다.");
                return false; // 링크 이동을 막음
            }
            return true; // 정상적으로 링크 이동
        };

        return (
            <ul className="flex items-center h-full font-bold">
                {routes.map((r) => (
                    <Link
                        to={r.path}
                        key={r.path}
                        className={`${
                            locationPath === r.path ? "bg-[#09f]" : "bg-black"
                        } w-[56px] text-white h-full flex items-center justify-center pointerHover:hover:scale-[0.97] pointerHover:hover:bg-sub_navy duration-150 ease-in-out`}
                        title={r.name}
                        onClick={(e) => {
                            if (!handleClick(r)) {
                                e.preventDefault(); // 링크 이동을 막음
                            }
                        }}
                    >
                        {r.icons ? (
                            <img
                                src={r.icons}
                                alt={r.name}
                                className="w-6 h-6"
                            />
                        ) : (
                            <span>{r.name}</span>
                        )}
                    </Link>
                ))}
            </ul>
        );
    };

    const signOut = () => {
        const isSignOut = confirm("로그아웃 하시겠습니까?");

        if (isSignOut) {
            deleteValue();
        }
    };

    useEffect(() => {
        if (!userId) {
            navigate("/"); // userId가 없으면 "/"로 리다이렉트
        }
    }, [userId, navigate]);

    return (
        <header
            className={`fixed left-0 top-0 z-[100] flex items-center justify-between ${
                isMobile
                    ? "w-full h-[32px] text-xs px-1"
                    : "bg-white w-screen h-[50px] pl-2"
            }`}
        >
            <div className="text-white flex items-center gap-2 h-full w-[150px]">
                <SidebarToggleButton />
                <h1 className="font-bold text-black select-none">
                    Restaurant_diary
                </h1>
            </div>

            <NavLinks />

            {!isMobile && (
                <div className="w-[150px] h-full flex justify-end">
                    {!userId ? (
                        <button
                            onClick={toggleActiveSignIn}
                            className={`${
                                isActiveSignIn ? "bg-[#09f]" : "bg-black"
                            } w-[56px] text-white h-full flex items-center justify-center pointerHover:hover:scale-[0.97] pointerHover:hover:bg-sub_navy duration-150 ease-in-out`}
                        >
                            <img
                                src="images/icons/ico_user.svg"
                                alt="sign-in"
                                className="w-6 h-6"
                            />
                        </button>
                    ) : (
                        <button
                            onClick={signOut}
                            className="ml-auto w-[56px] h-full bg-black text-white text-lg font-bold"
                        >
                            {userId.substring(0, 1)}
                        </button>
                    )}
                </div>
            )}

            {isActiveSignIn && (
                <SignIn toggleActiveSignIn={toggleActiveSignIn} />
            )}
        </header>
    );
};
