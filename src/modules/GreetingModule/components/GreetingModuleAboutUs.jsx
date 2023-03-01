import React from "react";
import HeadingComponent from "../../../components/HeadingComponent";

const GreetingModuleAboutUs = () => {
    return (
        <div className="greeting__about-us">
            <HeadingComponent
                textValue="About Us"
                type="big"
            />

            <p className="greeting__description">
                AI NFT Tracker - An innovative AI-enabled service for identifying and tracking promising NFT collections and improving investment performance.
                Machine learning algorithms and neural networks help to calculate the most promising collections based on more than 50 collection parameters that are worth buying and reselling at a higher price.
            </p>
        </div>
    );
};

export default GreetingModuleAboutUs;
