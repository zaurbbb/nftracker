import React from "react";
import { Link } from "react-router-dom";

const HeaderLinkUi = ({ path, textValue, icon }) => {
    return (
        <Link
            to={path}
            className="header__link"
        >
            {icon}
            {textValue}
        </Link>
    );
};

export default HeaderLinkUi;
