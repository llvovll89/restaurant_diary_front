import {Loader} from "../../../components/common/Loader";
import {SpinterType} from "../../../components/common/type/SpinerType.type";

interface Props {
    boardList: any[];
}

export const Contents = ({boardList}: Props) => {
    return (
        <article className="w-full h-[calc(100%-46px)] relative">
            {boardList.length !== 0 ? (
                boardList.map((b) => <li key={b.id}>{b.name}</li>)
            ) : (
                <Loader
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    type={SpinterType.SQUARE}
                />
            )}
        </article>
    );
};
