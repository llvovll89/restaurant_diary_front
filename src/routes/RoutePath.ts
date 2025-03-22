import {Board} from "../pages/boards/Board";
import {Diary} from "../pages/diary/Diary";
import {Map} from "../pages/map/Map";
import {MyPage} from "../pages/mypage/Mypage";
import {Ranking} from "../pages/ranking/Ranking";
import {BOARD, DIARY, MAIN, MYPAGE, RANKING} from "./Route";

interface RouteItems {
    path: string;
    component: React.FC;
    icon: string;
    name: string;
}

export const routes: RouteItems[] = [
    { path: MAIN, component: Map, name: "Main" , icon: "/images/icons/ico_map.svg" },
    { path: DIARY, component: Diary, name: "Diary", icon: "" },
    { path: MYPAGE, component: MyPage, name: "Mypage", icon: "" },
    { path: BOARD, component: Board, name: "Board", icon: "" },
    { path: RANKING, component: Ranking, name: "Rank", icon: "" },
    // {path: "*", component: NotFoundPage}, // 404 page
];