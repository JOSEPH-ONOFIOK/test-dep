import { useEffect, useState } from "react";
import "./Packages.css";

export default function Packages() {
  const [prices, setPrices] = useState({ BTC: null, ETH: null, USDT: null });

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd"
        );
        const data = await response.json();
        setPrices({
          BTC: data.bitcoin.usd,
          ETH: data.ethereum.usd,
          USDT: data.tether.usd,
        });
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-page packages-page">
      <h2 className="title">Packages & Market Overview</h2>

      <div className="market-box">
        <div className="market-item">
          <p>Bitcoin (BTC)</p>
          <strong>${prices.BTC ?? "Loading..."}</strong>
        </div>
        <div className="market-item">
          <p>Ethereum (ETH)</p>
          <strong>${prices.ETH ?? "Loading..."}</strong>
        </div>
        <div className="market-item">
          <p>Tether (USDT)</p>
          <strong>${prices.USDT ?? "Loading..."}</strong>
        </div>
      </div>

      <div className="package-box">
        <div className="package-card basic">
          <h3>Basic Plan</h3>
          <p className="amount">$500 - $10,000</p>
          <p>Start your investment journey with reliable, low-risk returns.</p>
        </div>
        <div className="package-card pro">
          <h3>Pro Plan</h3>
          <p className="amount">$10,001 - $50,000</p>
          <p>Best for consistent traders seeking more aggressive strategies.</p>
        </div>
        <div className="package-card premium">
          <h3>Premium Plan</h3>
          <p className="amount">$50,001 - $500,000</p>
          <p>Premium service for long-term high-return investors.</p>
        </div>
      </div>
    </div>
  );
}
