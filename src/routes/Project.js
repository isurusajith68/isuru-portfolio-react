import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import MyProject from "../components/MyProject";



const Project = () => {
  return (
    <div>
      <Navbar /> 
      <Heroimg2 heading="Project" text="" />
      <MyProject/>
      <Footer />
      
    </div>
  );
};

export default Project;
