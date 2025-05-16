import { notFound } from "next/navigation";
import { projectData } from "@/constants";
import ProjectDetailsContent from "@/components/ProjectDetailsContent";

interface ProjectDetailsProps {
  params: {
    projectId: string;
  };
}

export default function ProjectDetails({ params }: ProjectDetailsProps) {
  const project = projectData.find((p) => p.id === params.projectId);

  if (!project) return notFound();

  return (
    <>
      <ProjectDetailsContent project={project} />
    </>
  );
}
