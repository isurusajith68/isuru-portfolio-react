import "./MyProject.css";
import React from "react";
import png from '../assets/png.gif'
import img from '../assets/img.img'
const Project = () => {
  return (
    <div name='project'className="con">
      <div>
        <h1 className="titles">Project</h1>
        {/* <p className="parf">My recent work</p> */}
      </div>

      <div className="container">
      
          <div
            className="img"
            style={{
              backgroundImage: `url(${png})`
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
          backgroundImage: `url(${img})`
          }}
        >
          <div className="overlay"> <div>
            <span className="span">React JS Application</span>
          </div>
          <div>
            <a href="/">
              <button className="button">Demo</button>
            </a>
            <a href="/">
              <button className="button1">Code</button>
            </a>
          </div></div>
         
        </div>

        <div
          className="img"
          style={{
            backgroundImage: `url(https://static.wixstatic.com/media/72c0b2_b3cae0ab282b4c80b826d6cd1870192f~mv2.jpg/v1/fit/w_320%2Ch_437%2Cal_c%2Cq_80/file.jpg)`,backgroundPosition:`center` , backgroundSize:`cover`,
          }}
        >
          <div className="overlay"> <div>
            <span className="span">React JS Application</span>
          </div>
          <div>
            <a href="/">
              <button className="button">Demo</button>
            </a>
            <a href="/">
              <button className="button1">Code</button>
            </a>
          </div></div>
         
        </div>
        <div className="img" style={{ backgroundImage: `url(https://i.pinimg.com/originals/44/c3/c4/44c3c4bacbe495f46605b10d9df39f38.jpg)` ,backgroundPosition:`center` , backgroundSize:`cover` }}>
        <div className="overlay">   <div>
            <span className="span">React JS Application</span>
          </div>
          <div>
            <a href="/">
              <button className="button">Demo</button>
            </a>
            <a href="/">
              <button className="button1">Code</button>
            </a></div>
       
          </div>
        </div>

        <div className="img" style={{ backgroundImage: `url(https://image.shutterstock.com/image-vector/freelancer-child-working-on-laptop-260nw-1459262453.jpg)` ,backgroundPosition:`center` , backgroundSize:`cover`}}>

        <div className="overlay"> <div>
            <span className="span">React JS Application</span>
          </div>
          <div>
            <a href="/">
              <button className="button">Demo</button>
            </a>
            <a href="/">
              <button className="button1">Code</button>
            </a>
          </div></div>
         
        </div>
        <div className="img" style={{ backgroundImage: `url(https://ceblog.s3.amazonaws.com/wp-content/uploads/2018/08/28183850/home_post_2.gif)`,backgroundPosition:`center` , backgroundSize:`cover` }}>
        <div className="overlay">  <div>
            <span className="span">React JS Application</span>{" "}
          </div>
          <div>
            <a href="/">
              <button className="button">Demo</button>
            </a>
            <a href="/">
              <button className="button1">Code</button>
            </a>
          </div>
        </div></div>
        
      </div>
    </div>
  );
};

export default Project;
