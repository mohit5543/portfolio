import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/mohit5543/repos")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          console.error("API error:", data);
          setRepos([]);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredRepos = repos
    .filter((repo) => !repo.fork)
    .slice(0, 6);

  return (
    <section className="projects">
      <h1>Projects</h1>

      <div className="grid">
        {filteredRepos.length === 0 ? (
          <p className="loading">Loading...</p>
        ) : (
          filteredRepos.map((repo) => (
            <div className="card" key={repo.id}>
              <h2>{repo.name}</h2>
              <p>{repo.description || "No description available."}</p>
              <a href={repo.html_url} target="_blank" className="button">
                View on GitHub
              </a>
            </div>
          ))
        )}
      </div>
    </section>
  );
}