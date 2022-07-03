import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import AboutMe from "../components/AboutMe";

const About = () => {
  return (
    <div> 
    <Navbar />
    <Heroimg2 heading="About" text="" />
    <AboutMe />
    <Footer />
    </div>
  )
}

export default About