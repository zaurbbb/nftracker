import React from "react";

const TitleComponent = ({ textValue, className }) => {
    const titleClassName = className ? `${className}__title title` : "title";
    return (
        <p className={titleClassName}>
            {textValue.toUpperCase()}
        </p>
    );
};

export default TitleComponent;
