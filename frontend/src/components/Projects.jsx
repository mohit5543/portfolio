import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("fetch("https://portfolio-backend-5pz8.onrender.com/api/repos")")
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div id="projects" className="projects">
      <h1>My Projects </h1>

      {loading ? (
        <p className="loading">Loading projects...</p>
      ) : (
        <div className="grid">
          {projects.slice(0, 4).map((repo) => (
            <motion.div
                className="card"
                key={repo.id}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
            >
              <h2>{repo.name}</h2>
              <p>{repo.description || "A project built using modern web technologies."}</p>
              <a 
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
                >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;