import React from "react";

const ButtonUI = ({ textValue, className, onClick, icon, color }) => {
    const buttonClassName = className ? `${className}__button button button--${color}` : `button button--${color}`;

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
