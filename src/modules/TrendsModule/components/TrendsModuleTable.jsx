import React from "react";

import TrendsModuleTableHead from "./TrendsModuleTableHead";
import TrendsModuleTableRow from "./TrendsModuleTableRow";

const TrendsModuleTable = () => {
    return (
        <div className="table--trends table">
            <TrendsModuleTableHead />
            <TrendsModuleTableRow type="monkey"/>
            <TrendsModuleTableRow type="cat"/>
            <TrendsModuleTableRow type="monkey"/>
            <TrendsModuleTableRow type="monkey"/>
            <TrendsModuleTableRow type="cat"/>
            <TrendsModuleTableRow type="monkey"/>
            <TrendsModuleTableRow type="cat"/>
        </div>
    );
};

export default TrendsModuleTable;
