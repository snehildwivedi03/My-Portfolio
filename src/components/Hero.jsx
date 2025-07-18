import React, { Suspense } from "react";
import { styles } from "../../src/index.css";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Text & intro section */}
      <div
        className={`${styles.paddingX} absolute top-[100px] sm:top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 inset-0 z-10`}
      >
        {/* Left vertical line with dot */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-electric-purple" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Headline & subtitle */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="text-electric-purple">{personalInfo.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {personalInfo.role}, <br className="sm:block hidden" />
            Learning and Building Projects
          </p>
        </div>
      </div>

      {/* Canvas component - behind everything */}
      <Suspense fallback={<Loader />}>
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <ComputersCanvas />
        </div>
      </Suspense>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 sm:bottom-5 w-full flex justify-center items-center z-10">
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
