import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer__socials">
        <a
          className="socials-icon"
          href="https://github.com/SzymczykI"
          rel="noreferrer"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          className="socials-icon"
          href="https://www.linkedin.com/in/izabela-szymczyk-603514114/"
          rel="noreferrer"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
<p>© Copyright 2022, Izabela Szymczyk</p>
      </div>
    </footer>
  );
};

export default Footer;
