import "./Footer.css";
import { Link } from "react-scroll";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <h4>Contact</h4>
          <br />
          <div className="location">
            <FaHome
              size={20}
              style={{
                color: "#fff",
                marginRight: "2rem",
              }}
            />
            <div>
              <p>Anuradhapura.</p>
              <p>Sri lanka.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size={20}
                style={{
                  color: "#fff",
                  marginRight: "2rem",
                }}
              />
              +94 76 528 0144
            </h4>
          </div>
          <br />
          <div className="email">
            <h4>
              {" "}
              <FaMailBulk
                size={20}
                style={{
                  color: "#fff",
                  marginRight: "2rem",
                }}
              />
              Isurusajith68@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Explore</h4>
          <br />
          <p>
            <Link
              to="homeT"
              smooth={true}
              duration={500}
              style={{ cursor: `pointer` }}
            >
              Home
            </Link>
          </p>
          <br />
          <p>
            <Link
              to="project"
              smooth={true}
              duration={500}
              style={{ cursor: `pointer` }}
            >
              Project
            </Link>
          </p>
          <br />
          <p>
            <Link
              to="about"
              smooth={true}
              duration={500}
              style={{ cursor: `pointer` }}
            >
              About
            </Link>
          </p>
          <br />
          <p>
            <Link
              to="form"
              smooth={true}
              duration={500}
              style={{ cursor: `pointer` }}
            >
              Contact
            </Link>
          </p>
          <br />

          <div className="social">
            <h4 className="so">Social</h4>
            <br />
            <a href="https://www.facebook.com/isu.1238/">
              <FaFacebook
                size={30}
                style={{
                  color: "#fff",
                  marginRight: "1rem",
                }}
              />
            </a>
            <a href="https://github.com/isurusajith68">
              <FaGithub
                size={30}
                style={{
                  color: "#fff",
                  marginRight: "1rem",
                }}
              />
            </a>
            <a href="https://www.linkedin.com/in/isuru-sajith-rajapaksha/">
              <FaLinkedin
                size={30}
                style={{
                  color: "#fff",
                  marginRight: "1rem",
                }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2021 Isuru Sajith Rajapaksha. All rights reserved. Designed by
          Isuru Sajith Rajapaksha
        </p>
      </div>
    </div>
  );
};

export default Footer;
