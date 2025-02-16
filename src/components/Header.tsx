import { Link, useLocation } from "react-router-dom"
import { routes } from "../routes/RoutePath"
import { SignIn } from "../pages/signin/SignIn";
import { useState } from "react";

export const Header = () => {
    const [isActiveSignIn, setIsActiveSignIn] = useState(false);
    const locationPath = useLocation().pathname;

    const toggleActiveSignIn = () => {
        setIsActiveSignIn((prevState) => !prevState);
    }

    return (
        <header className="fixed left-0 top-0 bg-black w-screen h-[50px] pl-4 pr-6 flex items-center justify-between z-[100]">
            <div className="text-white">
                <h1 className="font-bold">Restaurant_diary</h1>
            </div>

            <ul className="flex items-center gap-4 h-full font-bold">
                {
                    routes.map(
                        (r) =>
                            <Link
                                to={r.path}
                                key={r.path}
                                className={`${locationPath === r.path && "bg-[#09f]"} w-[56px] text-white h-full flex items-center justify-center pointerHover:hover:scale-[0.97] pointerHover:hover:bg-sub_navy duration-150 ease-in-out`}
                                title={r.name}
                            >
                                {r.icons ? <img src={r.icons} alt={r.name} className="w-6 h-6" /> : <span>{r.name}</span>}
                            </Link>
                    )
                }
            </ul>

            <div className="w-[120px] h-full">
                <button onClick={toggleActiveSignIn} className={`${isActiveSignIn && "bg-[#09f]"} w-[56px] text-white h-full flex items-center justify-center pointerHover:hover:scale-[0.97] pointerHover:hover:bg-sub_navy duration-150 ease-in-out`}>
                    <img src="images/icons/ico_user.svg" alt="sign-in" className="w-6 h-6" />
                </button>
            </div>

            {isActiveSignIn && <SignIn toggleActiveSignIn={toggleActiveSignIn} />}
        </header>
    )
}