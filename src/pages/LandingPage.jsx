import React from "react";

import { GreetingModule } from "../modules/GreetingModule";
import { TrendsModule } from "../modules/TrendsModule";
import { PortfolioModule } from "../modules/PortfolioModule";
import { WatchListModule } from "../modules/WatchListModule";
import { MintsModule } from "../modules/MintsModule";
import { ApiServiceModule } from "../modules/ApiServiceModule";

const LandingPage = () => {
    return (
        <>
            <GreetingModule />
            <TrendsModule />
            <PortfolioModule />
            <WatchListModule />
            <MintsModule />
            <ApiServiceModule />
        </>
    );
};

export default LandingPage;
