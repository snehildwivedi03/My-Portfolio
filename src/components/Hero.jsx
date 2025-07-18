import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { personalInfo } from "../constants"; // Make sure this file exports `personalInfo`

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Intro Text */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
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

      {/* 3D Computer */}
      <ComputersCanvas />

      {/* Scroll Indicator */}
      <div className="absolute bottom-32 w-full flex justify-center items-center">
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
