import "./KYC.css";
import { useState } from "react";

export default function KYC() {
  const [uploaded, setUploaded] = useState(false);

  return (
    <div className="dashboard-page">
      <h2>KYC Verification</h2>
      <div className="card">
        <p>Please upload a valid government-issued ID for verification.</p>
        <input
          type="file"
          accept="image/*,application/pdf"
          onChange={() => setUploaded(true)}
        />
        {uploaded && <p className="status-message">Document uploaded. Awaiting review.</p>}
      </div>
    </div>
  );
}
