import React from "react";
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import AboutUs from "../components/home/AboutUs";
import Features from "../components/home/Features";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/home/Footer";

function HomePage() {
  return (
    <div className="font-sans bg-white text-black">
      <Navbar />
      <Hero />
      <AboutUs />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomePage; 
