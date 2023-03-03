import React from "react";
import { useLocation } from "react-router-dom";

import AppRouter from "./AppRouter";

const App = () => {
    const location = useLocation();
    const appClassName = location.pathname.includes("api") ? "app app--api-page" : "app";
    return (
        <div className={appClassName}>
            <AppRouter />
        </div>
    );
};
export default App;
