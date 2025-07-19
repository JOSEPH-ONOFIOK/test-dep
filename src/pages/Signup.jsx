import React from "react";
import "./Signup.css";

export default function Signup() {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Create Account</h2>

        <div className="input-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" required />
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>

        <div className="input-group">
          <label>Confirm Password</label>
          <input type="password" placeholder="Re-enter your password" required />
        </div>

        <button type="submit" className="signup-button">Create Account</button>

        <div className="links">
          Already have an account? <a href="/login">Login</a>
        </div>
      </form>
    </div>
  );
}
