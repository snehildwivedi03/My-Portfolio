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
    <section className="relative w-full min-h-screen mx-auto bg-black overflow-hidden flex flex-col items-center justify-start">
      {/* Intro Text */}
      <div
        className={`relative max-w-7xl mx-auto ${styles.paddingX} pt-20 sm:pt-36 flex flex-col items-center text-center z-20`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{personalInfo.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {personalInfo.role}, <br className="sm:block hidden" />
            Learning and Building Projects
          </p>
        </div>
      </div>

      {/* Show either image (mobile) or 3D model (desktop) */}
      {isMobile ? (
        <motion.img
          src="/mobileImg.png"
          alt="Mobile Hero Image"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-[70%] max-w-xs mt-10 sm:mt-16"
        />
      ) : (
        <ComputersCanvas />
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-32 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
