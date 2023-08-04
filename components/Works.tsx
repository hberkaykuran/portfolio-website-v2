"use client";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "@/public/assets";
import { SectionWrapper } from "@/hoc";
import { projects } from "@/constants";
import { fadeIn, textVariant } from "@/utils/motion";
import Image, { StaticImageData } from "next/image";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: StaticImageData;
  source_code_link: string;
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[350px] w-full h-full flex flex-col gap-5"
      >
        <div className="relative w-full h-[230px] shrink-0">
          <Image
            src={image}
            alt={name}
            className="w-full h-full rounded-2xl object-cover"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <button
              onClick={() => window.open(source_code_link)}
              key={source_code_link}
              id={source_code_link}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </button>
          </div>
        </div>
        <div className="">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="grow flex items-end">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}{" "}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">My Work</p>
        <h2 className="sectionHeadText">Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary max-w-3xl leading-[30px] text-[17px]"
        >
          Following projects showcases my skills and experience in web through
          real-world examples of my work. Each project is briefly described with
          a link to the live site and the source code. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
