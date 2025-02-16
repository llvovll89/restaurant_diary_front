import { Diary } from "../pages/diary/Diary";
import { Map } from "../pages/map/Map";
import { DIARY, MAIN } from "./Route";

export const routes = [
    { path: MAIN, component: Map, name: "Main" , icons: "/images/icons/ico_map.svg" },
    { path: DIARY, component: Diary, name: "Diary" },
    // {path: "*", component: NotFoundPage}, // 404 page
];