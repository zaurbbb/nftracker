import React from "react";

import PortfolioModuleCollapseCollection from "./PortfolioModuleCollapseCollection";
import PortfolioModuleCollapseItems from "./PortfolioModuleCollapseItems";

const PortfolioModuleCollapse = () => {
    return (
        <div className="portfolio__collapse">
            <PortfolioModuleCollapseCollection />
            <PortfolioModuleCollapseItems />
        </div>
    );
};

export default PortfolioModuleCollapse;
