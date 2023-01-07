import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./slider.css";
import {  Pagination } from "swiper";
import projects from "../../projects";
import Card from "./Card";
import { ProjectType } from "../../types";

const Slider = () => {
  return (
    <>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[ Pagination]}
            className="mySwiper"
          >
            {projects.map(
              (project: ProjectType, i: React.Key | null | undefined) => {
                return (
                  <SwiperSlide>
                    <Card project={project} key={i} />
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Slider;
