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
          <div
            key={tech.name}
            //shadow closer to bg color on hover (rgb(21 16 48))
            className="relative group rounded-full bg-black-100
            xl:p-[calc(8rem_*_0.41421356237_/_2)]
            lg:p-[calc(7rem_*_0.41421356237_/_2)]
            md:p-[calc(5rem_*_0.41421356237_/_2)]
            sm:p-[calc(4rem_*_0.41421356237_/_2)]
            p-[(calc(3rem_*_0.41421356237_/_2))]
            hover:bg-tertiary hover:shadow-[0px_0px_20px_#151030]
            transition-all duration-500 ease-in-out
            "
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              className="w-auto xl:h-32 lg:h-28 md:h-20 sm:h-16 h-12 object-contain"
            />
            <div className="tooltip group-hover:opacity-100">{tech.name}</div>
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
    <div className={"w-full h-fit flex flex-col gap-12"}>
      <Row direction={"left"}>{firstRowData}</Row>
      <Row direction={"right"}>{secondRowData}</Row>
    </div>
  );
};

export default SectionWrapper(Tech, "");
