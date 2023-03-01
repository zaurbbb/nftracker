import React from "react";

import {
    Swiper,
    SwiperSlide
} from "swiper/react";
import { Autoplay } from "swiper";

import { watchListData } from "../data/watchListData";

import TableCatImage from "../../../assets/images/TableCat-Image.png";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/Arrow-Icon.svg";

const WatchListSwiper = () => {
    return (
        <div>
            <Swiper
                className="watch-list__swiper"
                slidesPerView={4}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                spaceBetween={20}
            >
                {watchListData.map(item =>
                    <SwiperSlide key={item.id}>
                        <div className="watch-list-card">

                            <img
                                src={item.image}
                                className="watch-list-card__img"
                                alt="card"
                            />
                            <div className="watch-list-card__content">
                                <div className="watch-list-card__row">
                                    <p className="watch-list-card__user">
                                        <img
                                            src={TableCatImage}
                                            className="watch-list-card__logo"
                                            alt="кiт тi маму мав"
                                        />
                                        <span>
                                    {item.title} <br />
                                            {item.ownersNumber} owners
                                    </span>
                                    </p>
                                    <ArrowIcon />
                                </div>
                                <div className="watch-list-card__row">
                                    <p>Floor Price:</p>
                                    <p>{item.floorPrice}</p>
                                </div>
                                <div className="watch-list-card__row">
                                    <p>1D volume:</p>
                                    <p>{item.volume}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
};

export default WatchListSwiper;
