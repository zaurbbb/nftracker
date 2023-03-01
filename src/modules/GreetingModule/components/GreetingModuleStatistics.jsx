import React from "react";

import { statisticsData } from "../data/statisticsData";

import HeadingComponent from "../../../components/HeadingComponent";

const GreetingModuleStatistics = () => {
    return (
        <div className="greeting__statistics">
            {statisticsData.map(statistic =>
                <div
                    key={statistic.description}
                    className="greeting__statistic"
                >
                    <HeadingComponent
                        textValue={statistic.result}
                        type="big"
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
