import Search from "../components/Search";
import { Info } from "../components/Info";
import Saved from "../components/Saved";

const routes = [
    {
        path: '/search',
        element: <Search/>,
        key: '1',
        
    },
    {
        path: '/info',
        element: <Info/>,
        key: '2',
    },
    {
        path: '/saved',
        element: <Saved/>,
        key: '3',
    },
];

export default routes;