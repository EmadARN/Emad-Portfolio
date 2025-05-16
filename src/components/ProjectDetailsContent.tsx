"use client";
import Link from "next/link";
import { StickyScroll } from "./ui/StickyScrolReveal";
import { AnimatedTestimonials } from "./ui/animatedTestimonials";
import useMoveBack from "@/hooks/userMoveBack";

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
              className=" rounded-lg shadow-md w-full h-[15rem]  object-cover"
              style={{
                aspectRatio: "16/9",
                filter: "grayscale(10%) contrast(1.2) saturate(1.4)",
              }}
            >
              Your browser does not support the video tag.
            </video>
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
            testimonials={section.images.map((img, i) => ({
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

  // 👇 اگر landing داشت، اضافه‌اش کن به اول content
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
        <h2>📅Time Line:</h2>
        <p className="text-sm pl-2 text-gray-500 mb-4">{project.time_line}</p>
      </div>
      <div>
        <h2>📱Web demo:</h2>
        <Link
          href={project.live_link}
          target="_blank"
          className="text-blue-500 pl-2 mb-6 block"
        >
          view live
        </Link>
      </div>
      <div className="py-8 w-full" id="experience">
        <h4 className="heading">
          project <span className="text-purple"> details</span>
        </h4>
      </div>
      <div className="w-full py-4">
        <StickyScroll content={dynamicContent} />
      </div>
    </div>
  );
}
