import React, { useState } from "react";
import "./Deposit.css";
import qrImage from "../../assets/BTC.jpeg";

export default function Deposit() {
  const walletAddress = "bc1qcrrl382zmpdn4kh8f5whfq5ch5kpqf2x3dksm0";

  const [txHash, setTxHash] = useState("");
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    alert("Wallet address copied to clipboard!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send this data to your backend here (e.g. POST request)
    console.log("Submitted:", { txHash, file });
    setSubmitted(true);
  };

  return (
    <div className="dashboard-page deposit-page">
      <h2 className="deposit-title">Deposit Funds</h2>

      <div className="deposit-card">
        <img src={qrImage} alt="Wallet QR Code" className="qr-image" />

        <div className="wallet-info">
          <label htmlFor="wallet" className="wallet-label">Wallet Address</label>
          <div className="wallet-box">
            <input
              id="wallet"
              type="text"
              readOnly
              value={walletAddress}
              className="wallet-input"
            />
            <button onClick={copyToClipboard} className="copy-button">
              Copy
            </button>
          </div>
          <p className="note-text">
            Scan the QR code or copy the wallet address above to deposit your funds.
          </p>
        </div>
      </div>

      {/* ✅ Confirmation Form */}
      <div className="confirmation-form">
        <h3>Submit Deposit Confirmation</h3>
        {submitted ? (
          <p className="success-message">✅ Confirmation submitted! Your deposit will be verified shortly.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="txHash">Transaction ID / Hash</label>
            <input
              type="text"
              id="txHash"
              value={txHash}
              onChange={(e) => setTxHash(e.target.value)}
              required
              placeholder="Enter your transaction hash"
            />

            <label htmlFor="screenshot">Upload Screenshot (optional)</label>
            <input
              type="file"
              id="screenshot"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <button type="submit">Submit Confirmation</button>
          </form>
        )}
      </div>
    </div>
  );
}
