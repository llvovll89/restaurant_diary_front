export const ListForm = () => {
    const submitDiary = () => {
        alert("저장되었습니다.")
    }

    return (
        <article className="flex flex-col w-full h-[146px] justify-between py-3 px-2 bg-white">
            <header className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span></span>
                    <span></span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                    <button onClick={submitDiary}>저장</button>
                    <button>다이어리</button>
                </div>
            </header>

            <div className="flex flex-col gap-1 text-xs">
                <div className="flex items-center justify-start gap-1">
                    <span>점수</span>
                    <span>xxxxx</span>
                </div>

                <div className="w-full">
                    <span>장소 + 이름</span>
                </div>

                <div>
                    <span>(지번) 지번~~~</span>
                </div>

                <div>
                    <span>영업시간</span>
                </div>

                <div>
                    <span>전화번호</span>
                </div>
            </div>
        </article>
    )
}