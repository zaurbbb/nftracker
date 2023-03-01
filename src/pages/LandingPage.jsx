import React from "react";

import { GreetingModule } from "../modules/GreetingModule";
import { TrendsModule } from "../modules/TrendsModule";

const LandingPage = () => {
    return (
        <>
            <GreetingModule />
            <TrendsModule />
        </>
    );
};

export default LandingPage;
