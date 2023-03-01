import React from "react";

import {
    Swiper,
    SwiperSlide
} from "swiper/react";
import { Autoplay } from "swiper";

import { collectionData } from "../data/collectionData";

import "swiper/css";

const GreetingModuleCollection = () => {
    return (
        <div>
            <Swiper
                className="mySwiper greeting__swiper"
                slidesPerView={4}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                spaceBetween={30}
            >
                {collectionData.map(item =>
                    <SwiperSlide
                        className="greeting__card"
                        key={item.id}
                    >
                        <img
                            src={item.image}
                            className="greeting__card-img"
                            alt="card"
                        />
                        <p className="greeting__card-title">
                            {item.title}
                        </p>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
};

export default GreetingModuleCollection;
