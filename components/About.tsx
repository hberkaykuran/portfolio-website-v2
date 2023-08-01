"use client";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "@/constants";
import { fadeIn, textVariant } from "@/utils/motion";
import Image, { StaticImageData } from "next/image";
import { SectionWrapper } from "@/hoc";

const ServiceCard = ({
  index,
  title,
  icon,
}: {
  index: number;
  title: string;
  icon: StaticImageData;
}) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <Image src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}>
        I&apos;m a Fullstack Software Engineer with a passion for Frontend
        Development. Skilled in React.JS, Next.JS, and TypeScript, I create
        user-centric web applications. With a proactive mindset and startup
        experience, I thrive in dynamic environments. Explore my portfolio to
        see my projects and interests in software development!
      </motion.p>
      <div className="mt-20 flex justify-center">
        <div className="flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
