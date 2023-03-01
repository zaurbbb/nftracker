import React from "react";

const ButtonUI = ({ textValue, className, onClick, icon }) => {
    const buttonClassName = className ? `${className}__button button` : "button";

    return (
        <button
            className={buttonClassName}
            onClick={onClick}
        >
            {icon}
            {textValue}
        </button>
    );
};

export default ButtonUI;
