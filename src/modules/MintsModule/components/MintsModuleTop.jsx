import React from "react";

import TableCatImage from "../../../assets/images/TableCatImage.png";
import { ReactComponent as GreenCircleIcon } from "../../../assets/icons/GreenCircleIcon.svg";
import { ReactComponent as CrystalSecondaryIcon } from "../../../assets/icons/CrystalSecondaryIcon.svg";
import { ReactComponent as EllipseIcon } from "../../../assets/icons/EllipseIcon.svg";

const MintsModuleTop = () => {
    return (
        <div className="mints__top table table--mints-top">
            <div className="table__row">
                <div className="table__item">
                    Top mints
                    <span className="text text--success">
                        <GreenCircleIcon /> Live
                    </span>
                </div>
                <div className="table__item text text--secondary">Owners</div>
                <div className="table__item text text--secondary">Listed</div>
                <div className="table__item text text--secondary">Notable</div>
                <div className="table__item text text--secondary">Floor</div>
                <div className="table__item text text--secondary"><CrystalSecondaryIcon /> Price</div>
                <div className="table__item text text--secondary">Mints</div>
            </div>
            {[0, 1, 2, 3, 4, 5, 6].map(item =>
                <div
                    className="table__row"
                    key={item}
                >
                    <div className="table__item">
                        <img
                            className="table__img"
                            src={TableCatImage}
                            alt="Cat avatar"
                        />
                        <div className="table__sub-item">
                            <span className="text text--bold">
                                Base, Introduced <br />
                            </span>
                            <span>
                                22667 <br />
                            </span>
                            <span>
                            <EllipseIcon /> 14
                            </span>
                        </div>
                    </div>
                    <div className="table__item">
                        <div className="table__sub-item">
                            <span className="text text--success">89% <br /></span>
                            (20134)
                        </div>

                    </div>
                    <div className="table__item">8%</div>
                    <div className="table__item">505</div>
                    <div className="table__item">0.000</div>
                    <div className="table__item">0.001</div>
                    <div className="table__item">1545</div>
                </div>
            )}
        </div>
    );
};

export default MintsModuleTop;
