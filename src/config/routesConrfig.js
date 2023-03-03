import LandingPage from "../pages/LandingPage";
import AppPage from "../pages/AppPage";

export const publicRoutes = [
    {path: "/", component: <LandingPage />, id: 1},
    {path: "/app", component: <AppPage />, id: 2},
];
