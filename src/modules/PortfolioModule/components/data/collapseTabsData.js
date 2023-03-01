import { ReactComponent as BoxIcon } from "../../../../assets/icons/Box-Icon.svg";
import { ReactComponent as ProgressIcon } from "../../../../assets/icons/Progress-Icon.svg";
import { ReactComponent as RefreshIcon } from "../../../../assets/icons/Refresh-Icon.svg";

export const collapseTabsData = [
    {
        id: 1,
        textValue: "Inventory",
        path: "/",
        icon: <BoxIcon />,
    },
    {
        id: 2,
        textValue: "Activity",
        path: "/",
        icon: <ProgressIcon />,
    },
    {
        id: 3,
        textValue: "Flips",
        path: "/",
        icon: <RefreshIcon />,
    },
]
