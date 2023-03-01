import React from "react";
import ButtonUI from "../ui/ButtonUI";

const CollapseTabsComponent = ({ data }) => {

    return (
        <div className="collapse-tabs">
            {data.map(item =>
                <ButtonUI
                    className="collapse-tabs"
                    textValue={item.textValue}
                    color={item.id === 1 ? "highlight button--highlight-active" : "highlight"}
                    key={item.id}
                    icon={item.icon}
                />
            )}
        </div>
    );

};

export default CollapseTabsComponent;
