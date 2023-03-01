import React from "react";

import HeaderComponent from "../../../components/HeaderComponent";
import GreetingModuleAboutUs from "./GreetingModuleAboutUs";
import GreetingModuleStatistics from "./GreetingModuleStatistics";
import GreetingModuleCollection from "./GreetingModuleCollection";

import video from "../../../assets/videos/Greeting-Video.mp4"
import LogosGroupImage from "../../../assets/images/LogosGroup-Image.png";

const GreetingModule = () => {
    return (
        <section className="greeting">
            <video
                src={video}
                autoPlay={true}
                loop={true}
                muted
                className="greeting__video"
            />

            <div className="greeting__content">
                <HeaderComponent />
                <img
                    src={LogosGroupImage}
                    className="greeting__img"
                    alt="logos group"
                />

                <GreetingModuleAboutUs />
                <GreetingModuleStatistics />
                <GreetingModuleCollection />
            </div>
        </section>
    );
};

export default GreetingModule;
