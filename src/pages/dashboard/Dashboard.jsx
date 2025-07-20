import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="dashboard-container">
      {/* Hamburger menu button */}
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>

      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <h1>Noventra Capital</h1>
        <nav>
          <ul>
            <li><NavLink to="overview" onClick={closeSidebar}>Overview</NavLink></li>
            <li><NavLink to="transactions" onClick={closeSidebar}>Transactions</NavLink></li>
            <li><NavLink to="withdrawals" onClick={closeSidebar}>Withdrawals</NavLink></li>
            <li><NavLink to="deposit" onClick={closeSidebar}>Deposit</NavLink></li>
            <li><NavLink to="kyc" onClick={closeSidebar}>KYC</NavLink></li>
            <li><NavLink to="packages" onClick={closeSidebar}>Packages</NavLink></li>
            <li><NavLink to="profile" onClick={closeSidebar}>Profile</NavLink></li>
            <li><NavLink to="help" onClick={closeSidebar}>Help</NavLink></li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
