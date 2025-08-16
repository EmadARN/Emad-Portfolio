"use client";
import { useState, useEffect, CSSProperties } from "react";
import { IoCopyOutline } from "react-icons/io5";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import animationData from "@/constants/confetti.json";
import MagicButton from "../MagicButton";
import MarqueeTrack from "./MarqueeTrack";
import Image from "next/image";
import { BackgroundLines } from "./backgroundLines";
import Skeleton from "./skelton/Skeleton";

// لود پویا برای Lottie مخصوص Client
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  video,
  style,
  imgClassName,
  titleClassName,
  spareImg,
  isLoading = false,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  video?: string;
  style?: Pick<CSSProperties, "objectFit" | "borderRadius">;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  isLoading?: boolean;
}) => {
  const [copied, setCopied] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 640);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  useEffect(() => {
    setIsClient(true); // فقط بعد از mount، یعنی فقط در کلاینت true میشه
  }, []);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "arabanemad@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  if (isLoading) {
    return (
      <Skeleton
        className={className}
        imgClassName={imgClassName}
        titleClassName={titleClassName}
        id={id}
      />
    );
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 7 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
              width={400}
              height={400}
              style={isMobile ? style : {}}
              priority
            />
          )}
        </div>
        <div className="w-full h-full absolute">
          {video && (
            <video
              src={video}
              width={400}
              height={400}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 6 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
              className="object-cover object-center"
              priority
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 w-full"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>

          <div
            className={cn(titleClassName, "font-sans whitespace-pre-line z-10")}
          >
            {title}
          </div>

          {id === 4 && <BackgroundLines />}
          {id === 5 && <MarqueeTrack />}

          {id === 7 && (
            <div className="relative">
              {copied && isClient && (
                <div className="absolute -bottom-5 left-0">
                  <Lottie options={defaultOptions} height={200} width={400} />
                </div>
              )}

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
