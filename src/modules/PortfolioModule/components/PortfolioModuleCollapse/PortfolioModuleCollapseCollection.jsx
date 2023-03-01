import React from "react";

import HeadingComponent from "../../../../components/HeadingComponent";

import TableCatImage from "../../../../assets/images/TableCat-Image.png";

const PortfolioModuleCollapseCollection = () => {
    return (
        <div className="collection">
            <HeadingComponent
                textValue="Collection (10)"
                type="small"
            />

            <div className="portfolio__card table table--collection">
                <div className="table__row">
                    <div className="table__item">Collection</div>
                    <div className="table__item">Floor</div>
                    <div className="table__item">Value</div>
                </div>
                <div className="table__row">
                    <div className="table__item">
                        <img
                            className="table__img"
                            src={TableCatImage}
                            alt="Cat avatar"
                        />
                        Mutantapeyachtclub
                    </div>
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
                        Mutantapeyachtclub
                    </div>
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
                        Mutantapeyachtclub
                    </div>
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
                        Mutantapeyachtclub
                    </div>
                    <div className="table__item">0.02</div>
                    <div className="table__item">0.02</div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioModuleCollapseCollection;
