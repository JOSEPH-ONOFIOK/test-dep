import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo-section">
          <img src="/assets/logo.svg" alt="Noventra Capital Logo" className="footer-logo" />
          <p>
            At Noventra Capital, we’re committed to guiding and supporting our investors with clarity and confidence.
          </p>
          <div className="support">
            <strong>Need a Free Consultation?</strong>
            <br />
            <a href="/contact">Contact Support</a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Information</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/wallet">Wallet</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Newsletter Signup</h4>
          <p>Stay informed with tips, updates, and investment insights from Noventra Capital.</p>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">
              Subscribe <span className="arrow">➔</span>
            </button>
          </form>
        </div>

        <div className="footer-contact-info">
          <h4>Contact Information</h4>
          <p>Email: <a href="mailto:Noventracapital@gmail.com">Noventracapital@gmail.com</a></p>
          <p>Location: New York, USA</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} <a href="/">Noventra Capital</a>. All rights reserved.
      </div>
    </footer>
  );
}
