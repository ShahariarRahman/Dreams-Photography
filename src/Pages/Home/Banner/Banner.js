import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import img from '../../../images/banner2.jpg'

// Autoplay,
const Banner = () => {
    return (
        <div className="z-0 block">
            <Swiper spaceBetween={0} centeredSlides={true} autoplay={{ delay: 50000, disableOnInteraction: false, }} pagination={{ clickable: true, }} navigation={true} modules={[Pagination, Navigation]} >
                <SwiperSlide>
                    <img className="w-fit object-cover" src={img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>

    );
};

export default Banner;