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
    const isLandingPagePathname = location.pathname === "/";
    const headerClassName = location.pathname.includes("api") ? "header header--width" : "header";

    return (
        <header className={headerClassName}>
            <Link
                to="/"
                className="header__title"
            >
                AI NFTracker
            </Link>

            {isLandingPagePathname &&
                navConfig.map(item =>
                    <HeaderLinkUI
                        path={item.path}
                        textValue={item.textValue}
                        icon={item.icon}
                        key={item.id}
                    />
                )
            }

            {isLandingPagePathname &&
                <Link to="/api/trends">
                    <ButtonUI
                        textValue="APP"
                        className="header"
                        color="primary"
                    />
                </Link>
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
