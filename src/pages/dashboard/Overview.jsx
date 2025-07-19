import React, { useState } from "react";
import {
  FaBitcoin,
  FaEthereum,
  FaChartLine,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";
import "./Overview.css";

// Mock portfolio data
const mockPortfolio = [
  { name: "Bitcoin", symbol: "BTC", amount: 0.0242, price: 62125 },
  { name: "Ethereum", symbol: "ETH", amount: 0.158, price: 3200 },
  { name: "Litecoin", symbol: "LTC", amount: 4.65, price: 92.5 },
  { name: "Ripple", symbol: "XRP", amount: 420, price: 0.56 },
];

// Follow list
const mockFollow = [
  { name: "Bitcoin", price: 62125, change: 2.5 },
  { name: "Ethereum", price: 3200, change: -1.7 },
  { name: "Litecoin", price: 92.5, change: 3.2 },
  { name: "Ripple", price: 0.56, change: -0.9 },
];

// Chart data
const chartData = [
  { date: "Jul 1", buy: 52000, sell: 51000 },
  { date: "Jul 5", buy: 56000, sell: 54000 },
  { date: "Jul 10", buy: 58000, sell: 55000 },
  { date: "Jul 15", buy: 60000, sell: 59000 },
  { date: "Jul 19", buy: 62125, sell: 61000 },
];

export default function Overview() {
  const [activeTab, setActiveTab] = useState("ALL");

  const totalBalance = mockPortfolio.reduce(
    (acc, coin) => acc + coin.amount * coin.price,
    0
  );

  const formatCurrency = (amount) =>
    "$" + amount.toLocaleString(undefined, { maximumFractionDigits: 2 });

  return (
    <div className="elaenia-overview">
      {/* Header */}
      <div className="welcome-header">
        <div>
          <h2>Welcome back, Maria Pascle</h2>
          <h3>Your Portfolio</h3>
          <h1 className="balance">{formatCurrency(totalBalance)}</h1>
        </div>
        <div className="growth">
          <h2>{formatCurrency(totalBalance * 1.2)}</h2>
          <p className="positive">+{formatCurrency(totalBalance * 0.2)} (20%)</p>
        </div>
      </div>

      {/* Portfolio */}
      <div className="portfolio-section">
        {mockPortfolio.map((coin, index) => (
          <div className="coin-card" key={index}>
            <div className="coin-header">
              {coin.symbol === "BTC" ? (
                <FaBitcoin />
              ) : coin.symbol === "ETH" ? (
                <FaEthereum />
              ) : (
                <FaChartLine />
              )}
              <span>{coin.name}</span>
            </div>
            <div className="coin-amount">
              {coin.amount} {coin.symbol}
            </div>
            <div className="coin-usd">
              {formatCurrency(coin.amount * coin.price)}
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="chart-section">
        <div className="chart-tabs">
          {["ALL", "1M", "6M", "1Y", "YTD"].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={chartData}>
            <XAxis dataKey="date" stroke="#aaa" />
            <Tooltip
              formatter={(value) => formatCurrency(value)}
              labelStyle={{ color: "#ccc" }}
              contentStyle={{ background: "#1e1a3d", borderColor: "#333" }}
            />
            <Line type="monotone" dataKey="buy" stroke="#00ffbf" strokeWidth={2} />
            <Line type="monotone" dataKey="sell" stroke="#ff4d4d" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Stats */}
      <div className="stats-section">
        <div className="stat-card">
          <p className="stat-label">24hr Volume</p>
          <p className="stat-value">$1,245,800</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Market Cap</p>
          <p className="stat-value">$982B</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Circulating Supply</p>
          <p className="stat-value">19.2M BTC</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">All-Time High</p>
          <p className="stat-value">$69,044.77</p>
        </div>
      </div>

      {/* Follow */}
      <div className="follow-section">
        <h3>Follow</h3>
        {mockFollow.map((item, i) => (
          <div className="follow-card" key={i}>
            <p>{item.name} (24h)</p>
            <div className="follow-info">
              <span>{formatCurrency(item.price)}</span>
              <span className={item.change > 0 ? "green" : "red"}>
                {item.change > 0 ? <FaArrowUp /> : <FaArrowDown />} {item.change}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
