import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="navbar">
      <div className="logo">Mohit Bhatia</div>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <a href="#hero" onClick={() => setOpen(false)}>
          Home
        </a>
        <a href="#skills" onClick={() => setOpen(false)}>
          Skills
        </a>
        <a href="#projects" onClick={() => setOpen(false)}>
          Projects
        </a>
        <a href="#about" onClick={() => setOpen(false)}>
          About
        </a>
        <a href="#contact" className="cta" onClick={() => setOpen(false)}>
          Contact
        </a>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
      </div>

      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        <div className={`menu-toggle ${open ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
