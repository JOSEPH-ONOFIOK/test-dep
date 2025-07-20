import React, { useState } from "react";
import "./Profile.css";

export default function Profile() {
  const [user, setUser] = useState({
    fullName: "Onofiok Joseph",
    email: "onofiok@example.com",
    phone: "+2348012345678",
    country: "Nigeria",
    plan: "Pro Plan",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully.");
  };

  return (
    <div className="dashboard-page profile-page">
      <h2>Your Profile</h2>
      <div className="card profile-card">
        <div className="field-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div className="field-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div className="field-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div className="field-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={user.country}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div className="field-group">
          <label>Current Plan</label>
          <input
            type="text"
            name="plan"
            value={user.plan}
            disabled
            className="readonly"
          />
        </div>

        <div className="btn-group">
          {!isEditing ? (
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit Profile
            </button>
          ) : (
            <button className="save-btn" onClick={handleSave}>
              Save Changes
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
