import "./Dashboard.css";
export default function Profile() {
  return (
    <div className="dashboard-page">
      <h2 className="section-title">Your Profile</h2>
      <div className="card">
        <div className="profile-detail">
          <strong>Name:</strong> John Doe
        </div>
        <div className="profile-detail">
          <strong>Email:</strong> johndoe@example.com
        </div>
        <div className="profile-detail">
          <strong>Status:</strong> Active
        </div>
      </div>
    </div>
  );
}
