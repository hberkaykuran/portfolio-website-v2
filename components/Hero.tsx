"use client";

import { motion } from "framer-motion";
import { HeroVisual } from "./HeroVisual";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className="heroHeadText text-white">
            Hi, I&apos;m <span className="text-[#915eff]">Berkay</span>
          </h1>
          <p className="heroSubText mt-2 text-white-100">
            Your friendly neighborhood tech guy
          </p>
        </div>
      </div>
      <div className="absolute bottom-10 md:bottom-32 w-full flex justify-center items-center z-[1]">
        <a href="#about" className="">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
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
      <div className=" absolute w-full mx-auto paddingX bottom-36 flex flex-row justify-center md:justify-end">
        <HeroVisual className="w-[450px] lg:w-[550px] xl:w-[600px]" />
      </div>
    </section>
  );
};

export default Hero;
