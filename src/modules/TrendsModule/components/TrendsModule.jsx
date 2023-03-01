import React from "react";

import TitleComponent from "../../../components/TitleComponent";
import TrendsModuleTable from "./TrendsModuleTable";

const TrendsModule = () => {
    return (
        <section
            className="trends"
            id={"trends"}
        >
            <TitleComponent
                textValue={"Trends"}
                className="trends"
            />

            <TrendsModuleTable />
        </section>
    );
};

export default TrendsModule;
