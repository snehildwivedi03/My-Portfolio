import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { personalInfo } from "../constants";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">
          Hi, I'm <span className="hero-highlight">Snehil</span>
        </h1>
        <p className="hero-subtitle">
          Software Developer, Learning and <br className="sm:block hidden" />
          Building Projects
        </p>
      </div>

      <motion.img
        src="/mobileImg.png"
        alt="Coding illustration"
        className="hero-image"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
};

export default Hero;
