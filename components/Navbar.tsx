"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/constants";
import { logo } from "@/public/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 75);
    });
  });
  const pathVariants = {
    open: { d: "M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7" },
    closed: { d: "M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7" },
  };
  return (
    // after scrolling down 100px, the navbar will change bg color, and have a backdrop blur
    // get scroll position
    <nav
      className={`paddingX w-full flex items-center py-5 fixed top-0 z-10 bg-primary transition-all duration-300 ease-in-out
    ${scroll ? "backdrop-filter backdrop-blur-lg bg-tertiary/40" : ""}
    `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <button
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image src={logo} alt="logo" className="w-9 h-9 object-contain" />
        </button>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:Text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`} className="text-white text-[18px]">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button onClick={() => setToggle(!toggle)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 10"
              stroke="#eee"
              strokeWidth=".6"
              className="w-8 h-8"
              strokeLinecap="round"
              style={{ cursor: "pointer" }}
            >
              <motion.path
                variants={pathVariants}
                initial={false}
                animate={toggle ? "open" : "closed"}
                transition={{ duration: 0.2 }}
              />
            </svg>
          </button>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <ul className="list-none fle justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium ttext-[16px] cursor-pointer`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`} className="text-white text-[18px]">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
