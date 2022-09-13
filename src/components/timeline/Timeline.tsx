import "./timeline.css";

const Timeline = () => {
  return (
    <section id="experience">
      <h2>Timeline</h2>

      <div className="container timeline__container">
        <ul className="timeline">
          <li className="timeline-item mb-5">
            <h4 className="fw-bold">Full Stack JavaScript Developer - Consultant</h4>
            <h5 className="fw-bold">
              School of applied technology &lt;​/salt&gt;
            </h5>
            <h5 className="text-muted mb-2 fw-bold">2022</h5>
            <p className="text-muted">
              From over 1000 applicants, I was one of ~30 students selected to
              partake in a highly paced and very intensive Full Stack JavaScript
              Developer program. The training emphasises applied learning
              through Mob Programming, Agile work methods and consists of 500
              coding hours with weekly demos and coding tests that are necessary
              to pass in order to graduate. Currently, after completing the
              program, I work here as a consultant and I am open to job offers
            </p>
          </li>

          <li className="timeline-item mb-5">
            <h4 className="fw-bold">
              The Web Developer Bootcamp 2022 & The Modern React Bootcamp
              (Hooks, Context, NextJS, Router)
            </h4>
            <h5 className="fw-bold">Udemy - Colt Steele</h5>
            <h5 className="text-muted mb-2 fw-bold">2021 - 2022</h5>
            <a
              className="text-muted"
              href="https://www.udemy.com/certificate/UC-7a0f2620-cb62-46ce-8b02-69688512b8be/"
            >
              Certificate 1{" "}
            </a>
            <a
              className="text-muted"
              href="https://www.udemy.com/certificate/UC-2ea63685-2a82-4699-9189-8736a164f10f/"
            >
              Certificate 2
            </a>
          </li>

          <li className="timeline-item mb-5">
            <h4 className="fw-bold">Full Stack JavaScript Training</h4>
            <h5 className="fw-bold">Treehouse platform</h5>
            <h5 className="text-muted mb-2 fw-bold">2021</h5>
          </li>

          <li className="timeline-item mb-5">
            <h4 className="fw-bold">Bussiness Owner</h4>
            <h5 className="fw-bold">Fenari</h5>
            <h5 className="text-muted mb-2 fw-bold">2019 - 2020</h5>
          </li>

          <li className="timeline-item mb-5">
            <h4 className="fw-bold">Insurance Agent</h4>
            <h5 className="fw-bold">Mendel Insurance</h5>
            <h5 className="text-muted mb-2 fw-bold">2018 - 2019</h5>
          </li>

          <li className="timeline-item mb-5">
            <h4 className="fw-bold">E-commerce - Online Sales Specialist</h4>
            <h5 className="fw-bold">PHU Top Stock</h5>
            <h5 className="text-muted mb-2 fw-bold">2016 - 2018</h5>
          </li>

          <li className="timeline-item mb-5">
            <h4 className="fw-bold">Maria Curie-Sklodowska University</h4>
            <h5 className="fw-bold">Bachelor, Finance and Accounting</h5>
            <h5 className="text-muted mb-2 fw-bold">2013 - 2016</h5>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Timeline;
