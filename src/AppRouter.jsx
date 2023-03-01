import React from "react";
import {
    Navigate,
    Route,
    Routes
} from "react-router-dom";
import { publicRoutes } from "./config/routesConrfig";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    key={route.id}
                    element={route.component}
                    path={route.path}
                />
            )}
            {/*<Route*/}
            {/*    path="*"*/}
            {/*    element={*/}
            {/*        <Navigate*/}
            {/*            to="/"*/}
            {/*            replace*/}
            {/*        />*/}
            {/*    }*/}
            {/*/>*/}
        </Routes>
    );
};

export default AppRouter;
