import {MainPage} from "./pages/Main";
import {BoardPage} from "./pages/Board";

export const routes = [
    {
        path: "/",
        component: MainPage
    },
    {
        path: "/boards",
        component: BoardPage
    }
]