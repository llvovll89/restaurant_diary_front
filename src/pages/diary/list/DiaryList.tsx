import { DiaryDto } from "../constants/DiaryDto.type"

interface Props {
    diaryList: DiaryDto[];
    selectedItem: (diary: DiaryDto) => void;
    selectedDiary: DiaryDto;
}

export const DiaryList = ({ diaryList, selectedItem, selectedDiary }: Props) => {
    return (
        <>
            {diaryList.map((diary) => (
                <li onClick={() => selectedItem(diary)} key={diary.id} className={`${selectedDiary === diary && "bg-[#09f] bg-opacity-60 text-white"} cursor-pointer flex flex-col gap-1 border border-solid border-gray-500 p-2 rounded-[5px] text-sm`}>
                    <div>제목: {diary.title}</div>
                    <div>내용: {diary.content}</div>
                    <div>생성시간: {diary.createdAt}</div>
                    <div>업데이트시간: {diary.updatedAt}</div>
                </li>
            ))}
        </>
    )
}