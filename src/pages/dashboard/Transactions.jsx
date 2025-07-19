import "./Transactions.css";

const transactions = [
  { date: "2025-06-10", type: "Deposit", amount: "$1,000" },
  { date: "2025-06-15", type: "Investment", amount: "$500" },
  { date: "2025-06-20", type: "Withdrawal", amount: "$200" },
];

export default function Transactions() {
  return (
    <div className="dashboard-page">
      <h2>Transaction History</h2>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, i) => (
              <tr key={i}>
                <td>{txn.date}</td>
                <td>{txn.type}</td>
                <td>{txn.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
