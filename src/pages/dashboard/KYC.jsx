import "./KYC.css";
import { useState } from "react";

export default function KYC() {
  const [uploaded, setUploaded] = useState(false);
  const [fileName, setFileName] = useState("");
  const [filePreview, setFilePreview] = useState(null);
  const [alert, setAlert] = useState("");

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setUploaded(true);
      setAlert("✅ Document uploaded successfully. Awaiting review.");

      // Image preview
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => setFilePreview(reader.result);
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null);
      }

      // Clear alert after 5 seconds
      setTimeout(() => setAlert(""), 5000);
    }
  };

  const handleResubmit = () => {
    setUploaded(false);
    setFileName("");
    setFilePreview(null);
    setAlert("You can now upload a new document.");
    setTimeout(() => setAlert(""), 4000);
  };

  return (
    <div className="dashboard-page kyc-page">
      <h2 className="kyc-title">KYC Verification</h2>

      <div className="kyc-card">
        <p className="kyc-instruction">
          Please upload a valid government-issued ID (e.g. National ID, Passport, Driver’s License).
        </p>

        <input
          type="file"
          id="kyc-upload"
          accept="image/*,application/pdf"
          onChange={handleUpload}
          className="file-input"
        />

        {alert && <div className="alert">{alert}</div>}

        {uploaded && (
          <div className="preview-section">
            <p className="status-text">
              <strong>{fileName}</strong> has been uploaded.
            </p>

            {filePreview ? (
              <img src={filePreview} alt="Preview" className="preview-image" />
            ) : (
              <p className="pdf-notice">📄 PDF file uploaded. (No preview available)</p>
            )}

            <button className="resubmit-btn" onClick={handleResubmit}>
              Re-upload Document
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
