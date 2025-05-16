import { InfiniteMoving } from "./InfiniteMoving";

export default function Home() {
  const leftLists = ["JS", "React.js", "TypeScript", "Next.js", "Python"];
  const midLists = [
    "Sass",
    "Tailwind CSS",
    "Bootstrap",
    "MUI",
    "Chakra UI",
    "shadcn UI",
    "Hero UI",
  ];
  const rightLists = [
    "GraphQL",
    "REST API",
    "Redux",
    "TanStack Query",
    "GSAP",
    "Zustand",
    "React Hook Form",
    "Formik",
    "Yup / Zod",
  ];

  return (
    <div className="flex gap-5 absolute -right-3 lg:-right-2">
      <InfiniteMoving items={leftLists} speed="slow" />
      <InfiniteMoving items={midLists} speed="normal" />
      <InfiniteMoving items={rightLists} speed="normal" />
    </div>
  );
}
