import React from "react";
import "./experience.css";
import { FaReact, FaDocker } from "react-icons/fa";
import {
  SiRedux,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiNetlify,
  SiPostman,
  SiJest,
  SiMocha,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { ImHtmlFive } from "react-icons/im";
import { FiFigma } from "react-icons/fi";
import { GrHeroku } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Experience</h5>
      <h2>Technical Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <ImHtmlFive className="experience__details-icon" />
              <h4>HTML5</h4>
            </article>
            <article className="experience__details">
              <IoLogoCss3 className="experience__details-icon" />
              <h4>CSS3</h4>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <SiRedux className="experience__details-icon" />
              <h4>Redux</h4>
            </article>
            <article className="experience__details">
              <SiTypescript className="experience__details-icon" />
              <h4>TypeScript</h4>
            </article>
            <article className="experience__details">
              <TbBrandNextjs className="experience__details-icon" />
              <h4>Next.js</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiNodedotjs className="experience__details-icon" />
              <h4>Node.js + Express</h4>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="experience__details">
              <SiPostgresql className="experience__details-icon" />
              <h4>PostgreSQL</h4>
            </article>
          </div>
        </div>
        <div className="experience__tools">
          <h3>Tools & Technologies</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FiFigma className="experience__details-icon" />
              <h4>Figma</h4>
            </article>
            <article className="experience__details">
              <GrHeroku className="experience__details-icon" />
              <h4>Heroku</h4>
            </article>
            <article className="experience__details">
              <SiNetlify className="experience__details-icon" />
              <h4>Netlify</h4>
            </article>
            <article className="experience__details">
              <FaDocker className="experience__details-icon" />
              <h4>Docker</h4>
            </article>
            <article className="experience__details">
              <SiPostman className="experience__details-icon" />
              <h4>Postman</h4>
            </article>
            <article className="experience__details">
              <SiJest className="experience__details-icon" />
              <h4>Jest</h4>
            </article>
            <article className="experience__details">
              <SiMocha className="experience__details-icon" />
              <h4>Mocha</h4>
            </article>
            <article className="experience__details">
              <BsGithub className="experience__details-icon" />
              <h4>Git</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
