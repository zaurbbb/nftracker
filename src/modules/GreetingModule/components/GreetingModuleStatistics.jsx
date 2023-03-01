import React from "react";

import { statisticsData } from "../data/statisticsData";

import TitleComponent from "../../../components/TitleComponent";

const GreetingModuleStatistics = () => {
    return (
        <div className="greeting__statistics">
            {statisticsData.map(statistic =>
                <div
                    key={statistic.description}
                    className="greeting__statistic"
                >
                    <TitleComponent
                        textValue={statistic.result}
                        className="greeting"
                    />
                    <p className="greeting__description">
                        {statistic.description}
                    </p>
                </div>
            )}
        </div>
    );
};

export default GreetingModuleStatistics;
