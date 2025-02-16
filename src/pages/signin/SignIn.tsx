import { useEffect } from "react"
import { SignInForm } from "./form/SignInForm";

interface Props {
    toggleActiveSignIn: () => void;
}
export const SignIn = ({ toggleActiveSignIn }: Props) => {
    useEffect(() => {
        console.log("render");

        return () => {
            console.log("unmount");
        }
    }, []);

    return (
        <section className="w-screen h-screen z-[10] fixed left-0 top-0 bg-[rgba(0,0,0,0.32)] flex items-center justify-center font-bold">
            <article className="w-[400px] h-[360px] rounded-[5px] shadow-2xl p-6 bg-white flex flex-col gap-2 justify-between z-[200]">
                <div className="flex items-center w-full justify-between">
                    <h1 className="text-xl">맛집 다이어리</h1>
                    <button onClick={toggleActiveSignIn} className="bg-black rounded-[5px]">
                        <img src="/images/icons/ico_x.svg" />
                    </button>
                </div>

                <SignInForm toggleActiveSignIn={toggleActiveSignIn} />

                <button className="bg-black text-white w-full h-[46px] rounded-[5px]">
                    회원가입
                </button>
            </article>
        </section>
    )
}