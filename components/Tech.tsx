"use client";

import { SectionWrapper } from "@/hoc";
import { technologies } from "@/constants";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { fadeIn } from "@/utils/motion";

const Row = ({
  children,
  direction,
}: {
  children: { name: string; icon: StaticImageData }[];
  direction: "left" | "right";
}) => {
  return (
    <motion.div
      variants={fadeIn(direction, "tween", 0.2, 0.75)}
      transition={{ duration: 0.5 }}
      className={`flex flex-row flex-nowrap w-full gap-4 ${
        direction !== "left" ? "justify-start" : "justify-end"
      }`}
    >
      {children.map((tech) => {
        return (
          <div key={tech.name}>
            <Image
              src={tech.icon}
              alt={tech.name}
              className={`xl:h-32 lg:h-28 w-auto md:h-20 sm:h-16 h-12 rounded-full bg-black-100`}
            />
          </div>
        );
      })}
    </motion.div>
  );
};

const Tech = () => {
  const halfLength = Math.ceil(technologies.length / 2);
  const firstRowData = technologies.slice(0, halfLength);
  const secondRowData = technologies.slice(halfLength);

  return (
    <div className={"w-full h-fit flex flex-col gap-8"}>
      <Row direction={"left"}>{firstRowData}</Row>
      <Row direction={"right"}>{secondRowData}</Row>
    </div>
  );
};

export default SectionWrapper(Tech, "");
