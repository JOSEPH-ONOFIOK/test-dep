import "./Notifications.css";

const notifications = [
  { message: "Your KYC has been approved.", date: "2025-06-25" },
  { message: "You received 5% ROI for May.", date: "2025-06-01" },
  { message: "Withdrawal request processed.", date: "2025-05-29" },
];

export default function Notifications() {
  return (
    <div className="dashboard-page">
      <h2>Notifications</h2>
      <ul className="notification-list">
        {notifications.map((note, i) => (
          <li key={i} className="notification-item">
            <p>{note.message}</p>
            <span>{note.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
