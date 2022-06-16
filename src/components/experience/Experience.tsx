import React from "react";
import "./experience.css";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

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
              <DiNodejs className="experience__details-icon" />
              <h4>Node.js</h4>
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
      </div>
    </section>
  );
};

export default Experience;
