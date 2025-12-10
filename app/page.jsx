 "use client";

import React, { useEffect, useState } from "react";

import Hero from "./components/Hero";
import MenHero from "./components/Menhero";
import LoadingScreen from "./components/LoadingScreen";
import Footer from "./components/Footer";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200); // duration of the splash

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Splash / Nike-style intro */}
      <div
        className={`transition-opacity duration-700 ${
          isLoading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <LoadingScreen />
      </div>

      {/* Main site content */}
      <div
        className={`min-h-screen bg-black transition-all duration-700 ${
          isLoading ? "scale-[1.01] blur-[1.5px]" : "scale-100 blur-0"
        }`}
      >
        <Hero />
        <MenHero />
        <Footer />
      </div>
    </>
  );
};

export default Page;
