import { ReactComponent as LightningIcon } from "../assets/icons/Lightning-Icon.svg";
import { ReactComponent as PortfolioIcon } from "../assets/icons/Portfolio-Icon.svg";
import { ReactComponent as CompassIcon } from "../assets/icons/Compass-Icon.svg";
import { ReactComponent as TargetIcon } from "../assets/icons/Target-Icon.svg";
import { ReactComponent as SpaceshipIcon } from "../assets/icons/Spaceship-Icon.svg";

const navConfig = [
    {
        id: 1,
        path: "#trends",
        textValue: "Trends",
        icon: <LightningIcon />
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
