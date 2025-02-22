import { useEffect, useRef } from "react";
import { DiaryDto } from "../constants/DiaryDto.type"

interface Props {
    selectedDiary: DiaryDto | null;
    resetSelectedDiary: () => void
}

export const Form = (props: Props) => {
    const titleRef = useRef<HTMLInputElement | null>(null);
    const contentRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        if (props.selectedDiary) {
            if (titleRef.current) titleRef.current.value = props.selectedDiary.title;
            if (contentRef.current) contentRef.current.value = props.selectedDiary.content;
        }
    }, [props.selectedDiary]);

    return (
        <section className="w-[100vw] h-[calc(100vh-50px)] absolute left-0 top-0 flex items-center justify-center">
            <article className="w-[850px] h-[850px] border border-solid border-[#CECECE] rounded-[5px] flex flex-col m-auto shadow-lg">
                <header className="px-2 w-full h-[56px] border-b border-solid border-[#CECECE] flex justify-between items-center">
                    <input type="text" ref={titleRef} className="focus:border-b border-solid border-[#09f] w-[calc(100%-42px)] h-[42px]" />
                    <button onClick={props.resetSelectedDiary} className="rounded-[5px] flex items-center justify-center w-8 h-8 bg-black">
                        <img src="images/icons/ico_x.svg" className="w-4 h-f" />
                    </button>
                </header>

                <div className="flex flex-col gap-2 p-2">
                    <textarea ref={contentRef} className="w-full min-h-[550px] resize-none border border-solid border-[#CECECE] p-2 rounded-[5px] focus:border-[#09f]"></textarea>
                </div>

                <div className="flex items-center justify-between p-2">
                    <div className="w-1/2 flex gap-1 flex-col">
                        <span>생성시간: {props.selectedDiary?.createdAt}</span>
                        <span>수정시간: {props.selectedDiary?.updatedAt}</span>
                    </div>
                    <div className="flex items-center justify-end w-1/2 h-full gap-1 text-white">
                        <button className="w-[100px] h-full p-1 bg-blue-500">저장하기</button>
                        <button className="w-[100px] h-full p-1 bg-red-500">삭제하기</button>
                    </div>
                </div>
            </article>
        </section>
    )
}