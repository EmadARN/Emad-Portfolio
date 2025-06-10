"use client";
import Link from "next/link";
import { StickyScroll } from "./ui/StickyScrolReveal";
import { AnimatedTestimonials } from "./ui/animatedTestimonials";
import useMoveBack from "@/hooks/userMoveBack";
import Image from "next/image";

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
  technologies?: string[]; // ← تکنولوژی‌ها به صورت آدرس عکس
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

export default function ProjectDetailsContent({ project }: Props) {
  const { adminPanel, userPanel, receptionPanel, landing, auth, more } =
    project.details;

  const moveBack = useMoveBack();

  const landingSection =
    landing.images.length > 0
      ? {
          key: "section-landing",
          title: landing.title,
          description: landing.desc,
          content: (
            <video
              src={landing.images[0]}
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg shadow-md w-full md:h-[15rem] object-cover"
              style={{
                aspectRatio: "16/9",
                filter: "grayscale(10%) contrast(1.2) saturate(1.4)",
              }}
            />
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
      <button
        onClick={moveBack}
        className="text-white bg-violet-950 p-2 rounded-md mb-4"
      >
        &larr; Back
      </button>

      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-700 mb-4">{project.description}</p>

      <div>
        <h2 className="md:text-2xl font-bold text-nowrap text-purple-600 mb-4">
          📅 Time Line:
        </h2>
        <p className="text-sm pl-2 text-gray-500 mb-4">{project.time_line}</p>
      </div>

      <div className="w-1/2">
        <h2 className="md:text-2xl font-bold text-nowrap text-purple-600 mb-4 ">
          📱 Web demo:
        </h2>
        <Link
          href={project.live_link}
          target="_blank"
          className="text-blue-500 pl-2 mb-6 block"
        >
          View Live
        </Link>
      </div>

      {/*  تکنولوژی‌های استفاده‌شده */}
      {project.technologies && project.technologies.length > 0 && (
        <div className="py-6">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">
            🔧 Technologies Used
          </h2>
          <div className="flex flex-wrap gap-6 justify-center items-center bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900 p-6 rounded-xl shadow-lg">
            {project.technologies.map((tech, i) => (
              <div
                key={i}
                className="w-20 h-20 bg-white rounded-full p-2 shadow-md hover:scale-105 transition-transform relative"
              >
                <Image
                  src={tech}
                  alt={`tech-${i}`}
                  fill
                  className="object-contain rounded-full"
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

      <div className="w-full py-4">
        <StickyScroll content={dynamicContent} />
      </div>
    </div>
  );
}
