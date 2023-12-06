import "./MyProject.css";
import React, { useRef, useState } from "react";
import { projects } from "../utils/projects";
import { FaArrowCircleRight } from "react-icons/fa";
const projectsPerPage = 3;

const Project = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectSectionRef = useRef(null);
  const startIndex = (currentPage - 1) * projectsPerPage;



  const endIndex = startIndex + projectsPerPage;

  const displayedProjects = projects.slice(startIndex, endIndex);
  console.log(displayedProjects);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  console.log(currentPage);
  console.log(totalPages);
  console.log(projects);
  return (
    <div
      name="project"
      className="con"
      id="projectSection"
      ref={projectSectionRef}
    >
      <div>
        <h1 className="titles">Project</h1>
        {/* <p className="parf">My recent work</p> */}
      </div>
      <div>
        <div className="box-container">
          {displayedProjects.map((project, index) => (
            <div class="box-item">
              <div class="flip-box">
                <div class="flip-box-front text-center" style={{ backgroundImage: `${project.img}` }}>
                  <div class="inner color-white" >
                    <h3 class="flip-box-header">{project.name}</h3>
                    <FaArrowCircleRight size={25} style={{ marginTop: "10px" }} />
                  </div>
                </div>
                <div class="flip-box-back text-center" style={{ backgroundImage: `${project.img}` }} >
                  <div>

                  </div>
                  <div class="inner color-white" >
                    <h3 class="flip-box-header">{project.name}</h3>
                    <a href={project.gitUrl}>
                      <button class="flip-box-button">Source Code</button>
                    </a>
                    <a href={project.demo}>
                      <button class="flip-box-button2">Demo</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pagination">
        {currentPage === 1 ? (
          ""
        ) : (
          <button
            onClick={() => {
              setCurrentPage(currentPage - 1);
              if (projectSectionRef.current) {
                window.scrollTo({
                  top: projectSectionRef.current.offsetTop - 100,
                  behavior: "smooth",
                });
              }
            }}
            style={{
              width: "70px",
              height: "30px",
              borderRadius: "20px",
              fontWeight: "bold",
              marginRight: "20px",
            }}
          >
            PREV
          </button>
        )}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => {
              handlePageChange(i + 1);

              if (projectSectionRef.current) {
                window.scrollTo({
                  top: projectSectionRef.current.offsetTop - 100,
                  behavior: "smooth",
                });
              }
            }}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
        {currentPage === totalPages ? (
          ""
        ) : (
          <button
            onClick={() => {
              setCurrentPage(currentPage + 1);
              if (projectSectionRef.current) {
                window.scrollTo({
                  top: projectSectionRef.current.offsetTop - 100,
                  behavior: "smooth",
                });
              }
            }}
            style={{
              width: "70px",
              height: "30px",
              borderRadius: "20px",
              fontWeight: "bold",
              marginLeft: "20px",
            }}
          >
            NEXT
          </button>
        )}
      </div>

    </div>
  );
};

export default Project;
