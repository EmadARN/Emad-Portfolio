import { cn } from "@/lib/utils";

const Skeleton = ({
  className,
  imgClassName,
  titleClassName,
  id,
}: {
  className?: string;
  imgClassName?: string;
  titleClassName?: string;
  id: number;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] flex flex-col space-y-4 animate-pulse",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* اسکلتون برای تصویر */}
      <div
        className={cn("w-full h-full absolute bg-gray-700/50", imgClassName)}
      />
      {/* اسکلتون برای متن و دکمه */}
      <div
        className={cn(
          "flex flex-col px-5 p-5 lg:p-10 space-y-4",
          titleClassName
        )}
      >
        <div className="h-4 bg-gray-700/50 rounded w-3/4"></div>
        <div className="h-8 bg-gray-700/50 rounded w-1/2"></div>
        {id === 7 && <div className="h-10 bg-gray-700/50 rounded w-1/3"></div>}
      </div>
    </div>
  );
};

export default Skeleton;
