import React from "react";

const TrendsModuleTableHead = () => {
    return (
        <div className="table__row table__row--heading">
            <div className="table__item table__item--long">Collection</div>
            <div className="table__item">Volume Total</div>
            <div className="table__item">24h Volume</div>
            <div className="table__item">24 % Volume</div>
            <div className="table__item">Sales</div>
            <div className="table__item">Floor Place</div>
            <div className="table__item">Owners</div>
            <div className="table__item">Total Supply</div>
        </div>
    );
};

export default TrendsModuleTableHead;
