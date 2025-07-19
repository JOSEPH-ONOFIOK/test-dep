// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/home";
import AboutUs from "./pages/AboutUs";
import Terms from "./pages/Terms";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/ContactUs";

// Dashboard Layout
import Dashboard from "./pages/dashboard/Dashboard";

// Dashboard Pages
import Overview from "./pages/dashboard/Overview";
import Trades from "./pages/dashboard/Trades";
import Finance from "./pages/dashboard/Finance";
import Profile from "./pages/dashboard/Profile";
import Packages from "./pages/dashboard/Packages";
import Help from "./pages/dashboard/Help";
import Transactions from "./pages/dashboard/Transactions";
import Notifications from "./pages/dashboard/Notifications";
import KYC from "./pages/dashboard/KYC";
import Withdrawal from "./pages/dashboard/WithdrawalHistory";




export default function App() {
  return (
    
      <Router>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createaccount" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />

          {/* Dashboard with nested routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<Overview />} />
            <Route path="trades" element={<Trades />} />
            <Route path="finance" element={<Finance />} />
            <Route path="packages" element={<Packages />} />
            <Route path="profile" element={<Profile />} />
            <Route path="help" element={<Help />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="kyc" element={<KYC />} />
            <Route path="withdrawal" element={<Withdrawal />} />
          </Route>
        </Routes>
      </Router>
    
  );
}
