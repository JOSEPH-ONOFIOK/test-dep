import "./Withdrawal.css";

const history = [
  { date: "2024-06-01", amount: 150, status: "Completed" },
  { date: "2024-06-10", amount: 200, status: "Pending" },
  { date: "2024-06-20", amount: 100, status: "Failed" },
];

export default function WithdrawalHistory() {
  return (
    <div className="dashboard-page">
      <h2>Withdrawal History</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount ($)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, i) => (
            <tr key={i}>
              <td>{item.date}</td>
              <td>{item.amount}</td>
              <td className={`status ${item.status.toLowerCase()}`}>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
