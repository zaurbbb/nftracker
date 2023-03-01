import React from "react";

import HeadingComponent from "../../../components/HeadingComponent";

import { collapseTabsData } from "./data/collapseTabsData";

import PortfolioModuleCollapse from "./PortfolioModuleCollapse/PortfolioModuleCollapse";
import PortfolioModuleStatistics from "./PortfolioModuleStatistics/PortfolioModuleStatistics";
import CollapseTabsComponent from "../../../components/CollapseTabsComponent";

import { ReactComponent as CashMoneyIcon } from "../../../assets/icons/CashMoney-Icon.svg";

const PortfolioModule = () => {
    return (
        <section
            className="portfolio"
            id="portfolio"
        >
            <HeadingComponent
                textValue="PORTFOLIO"
                type="big"
            >
                <CashMoneyIcon />
                0x345...67fj7890
            </HeadingComponent>

            <PortfolioModuleStatistics />
            <CollapseTabsComponent data={collapseTabsData}/>
            <PortfolioModuleCollapse />
        </section>
    );
};

export default PortfolioModule;
