import React from "react";
import "./Portfolio.css";

import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import TaskManagement from "../../resources/images/TaskManagement.png";
import GraphicalPassword from "../../resources/images/GraphicalPassword.png";
import SentimentAnalysis from "../../resources/images/SentimentAnalysis.png";
import BeautyParlour from "../../resources/images/BeautyParlour.png";

const Portfolio = () => {
  return (
  <div className="portfolio" id="Portfolio">
    {/* heading */}
    <span>Recent Projects</span>
    <span>Portfolio</span>

    {/* Slider */}
    <Swiper
    spaceBetween={30}
    slidesPerView={3}
    grabCursor={true}
    className="portfolio-slider"
    >
        <SwiperSlide>
            <img src={TaskManagement} alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src={GraphicalPassword} alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src={BeautyParlour} alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src={SentimentAnalysis} alt="" />
        </SwiperSlide>
    </Swiper>

  </div>
  );
};

export default Portfolio;
