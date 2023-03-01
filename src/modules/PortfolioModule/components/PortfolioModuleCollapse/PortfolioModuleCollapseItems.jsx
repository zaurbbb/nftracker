import React from "react";

import HeadingComponent from "../../../../components/HeadingComponent";

import TableCatImage from "../../../../assets/images/TableCat-Image.png";

const PortfolioModuleCollapseItems = () => {
    return (
        <div className="items">
            <HeadingComponent
                textValue="Items (12)"
                type="small"
            />

            <div className="portfolio__card table table--items">
                <div className="table__row">
                    <div className="table__item">Item</div>
                    <div className="table__item">Rarity</div>
                    <div className="table__item">List Price</div>
                    <div className="table__item">Cast</div>
                    <div className="table__item">Received Data</div>
                </div>
                <div className="table__row">
                    <div className="table__item">
                        <img
                            className="table__img"
                            src={TableCatImage}
                            alt="Cat avatar"
                        />
                        USDC <br/>
                        0.0071
                    </div>
                    <div className="table__item">—</div>
                    <div className="table__item">0.02</div>
                    <div className="table__item">0.02</div>
                    <div className="table__item">0.02</div>
                </div>
                <div className="table__row">
                    <div className="table__item">
                        <img
                            className="table__img"
                            src={TableCatImage}
                            alt="Cat avatar"
                        />
                        USDT <br/>
                        0.0071
                    </div>
                    <div className="table__item">—</div>
                    <div className="table__item">—</div>
                    <div className="table__item">—</div>
                    <div className="table__item">0.02</div>
                </div>
                <div className="table__row">
                    <div className="table__item">
                        <img
                            className="table__img"
                            src={TableCatImage}
                            alt="Cat avatar"
                        />
                            ETH <br/>
                            0.0071
                    </div>
                    <div className="table__item">—</div>
                    <div className="table__item">—</div>
                    <div className="table__item">0.02</div>
                    <div className="table__item">0.02</div>
                </div>
                <div className="table__row">
                    <div className="table__item">
                        <img
                            className="table__img"
                            src={TableCatImage}
                            alt="Cat avatar"
                        />
                         0.0071
                    </div>
                    <div className="table__item">—</div>
                    <div className="table__item">—</div>
                    <div className="table__item">—</div>
                    <div className="table__item">0.02</div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioModuleCollapseItems;
