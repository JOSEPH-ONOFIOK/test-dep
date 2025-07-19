
import { useEffect, useState } from "react";
import "./Dashboard.css";

export default function Markets() {
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
        console.error("Error fetching market prices:", error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-page">
      <h2>Market Overview</h2>
      <div className="card">
        <p><strong>Bitcoin (BTC):</strong> ${prices.BTC ?? "Loading..."}</p>
        <p><strong>Ethereum (ETH):</strong> ${prices.ETH ?? "Loading..."}</p>
        <p><strong>Tether (USDT):</strong> ${prices.USDT ?? "Loading..."}</p>
      </div>
    </div>
  );
}
