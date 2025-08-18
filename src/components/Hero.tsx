"use client";

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import RobotFollower from "./ui/RobotFollower";
import ContactUsIcon from "./ui/ContactUsIcon";
import { BiDownload } from "react-icons/bi";

const Hero = () => {
  return (
    <>
      {/* 🔝 Contact Icon top right corner */}
      <div className="hidden md:flex absolute top-16 right-6 z-50">
        <ContactUsIcon />
      </div>

      <div className="pb-20 pt-36 relative">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div
          className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
            absolute top-0 left-0 flex items-center justify-center"
        >
          <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
            bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>

        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <span className="text-center text-xl md:text-5xl lg:text-6xl font-bold ">
              From Concept to Code
            </span>
            <TextGenerateEffect
              words=" Creating Impactful and Intuitive User Experiences"
              className="text-center text-xl md:text-5xl  lg:text-6xl"
            />
            <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi! I&apos;m Emad, a Front-End Developer.{" "}
              <div className="mb-16 md:mb-6">
                <RobotFollower />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">
              {/* دکمه Show my work */}
              <a href="#about">
                <MagicButton
                  title="Show my work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>

              {/* دکمه دانلود CV */}
              <a href="/file/EmadAraban-resume.pdf" download>
                <MagicButton
                  title="Download CV"
                  icon={<BiDownload />}
                  position="right"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
