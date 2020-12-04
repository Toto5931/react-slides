import React from "react";
// import "./Organisation.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useParams } from "react-router-dom";
import Day from "./Day.js";
import 'swiper/swiper.scss';

export default function Organisation(props) {
    let { day } = useParams();
    if (day === undefined) {
        day = 2020;
    }

    return (
        <Swiper
            initialSlide="1"
            onSlideChange={(swiper) => OnSlideChange(swiper, props.setDate)}
        >
            <SwiperSlide daynb={parseInt(day) - 1}><Day day={parseInt(day) - 1}></Day></SwiperSlide>
            <SwiperSlide daynb={parseInt(day)}><Day day={parseInt(day)}></Day></SwiperSlide>
            <SwiperSlide daynb={parseInt(day) + 1}><Day day={parseInt(day) + 1}></Day></SwiperSlide>

        </Swiper>
    );
}

function OnSlideChange(swiper, setDate) {
    window.history.pushState(null, "New Page Title", "/organisation/" + swiper.slides[swiper.activeIndex].attributes.daynb.value);
    setDate(swiper.slides[swiper.activeIndex].attributes.daynb.value);
}