import "./MyProject.css";

const MyprojectCom = ({ data }) => {
  console.log(data);
  return (
    <div className="project">
      <div
        className="img"
        style={{
          backgroundImage: `url(${data.img})`,
        }}
      >
        <div className="overlay">
          <div>
            <span className="span">{data.name}</span>
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
  );
};
export default MyprojectCom;
