import React from "react";
import HeadingComponent from "../../../components/HeadingComponent";
import ApiServiceModuleContent from "./ApiServiceModuleContent";

const ApiServiceModule = () => {
    return (
        <section
            className="api-service"
            id="api-service"
        >
            <HeadingComponent
                textValue="API Service"
                type="big"
            />

            <ApiServiceModuleContent />

            <br /><br />
        </section>
    );
};

export default ApiServiceModule;
