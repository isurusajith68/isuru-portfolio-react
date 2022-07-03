import "./AboutMe.css";
import download from "../assets/download.jpg";
import myimg from "../assets/myimg.jpg";
import React from "react";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="title">
          <h1>About Me</h1>
          <div className="content1">
            <div className="article">
              <h3>
                I am an undergraduate, currently following a B.Sc (Hons)
                Information Technology degree offered by SLIIT at Malabe. I am a
                well-organized, collaborative team player with strong
                communication and analytical skills. I consider every challenge
                I get as an opportunity to improve my skills. I would like to
                use my skills to contribute productively and positively to
                fulfill the goals of the organization while improving my
                knowledge through hands-on learning and development work.
              </h3>
            </div>
            <div className="image">
              <img className="myimg" src={myimg} alt="myimg" />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
