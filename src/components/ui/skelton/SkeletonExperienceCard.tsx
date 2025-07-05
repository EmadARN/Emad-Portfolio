import { cn } from "@/lib/utils";
import { Button } from "../MovingBorders";

const SkeletonExperienceCard = ({ className }: { className?: string }) => {
  return (
    <Button
      duration={Math.floor(Math.random() * 10000) + 10000}
      borderRadius="1.75rem"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        borderRadius: `calc(1.75rem * 0.96)`,
      }}
      className={cn(
        "flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 animate-pulse",
        className
      )}
    >
      {/* کانتینر اصلی افقی */}
      <div className="flex w-full lg:flex-row flex-col items-start lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 text-star z-50 border-2 ">
        {/* اسکلتون تصویر سمت چپ */}
        <div className="lg:w-32 md:w-20 w-16 h-16 md:h-20 lg:h-32 bg-gray-700/50 rounded-md flex-shrink-0" />

        {/* محتوا سمت راست */}
        <div className="lg:ms-5 w-full">
          <h1 className="h-6 bg-gray-700/50 rounded w-full sm:w-[100px] md:w-[200px] lg:w-[400px]" />

          <h3 className="h-6 bg-gray-700/50 rounded w-full sm:w-[100px] md:w-[200px] lg:w-[400px] mt-6" />
          <h3 className="h-6 bg-gray-700/50 rounded w-full sm:w-[100px] md:w-[200px] lg:w-[400px] mt-3" />
          <h3 className="h-6 bg-gray-700/50 rounded w-full sm:w-[100px] md:w-[200px] lg:w-[400px] mt-3" />

          <h5 className="h-3 bg-gray-700/50 rounded w-[80px] sm:w-[100px] mt-4" />
        </div>
      </div>
    </Button>
  );
};

export default SkeletonExperienceCard;
