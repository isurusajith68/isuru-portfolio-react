import "./AboutMe.css";
// import myimg from "../assets/mgimg.jpg";
import React from "react";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="title">
          <h1>About Me </h1>
          <div className="content1">
            <div className="article">
              <h3>
                I am a recent graduate with a Bachelor of Science (Hons) degree
                in Information Technology from SLIIT in Malabe. Throughout my
                undergraduate studies, I honed my skills in organization,
                collaboration, communication, and analysis. I thrive on
                challenges, viewing each one as an opportunity for personal and
                professional growth. I am eager to apply my skills and knowledge
                to contribute meaningfully to the objectives of any
                organization, while also seeking further hands-on learning and
                development opportunities to continue expanding my expertise
              </h3>
            </div>
            <div className="image">
              <div className="myimg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
