import { useState } from "react";
import "./Withdrawal.css";

export default function Withdrawals() {
  const [formData, setFormData] = useState({
    amount: "",
    method: "Bank Transfer",
    walletAddress: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Withdrawal request submitted for ${formData.amount}`);
    setFormData({
      amount: "",
      method: "Bank Transfer",
      walletAddress: "",
    });
  };

  return (
    <div className="withdrawal-page">
      <h2>Request Withdrawal</h2>
      <form className="withdrawal-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Amount (USD)</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            placeholder="Enter amount"
          />
        </div>

        <div className="form-group">
          <label>Withdrawal Method</label>
          <select
            name="method"
            value={formData.method}
            onChange={handleChange}
          >
            <option>Bank Transfer</option>
            <option>Bitcoin</option>
            <option>Ethereum</option>
            <option>USDT (TRC20)</option>
          </select>
        </div>

        <div className="form-group">
          <label>Wallet Address / Bank Details</label>
          <input
            type="text"
            name="walletAddress"
            value={formData.walletAddress}
            onChange={handleChange}
            required
            placeholder="Enter address or account details"
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Request
        </button>
      </form>
    </div>
  );
}
