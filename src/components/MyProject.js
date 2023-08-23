import "./MyProject.css";
import React from "react";
import png from "../assets/png.gif";
import img from "../assets/rn.gif";
import eco from "../assets/ec2.gif";
import and from "../assets/and.gif";
import mern from "../assets/mern.gif";

const Project = () => {
  return (
    <div name="project" className="con">
      <div>
        <h1 className="titles">Project</h1>
        {/* <p className="parf">My recent work</p> */}
      </div>

      <div className="container">
        <div
          className="img"
          style={{
            backgroundImage: `url(${png})`,
          }}
        >
          <div className="overlay">
            <div>
              <span className="span">React JS Application</span>
            </div>
            <div>
              <a href="/">
                <button className="button">Demo</button>
              </a>
              <a href="/">
                <button className="button1">Code</button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="img"
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
          }}
        >
          <div className="overlay">
            {" "}
            <div>
              <span className="span">E Shop React Native</span>
            </div>
            <div>
              <a href="/">
                <button className="button">Demo</button>
              </a>
              <a href="https://github.com/isurusajith68/Eshop_React_Native">
                <button className="button1">Code</button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="img"
          style={{
            backgroundImage: `url(${eco})`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
          }}
        >
          <div className="overlay">
            {" "}
            <div>
              <span className="span">MERN Ecomit Web App </span>
            </div>
            <div>
              <a href="/">
                <button className="button">Demo</button>
              </a>
              <a href="/https://github.com/isurusajith68/Ecomate_MERN">
                <button className="button1">Code</button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="img"
          style={{
            backgroundImage: `url(${mern})`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
          }}
        >
          <div className="overlay">
            {" "}
            <div>
              <span className="span">MERN Redux Online Store</span>
            </div>
            <div>
              <a href="/">
                <button className="button">Demo</button>
              </a>
              <a href="/https://github.com/isurusajith68/ecommerce_site_redux">
                <button className="button1">Code</button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="img"
          style={{
            backgroundImage: `url(https://image.shutterstock.com/image-vector/freelancer-child-working-on-laptop-260nw-1459262453.jpg)`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
          }}
        >
          <div className="overlay">
            {" "}
            <div>
              <span className="span">React JS Application</span>
            </div>
            <div>
              <a href="/">
                <button className="button">Demo</button>
              </a>
              <a href="/">
                <button className="button1">Code</button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="img"
          style={{
            backgroundImage: `url(${and})`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
          }}
        >
          <div className="overlay">
            {" "}
            <div>
              <span className="span">Android Aplication (Java)</span>{" "}
            </div>
            <div>
              <a href="/">
                <button className="button">Demo</button>
              </a>
              <a href="/">
                <button className="button1">Code</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
