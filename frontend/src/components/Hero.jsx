import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiChevronDown } from "react-icons/fi";

function Hero() {
  return (
    <motion.div
      id="hero"
      className="hero"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Hi, I'm Mohit</h1>
      <p>Frontend Developer building modern web experiences</p>

      <TypeAnimation
        sequence={[
          "Frontend Developer ",
          1500,
          "Learning AI ",
          1500,
          "Building Projects ",
          1500,
          
        ]}
        speed={50}
        repeat={Infinity}
        className="typing"
    
      />
      <div className="hero-buttons">
        <a href="#projects" className="button primary">View Projects</a>
        <a href="#contact" className="button secondary">Contact Me</a>
      </div>
      <motion.div
        className="scroll"
        onClick={() => {
          document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span>Scroll Down</span>

        <motion.div
          className="scroll-icon"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          <FiChevronDown size={24} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Hero;