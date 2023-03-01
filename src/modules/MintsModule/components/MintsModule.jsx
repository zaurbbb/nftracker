import React from "react";

import HeadingComponent from "../../../components/HeadingComponent";
import MintsModuleLive from "./MintsModuleLive";
import MintsModuleTop from "./MintsModuleTop";

const MintsModule = () => {
    return (
        <section
            className="mints"
            id={"mints"}
        >
            <HeadingComponent
                textValue={"Mints"}
                type="big"
            />

            <div className="mints__wrapper">
                <MintsModuleTop />
                <MintsModuleLive />
            </div>

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </section>
    );
};

export default MintsModule;
