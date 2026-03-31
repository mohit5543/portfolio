function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Mohit Bhatia. All rights reserved.</p>

      <div className="footer-links">
        <a href="#hero">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;
