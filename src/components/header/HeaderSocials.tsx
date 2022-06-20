import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/SzymczykI" rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/izabela-szymczyk-603514114/"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocials;
