import React from "react";

import HeadingComponent from "../../../components/HeadingComponent";
import WatchListModuleSwiper from "./WatchListModuleSwiper";

const WatchListModule = () => {
    return (
        <section
            className="watch-list"
            id={"watchList"}
        >
            <HeadingComponent
                textValue={"Watchlist"}
                type="big"
            />

            <WatchListModuleSwiper />
        </section>
    );
};

export default WatchListModule;
