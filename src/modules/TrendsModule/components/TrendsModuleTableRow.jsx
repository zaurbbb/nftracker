import React from "react";
import TableMonkey from "../../../assets/images/TableMonkey-Image.png";
import TableCat from "../../../assets/images/TableCat-Image.png";

const TrendsModuleTableRow = ({type}) => {
    function setTableImg () {
        switch (type) {
            case "monkey":
                return TableMonkey;
            case "cat":
                return TableCat;
            default:
                return;
        }
    }

    function setPercentVolumeClassName () {
        switch (type) {
            case "monkey":
                return "table__item table__item--danger";
            case "cat":
                return "table__item table__item--success";
            default:
                return "table__item";
        }
    }
    return (
        <div className="table__row">
            <div className="table__item table__item--long">
                <img
                    className="table__img"
                    src={setTableImg()}
                    alt="Cat avatar"
                />
                Mutantapeyachtclub
            </div>
            <div className="table__item">3.3M</div>
            <div className="table__item">14.2K</div>
            <div className={setPercentVolumeClassName()}>17.04%</div>
            <div className="table__item">106</div>
            <div className="table__item">127.00</div>
            <div className="table__item">6.2K</div>
            <div className="table__item">13.1K</div>
        </div>
    );
};

export default TrendsModuleTableRow;
