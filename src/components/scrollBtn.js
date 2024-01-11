import { useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
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


  window.addEventListener("scroll", toggleVisible);

  return (
    <motion.div
      className="scroll-btn"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1 , x: 0}}
      transition={{ duration: 1, delay: 2 }}

    >

      <BsFillArrowUpCircleFill
        id="reload"
        onClick={scrollToTop}
        size={30}
        style={{
          display: visible ? "inline" : "none",
          
        }}
      />

    </motion.div>
  );
};
export default ScrollBtn;
