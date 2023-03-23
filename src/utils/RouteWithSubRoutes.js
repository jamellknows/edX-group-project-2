import { Routes, Route } from "react-router-dom";

const RouteWithSubRoutes = (route) =>{
    return (
        <Routes>
        <Route 
        path={route.path}
        element={route.element}
        key={route.key}
        />
        </Routes>
    );
};

export default RouteWithSubRoutes;