import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h1>Noventra Capital</h1>
        <nav>
          <ul>
            <li><NavLink to="overview">Overview</NavLink></li>
            <li><NavLink to="transactions">Transactions</NavLink></li>
            <li><NavLink to="withdrawals">Withdrawals</NavLink></li>
            <li><NavLink to="deposit">Deposit</NavLink></li>
            <li><NavLink to="kyc">KYC</NavLink></li>
            <li><NavLink to="packages">Packages</NavLink></li>
            <li><NavLink to="profile">Profile</NavLink></li>
            <li><NavLink to="help">Help</NavLink></li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
