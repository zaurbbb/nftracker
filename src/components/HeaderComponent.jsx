import React from "react";
import {
    Link,
    useLocation
} from "react-router-dom";

import navConfig from "../config/navConfig";

import HeaderLinkUI from "../ui/HeaderLinkUI";
import ButtonUI from "../ui/ButtonUI";

const HeaderComponent = () => {
    const location = useLocation();

    return (
        <header className="header">
            <Link
                to="/"
                className="header__title"
            >
                AI NFTracker
            </Link>

            {location.pathname === "/" &&
                navConfig.map(item =>
                    <HeaderLinkUI
                        path={item.path}
                        textValue={item.textValue}
                        icon={item.icon}
                        key={item.id}
                    />
                )
            }

            {location.pathname === "/" &&
                <ButtonUI
                    textValue="APP"
                    className="header"
                    color="primary"
                />
            }
            <ButtonUI
                textValue="Connect wallet"
                className="header"
                color="primary"
            />

        </header>
    );
};

export default HeaderComponent;
