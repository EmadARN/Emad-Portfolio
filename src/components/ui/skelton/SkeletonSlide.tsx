import { cn } from "@/lib/utils";

const SkeletonSlide = ({ className }: { className?: string }) => {
  return (
    <li
      className={cn(
        "w-[70vmin] h-[20vmin] mx-[4vmin] flex-shrink-0 rounded-3xl border border-white/[0.1] flex flex-col space-y-4 animate-pulse md:mt-16",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className="flex flex-col px-5 py-4 space-y-4 items-center ">
        <div className="h-6 bg-gray-700/50 rounded w-3/4" />
        <div className="h-10 bg-gray-700/50 rounded w-1/3" />
      </div>
    </li>
  );
};

export default SkeletonSlide;
