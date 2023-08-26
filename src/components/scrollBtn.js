import { useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { IoRefreshCircleSharp } from "react-icons/io5";
import "./scrollbtn.css";

const ScrollBtn = () => {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.onscroll = function () {
    scrollRotate();
  };

  function scrollRotate() {
    let image = document.getElementById("reload");
    image.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className="scroll-btn"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? (
        <BsFillArrowUpCircleFill
          // id="reload"
          onClick={scrollToTop}
          size={35}
          style={{ display: visible ? "inline" : "none" }}
        />
      ) : (
        <IoRefreshCircleSharp
          id="reload"
          onClick={scrollToTop}
          size={44}
          style={{
            display: visible ? "inline" : "none",
          }}
        />
      )}
    </div>
  );
};
export default ScrollBtn;
