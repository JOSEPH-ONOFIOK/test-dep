import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="contact-wrapper">
      <div className="contact-left">
        <h2>Contact Our Team</h2>
        <div className="contact-info">
          <div className="info-item">
            <div className="icon-circle"><FaPhoneAlt /></div>
            <p>+1 (919) 794-7971</p>
          </div>
          <div className="info-item">
            <div className="icon-circle"><FaEnvelope /></div>
            <p>support@noventra.capital</p>
          </div>
          <div className="info-item">
            <div className="icon-circle"><FaMapMarkerAlt /></div>
            <p>New York, USA</p>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <h2>Request a Consultation</h2>
        <p className="description">
          Fill out the form below to get in touch with our experts. We'll respond promptly to discuss how Noventra Capital can assist with your investment goals.
        </p>

        <form className="quote-form">
          <div className="row">
            <input type="text" placeholder="Full Name" name="fullname" required />
            <input type="email" placeholder="Email Address" name="email" required />
          </div>
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea rows="4" placeholder="Write your message..." name="message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
