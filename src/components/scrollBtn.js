import { useState } from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import "./scrollbtn.css";

const ScrollBtn = () => {
  const [visible, setVisible] = useState(false);

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

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="scroll-btn">
      <BsFillArrowDownCircleFill
        id="reload"
        onClick={scrollToTop}
        size={35}
        style={{ display: visible ? "inline" : "none" }}
      />
    </div>
  );
};
export default ScrollBtn;
