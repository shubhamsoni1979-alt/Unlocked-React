
import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = ["Home", "About","Contact"];

  return (
    <header className="header-wrapper">
      <div className="header">
        {/* Logo */}
        <Link to="/" className="header-logo">
          <img src={logo} alt="" />
          <span className="logo-text">Unlocked-React</span>
        </Link>

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
