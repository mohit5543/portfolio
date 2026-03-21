import { useEffect, useState, useRef } from "react";
import { FaReact, FaJs, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiCss, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");
  const [progress, setProgress] = useState([]);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const skillsData = {
    frontend: [
      { name: "React", value: 80, desc: "Hooks, Context API, Routing", icon: <FaReact className="icon react" /> },
      { name: "JavaScript", value: 75, desc: "ES6+, DOM, Async", icon: <FaJs className="icon js" /> },
      { name: "CSS", value: 85, desc: "Flexbox, Grid, Animations", icon: <SiCss className="icon css" /> },
    ],
    backend: [
      { name: "Node.js", value: 60, desc: "Express, APIs", icon: <FaNodeJs className="icon node" /> },
      { name: "MongoDB", value: 55, desc: "Database basics", icon: <SiMongodb className="icon mongo" /> },
    ],
    tools: [
      { name: "Git", value: 70, desc: "Version control", icon: <FaGitAlt className="icon git" /> },
    ],
  };

  const currentSkills = skillsData[activeTab];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setProgress(currentSkills.map((s) => s.value));
      }, 200);
    } else {
      setProgress(currentSkills.map(() => 0));
    }
  }, [activeTab, visible]);

  return (
    <motion.section 
    className="skills" id="skills" ref={sectionRef}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    >
      <h1>Skills</h1>

      {/* Tabs */}
      <div className="skills-tabs">
        <button onClick={() => setActiveTab("frontend")} className={activeTab === "frontend" ? "active" : ""}>Frontend</button>
        <button onClick={() => setActiveTab("backend")} className={activeTab === "backend" ? "active" : ""}>Backend</button>
        <button onClick={() => setActiveTab("tools")} className={activeTab === "tools" ? "active" : ""}>Tools</button>
      </div>

      {/* Skills */}
      <div className="skills-list">
        {currentSkills.map((skill, index) => (
          <div className="skill-item" key={index}>

            <div className="skill-header">
              <span className="skill-title">
                {skill.icon}
                {skill.name}
              </span>
              <span>{progress[index] || 0}%</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: `${progress[index] || 0}%` }}
              ></div>
            </div>

            <p className="skill-desc">{skill.desc}</p>

          </div>
        ))}
      </div>
    </motion.section>
  );
}