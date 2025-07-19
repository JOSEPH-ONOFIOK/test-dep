import React from "react";
import Navbar from "../components/home/Navbar";
import AboutUs from "../components/AboutUs";
import Footer from "../components/home/Footer";

function AboutPage() {
  return (
    <div className="font-sans bg-white text-black">
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default AboutPage; 
