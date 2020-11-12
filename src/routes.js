import Planets from './pages/Planets';
import Films from './pages/Films';
import Residents from './pages/Residents';
import Detail from './pages/Detail';

export const routes = [
    {
        path: "/",
        component: Planets
    },
    {
        path: "/films",
        component: Films
    },
    {
        path: "/residents",
        component: Residents
    },
    {
        path: "/detail",
        component: Detail
    }
]