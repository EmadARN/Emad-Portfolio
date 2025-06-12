import { notFound } from "next/navigation";
import { projectData } from "@/constants";
import ProjectDetailsContent from "@/components/ProjectDetailsContent";

interface ProjectDetailsProps {
  params: Promise<{ projectId: string }>; // params به‌صورت Promise تعریف شده
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function ProjectDetails({ params }: ProjectDetailsProps) {
  const { projectId } = await params;

  const project = projectData.find((p) => p.id === projectId);

  if (!project) return notFound();

  return <ProjectDetailsContent project={project} />;
}
