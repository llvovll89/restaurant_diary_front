import { useState } from "react";
import useLocalStorage from "../../../../hooks/useLocalStorage";

interface Props {
    toggleActiveSignIn: () => void;
}

export const SignInForm = ({ toggleActiveSignIn }: Props) => {
    const [userId, setUserId] = useLocalStorage<string>("userId", "");
    const [signInData, setSignInData] = useState({
        id: userId,
        password: "",
    });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = event.target;

        setSignInData({
            ...signInData,
            [name]: event.target.value,
        });
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setUserId(signInData.id);
        
        alert(`${signInData.id}(님) 반갑습니다!`);
        toggleActiveSignIn();
    };

    return (
        <form className="w-full flex items-center gap-3 flex-col" onSubmit={onSubmit}>
            <div className="w-full flex flex-col gap-1">
                <label className="text-sm">아이디</label>
                <input
                    type="text"
                    name="id"
                    value={signInData.id}
                    onChange={onChange}
                    placeholder="아이디"
                    required
                    className="w-full px-4 py-2 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className="w-full flex flex-col gap-1">
                <label className="text-sm">비밀번호</label>
                <input
                    type="password"
                    name="password"
                    value={signInData.password}
                    onChange={onChange}
                    placeholder="비밀번호"
                    required
                    className="w-full px-4 py-2 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>

            <button type="submit" className="bg-blue-400 text-white w-full h-[46px] rounded-[5px]">
                로그인
            </button>
        </form>
    )
}