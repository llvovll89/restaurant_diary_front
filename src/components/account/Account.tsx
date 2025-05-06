import {useNavigate} from "react-router-dom";
import {UserData} from "./type/userData.type";
import {MYPAGE} from "../../routes/Route";

interface Props {
    userData: UserData;
    toggleVisibleAccount: () => void;
    signOut: () => void;
}

export const Account = ({userData, toggleVisibleAccount, signOut}: Props) => {
    const navigate = useNavigate();

    const signOutEvent = () => {
        signOut();
        toggleVisibleAccount();
    };

    const linkToMyPage = () => {
        toggleVisibleAccount();
        navigate(MYPAGE);
    };

    return (
        <section className="w-screen h-screen bg-[rgba(0,0,0,0.36)] flex items-center justify-center fixed left-0 top-0 z-[50]">
            <article className="flex flex-col w-[450px] min-h-[300px] py-3 px-4 rounded-[5px] shadow-lg bg-white gap-3 font-bold">
                <header className="w-full flex items-center justify-between h-[32px]">
                    <span>회원정보</span>
                    <button
                        onClick={toggleVisibleAccount}
                        className="w-max text-md"
                    >
                        close
                    </button>
                </header>

                <article className="flex flex-1 flex-col gap-3 select-none py-2">
                    <div className="flex items-center gap-3">
                        <div className="w-[64px] h-[64px] rounded-full border border-solid border-[#CECECE] bg-[rgba(0,0,0,0.08)] overflow-hidden">
                            {userData.profile_img && (
                                <img
                                    src={userData.profile_img}
                                    className="w-full h-full"
                                />
                            )}
                        </div>

                        <div className="flex flex-col flex-1">
                            <span className="font-bold text-md text-[rgba(0,0,0,0.72)]">
                                {userData.userId}
                            </span>

                            <span className="text-[rgba(0,0,0,0.32)]">
                                {userData.name || "@name"}
                            </span>
                        </div>
                    </div>

                    <ul className="w-full flex flex-col gap-1">
                        <li className="h-11 font-normal text-sm flex items-center px-2 border-b border-solid border-[#CEECEE] border-t justify-between">
                            <span>회원 정보 수정</span>
                            <button
                                onClick={linkToMyPage}
                                className="w-6 h-full text-2xl font-normal"
                            >
                                {">"}
                            </button>
                        </li>
                        <li className="h-11 font-normal text-sm flex items-center px-2 border-b border-solid border-[#CEECEE] justify-between">
                            <span>비밀 번호 수정</span>
                            <button
                                onClick={linkToMyPage}
                                className="w-6 h-full text-2xl font-normal"
                            >
                                {">"}
                            </button>
                        </li>
                        <li className="h-11 font-normal text-sm flex items-center px-2 border-b border-solid border-[#CEECEE] select-none justify-between">
                            <span>로그인 시간</span>
                            <span className="text-xs">{userData.login_tz}</span>
                        </li>
                        <li className="h-11 font-normal text-sm flex items-center px-2 border-b border-solid border-[#CEECEE] select-none justify-between">
                            <span>가입 날짜</span>
                            <span className="text-xs">{userData.login_tz}</span>
                        </li>
                    </ul>
                </article>

                <button
                    onClick={signOutEvent}
                    className="w-full h-11 rounded-[5px] bg-primary text-white"
                >
                    LogOut
                </button>
            </article>
        </section>
    );
};
