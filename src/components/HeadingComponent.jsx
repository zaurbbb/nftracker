import React from "react";

const HeadingComponent = ({ children, textValue, type }) => {
    function setHeadingTitleClassName () {
        switch (type) {
            case "big":
                return "heading__title heading__title--big";
            case "small":
                return "heading__title heading__title--small";
            default:
                return "heading__title";
        }
    }
    return (
        <div className="heading">
            <p className={setHeadingTitleClassName()}>
                {textValue}
            </p>

            <div className="heading__content">
                {children}
            </div>
        </div>
    );
};

export default HeadingComponent;
