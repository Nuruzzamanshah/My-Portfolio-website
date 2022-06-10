import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
// import Sidebar from "../../img/sidebar.png";
import Photo from '../../img/photo.png';
import Bike from '../../img/bicycle.png';
import Oak  from '../../img/oak.png' 
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Photo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Bike} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Oak} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;