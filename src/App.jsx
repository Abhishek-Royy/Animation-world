import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import RunningPage from "./components/RunningPage";
import AboutPage from "./components/AboutPage";
import EyeGame from "./components/EyeGame";
import CardPage from "./components/CardPage";
import Footer from "./components/Footer";

import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <RunningPage />
      <AboutPage />
      <EyeGame />
      <CardPage />
      <Footer />
    </div>
  );
};

export default App;
