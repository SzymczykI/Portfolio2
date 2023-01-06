import React, { useState } from "react";
import { ProjectType } from "../../types";
import "./portfolio.css";

interface CardPropsComponentType {
  project: ProjectType;
}

const Card = ({ project }: CardPropsComponentType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article key={project.id} className="portfolio__item">
      
      <h3>{project.name}</h3>
      <h5>{project.technology}</h5>
      {isOpen && (
        <div className="portfolio__item-more">
          <p>{project.description}</p>
        </div>
      )}
      <div className="portfolio__item-cta">
        <a
          className="btn btn-primary"
          href={project.gitHubLink}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        {isOpen ? (
          <a
            className="btn"
            href={project.lifeLink}
            target="_blank"
            rel="noreferrer"
          >
            Life Demo
          </a>
        ) : (
          <button className="btn" onClick={() => setIsOpen(!isOpen)}>
            More Info
          </button>
        )}
      </div>
    </article>
  );
};

export default Card;
