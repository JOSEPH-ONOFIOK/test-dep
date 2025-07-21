import React, { useState, useEffect } from "react";
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

const mockPortfolio = [
  { name: "Bitcoin", symbol: "BTC", amount: 0.0242, price: 62125 },
  { name: "Ethereum", symbol: "ETH", amount: 0.158, price: 3200 },
  { name: "Litecoin", symbol: "LTC", amount: 4.65, price: 92.5 },
  { name: "Ripple", symbol: "XRP", amount: 420, price: 0.56 },
];

const FOLLOWED_COINS = ["bitcoin", "ethereum", "litecoin", "ripple"];

export default function Overview() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [followList, setFollowList] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");

  const totalBalance = mockPortfolio.reduce(
    (acc, coin) => acc + coin.amount * coin.price,
    0
  );

  const formatCurrency = (amount) =>
    "$" + amount.toLocaleString(undefined, { maximumFractionDigits: 2 });

  // Fetch chart data for selected coin
  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=7&interval=daily`
        );
        const data = await res.json();

        const formatted = data.prices.map(([timestamp, price]) => {
          const date = new Date(timestamp);
          return {
            date: `${date.getMonth() + 1}/${date.getDate()}`,
            price: price,
          };
        });

        setChartData(formatted);
      } catch (err) {
        console.error("Error fetching chart data:", err);
      }
    };

    fetchChartData();
    const interval = setInterval(fetchChartData, 30000); // 30s
    return () => clearInterval(interval);
  }, [selectedCoin]);

  // Real-time follow list
  useEffect(() => {
    const fetchFollowPrices = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${FOLLOWED_COINS.join(
            ","
          )}&vs_currencies=usd&include_24hr_change=true`
        );
        const data = await response.json();

        const formatted = FOLLOWED_COINS.map((coin) => ({
          name: coin.charAt(0).toUpperCase() + coin.slice(1),
          price: data[coin]?.usd ?? 0,
          change: data[coin]?.usd_24h_change?.toFixed(2) ?? 0,
        }));

        setFollowList(formatted);
      } catch (err) {
        console.error("Error fetching real-time prices:", err);
      }
    };

    fetchFollowPrices();
    const interval = setInterval(fetchFollowPrices, 30000); // 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="elaenia-overview">
      {/* Welcome Header */}
      <div className="welcome-header">
        <div>
          <h2>Welcome back, Maria Pascle</h2>
          <h3>Your Portfolio</h3>
          <h1 className="balance">{formatCurrency(totalBalance)}</h1>
        </div>
        <div className="growth">
          <h2>{formatCurrency(totalBalance * 1.2)}</h2>
          <p className="positive">
            +{formatCurrency(totalBalance * 0.2)} (20%)
          </p>
        </div>
      </div>

      {/* Portfolio Cards */}
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

      {/* Chart Section */}
      <div className="chart-section">
        <div className="chart-tabs">
          <select
            value={selectedCoin}
            onChange={(e) => setSelectedCoin(e.target.value)}
            className="chart-dropdown"
          >
            {FOLLOWED_COINS.map((coin) => (
              <option value={coin} key={coin}>
                {coin.charAt(0).toUpperCase() + coin.slice(1)}
              </option>
            ))}
          </select>

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

        <div className="chart-scroll-container">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData}>
              <XAxis dataKey="date" stroke="#aaa" />
              <Tooltip
                formatter={(value) => formatCurrency(value)}
                labelStyle={{ color: "#ccc" }}
                contentStyle={{ background: "#1e1a3d", borderColor: "#333" }}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#00ffbf"
                strokeWidth={2}
                dot={false}
                isAnimationActive={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stats Section */}
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

      {/* Real-Time Follow Section */}
      <div className="follow-section">
        <h3>Follow</h3>
        {followList.map((item, i) => (
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
