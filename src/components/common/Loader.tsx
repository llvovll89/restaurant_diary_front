import {SpinterType} from "./type/SpinerType.type";

interface Props {
    className: string;
    type: SpinterType;
}

export const Loader = ({className, type}: Props) => {
    const getTypeRender = () => {
        switch (type) {
            case SpinterType.SPIN:
                return <div className="spinner"></div>;
            case SpinterType.SQUARE:
                return (
                    <div className="spinner-square">
                        <div className="square-1 square"></div>
                        <div className="square-2 square"></div>
                        <div className="square-3 square"></div>
                    </div>
                );
        }
    };

    return <section className={className}>{getTypeRender()}</section>;
};
