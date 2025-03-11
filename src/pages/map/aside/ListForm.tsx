import {SearchDto} from "./dto/SearchListDto";

interface Props {
    addressList: SearchDto[];
}

export const ListForm = ({addressList}: Props) => {
    const submitDiary = () => {
        alert("저장되었습니다.")
    }

    console.log(addressList)

    return (
        <div className="w-full h-full flex flex-col gap-2">
            {addressList.map((address) => (
                <article key={address.id} className="flex flex-col w-full h-[146px] justify-between py-3 px-2 bg-white">
                <header className="flex items-center justify-between">
                    <div className="flex items-center gap-2 select-none">
                        <span>{address.place_name}</span>
                    </div>
    
                    <div className="flex items-center gap-2 text-sm">
                        <button onClick={submitDiary}>저장</button>
                        <button>다이어리</button>
                    </div>
                </header>
    
                <div className="flex flex-col gap-1 text-xs select-none">
                    <div className="flex items-center justify-start gap-1">
                        <span>지번 주소:</span>
                        <span>{address.address_name}</span>
                    </div>
    
                    <div className="flex items-center gap-1">
                        <span>도로명 주소:</span>
                        <span>{address.road_address_name}</span>
                    </div>
    
                    <div>
                        <span>영업시간</span>
                    </div>

                    <div className="w-full flex gap-1 itemes-center">
                        <span>사이트:</span>
                        <span>{address.place_url}</span>
                    </div>
    
                    <div>
                        <span>{address.phone}</span>
                    </div>
                </div>
            </article>
            ))}
        </div>
    )
}