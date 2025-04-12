import {useEffect, useState} from "react";
import {Sidebar} from "../../components/sidebar/Sidebar";
import {useMap} from "../map/context/MapContext";
import axios from "axios";
import {Container} from "./contents/Container";

export const Board = () => {
    const [boardList, setBoardList] = useState([]);
    const {isVisibleSidebar} = useMap();

    const getBoardList = (page: number) => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${page}/comments`)
            .then((res) => {
                setBoardList(res.data);
            });
    };

    useEffect(() => {
        getBoardList(1);
    }, []);

    return (
        <section className="w-full min-h-[calc(100vh-50px)] relative top-[50px] left-0 p-4 flex justify-center">
            {isVisibleSidebar && <Sidebar />}

            <Container boardList={boardList} />
        </section>
    );
};
