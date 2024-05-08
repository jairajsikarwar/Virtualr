import React from "react";
import Navbar  from "./components/navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import WorkFlow from "./components/WorkFlow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <FeatureSection/>
      <WorkFlow/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
    </div>
  );
};

export default App;
