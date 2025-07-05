import { notFound } from "next/navigation";
import ProjectDetailsContent from "@/components/ProjectDetailsContent";
import type { NextPage } from "next";

type Props = {
  params: { projectId: string };
};

const ProjectDetails: NextPage<Props> = async ({ params }) => {
  const { projectId } = params;

  // لود کردن JSON از public
  // const res = await fetch(
  //   `${
  //     process.env.NEXT_PUBLIC_BASE_URL || ""
  //   }http://localhost:3000/data/projectData.json`
  // );
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
