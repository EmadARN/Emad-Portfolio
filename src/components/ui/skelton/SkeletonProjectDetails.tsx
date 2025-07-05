import { cn } from "@/lib/utils";
const SkeletonProjectDetails = ({ className }: { className?: string }) => {
  return (
    <div className={cn("max-w-4xl mx-auto p-6 animate-pulse", className)}>
      {/* دکمه بازگشت */}
      <div className="h-10 w-24 bg-gray-500 rounded-md mb-4" />

      {/* عنوان پروژه */}
      <div className="h-10 bg-gray-500 rounded w-1/2 mb-4" />
      {/* توضیحات پروژه */}
      <div className="h-4 bg-gray-500 rounded w-3/4 mb-4" />

      {/* بازه زمانی */}
      <div>
        <div className="h-6 bg-gray-500 rounded w-1/4 mb-4" />
        <div className="h-4 bg-gray-500 rounded w-1/3 pl-2 mb-4" />
      </div>

      {/* لینک دمو */}
      <div className="w-1/2">
        <div className="h-6 bg-gray-500 rounded w-1/4 mb-4" />
        <div className="h-4 bg-gray-500 rounded w-1/3 pl-2 mb-6" />
      </div>

      {/* تکنولوژی‌ها */}
      <div className="py-6">
        <div className="h-6 bg-gray-500 rounded w-1/4 mb-4" />
        <div className="flex flex-wrap gap-6 justify-center items-center bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900 p-6 rounded-xl">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="w-20 h-20 bg-gray-500 rounded-full" />
            ))}
        </div>
      </div>

      {/* عنوان جزئیات پروژه */}
      <div className="py-8 w-full">
        <div className="h-10 w-1/2 bg-gray-500 rounded-md  mx-auto" />{" "}
      </div>

      {/* StickyScroll */}
      <div className="scale-125 w-full h-full py-4 mt-16">
        <SkeletonStickyScroll />
      </div>
    </div>
  );
};

export default SkeletonProjectDetails;

export const SkeletonStickyScroll = ({ className }: { className?: string }) => {
  const skeletonContent = Array(3)
    .fill(0)
    .map((_, index) => {
      return {
        key: `skeleton-${index}`,
        title: "",
        description: "",
        content: <SkeletonAnimatedTestimonials />,
      };
    });

  return (
    <div
      className={cn(
        "relative flex h-[30rem] justify-center space-x-10 rounded-md p-10 bg-[#171717] animate-pulse",
        className
      )}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {skeletonContent.map((_, index) => (
            <div key={index} className="py-20">
              <div className="h-6 bg-gray-500 rounded w-1/2" />
              <div className="h-4 bg-gray-500 rounded w-3/4 mt-10" />
              <div className="mt-6 block lg:hidden">
                <SkeletonAnimatedTestimonials />
              </div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      <div className="sticky top-10 hidden h-[20rem] w-[36rem] rounded-xl lg:block">
        <SkeletonAnimatedTestimonials />
      </div>
    </div>
  );
};

export const SkeletonAnimatedTestimonials = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative w-[180px]  md:w-[500px]  font-sans antialiased px-0",
        className
      )}
    >
      <div className="w-full md:scale-125 flex flex-col lg:flex-row lg:justify-between gap-4 pt-12">
        {/* متن سمت چپ (placeholder برای عنوان و توضیحات) */}
        <div className="flex-1 w-full flex flex-col space-y-4 animate-pulse">
          <div className="h-6 bg-gray-500 rounded w-3/4" />
          <div className="h-4 bg-gray-500 rounded w-full" />
          <div className="h-4 bg-gray-500 rounded w-1/2" />
        </div>

        {/* تصویر و دکمه‌ها سمت راست */}
        <div className="flex-1 !w-full flex flex-col items-center animate-pulse">
          <div className="relative h-64 w-full rounded-3xl bg-gray-500" />
          <div className="flex  gap-4 pt-4">
            <div className="h-7 w-7 bg-gray-500 rounded-full" />
            <div className="h-7 w-7 bg-gray-500 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
