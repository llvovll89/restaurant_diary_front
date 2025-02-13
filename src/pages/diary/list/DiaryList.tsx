import { DiaryDto } from "../constants/DiaryDto.type"

interface Props {
    diaryList: DiaryDto[]
}

export const DiaryList = ({ diaryList }: Props) => {
    return (
        <>
            {diaryList.map((diary) => (
                <li key={diary.id} className="flex flex-col gap-1 border border-solid border-gray-500 p-2 rounded-[5px] text-sm">
                    <div>제목: {diary.title}</div>
                    <div>내용: {diary.content}</div>
                    <div>생성시간: {diary.createdAt}</div>
                    <div>업데이트시간: {diary.updatedAt}</div>
                </li>
            ))}
        </>
    )
}