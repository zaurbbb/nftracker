import React from "react";
import HeadingComponent from "../../../../components/HeadingComponent";

const PortfolioModuleStatisticsHoldings = () => {
    return (
        <div className="portfolio__holdings">
            <HeadingComponent
                textValue="Holdings"
                type="small"
            />

            <div className="portfolio__card">
                <div className="chart chart--line">
                    <p className="chart-values chart-values--vertical">
                        <span>0.3</span>
                        <span>0.2</span>
                        <span>0.1</span>
                        <span>0</span>
                    </p>
                    <div className="chart__graph" />
                </div>
                <p className="chart-values chart-values--horizontal">
                    <span>May</span>
                    <span>June</span>
                    <span>July</span>
                </p>
                <div className="chart-data">
                    <div className="chart-data-item chart-data-item--center">
                        <div className="chart-data-color chart-data-color--highlight-light" />
                        <span className="chart-data-title">The Watchm...ection</span>
                    </div>
                    <div className="chart-data-item chart-data-item--center">
                        <div className="chart-data-color chart-data-color--highlight" />
                        <span className="chart-data-title">The Watchm...ection</span>
                    </div>
                    <div className="chart-data-item chart-data-item--center">
                        <div className="chart-data-color chart-data-color--primary" />
                        <span className="chart-data-title">The Watchm...ection</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioModuleStatisticsHoldings;
