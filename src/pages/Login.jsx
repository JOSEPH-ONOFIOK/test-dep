// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder validation
    if (form.email && form.password) {
      console.log("Logged in:", form);
      navigate("/dashboard"); // ✅ Redirect to /dashboard
    } else {
      setError("Please enter email and password.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} required />
          <button type="submit">Login</button>
          {error && <p className="error">{error}</p>}
        </form>
        <p>
          Don't have an account? <a href="/createaccount">Sign up</a>
        </p>
      </div>
    </div>
  );
}
