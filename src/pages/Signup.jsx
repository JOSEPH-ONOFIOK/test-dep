// src/pages/Signup.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Signup() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    country: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder validation
    if (form.fullName && form.email && form.password) {
      console.log("Account created:", form);
      navigate("/dashboard");
    } else {
      setError("Please fill all required fields.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input name="fullName" onChange={handleChange} required />
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} required />
          <label>Phone</label>
          <input name="phone" onChange={handleChange} />
          <label>Country</label>
          <input name="country" onChange={handleChange} />
          <button type="submit">Sign Up</button>
          {error && <p className="error">{error}</p>}
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
