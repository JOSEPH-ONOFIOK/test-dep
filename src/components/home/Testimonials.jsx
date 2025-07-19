import React from "react";
import "./Testimonials.css";

const reviews = [
  {
    text: "Engaging and fast results. They walked me through everything and delivered beyond my expectations.",
    author: "Lily Simmons",
    location: "New York, USA",
  },
  {
    text: "These guys helped me out when I thought I had lost everything to scammers. Amazing service!",
    author: "Viviana Thomas",
    location: "Berlin, Germany",
  },
  {
    text: "With their expert assistance, I recovered my crypto assets in just a few days. Highly recommended!",
    author: "Amanda Witteveen",
    location: "Amsterdam, Netherlands",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="testimonials">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonials-grid">
        {reviews.map((review, i) => (
          <div key={i} className="testimonial-card">
            <p className="testimonial-text">“{review.text}”</p>
            <div className="testimonial-footer">
              <div className="avatar-placeholder" />
              <div className="testimonial-meta">
                <span className="testimonial-author">{review.author}</span>
                <span className="testimonial-location">{review.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
