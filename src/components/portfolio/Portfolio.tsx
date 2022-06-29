import "./portfolio.css";
import { projects } from "../../projects";
import Card from "./Card";
import { ProjectType } from "../../types";

const Portfolio = () => {


  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((project: ProjectType, i:React.Key | null | undefined) => {
          return (
            <Card project={project} key={i}/>
          )
        })}
      </div>
    </section>
  );
};

export default Portfolio;
