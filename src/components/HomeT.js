import "./HomeT.css";
import Typewriter from "typewriter-effect";

import React from "react";
import img from "../assets/download.jpg";
import { Link } from "react-router-dom";

const HomeT = () => {
  return (
    <div className="homeT">
      <div className="mask">
        <img className="download" src={img} alt="download" />
      </div>
      <div className="content">
        <p className="tt">HI, I'M <span className="sp">Isuru Sajith</span></p>
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
         <a href="Isuru Sajith-CV.pdf" download='Isuru CV.pdf'>
          <button className="btn">Resume</button>
         </a>
          <Link to="/Contact" className="btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeT;
