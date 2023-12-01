import "./MyProject.css";
import React, { useRef, useState } from "react";
import { projects } from "../utils/projects";
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
        <div className="container22">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="img"
              style={{
                backgroundImage: `${project.img}`,
              }}
            >
              <div className="overlay">
                <div>
                  <span className="span">{project.name}</span>
                </div>
                <div>
                  <a href={project.demo}>
                    <button className="button">Demo</button>
                  </a>
                  <a href={project.gitUrl}>
                    <button className="button1">Code</button>
                  </a>
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
