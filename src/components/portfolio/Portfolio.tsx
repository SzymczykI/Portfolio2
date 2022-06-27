import "./portfolio.css";
import hackday from "../../assets/hackday.png";
import trippin from "../../assets/trippin.png";
import todo from "../../assets/todo.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={hackday} alt="project" />
          </div>
          <h3>US National Parks Guide</h3>
          <div className="portfolio__item-cta">
            <a
              className="btn btn-primary"
              href="https://github.com/SzymczykI/Hackday-project"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a className="btn" href="https://github.com/SzymczykI/Hackday-project">
              More Info
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={trippin} alt="project" />
          </div>
          <h3>TRIPPIN</h3>
          <div className="portfolio__item-cta">
            <a
              className="btn btn-primary"
              href="https://github.com/SzymczykI/SALT-trippin"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a className="btn" href="https://github.com/SzymczykI/Hackday-project">
              More Info
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={todo} alt="project" />
          </div>
          <h3>To-do App</h3>
          <div className="portfolio__item-cta">
            <a
              className="btn btn-primary"
              href="https://github.com/SzymczykI/Todo-App"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a className="btn" href="https://github.com/SzymczykI/Hackday-project">
              More Info
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
