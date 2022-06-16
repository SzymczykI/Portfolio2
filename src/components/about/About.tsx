import React from "react";
import "./about.css";
import ME from "../../assets/izabela2.jpg";
import { FaAward } from "react-icons/fa";

const about = () => {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="meinnature"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>lorem ipsum</h5>
              <small>lorem ipsum</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Lorem ipsum</h5>
              <small>lorem ipsum</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>lorem ipsum</h5>
              <small>lorem ipsum</small>
            </article>
          </div>
          <p>
            I'm open-minded and creative Full Stack JavaScript Developer from Poland
            living in Oslo, Norway. I am a Finance and Accountancy graduate,
            experienced in  e-commerce and sales in the insurance, clothing,
            cosmetics industries and also in creating and running my own
            business. Finally, I'm making my biggest dream come true by focusing
            entirely on my passion - programming{" "}
          </p>

          <a href='#contact' className="btn btn-primary">Let's Talk!</a>
        </div>
      </div>
    </section>
  );
};

export default about;
