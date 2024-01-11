import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const { scrollYProgress } = useScroll();

  const [color, setColor] = useState(false);
  const changecolor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changecolor);

  return (
    <div className={color ? "header header-bg" : "header"} >

      <Link to="homeT" smooth={true} duration={500}>
        <h1 style={{ cursor: `pointer` }}>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link
            to="homeT"
            smooth={true}
            duration={500}
            style={{ cursor: `pointer` }}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            style={{ cursor: `pointer` }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            style={{ cursor: `pointer` }}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="project"
            smooth={true}
            duration={500}
            style={{ cursor: `pointer` }}
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            to="form"
            smooth={true}
            duration={500}
            style={{ cursor: `pointer` }}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff " }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff " }} />
        )}
      </div>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default Navbar;
