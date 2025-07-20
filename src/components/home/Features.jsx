import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section id="features" className="features-section">
      <h2 className="section-title">Our Investment Plans</h2>

      <div className="plans-grid">
        {/* Basic Plan */}
        <div className="plan-card">
          <img src="/assets/basic-icon.png" alt="Basic Plan" />
          <h3>BASIC PLAN</h3>
          <p className="plan-rate">15% • 10 Days</p>
          <ul>
            <li>Minimum: $500</li>
            <li>Maximum: $9,999</li>
            <li>Principal: Included in Profit</li>
            <li>Payout: Every Calendar Day</li>
            <li>15% Return Daily</li>
          </ul>
          <a href="/invest" className="plan-button">INVEST NOW →</a>
        </div>

        {/* Pro Plan */}
        <div className="plan-card">
          <img src="/assets/pro-plan-icon.png" alt="Pro Plan" />
          <h3>PRO PLAN</h3>
          <p className="plan-rate">35% • 30 Days</p>
          <ul>
            <li>Minimum: $10,000</li>
            <li>Maximum: $50,000</li>
            <li>Principal: Included in Profit</li>
            <li>Payout: Every Calendar Day</li>
            <li>35% Return Daily</li>
          </ul>
          <a href="/invest" className="plan-button">INVEST NOW →</a>
        </div>

        {/* Premium Plan */}
        <div className="plan-card">
          <img src="/assets/premium-icon.png" alt="Premium Plan" />
          <h3>PREMIUM PLAN</h3>
          <p className="plan-rate">60% • 60 Days</p>
          <ul>
            <li>Minimum: $50,000</li>
            <li>Maximum: Unlimited</li>
            <li>Principal: Included in Profit</li>
            <li>Payout: Every Calendar Day</li>
            <li>60% Return Daily</li>
          </ul>
          <a href="/invest" className="plan-button">INVEST NOW →</a>
        </div>
      </div>
    </section>
  );
};

export default Features;
