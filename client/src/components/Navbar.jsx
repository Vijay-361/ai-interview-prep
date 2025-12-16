import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>AI Interview Prep</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/upload" style={styles.link}>Upload</Link>
        <Link to="/interview" style={styles.link}>Interview</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px",
    background: "#111",
    color: "white"
  },
  link: {
    marginLeft: "16px",
    color: "white",
    textDecoration: "none"
  }
};

export default Navbar;
