import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";

function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const heroHeight = hero ? hero.offsetHeight : 0;

      if (window.scrollY > heroHeight - 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      className="scroll-top"
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: show ? 1 : 0,
        y: show ? 0 : 20,
      }}
      transition={{ duration: 0.3 }}
      style={{
        pointerEvents: show ? "auto" : "none",
      }}
    >
      <FiArrowUp size={20} />
    </motion.button>
  );
}

export default ScrollToTop;