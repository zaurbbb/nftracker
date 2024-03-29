import React from "react";

import HeadingComponent from "../../../components/HeadingComponent";
import TrendsModuleTable from "./TrendsModuleTable/TrendsModuleTable";

const TrendsModule = () => {
    return (
        <section
            className="trends"
            id="trends"
        >
            <HeadingComponent
                textValue="TRENDS"
                type="big"
            />

            <TrendsModuleTable />
        </section>
    );
};

export default TrendsModule;
