import {useEffect, useState} from "react"
import {DiaryList} from "./list/DiaryList"
import {DiaryDto} from "./constants/DiaryDto.type"
import {Form} from "./form/Form";

export const Diary = () => {
    const [diaryList, setDiaryList] = useState<DiaryDto[]>([]);
    const [selectedDiary, setSelectedDiary] = useState<DiaryDto | null>(null);

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

    const selectedItem = (diary: DiaryDto) => {
        if (selectedDiary !== diary) {
            setSelectedDiary(diary);
        } else {
            setSelectedDiary(null);
        }
    };

    const resetSelectedDiary = () => {
        setSelectedDiary(null);
    }

    return (
        <section className="w-full min-h-[calc(100vh-50px)] relative top-[50px] left-0 flex">
            <aside className="w-[300px] h-full relative border-r border-solid border-gray-200">
                <ul className="w-full p-2 flex flex-col gap-3">
                    <DiaryList diaryList={diaryList} selectedItem={selectedItem} selectedDiary={selectedDiary} />
                </ul>
            </aside>

            {
                selectedDiary && (
                    <Form selectedDiary={selectedDiary} resetSelectedDiary={resetSelectedDiary} />
                )
            }
        </section>
    )
}