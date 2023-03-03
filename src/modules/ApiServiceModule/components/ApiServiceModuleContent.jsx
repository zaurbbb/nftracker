import React from "react";

import HeadingComponent from "../../../components/HeadingComponent";

import ApiServiceImage from "../../../assets/images/ApiServiceImage.png";

const ApiServiceModuleContent = () => {
    return (
        <div className="api-service__content">
            <HeadingComponent
                textValue="Coming Soon"
                type="small"
            />

            <div className="api-service__coming-soon">
                <img
                    className="api-service__img"
                    src={ApiServiceImage}
                    alt="future ui of api service"
                />
            </div>

            <HeadingComponent
                textValue="AI NFTracker"
                type="big"
            />

            <HeadingComponent
                textValue="// TWITTER // DISCORD // API"
                type="small"
            />

            <p className="text text--secondary">(c) 2023</p>
        </div>
    );
};

export default ApiServiceModuleContent;
