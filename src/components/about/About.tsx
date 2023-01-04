import React, { useState } from "react";
import "./about.css";
import ME from "../../assets/izabela2.jpg";
import { RiUser5Line } from "react-icons/ri";
import { GiMountains } from "react-icons/gi";
import { FaHandHoldingHeart } from "react-icons/fa";

const About = () => {
  const [aboutMeOpen, setAboutMeOpen] = useState(true);
  const [hobbyOpen, setHobbyOpen] = useState(false);
  const [valuesOpen, setValuesOpen] = useState(false);

  const aboutMeHandler = () => {
    setAboutMeOpen(true);
    setHobbyOpen(false);
    setValuesOpen(false);
  };
  const hobbyHandler = () => {
    setHobbyOpen(true);
    setAboutMeOpen(false);
    setValuesOpen(false);
  };
  const valuesHandler = () => {
    setValuesOpen(true);
    setHobbyOpen(false);
    setAboutMeOpen(false);
  };
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article onClick={aboutMeHandler} className="about__card">
              <RiUser5Line className="about__icon" />
              <h5>About </h5>
            </article>

            <article onClick={hobbyHandler} className="about__card">
              <GiMountains className="about__icon" />
              <h5>Hobbies</h5>
            </article>

            <article onClick={valuesHandler} className="about__card">
              <FaHandHoldingHeart className="about__icon" />
              <h5>Values</h5>
            </article>
          </div>
          {aboutMeOpen && (
            <p>
              I'm open-minded and creative Full Stack Developer from Poland,
              currently based in Oslo, Norway. I hold a finance and accountancy
              degree and have gained experience in a diverse range of
              industries. My passion for programming led me to pursue a career
              in software development. My strong analytical skills and a natural
              ability to solve problems, developed during economics studies,
              combined with a keen eye for design and user experience, make me
              well-suited for this field.{" "}
            </p>
          )}
          {hobbyOpen && (
            <p>
              If you ask me where do I feel best? I will definitely answer among
              nature, on the trail away from the noise of the city, surrounded
              by forest and mountains. The love for Scandinavian landscapes made
              me buy a one-way ticket and live in one of the most beautiful
              countries - Norway. I love vanlife and I travel with my VW T4
              California van at every free moment. I have an artistic soul,
              sometimes I paint in my spare time. I am also passionate about
              personal development and emotional inteligence.
            </p>
          )}
          {valuesOpen && (
            <p>
              <li>* People and Cooperation</li>
              <li>* Respect and Trust</li>
              <li>* Passion and Engagement</li>
              <li>* Creativity and Quality</li>
            </p>
          )}
          <a href="#contact" className="btn btn-primary">
            Let's Talk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
