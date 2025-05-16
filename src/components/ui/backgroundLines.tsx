"use client";
import { paths } from "@/constants/svgPath";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const BackgroundLines = ({
  className,
  svgOptions,
}: {
  className?: string;
  svgOptions?: {
    duration?: number;
  };
}) => {
  return (
    <div className={cn("h-[2rem]  w-full", className)}>
      <SVG svgOptions={svgOptions} />
    </div>
  );
};

const pathVariants = {
  initial: { strokeDashoffset: 800, strokeDasharray: "50 800" },
  animate: {
    strokeDashoffset: 0,
    strokeDasharray: "20 800",
    opacity: [0, 1, 1, 0],
  },
};

const SVG = ({
  svgOptions,
}: {
  svgOptions?: {
    duration?: number;
  };
}) => {
  const colors = [
    "#46A5CA",
    "#8C2F2F",
    "#4FAE4D",
    "#D6590C",
    "#811010",
    "#247AFB",
    "#A534A0",
    "#A8A438",
    "#D6590C",
    "#46A29C",
    "#670F6D",
    "#D7C200",
    "#59BBEB",
    "#504F1C",
    "#55BC54",
    "#4D3568",
    "#9F39A5",
    "#363636",
    "#860909",
    "#6A286F",
    "#604483",
  ];
  return (
    <motion.svg
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 w-full h-full"
    >
      {paths.map((path, idx) => (
        <motion.path
          d={path}
          stroke={colors[idx]}
          strokeWidth="2.3"
          strokeLinecap="round"
          variants={pathVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: svgOptions?.duration || 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.floor(Math.random() * 10),
            repeatDelay: Math.floor(Math.random() * 10 + 2),
          }}
          key={`path-first-${idx}`}
        />
      ))}

      {/* duplicate for more paths */}
      {paths.map((path, idx) => (
        <motion.path
          d={path}
          stroke={colors[idx]}
          strokeWidth="2.3"
          strokeLinecap="round"
          variants={pathVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: svgOptions?.duration || 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.floor(Math.random() * 10),
            repeatDelay: Math.floor(Math.random() * 10 + 2),
          }}
          key={`path-second-${idx}`}
        />
      ))}
    </motion.svg>
  );
};
