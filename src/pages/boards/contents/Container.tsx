import {Link} from "react-router-dom";
import {MAIN} from "../../../routes/Route";
import {Contents} from "./Contents";

interface Props {
    boardList: any;
}

export const Container = ({boardList}: Props) => {
    return (
        <section className="w-[860px] h-[860px]">
            <header className="w-full h-[46px] p-2 flex gap-2 text-xs border border-solid border-[#CECECE] items-center justify-between">
                <div className="w-[85px]">
                    <Link
                        to={MAIN}
                        className="w-[42px] h-full border-r border-solid border-[#CECECE] flex items-center justify-center"
                    >
                        <div className="text-lg">🏠</div>
                    </Link>
                </div>

                <nav>
                    <span>최신</span>
                    <span>화제</span>
                </nav>

                <div className="flex items-center h-full gap-1 w-[85px] justify-center">
                    <button className="w-[36px] h-full border border-solid border-[#CECECE] rounded-[5px]">
                        G
                    </button>
                    <span className="w-[1px] h-full bg-[#CECECE]"></span>
                    <button className="w-[36px] h-full border border-solid border-[#CECECE] rounded-[5px]">
                        F
                    </button>
                </div>
            </header>

            <Contents boardList={boardList} />
        </section>
    );
};
