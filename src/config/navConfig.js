import { ReactComponent as LightningSecondaryIcon } from "../assets/icons/LightningSecondaryIcon.svg";
import { ReactComponent as PortfolioIcon } from "../assets/icons/PortfolioSecondaryIcon.svg";
import { ReactComponent as CompassIcon } from "../assets/icons/CompassSecondaryIcon.svg";
import { ReactComponent as TargetIcon } from "../assets/icons/TargetSecondaryIcon.svg";
import { ReactComponent as SpaceshipIcon } from "../assets/icons/SpaceshipSecondaryIcon.svg";

const navConfig = [
    {
        id: 1,
        path: "#trends",
        textValue: "Trends",
        icon: <LightningSecondaryIcon />
    },
    {
        id: 2,
        path: "#portfolio",
        textValue: "Portfolio",
        icon: <PortfolioIcon />
    },
    {
        id: 3,
        path: "#mints",
        textValue: "Mints",
        icon: <CompassIcon />
    },
    {
        id: 4,
        path: "#watchList",
        textValue: "WatchList",
        icon: <TargetIcon />
    },
    {
        id: 5,
        path: "#apiService",
        textValue: "API Service",
        icon: <SpaceshipIcon />
    },
];

export default navConfig;
