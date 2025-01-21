import React from "react"
import Image from "next/image"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import Magicbutton from "./ui/Magicbutton"
import { FaLocationArrow } from "react-icons/fa"
import { FloatingDock } from "./ui/floating-dock"
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconMail,
  IconBrandLinkedin,
  IconBrandLeetcode,
} from "@tabler/icons-react"

const links = [
  {
    icon: <IconHome className="h-full w-full text-neutral-600 dark:text-neutral-300 transition-colors duration-200" />,
    href: "#",
  },
  {
    icon: <IconBrandLinkedin className="h-full w-full text-neutral-600 dark:text-neutral-300 transition-colors duration-200" />,
    href: "https://www.linkedin.com/in/arman-chaudhary-3100a328a/",
  },
  {
    icon: <IconBrandLeetcode className="h-full w-full text-neutral-600 dark:text-neutral-300 transition-colors duration-200" />,
    href: "https://leetcode.com/u/Arman176/",
  },
  {
    icon: <IconMail className="h-full w-full text-neutral-600 dark:text-neutral-300 transition-colors duration-200" />,
    href: "mailto:armanchaudhary176001@gmail.com",
  },
  {
    icon: <IconBrandX className="h-full w-full text-neutral-600 dark:text-neutral-300 transition-colors duration-200" />,
    href: "https://x.com/ArmanChaud30997",
  },
  {
    icon: <IconBrandGithub className="h-full w-full text-neutral-600 dark:text-neutral-300 transition-colors duration-200" />,
    href: "https://github.com/Arman176001",
  },
]

const Hero = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      {/* Floating Dock - Fixed position */}
      <div className="fixed top-11 right-11 z-20">
        <FloatingDock items={links} />
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Profile Image Container */}
          <div className="flex-shrink-0">
            <div className="relative rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/Photo.jpg"
                alt="Arman Chaudhary"
                width={400}
                height={400}
                className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px] object-cover xl:w-[390px] xl:h-[390px]"
                priority
              />
            </div>
          </div>

          {/* Text Content Container */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-xl">
            <div className="w-full">
              <TextGenerateEffect
                className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400"
                words="Crafting Intelligence"
              />
            </div>

            <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-700 dark:text-gray-200 tracking-wide">
              I&apos;m Arman Chaudhary, an AI/ML engineer based in India.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300">
              Transforming ideas into intelligent solutions, one algorithm at a time.
            </p>

            <div className="pt-4">
              <a href="#projects" className="inline-block">
                <Magicbutton 
                  title="Show My Work" 
                  icon={<FaLocationArrow className="transition-transform group-hover:translate-x-1" />} 
                  position="right" 
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;