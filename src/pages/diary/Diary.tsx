import { useEffect, useState } from "react"
import { DiaryList } from "./list/DiaryList"
import { DiaryDto } from "./constants/DiaryDto.type"

export const Diary = () => {
    const [diaryList, setDiaryList] = useState<DiaryDto[]>([]);

    useEffect(() => {
        setDiaryList([
            {
                id: 1,
                title: "Title 1",
                content: "Content 1",
                createdAt: Date.now(),
                updatedAt: Date.now(),
            },
            {
                id: 2,
                title: "Title 2",
                content: "Content 2",
                createdAt: Date.now(),
                updatedAt: Date.now(),
            },
            {
                id: 3,
                title: "Title 3",
                content: "Content 3",
                createdAt: Date.now(),
                updatedAt: Date.now(),
            },
        ])
    }, []);

    return (
        <section className="w-screen h-[calc(100vh-50px)] fixed top-[50px] left-0 bg-primary">
            <aside className="w-[300px] h-full bg-black text-white">
                <ul className="w-full p-2 flex flex-col gap-3">
                    <DiaryList diaryList={diaryList} />
                </ul>
            </aside>
        </section>
    )
}