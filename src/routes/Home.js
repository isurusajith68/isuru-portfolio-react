import React from "react";
import Navbar from "../components/Navbar";
import HomeT from "../components/HomeT";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Project from "../components/MyProject";
import { Form } from "../components/Form";
import ScrollBtn from "../components/scrollBtn";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeT />
      <ScrollBtn />
      <AboutMe />
      <Skills />
      <Project />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
