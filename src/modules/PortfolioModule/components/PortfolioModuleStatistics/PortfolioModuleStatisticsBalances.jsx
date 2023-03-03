import React from "react";

import HeadingComponent from "../../../../components/HeadingComponent";

import { ReactComponent as USDCIcon } from "../../../../assets/icons/USDCIcon.svg";
import { ReactComponent as USDTIcon } from "../../../../assets/icons/USDTIcon.svg";
import { ReactComponent as ETHIcon } from "../../../../assets/icons/ETHIcon.svg";
import { ReactComponent as WETHIcon } from "../../../../assets/icons/WETHIcon.svg";
const PortfolioModuleStatisticsBalances = () => {
    return (
        <div className="portfolio__balances">
            <HeadingComponent
                textValue="Balances"
                type="small"
            />

            <div className="portfolio__card table table--portfolio-balances">
                <div className="table__row">
                    <div className="table__item">
                        <USDCIcon />
                    </div>
                    <div className="table__item">
                        USDC <br/>
                        0.0071
                    </div>
                </div>
                <div className="table__row">
                    <div className="table__item">
                        <USDTIcon />
                    </div>
                    <div className="table__item">
                        USDT <br/>
                        0.0071
                    </div>
                </div>
                <div className="table__row">
                    <div className="table__item">
                        <ETHIcon />
                    </div>
                    <div className="table__item">
                        ETH <br/>
                        0.0071
                    </div>
                </div>
                <div className="table__row">
                    <div className="table__item">
                        <WETHIcon />
                    </div>
                    <div className="table__item">
                        WETH <br/>
                        0.0071
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioModuleStatisticsBalances;
