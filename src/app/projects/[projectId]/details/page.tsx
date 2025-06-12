import { notFound } from "next/navigation";
import { projectData } from "@/constants";
import ProjectDetailsContent from "@/components/ProjectDetailsContent";
import type { NextPage } from "next";

type Props = {
  params: Promise<{ projectId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const ProjectDetails: NextPage<Props> = async ({ params }) => {
  const { projectId } = await params;

  const project = projectData.find((p) => p.id === projectId);

  if (!project) return notFound();

  return <ProjectDetailsContent project={project} />;
};

export default ProjectDetails;
