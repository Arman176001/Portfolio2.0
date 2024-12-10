import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Magicbutton from "./ui/Magicbutton";
import { FaLocationArrow } from "react-icons/fa";
import { FloatingDock } from "./ui/floating-dock";
import { IconBrandGithub, IconBrandX, IconExchange, IconHome, IconMail, IconTerminal2,IconBrandLinkedin,IconBrandLeetcode } from "@tabler/icons-react";

const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/arman-chaudhary-3100a328a/",
  },
  {
    title: "LeetCode",
    icon: (
      <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://leetcode.com/u/Arman176/",
  },
  {
    title: "Mail",
    icon: (
      <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "mailto:armanchaudhary176001@gmail.com",
  },

  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://x.com/ArmanChaud30997",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/Arman176001",
  },
]

const Hero = () => {
  return (
    <div className="pb-20 pt-7 lg:pt-10 xl:pt-20 ml-11">
      <div className="fixed right-0 top-11 mb-6 flex justify-end items-start mr-11 z-20">
      <FloatingDock items={links}/>
      </div>
      <div className="flex justify-start relative z-10 ml-11 mt-7">
         <div className="max-w-[70%] flex flex-col items-start justify-center">
           <TextGenerateEffect 
           className="text-start text-2xl  sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl "
           words="Crafting Intelligence"
           />
           <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
           I&apos;m Arman Chaudhary, an AI/ML engineer based in India.
           </p>
           <a href="#projects">
            <Magicbutton title="Show My Work" icon={<FaLocationArrow/>} position="right"/>
           </a>
         </div>
      </div>
    </div>
  );
};

export default Hero;
