"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import SkeletonProjectDetails from "./ui/skelton/SkeletonProjectDetails";
import { AnimatedTestimonials } from "./ui/animatedTestimonials";
import { StickyScroll } from "./ui/StickyScrolReveal";
import Footer from "./Footer";
import { socialMedia } from "@/constants";
import { FaGithubSquare } from "react-icons/fa";

interface Section {
  title: string;
  desc: string;
  images: string[];
}

interface Project {
  title: string;
  description: string;
  time_line: string;
  live_link: string;
  technologies?: string[];
  details: {
    landing: Section;
    auth: Section;
    adminPanel: Section;
    userPanel: Section;
    receptionPanel: Section;
    more: Section;
  };
}

interface Props {
  project: Project;
}

// تابع شبیه‌سازی لود دیتا
const simulateDataFetch = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

export default function ProjectDetailsContent({ project }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      try {
        await simulateDataFetch();
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading data:", error);
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  if (isLoading) {
    return <SkeletonProjectDetails />;
  }

  const { adminPanel, userPanel, receptionPanel, landing, auth, more } =
    project.details;

  const landingSection =
    landing.images.length > 0
      ? {
          key: "section-landing",
          title: landing.title,
          description: landing.desc,
          content: (
            <div className="relative w-full max-w-5xl mx-auto">
              <video
                src={landing.images[0]}
                autoPlay
                loop
                muted
                controls
                playsInline
                className="rounded-lg w-full h-full object-contain"
                style={{
                  aspectRatio: "16/9",
                  filter: "grayscale(10%) contrast(1.2) saturate(1.4)",
                }}
                preload="none"
              />
            </div>
          ),
        }
      : null;

  const dynamicContent = [auth, adminPanel, userPanel, receptionPanel, more]
    .filter(
      (section) => section.title || section.desc || section.images.length > 0
    )
    .map((section, index) => ({
      key: `section-${index}`,
      title: section.title,
      description: section.desc,
      content:
        section.images.length > 0 ? (
          <AnimatedTestimonials
            testimonials={section.images.map((img) => ({
              quote: section.desc,
              name: section.title,
              designation: "",
              src: img,
            }))}
          />
        ) : (
          <p>No images available</p>
        ),
    }));

  if (landingSection) {
    dynamicContent.unshift(landingSection);
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-300 mb-4">{project.description}</p>

      <div>
        <h2 className="md:text-2xl font-bold text-nowrap text-purple-600 mb-4">
          📅 Time Line
        </h2>
        <p className="text-sm pl-2 text-gray-500 mb-4">{project.time_line}</p>
      </div>
      <div className="w-1/2 pl-1">
        <h2 className="md:text-2xl font-bold text-nowrap text-purple-600 mb-4 ">
          <p className="flex items-center gap-3">
            <FaGithubSquare /> github
          </p>
        </h2>
        <Link
          className="text-blue-500 pl-1 mb-6 block"
          href={socialMedia[0].link}
        >
          {socialMedia[0].name}
        </Link>
      </div>
      <div className="w-1/2">
        <h2 className="md:text-2xl font-bold text-nowrap text-purple-600 mb-4 ">
          📱 Web demo
        </h2>
        <Link
          href={project.live_link}
          target="_blank"
          className="text-blue-500 pl-2 mb-6 block"
        >
          View Live
        </Link>
      </div>

      {project.technologies && project.technologies.length > 0 && (
        <div className="py-6">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">
            🔧 Technologies Used
          </h2>
          <div className="flex flex-wrap gap-6 justify-center items-center bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900 p-6 rounded-xl shadow-lg">
            {project.technologies.map((tech, i) => (
              <div
                key={i}
                className="w-16 md:w-20 h-16 md:h-20  bg-white rounded-xl p-2 shadow-md hover:scale-105 transition-transform relative"
              >
                <Image
                  src={tech}
                  alt={`tech-${i}`}
                  fill
                  className="object-contain rounded-md"
                  sizes="80px"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="py-8 w-full" id="experience">
        <h4 className="heading">
          Project <span className="text-purple">Details</span>
        </h4>
      </div>

      <div className="md:scale-125 w-full h-full py-4 my-16 ">
        <StickyScroll content={dynamicContent} />
      </div>
      <Footer />
    </div>
  );
}
