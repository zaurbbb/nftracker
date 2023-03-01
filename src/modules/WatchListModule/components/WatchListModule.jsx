import React from "react";

import HeadingComponent from "../../../components/HeadingComponent";
import WatchListSwiper from "./WatchListSwiper";

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

            <WatchListSwiper />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </section>
    );
};

export default WatchListModule;
