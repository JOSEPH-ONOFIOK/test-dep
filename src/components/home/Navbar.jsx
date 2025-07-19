import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Noventra Capital</div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
          <Link to="/terms" onClick={closeMenu}>Terms</Link>
          <Link to="/login" onClick={closeMenu}>Login</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <Link to="/createaccount" className="cta-button" onClick={closeMenu}>
            Get Started
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
