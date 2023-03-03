import { ReactComponent as LightningLightIcon } from "../assets/icons/LightningLightIcon.svg";
import { ReactComponent as PortfolioLightIcon } from "../assets/icons/PortfolioLightIcon.svg";
import { ReactComponent as CompassLightIcon } from "../assets/icons/CompassLightIcon.svg";
import { ReactComponent as TargetLightIcon } from "../assets/icons/TargetLightIcon.svg";
import { ReactComponent as SpaceshipLightIcon } from "../assets/icons/SpaceshipLightIcon.svg";

import { ReactComponent as LightningSecondaryIcon } from "../assets/icons/LightningSecondaryIcon.svg";
import { ReactComponent as PortfolioSecondaryIcon } from "../assets/icons/PortfolioSecondaryIcon.svg";
import { ReactComponent as CompassSecondaryIcon } from "../assets/icons/CompassSecondaryIcon.svg";
import { ReactComponent as TargetSecondaryIcon } from "../assets/icons/TargetSecondaryIcon.svg";
import { ReactComponent as SpaceshipSecondaryIcon } from "../assets/icons/SpaceshipSecondaryIcon.svg";

const sidebarConfig = [
    {
        id: 1,
        path: "/api/trends",
        textValue: "Trends",
        iconLight: <LightningLightIcon />,
        iconSecondary: <LightningSecondaryIcon />
    },
    {
        id: 2,
        path: "/api/portfolio",
        textValue: "Portfolio",
        iconLight: <PortfolioLightIcon />,
        iconSecondary: <PortfolioSecondaryIcon />
    },
    {
        id: 3,
        path: "/api/mints",
        textValue: "Mints",
        iconLight: <CompassLightIcon />,
        iconSecondary: <CompassSecondaryIcon />
    },
    {
        id: 4,
        path: "/api/watchList",
        textValue: "WatchList",
        iconLight: <TargetLightIcon />,
        iconSecondary: <TargetSecondaryIcon />
    },
    {
        id: 5,
        path: "/api/apiService",
        textValue: "API Service",
        iconLight: <SpaceshipLightIcon />,
        iconSecondary: <SpaceshipSecondaryIcon />
    },
];

export default sidebarConfig;
