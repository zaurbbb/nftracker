import React from "react";
import TitleComponent from "../../../components/TitleComponent";

const GreetingModuleAboutUs = () => {
    return (
        <div className="greeting__about-us">
            <TitleComponent
                textValue="About Us"
                className="greeting"
            />
            <p className="greeting__description">
                AI NFT Tracker - An innovative AI-enabled service for identifying and tracking promising NFT collections and improving investment performance.
                Machine learning algorithms and neural networks help to calculate the most promising collections based on more than 50 collection parameters that are worth buying and reselling at a higher price.
            </p>
        </div>
    );
};

export default GreetingModuleAboutUs;
