import React from "react";
import {
    Link,
    NavLink,
    useLocation
} from "react-router-dom";

import sidebarConfig from "../config/sidebarConfig";

import { ReactComponent as GetBackArrowIcon } from "../assets/icons/GetBackArrowIcon.svg";

const SidebarComponent = () => {
    const location = useLocation();
    const dividedLocationPath = location.pathname.split("/");
    const currentPathname = dividedLocationPath[dividedLocationPath.length - 1];

    function isLinkActive(navData) {
        return navData.isActive ? "sidebar__item sidebar__item--active" : "sidebar__item";
    }

    return (
        <aside className="sidebar">
            <nav className="sidebar__nav">
                {sidebarConfig.map(item => {
                    const dividedItemPathname = item.path.split("/");
                    const itemPathname = dividedItemPathname[dividedItemPathname.length - 1];
                    return (
                        <NavLink
                            to={item.path}
                            className={isLinkActive}
                            key={item.id}
                        >
                            {currentPathname === itemPathname ? item.iconLight : item.iconSecondary}
                        </NavLink>
                    );
                })}
            </nav>
            <Link
                to="/"
                className="sidebar__item"
            >
                <GetBackArrowIcon />
            </Link>

        </aside>
    );
};

export default SidebarComponent;
