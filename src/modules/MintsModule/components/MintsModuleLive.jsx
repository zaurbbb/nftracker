import React from "react";

import TableCatImage from "../../../assets/images/TableCat-Image.png";
import { ReactComponent as GreenCircleIcon } from "../../../assets/icons/GreenCircle-Icon.svg";
import { ReactComponent as CrystalLightIcon } from "../../../assets/icons/CrystalLight-Icon.svg";
import { ReactComponent as LightningLightIcon } from "../../../assets/icons/LightningLight-Icon.svg";
import { ReactComponent as EllipseIcon } from "../../../assets/icons/Ellipse-Icon.svg";
import { ReactComponent as UserIcon } from "../../../assets/icons/User-Icon.svg";
import { ReactComponent as GasIcon } from "../../../assets/icons/Gas-Icon.svg";

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
            {[0, 0, 0, 0].map(() =>
                <div className="table__row">
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
