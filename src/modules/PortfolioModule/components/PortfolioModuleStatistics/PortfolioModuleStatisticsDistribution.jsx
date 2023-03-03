import React from "react";

import HeadingComponent from "../../../../components/HeadingComponent";

import BarChartImg from "../../../../assets/images/BarChartImage.png";

const PortfolioModuleStatisticsDistribution = () => {
    return (
        <div className="portfolio__distribution">
            <HeadingComponent
                textValue="Holding Distribution"
                type="small"
            />

            <div className="portfolio__card portfolio__card--content-bottom">
                <div className="chart-data">
                    <div className="chart-data-item chart-data-item--left">
                        <div className="chart-data-color chart-data-color--highlight-light" />
                        <span className="chart-data-title">Other</span>
                    </div>
                    <div className="chart-data-item chart-data-item--left">
                        <div className="chart-data-color chart-data-color--highlight-dark" />
                        <span className="chart-data-title">Other</span>
                    </div>
                    <div className="chart-data-item chart-data-item--left">
                        <div className="chart-data-color chart-data-color--highlight" />
                        <span className="chart-data-title">CLOWNI</span>
                    </div>
                    <div className="chart-data-item chart-data-item--left">
                        <div className="chart-data-color chart-data-color--primary" />
                        <span className="chart-data-title">Others</span>
                    </div>
                    <div className="chart-data-item chart-data-item--left">
                        <div className="chart-data-color chart-data-color--primary" />
                        <span className="chart-data-title">The Watchm...ection</span>
                    </div>
                </div>
                <img
                    className="chart--bar"
                    src={BarChartImg}
                    alt="bar chart as an img"
                />
            </div>
        </div>
    );
};

export default PortfolioModuleStatisticsDistribution;
