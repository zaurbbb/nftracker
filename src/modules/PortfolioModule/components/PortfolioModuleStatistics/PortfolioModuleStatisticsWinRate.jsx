import React from "react";

import HeadingComponent from "../../../../components/HeadingComponent";

const PortfolioModuleStatisticsWinRate = () => {
    return (
        <div className="portfolio__win-rate">
            <HeadingComponent
                textValue="Win Rate"
                type="small"
            >
                <div className="heading__win-rate-value">
                    17.04%
                </div>
            </HeadingComponent>

            <div className="portfolio__card portfolio__card--vertical">
                <div className="win-rate">
                    <div className="win-rate__item">
                        <p className="win-rate--title">Total PnL</p>
                        <p className="win-rate--value text text--danger">-0.0461</p>
                    </div>
                    <div className="win-rate__item">
                        <p className="win-rate--title">Total PnL</p>
                        <p className="win-rate--value text text--success">-0.0461</p>
                    </div>
                    <div className="win-rate__item">
                        <p className="win-rate--title">Total PnL</p>
                        <p className="win-rate--value text text--danger">-0.0461</p>
                    </div>
                    <div className="win-rate__item">
                        <p className="win-rate--title">Total PnL</p>
                        <p className="win-rate--value text text--success">-0.0461</p>
                    </div>
                </div>
                <div className="win-rate">
                    <div className="win-rate__item">
                        <p className="win-rate--title">Total Positions Closed</p>
                        <p className="win-rate--value">4</p>
                    </div>
                    <div className="win-rate__item">
                        <p className="win-rate--title">Transfer Position Closed</p>
                        <p className="win-rate--value ">—</p>
                    </div>
                    <div className="win-rate__item">
                        <p className="win-rate--title">Total PnL</p>
                        <p className="win-rate--value">1</p>
                    </div>
                    <div className="win-rate__item">
                        <p className="win-rate--title">Total PnL</p>
                        <p className="win-rate--value ">2</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioModuleStatisticsWinRate;
