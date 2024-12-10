import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Magicbutton from "./ui/Magicbutton";
import { FaLocationArrow } from "react-icons/fa";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconMail,
  IconBrandLinkedin,
  IconBrandLeetcode,
} from "@tabler/icons-react";

const links = [
  {
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/arman-chaudhary-3100a328a/",
  },
  {
    icon: (
      <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://leetcode.com/u/Arman176/",
  },
  {
    icon: (
      <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "mailto:armanchaudhary176001@gmail.com",
  },

  {
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://x.com/ArmanChaud30997",
  },
  {
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/Arman176001",
  },
];

const Hero = () => {
  return (
    <div className="pb-20 pt-[6.5rem] max-w-[93%] lg:pt-10 xl:pt-20 ml-[-1.2rem] xs:ml-6 sm:ml-10 md:ml-11 h-screen">
      <div className="fixed right-[-1.5rem] top-11 mb-6 flex justify-end items-start mr-11 z-20 lg:top-11 lg:right-11 lg:bottom-auto sm:bottom-0 sm:right-0 sm:mr-4 sm:mb-4 xs:bottom-0 xs:right-0 xs:mr-4 xs:mb-4">
        <FloatingDock items={links} />
      </div>
      <div className="flex justify-start relative z-10 ml-11 mt-7">
        <div className="max-w-[100%] sm:max-w-[90%] md:max-w-[70%] flex flex-col items-start justify-center">
          <TextGenerateEffect
            className="text-start text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            words="Crafting Intelligence"
          />
          <p className="text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl sm:mb-3 xs:mb-2">
            I&apos;m Arman Chaudhary, an AI/ML engineer based in India.
          </p>
          <a href="#projects">
            <Magicbutton
              title="Show My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
