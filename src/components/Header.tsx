import {useLocation, useNavigate } from "react-router-dom";
import {SignIn} from "../components/account/signin/SignIn";
import {useContext, useEffect, useState} from "react";
import {useMap} from "../pages/map/context/MapContext";
import GlobalContext from "../context/globalContext";
import useLocalStorage from "../hooks/useLocalStorage";
import {Search} from "../pages/map/search/Search";
import {BOARD, DIARY, MAIN, MYPAGE, RANKING} from "../routes/Route";
import {HeaderText} from "../type/HeaderText";
import {Sidebar} from "./sidebar/Sidebar";

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
                    } w-[20px] h-[3px] transition-all duration-150 ease-linear`}
                />
            ))}
        </button>
    );

    const signOut = () => {
        const isSignOut = confirm("로그아웃 하시겠습니까?");

        if (isSignOut) {
            deleteValue();
        }
    };

    const refreshPage = () => {
        window.location.reload();
    };

    const setHeaderName = () => {
        if (locationPath === DIARY) {
            return HeaderText.DIARY;
        } else if (locationPath === RANKING) {
            return HeaderText.RANKING;
        } else if (locationPath === MYPAGE) {
            return HeaderText.MYPAGE;
        } else if (locationPath === BOARD) {
            return HeaderText.BOARD;
        } else {
            return HeaderText.MAIN;
        }
    };

    useEffect(() => {
        if (!userId) {
            navigate("/"); // userId가 없으면 "/"로 리다이렉트
        }
    }, [userId, navigate]);

    return (
        <header
            className={`fixed left-0 top-0 z-[10] flex flex-col  ${
                isMobile
                    ? "w-full h-[32px] text-xs px-1"
                    : "bg-white w-screen h-[100px]"
            } ${locationPath !== MAIN && "h-[50px] shadow-sm"}`}
        >
            <div className="w-full flex items-center justify-between h-[50px] px-2">
                <div className="text-white flex items-center gap-2 h-full w-[150px]">
                    {<SidebarToggleButton />}
                </div>

                <button onClick={refreshPage}>
                    <h1 className="font-bold text-black select-none text-xl">
                        {setHeaderName()}
                    </h1>
                </button>

                {!isMobile && (
                    <div className="w-[150px] h-full flex justify-end items-center">
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
                                className="ml-auto w-[36px] h-[36px] bg-[#c0d2d7] text-white rounded-full border border-solid border-[#DEDEDE] text-lg font-bold"
                            >
                                {userId.substring(0, 1)}
                            </button>
                        )}
                    </div>
                )}

                {isActiveSignIn && (
                    <SignIn toggleActiveSignIn={toggleActiveSignIn} />
                )}
            </div>

            {(locationPath === MAIN) && <Search />}
            {isVisibleSidebar && <Sidebar />}
        </header>
    );
};
