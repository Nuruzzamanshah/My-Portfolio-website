import React from "react";
import './About.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/boy.png";

const About = () => {
  const abouts = [
    {
      img: profilePic1,
      review:
        "I am a dedicated and professional front-end developer. I am a quick learner and Highly appropriate to work for a software farm where I can leverage my talent in Front-end and Back-end web development to give excellence.",
    }
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        {/* <span>Clients always get </span>
        <span>Exceptional Work </span> */}
        <span>About me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {abouts.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="About">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default About;
