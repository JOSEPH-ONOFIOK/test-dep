import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Packages.css";

export default function Markets() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("copyTrades");
  const [cryptoPrices, setCryptoPrices] = useState({ BTC: null, ETH: null, USDT: null });
  const [traders, setTraders] = useState([
    {
      name: "Jane Crypto",
      bio: "Top 1% trader with 5 years of success.",
      image: "https://source.unsplash.com/featured/?woman,crypto"
    },
    {
      name: "SignalSavage",
      bio: "Daily trades, 80% win rate.",
      image: "https://source.unsplash.com/featured/?man,trader"
    }
  ]);
  const [signals, setSignals] = useState([
    {
      name: "Daily Signal Pack",
      price: "$49/month",
      description: "Get 3–5 high-confidence signals daily.",
      image: "https://source.unsplash.com/featured/?chart"
    }
  ]);
  const [bots, setBots] = useState([
    {
      name: "Alpha Bot",
      price: "$199/lifetime",
      desc: "Automated scalping bot with AI tuning.",
      image: "https://source.unsplash.com/featured/?robot"
    }
  ]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd")
      .then(res => res.json())
      .then(data => {
        setCryptoPrices({
          BTC: data.bitcoin.usd,
          ETH: data.ethereum.usd,
          USDT: data.tether.usd,
        });
      });
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "copyTrades":
        return (
          <div className="card-list">
            {traders.map((t, i) => (
              <motion.div className="market-card" key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <img src={t.image} alt={t.name} className="card-image" />
                <h4>{t.name}</h4>
                <p>{t.bio}</p>
                <button className="buy-button" onClick={() => navigate("/dashboard/deposit")}>Copy</button>
              </motion.div>
            ))}
          </div>
        );
      case "buyCrypto":
        return (
          <div className="card-list">
            {Object.entries(cryptoPrices).map(([symbol, price], i) => (
              <motion.div className="market-card" key={symbol} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <img src={`https://cryptoicons.org/api/icon/${symbol.toLowerCase()}/100`} alt={symbol} className="card-image" />
                <h4>{symbol}</h4>
                <p className="amount">${price ?? "Loading..."}</p>
                <p>Securely buy {symbol} using our trusted platform.</p>
                <button className="buy-button" onClick={() => navigate("/dashboard/deposit")}>Buy</button>
              </motion.div>
            ))}
          </div>
        );
      case "buySignals":
        return (
          <div className="card-list">
            {signals.map((s, i) => (
              <motion.div className="market-card" key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <img src={s.image} alt={s.name} className="card-image" />
                <h4>{s.name}</h4>
                <p>{s.price}</p>
                <p>{s.description}</p>
                <button className="buy-button" onClick={() => navigate("/dashboard/deposit")}>Subscribe</button>
              </motion.div>
            ))}
          </div>
        );
      case "buyBots":
        return (
          <div className="card-list">
            {bots.map((b, i) => (
              <motion.div className="market-card" key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <img src={b.image} alt={b.name} className="card-image" />
                <h4>{b.name}</h4>
                <p>{b.desc}</p>
                <p className="amount">{b.price}</p>
                <button className="buy-button" onClick={() => navigate("/dashboard/deposit")}>Get Bot</button>
              </motion.div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="market-section dark-theme">
      <h2>Market Tools</h2>
      <div className="section-nav">
        <button onClick={() => setActiveSection("copyTrades")}>Copy Trades</button>
        <button onClick={() => setActiveSection("buyCrypto")}>Buy Crypto</button>
        <button onClick={() => setActiveSection("buySignals")}>Buy Signals</button>
        <button onClick={() => setActiveSection("buyBots")}>Buy Bots</button>
      </div>
      {renderSection()}
    </div>
  );
}
