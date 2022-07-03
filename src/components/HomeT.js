import "./HomeT.css";
import Typewriter from "typewriter-effect";

import React from "react";
import download from "../assets/download.jpg";
import { Link } from "react-router-dom";

const HomeT = () => {
  return (
    <div className="homeT">
      <div className="mask">
        <img className="download" src={download} alt="download" />
      </div>
      <div className="content">
        <p className="tt">HI, I'M Isuru Sajith</p>
        <h1>
          <Typewriter
            options={{
              strings: ["Web Developer💻"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div>
          <Link to="/Project" className="btn">
            Projects
          </Link>
          <Link to="/Contact" className="btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeT;
