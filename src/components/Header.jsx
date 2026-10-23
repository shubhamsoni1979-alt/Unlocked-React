
import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = ["Home", "About","Contact"];

  return (
    <header className="header-wrapper">
      <div className="header">
        {/* Logo */}
        <a href="/" className="header-logo">
     <img src="src/assets/logo.png" alt="UnlockedReact" />
     <span className="logo-text">Unlocked-React</span>
        </a>

        {/* Navigation */}
        <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={activeLink === link ? "active" : ""}
              onClick={() => {
                setActiveLink(link);
                setMenuOpen(false);
              }}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="header-actions">

         <Link to="/login" className="login-btn">
            Login
          </Link>

          {/* <span className="separator"></span> */}

          {/* <a href="#signup" className="signup-btn">
            Sign up
          </a> */}
        </div>

        {/* Mobile menu */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}

export default Header;
