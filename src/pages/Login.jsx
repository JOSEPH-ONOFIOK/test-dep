import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Add authentication logic here
    navigate("/components/Dashboard"); // Navigate to dashboard after login
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="input-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>

        <button type="submit" className="login-button">
          Login
        </button>

        <div className="links">
          <a href="/forgot-password">Forgot Password?</a>
          <span> | </span>
          <a href="/createaccount">Create Account</a>
        </div>
      </form>
    </div>
  );
}
