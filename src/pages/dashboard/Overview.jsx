import React from "react";
import "./Overview.css";
import {
  FaWallet,
  FaCoins,
  FaBitcoin,
  FaBoxOpen,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

// Ticker currencies with mini chart data
const currencies = [
  {
    pair: "BTC/USD",
    price: "108,674",
    change: "-273 (-0.25%)",
    color: "red",
    chartData: [106000, 107000, 107500, 108000, 108674],
  },
  {
    pair: "ETH/USD",
    price: "2,640",
    change: "+23.90 (+0.91%)",
    color: "lime",
    chartData: [2600, 2615, 2630, 2640, 2645],
  },
  {
    pair: "XRP/USD",
    price: "0.92",
    change: "+0.014",
    color: "lime",
    chartData: [0.88, 0.89, 0.91, 0.92],
  },
  {
    pair: "BNB/USD",
    price: "321.55",
    change: "+5.32",
    color: "lime",
    chartData: [318, 320, 321.5],
  },
  {
    pair: "LTC/USD",
    price: "102.34",
    change: "-1.21",
    color: "red",
    chartData: [105, 104.5, 103, 102.3],
  },
  {
    pair: "SOL/USD",
    price: "56.20",
    change: "+1.45",
    color: "lime",
    chartData: [54, 54.5, 55, 56.2],
  },
  {
    pair: "ADA/USD",
    price: "0.39",
    change: "-0.008",
    color: "red",
    chartData: [0.41, 0.40, 0.395, 0.39],
  },
];

// Live trade data
const trades = [
  { time: "12:01:03", pair: "BTC/USD", side: "Buy", price: "108,670", amount: "0.015" },
  { time: "12:01:06", pair: "ETH/USD", side: "Sell", price: "2,642", amount: "0.82" },
  { time: "12:01:10", pair: "XRP/USD", side: "Buy", price: "0.91", amount: "1,200" },
  { time: "12:01:15", pair: "LTC/USD", side: "Sell", price: "102.4", amount: "5.2" },
  { time: "12:01:20", pair: "SOL/USD", side: "Buy", price: "56.21", amount: "9.5" },
  { time: "12:01:25", pair: "ADA/USD", side: "Sell", price: "0.39", amount: "3,300" },
];

// LiveTrades component
const LiveTrades = () => (
  <div className="trades-container">
    <h3 className="trades-header">Live Trades</h3>
    <div className="trades-table">
      <div className="table-header">
        <span>Time</span>
        <span>Pair</span>
        <span>Side</span>
        <span>Price</span>
        <span>Amount</span>
      </div>
      <div className="table-body">
        {trades.map((trade, i) => (
          <div className="table-row" key={i}>
            <span>{trade.time}</span>
            <span>{trade.pair}</span>
            <span className={trade.side === "Buy" ? "buy" : "sell"}>
              {trade.side}
            </span>
            <span>{trade.price}</span>
            <span>{trade.amount}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function Overview() {
  const metrics = [
    {
      title: "Account Balance",
      value: "$0.00",
      icon: <FaWallet />,
      color: "#00d1b2",
    },
    {
      title: "Amount Invested",
      value: "$0.00",
      icon: <FaCoins />,
      color: "#f39c12",
    },

    {
      title: "Package Plan",
      value: "Starter",
      icon: <FaBoxOpen />,
      color: "#4fc3f7",
    },
  ];

  return (
    <div className="overview-container">
      {/* Scrolling Crypto Ticker */}
      <div className="ticker-container">
        <div className="ticker-scroll">
          {[...currencies, ...currencies].map((item, index) => (
            <div className="ticker-card" key={index}>
              <div className="ticker-label">
                <strong>{item.pair}</strong>: {item.price}&nbsp;
                <span style={{ color: item.color }}>{item.change}</span>
              </div>
              <div className="mini-chart">
                <ResponsiveContainer width={100} height={30}>
                  <LineChart data={item.chartData.map((val, i) => ({ x: i, y: val }))}>
                    <Line
                      type="monotone"
                      dataKey="y"
                      stroke={item.color}
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dashboard Metrics */}
      <h2 className="overview-header">Crypto Portfolio Overview</h2>
      <div className="overview-grid">
        {metrics.map((item, index) => (
          <div className="overview-card" key={index}>
            <div className="card-icon" style={{ color: item.color }}>
              {item.icon}
            </div>
            <div className="overview-title">{item.title}</div>
            <div className="overview-value" style={{ color: item.color }}>
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* Live Trades Feed */}
      <LiveTrades />
    </div>
  );
}
