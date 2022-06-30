import React from "react";
import CTA from "./CTA";
import "./header.css";
import HeaderSocial from "./HeaderSocials";
import ME from "../../assets/Iza1.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Izabela Szymczyk</h1>
        <h5 className="text-light">Fullstack JavaScript Developer</h5>
        <CTA />
        <HeaderSocial />

        {/* <div className="me">
          <img className="me__photo" src={ME} alt="me" />
        </div> */}

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
