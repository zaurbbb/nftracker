import React from "react";

import PortfolioModuleStatisticsBalances from "./PortfolioModuleStatisticsBalances";
import PortfolioModuleStatisticsHoldings from "./PortfolioModuleStatisticsHoldings";
import PortfolioModuleStatisticsDistribution from "./PortfolioModuleStatisticsDistribution";
import PortfolioModuleStatisticsWinRate from "./PortfolioModuleStatisticsWinRate";

const PortfolioModuleStatistics = () => {
    return (
        <div className="portfolio__statistics">
            <PortfolioModuleStatisticsBalances />
            <PortfolioModuleStatisticsHoldings />
            <PortfolioModuleStatisticsDistribution />
            <PortfolioModuleStatisticsWinRate />
        </div>
    );
};

export default PortfolioModuleStatistics;
