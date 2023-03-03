import React from "react";

import TableCatImage from "../../../assets/images/TableCatImage.png";
import { ReactComponent as GreenCircleIcon } from "../../../assets/icons/GreenCircleIcon.svg";
import { ReactComponent as CrystalLightIcon } from "../../../assets/icons/CrystalLightIcon.svg";
import { ReactComponent as LightningLightIcon } from "../../../assets/icons/LightningLightIcon.svg";
import { ReactComponent as EllipseIcon } from "../../../assets/icons/EllipseIcon.svg";
import { ReactComponent as UserIcon } from "../../../assets/icons/UserIcon.svg";
import { ReactComponent as GasIcon } from "../../../assets/icons/GasIcon.svg";

const MintsModuleLive = () => {
    return (
        <div className="mints__top table table--mints-live">
            <div className="table__row">
                <div className="table__item">
                    Live mints
                    <span className="text text--success">
                        <GreenCircleIcon /> Live
                    </span>
                </div>
            </div>
            {[0, 1, 2, 3].map(item =>
                <div
                    className="table__row"
                    key={item}
                >
                    <div className="table__item table__item--content-start">
                        <img
                            className="table__img"
                            src={TableCatImage}
                            alt="Cat avatar"
                        />
                    </div>
                    <div className="table__item">
                        <span className="table__sub-item text text--bold">
                            USDC
                        </span>
                        <span className="table__sub-item">
                            <GasIcon /> 12.001 - 14
                        </span>
                        <span className="table__sub-item">
                            <LightningLightIcon /> 0.05 - 12.001
                        </span>
                        <span className="table__sub-item">
                            <CrystalLightIcon /> 1.99
                        </span>
                    </div>
                    <div className="table__item">
                        <span className="table__sub-item">
                            <UserIcon /> 14
                        </span>
                        <span className="table__sub-item">
                            <EllipseIcon /> 14
                        </span>
                        <span className="table__sub-item">
                            &#60;  20s
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MintsModuleLive;
