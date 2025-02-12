import { Diary } from "../pages/diary/Diary";
import { Map } from "../pages/map/Map";
import { DIARY, MAIN } from "./Route";

export const routes = [
    { path: MAIN, component: Map, name: "Main" },
    { path: DIARY, component: Diary, name: "Diary" },
    // {path: "*", component: NotFoundPage}, // 404 page
];