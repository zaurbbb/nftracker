import React from "react";

import { GreetingModule } from "../modules/GreetingModule";
import { TrendsModule } from "../modules/TrendsModule";
import { PortfolioModule } from "../modules/PortfolioModule";

const LandingPage = () => {
    return (
        <>
            <GreetingModule />
            <TrendsModule />
            <PortfolioModule />
        </>
    );
};

export default LandingPage;
