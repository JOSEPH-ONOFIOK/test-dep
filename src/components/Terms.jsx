import React from "react";
import "./Terms.css";

export default function Terms() {
  return (
    <div className="terms-container">
      <h1>Terms & Conditions</h1>
      <p className="intro">
        Please read these Terms and Conditions carefully before using Noventra Capital’s website.
        By accessing this site, you agree to be bound by these terms. If you disagree with any part, please discontinue use.
      </p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          These terms govern your access to and use of our website. By using this website, you accept these terms in full.
        </p>
      </section>

      <section>
        <h2>2. Intellectual Property Rights</h2>
        <p>
          Unless stated otherwise, Noventra Capital and/or its licensors own all intellectual property rights on this website.
          You may access this for your personal use, subject to restrictions set in these terms.
        </p>
      </section>

      <section>
        <h2>3. Restrictions</h2>
        <p>You must not:</p>
        <ul>
          <li>Republish material from Noventra Capital</li>
          <li>Sell, rent, or sub-license content from our website</li>
          <li>Reproduce or duplicate material for commercial purposes</li>
          <li>Redistribute content without our written consent</li>
        </ul>
      </section>

      <section>
        <h2>4. Limitation of Liability</h2>
        <p>
          Noventra Capital shall not be held liable for any direct, indirect, or consequential loss
          resulting from the use of our site or services.
        </p>
      </section>

      <section>
        <h2>5. Changes to These Terms</h2>
        <p>
          We reserve the right to update these terms at any time. Continued use of our website after changes
          are made will be deemed acceptance of those changes.
        </p>
      </section>

      <section>
        <h2>6. Contact Us</h2>
        <p>
          For questions or concerns regarding these terms, contact us at: <a href="mailto:support@noventra.capital">support@noventra.capital</a>.
        </p>
      </section>
    </div>
  );
}
