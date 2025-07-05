import { notFound } from "next/navigation";
import ProjectDetailsContent from "@/components/ProjectDetailsContent";

type Props = {
  params: Promise<{ projectId: string }>;
};

const ProjectDetails = async ({ params }: Props) => {
  const { projectId } = await params; // منتظر باز شدن Promise

  // لود کردن JSON از public
  const res = await fetch(
    `https://emad-portfolio-five.vercel.app/data/projectData.json`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  const project = data.find((p: any) => p.id === projectId);

  if (!project) return notFound();

  return <ProjectDetailsContent project={project} />;
};

export default ProjectDetails;
