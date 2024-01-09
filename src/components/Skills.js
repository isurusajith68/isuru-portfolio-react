import React from "react";
import "./skills.css";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Sql from "../assets/sql.png";
import GitHub from "../assets/github.png";
import Mongo from "../assets/mongo.png";
import NEXTJS from "../assets/pngwing.com.png";
import REACTNATIVE from "../assets/react.png";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div>
      <div name="skills">
        <div>
          <h1 className="titlee">Skills</h1>
        </div>
        <div className="parfcontainer">
          <p className="parf">These are the technologies I've worked with</p>
          <div className="imgcon">
            <Marquee autoFill={true} gradient={true} gradientColor="black"  play={true} >
              <div>
                <img className="img1" src={HTML} alt="HTML icon" />
                <p className="namea">HTML</p>
              </div>
              <div>
                <img className="img1" src={CSS} alt="HTML icon" />
                <p className="namea">CSS</p>
              </div>
              <div>
                <img className="img1" src={JavaScript} alt="HTML icon" />
                <p className="namea">JAVASCRIPT</p>
              </div>
              <div>
                <img className="img1" src={ReactImg} alt="HTML icon" />
                <p className="namea">REACT</p>
              </div>
              <div>
                <img className="img1" src={GitHub} alt="HTML icon" />
                <p className="namea">GITHUB</p>
              </div>
              <div>
                <img className="img1" src={Node} alt="HTML icon" />
                <p className="namea">NODE JS</p>
              </div>
              <div>
                <img
                  className="img1"
                  src={NEXTJS}
                  alt="HTML icon"
                  style={{
                    background: "white ",
                    padding: "10px",
                    borderRadius: "20%",
                  }}
                />
                <p className="namea">NEXT JS</p>
              </div>
              <div>
                <img className="img1" src={Mongo} alt="HTML icon" />
                <p className="namea">MONGO DB</p>
              </div>
              <div>
                <img className="img1" src={Sql} alt="HTML icon" />
                <p className="namea">SQL</p>
              </div>
              <div>
                <img
                  className="img1"
                  src={REACTNATIVE}
                  alt="HTML icon"
                  style={{
                    background: "white ",
                    padding: "10px",
                    borderRadius: "20%",
                  }}
                />
                <p className="namea">REACT NATIVE</p>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
