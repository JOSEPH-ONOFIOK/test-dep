import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Overview.css";

export default function Overview() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [selectedSymbol, setSelectedSymbol] = useState("BINANCE:BTCUSDT");
  const [tradeMessage, setTradeMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [orderType, setOrderType] = useState("Market");
  const [orderBook, setOrderBook] = useState([]);
  const [recentOrders, setRecentOrders] = useState([]);
  const [portfolio, setPortfolio] = useState([
    { asset: "BTC", quantity: 0.2 },
    { asset: "ETH", quantity: 2 },
    { asset: "ADA", quantity: 150 },
  ]);

  const user = {
    name: "Onofiok Joseph",
    status: "Good Standing",
    plan: "Premium"
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 50,
              page: 1,
              sparkline: false,
            },
          }
        );
        setCoins(res.data);
        setSelectedCoin(res.data[0]);
      } catch (error) {
        console.error("Error fetching coins:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchOrderBook = async () => {
      if (!selectedCoin) return;
      try {
        const symbol = selectedCoin.symbol.toUpperCase() + "USDT";
        const res = await axios.get(`https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=10`);
        setOrderBook(res.data);
      } catch (error) {
        console.error("Error fetching order book:", error);
      }
    };

    fetchOrderBook();
  }, [selectedCoin]);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (coin) => {
    setSelectedCoin(coin);
    setSelectedSymbol(`BINANCE:${coin.symbol.toUpperCase()}USDT`);
    setSearch("");
  };

  const estimatedTotal = amount && selectedCoin
    ? (parseFloat(amount) / selectedCoin.current_price).toFixed(6)
    : "0.000000";

  const handleBuy = () => {
    setTradeMessage(`✅ ${orderType} Buy Order Submitted`);
    setRecentOrders(prev => [
      ...prev,
      {
        asset: selectedCoin.symbol.toUpperCase(),
        type: "Buy",
        amount,
        status: "Completed",
      },
    ]);
  };

  const handleSell = () => {
    setTradeMessage(`⏳ ${orderType} Sell Order Placed`);
    setRecentOrders(prev => [
      ...prev,
      {
        asset: selectedCoin.symbol.toUpperCase(),
        type: "Sell",
        amount,
        status: "Pending",
      },
    ]);
  };

  const totalAssets = portfolio.reduce((sum, item) => {
    const coin = coins.find(
      (c) => c.symbol.toUpperCase() === item.asset.toUpperCase()
    );
    return sum + (coin ? coin.current_price * item.quantity : 0);
  }, 0).toFixed(2);

  return (
    <div className="overview-container">
      <section className="profile-section glassy-panel">
        <h2>Welcome, {user.name}</h2>
        <p><strong>Total Assets:</strong> ${totalAssets}</p>
        <p><strong>Status:</strong> {user.status}</p>
        <p><strong>Plan:</strong> {user.plan}</p>
      </section>

      <section className="crypto-market">
        <h3>Choose a Coin</h3>
        <input
          type="text"
          placeholder="Search coin..."
          className="crypto-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <div className="dropdown-results">
            {filteredCoins.map((coin) => (
              <div
                key={coin.id}
                className="dropdown-item"
                onClick={() => handleSelect(coin)}
              >
                <img src={coin.image} alt={coin.symbol} width="20" />
                <span>
                  {coin.name} ({coin.symbol.toUpperCase()}) - ${coin.current_price.toLocaleString()} | {" "}
                  <span style={{ color: coin.price_change_percentage_24h >= 0 ? 'limegreen' : 'red' }}>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </span>
                </span>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="overview-chart-area glassy-panel">
        <h3>Live Chart: {selectedCoin?.name} / USDT</h3>
        <div className="overview-chart-widget">
          <iframe
            src={`https://s.tradingview.com/embed-widget/symbol-overview/?locale=en#%7B%22symbols%22%3A%5B%5B%22${selectedSymbol}%22%5D%5D%2C%22colorTheme%22%3A%22dark%22%2C%22autosize%22%3Atrue%7D`}
            width="100%"
            height="500"
            frameBorder="0"
            allowTransparency="true"
            scrolling="no"
            title="Crypto Chart"
          ></iframe>
        </div>
      </section>

      <section className="overview-order-panel">
        <h4>Quick Trade</h4>
        <div className="price-box">
          <span>Sell: ${selectedCoin?.current_price.toLocaleString()}</span>
          <span>Buy: ${(selectedCoin?.current_price + 10).toLocaleString()}</span>
        </div>

        <div className="order-actions">
          <label>
            Order Type
            <select
              value={orderType}
              onChange={(e) => setOrderType(e.target.value)}
              className="crypto-search"
            >
              <option>Market</option>
              <option>Limit</option>
              <option>Stop</option>
            </select>
          </label>
          <label>
            Amount (USD)
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
          </label>
          <label>
            Coin
            <input
              type="text"
              value={selectedCoin?.symbol.toUpperCase() || ""}
              disabled
            />
          </label>
        </div>

        <div className="trade-summary">
          Estimated Qty: <strong>{estimatedTotal} {selectedCoin?.symbol.toUpperCase()}</strong><br />
          Fees (0.1%): <strong>${(parseFloat(amount || 0) * 0.001).toFixed(2)}</strong>
        </div>

        <div className="btn-group">
          <button className="market-btn" onClick={handleBuy} disabled={!amount}>Buy</button>
          <button className="pending-btn" onClick={handleSell} disabled={!amount}>Sell</button>
        </div>

        {tradeMessage && (
          <p style={{ marginTop: "10px", color: "#38bdf8", fontWeight: "bold" }}>
            {tradeMessage}
          </p>
        )}
      </section>

      <section className="positions-panel">
        <h3>Recent Orders</h3>
        <table className="orders-table">
          <thead>
            <tr>
              <th>Asset</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order, idx) => (
              <tr key={idx}>
                <td>{order.asset}</td>
                <td>{order.type}</td>
                <td>${order.amount}</td>
                <td>
                  <span className={`status-badge ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="orderbook-panel">
        <h3>Order Book (Top 10)</h3>
        <div className="orderbook">
          <div className="orderbook-side">
            <h4>Asks</h4>
            <ul>
              {orderBook.asks?.map(([price, qty], index) => (
                <li key={index}>Sell {parseFloat(qty).toFixed(2)} @ ${parseFloat(price).toFixed(2)}</li>
              ))}
            </ul>
          </div>
          <div className="orderbook-side">
            <h4>Bids</h4>
            <ul>
              {orderBook.bids?.map(([price, qty], index) => (
                <li key={index}>Buy {parseFloat(qty).toFixed(2)} @ ${parseFloat(price).toFixed(2)}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="portfolio-panel">
        <h3>Your Portfolio</h3>
        <table className="orders-table">
          <thead>
            <tr>
              <th>Asset</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {portfolio.map((item, idx) => (
              <tr key={idx}>
                <td>{item.asset}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}