import LandingPage from "../pages/LandingPage";
import ApiPage from "../pages/ApiPage";
import { ApiServiceModule } from "../modules/ApiServiceModule";
import { MintsModule } from "../modules/MintsModule";
import { WatchListModule } from "../modules/WatchListModule";
import { PortfolioModule } from "../modules/PortfolioModule";
import { TrendsModule } from "../modules/TrendsModule";

export const publicRoutes = [
    { path: "/", component: <LandingPage />, id: 1 },
    { path: "/api", component: <ApiPage />, id: 2 },
    { path: "/api/trends", component: <ApiPage module={<TrendsModule />} />, id: 2 },
    { path: "/api/portfolio", component: <ApiPage module={<PortfolioModule />} />, id: 2 },
    { path: "/api/watchList", component: <ApiPage module={<WatchListModule />} />, id: 2 },
    { path: "/api/mints", component: <ApiPage module={<MintsModule />} />, id: 2 },
    { path: "/api/apiService", component: <ApiPage module={<ApiServiceModule />} />, id: 2 },
];
