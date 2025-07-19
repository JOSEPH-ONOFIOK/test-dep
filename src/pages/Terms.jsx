import React from "react";
import Navbar from "../components/home/Navbar";
import Terms from "../components/Terms";
import Footer from "../components/home/Footer";

function AboutPage() {
  return (
    <div className="font-sans bg-white text-black">
      <Navbar />
      <Terms />
      <Footer />
    </div>
  );
}

export default AboutPage; 
