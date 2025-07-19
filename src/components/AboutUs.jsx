import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="aboutus-container">
      <section className="aboutus-hero">
        <h1>About Noventra Capital</h1>
        <p>Discover our vision, leadership, and commitment to empowering your financial future.</p>
      </section>

      <section className="aboutus-content">
        <h2>Who We Are</h2>
        <p>
          Noventra Capital is a global investment firm focused on cryptocurrency and blockchain assets. We provide clients with a single access point to a diversified portfolio across equities, fixed income, multi-asset, and alternative strategies—bridging both public and private markets in developed and emerging economies.
        </p>

        <h2>Our Mission</h2>
        <p>
          To deliver sustainable and superior returns for our clients through disciplined investment strategies, rigorous research, and a passion for innovation. We strive to be the trusted partner of individuals and institutions seeking long-term value creation in the digital finance space.
        </p>

        <h2>Why Choose Us</h2>
        <ul>
          <li>Proven leadership and expertise in digital asset investment</li>
          <li>Client-focused strategies tailored for optimal risk-adjusted returns</li>
          <li>Strong governance, transparency, and market discipline</li>
          <li>Over 500,000 satisfied clients worldwide</li>
        </ul>

        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/images/team1.jpg" alt="Team member" />
            <h3>Olivia Carter</h3>
            <p>Chief Executive Officer</p>
          </div>
          <div className="team-member">
            <img src="/images/team2.jpg" alt="Team member" />
            <h3>Daniel Kim</h3>
            <p>Head of Global Investments</p>
          </div>
          <div className="team-member">
            <img src="/images/team3.jpg" alt="Team member" />
            <h3>Sophia Adeyemi</h3>
            <p>Chief Technology Officer</p>
          </div>
        </div>
      </section>
    </div>
  );
}
