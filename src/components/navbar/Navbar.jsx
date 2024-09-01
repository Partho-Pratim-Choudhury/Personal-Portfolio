import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import TypingEffect from "../navbar/TypingEffect";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <nav className={`navbar ${isActive ? "active" : ""}`}>
      <div className={`left-navbar ${isActive ? "active" : ""}`}>
        <div className="logo"></div>
        <Link to="/" className="brand-title" onClick={closeMenu}>
          Partho
        </Link>
        <div className="dynamic-text">
          <TypingEffect />
        </div>
      </div>
      <Link
        className={`toggle-button ${isActive ? "active" : ""}`}
        to="#"
        onClick={toggleButton}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </Link>
      <div className={`navbar-links ${isActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/projects" className="nav-links" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <span className="bar-ver"></span>
          <li>
            <span
              className="nav-links"
              onClick={() => {
                window.open(
                  "./Resume_Partho_Pratim_Choudhury_2112003_CSE_NIT_Silchar.pdf"
                );
                closeMenu();
              }}
            >
              Resume
            </span>
          </li>
          <span className="bar-ver"></span>
          <li>
            <Link to="/contact" className="nav-links" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
