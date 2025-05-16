import { IconArrowNarrowRight } from "@tabler/icons-react";

interface CarouselControlProps {
  type: "previous" | "next";
  title: string;
  handleClick: () => void;
}

export const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      onClick={handleClick}
      title={title}
      className={`w-10 h-10 mx-2 flex items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800 transition hover:-translate-y-0.5 active:translate-y-0.5 ${
        type === "previous" ? "rotate-180" : ""
      }`}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};
