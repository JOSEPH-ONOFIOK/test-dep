import "./Finance.css";
export default function Finance() {
  return (
    <div className="dashboard-page">
      <h2 className="section-title">Financial Summary</h2>
      <div className="card">
        <div className="finance-row">
          <strong>Total Balance</strong>
          <span>$6,230</span>
        </div>
        <div className="finance-row">
          <strong>Total Deposits</strong>
          <span>$5,000</span>
        </div>
        <div className="finance-row">
          <strong>Total Withdrawals</strong>
          <span>$500</span>
        </div>
      </div>
    </div>
  );
}