"use client";
import React, { useLayoutEffect, useRef } from "react";

// یک ابزار throttle با تایپ مشخص برای TypeScript
const throttle = (fn: (...args: any[]) => void, wait: number) => {
  let lastTime = 0;
  return function (...args: any[]) {
    const now = Date.now();
    if (now - lastTime > wait) {
      fn(...args);
      lastTime = now;
    }
  };
};

const RobotFollower = () => {
  const pupilLeftRef = useRef<HTMLDivElement | null>(null);
  const pupilRightRef = useRef<HTMLDivElement | null>(null);
  const coordsRef = useRef({ x: 0, y: 0 });

  const updatePupils = throttle(() => {
    const { x, y } = coordsRef.current;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = (x - centerX) / 30;
    const offsetY = (y - centerY) / 30;

    if (pupilLeftRef.current && pupilRightRef.current) {
      pupilLeftRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      pupilRightRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
  }, 16);

  useLayoutEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      coordsRef.current = { x: e.clientX, y: e.clientY };
      updatePupils();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        coordsRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
        updatePupils();
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="flex items-center justify-center px-4">
      <div className="relative aspect-[4/5] rounded-3xl shadow-2xl flex flex-col items-center justify-center">
        <div className="absolute w-8 h-8 bg-white rounded-full left-4 top-4 flex items-center justify-center overflow-hidden border border-purple-500 eye-blink">
          <div className="absolute w-full h-full rounded-full bg-purple-400 opacity-5 animate-pulse"></div>
          <div
            ref={pupilLeftRef}
            className="w-3 h-3 bg-[#5D23AC] rounded-full z-10 transition-transform duration-100"
          ></div>
        </div>
        <div className="absolute w-8 h-8 bg-white rounded-full right-4 top-4 flex items-center justify-center overflow-hidden border border-purple-500 eye-blink">
          <div className="absolute w-full h-full rounded-full bg-purple-400 opacity-5 animate-pulse"></div>
          <div
            ref={pupilRightRef}
            className="w-3 h-3 bg-[#5D23AC] rounded-full z-10 transition-transform duration-100"
          ></div>
        </div>
      </div>

      <style jsx>{`
        .eye-blink {
          animation: blink 5s infinite;
          will-change: transform;
        }

        @keyframes blink {
          0%,
          95%,
          100% {
            transform: scaleY(1);
          }
          96%,
          98% {
            transform: scaleY(0.2);
          }
        }

        .animate-mouth {
          animation: talk 4.5s infinite;
        }

        @keyframes talk {
          0%,
          100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(1.7);
          }
        }
      `}</style>
    </div>
  );
};

export default RobotFollower;
