import { useEffect, useState } from "react";

function formatLastPushed(dateString) {
  if (!dateString) {
    return "Recently updated";
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
}

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch("https://api.github.com/users/mohit5543/repos?per_page=100")
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          console.error("API error:", data);
          setRepos([]);
          setStatus("error");
          return;
        }

        const latestRepos = data
          .filter((repo) => !repo.fork)
          .sort(
            (a, b) =>
              new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
          )
          .slice(0, 6);

        setRepos(latestRepos);
        setStatus("success");
      })
      .catch((err) => {
        console.error(err);
        setRepos([]);
        setStatus("error");
      });
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="section-heading">
        <span className="section-kicker">Latest work</span>
        <h1>Projects</h1>
        <p className="section-subtitle">
          Pulled from GitHub and ordered by most recent push, so the newest work
          appears first.
        </p>
      </div>

      <div className="grid">
        {status === "loading" ? (
          <p className="loading">Loading latest repositories...</p>
        ) : status === "error" ? (
          <p className="loading">Unable to load projects right now.</p>
        ) : (
          repos.map((repo) => (
            <article className="card" key={repo.id}>
              <div className="project-card-top">
                <span className="project-language">
                  {repo.language || "Code project"}
                </span>
                <span className="project-date">
                  Pushed {formatLastPushed(repo.pushed_at)}
                </span>
              </div>

              <h2>{repo.name.replace(/-/g, " ")}</h2>
              <p>
                {repo.description ||
                  "A recent GitHub repository from my portfolio work."}
              </p>

              <div className="project-meta">
                <span>Sorted by latest push</span>
                <span>{repo.stargazers_count} stars</span>
              </div>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="button"
              >
                View on GitHub
              </a>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
