import React from "react";

import { GreetingModule } from "../modules/GreetingModule";
import { TrendsModule } from "../modules/TrendsModule";
import { PortfolioModule } from "../modules/PortfolioModule";
import { WatchListModule } from "../modules/WatchListModule";

const LandingPage = () => {
    return (
        <>
            <GreetingModule />
            <TrendsModule />
            <PortfolioModule />
            <WatchListModule />
        </>
    );
};

export default LandingPage;
