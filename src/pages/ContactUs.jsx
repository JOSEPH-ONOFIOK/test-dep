import React from "react";
import Navbar from "../components/home/Navbar";
import Contact from "../components/contact";
import Footer from "../components/home/Footer";

function AboutPage() {
  return (
    <div className="font-sans bg-white text-black">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}

export default AboutPage; 
