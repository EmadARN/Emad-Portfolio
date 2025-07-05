"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface SlideData {
  id: string;
  title: string;
  button: string;
  cover_image: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      slideRef.current.style.setProperty("--x", `${xRef.current}px`);
      slideRef.current.style.setProperty("--y", `${yRef.current}px`);
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    // Cleanup function should cancel the animation frame
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = e.clientX - (r.left + r.width / 2);
    yRef.current = e.clientY - (r.top + r.height / 2);
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const { id, cover_image, button, title } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10 "
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-transparent rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <Image
            className="absolute inset-0 w-full  h-full object-contain opacity-100 transition-opacity duration-600 ease-in-out"
            src={cover_image}
            alt={title}
            fill
            style={{ opacity: current === index ? 1 : 0.5 }}
            priority
          />
          {current === index && (
            <div className="absolute inset-0 bg-black/10 transition-all duration-1000" />
          )}
        </div>
        <article
          className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <h2 className="text-lg md:text-2xl  font-semibold">{title}</h2>
          <div className="flex justify-center">
            <Link href={`/projects/${id}/details/`}>
              <button className="flex items-center mt-6 px-4 py-2 text-xs bg-white text-black rounded-2xl h-6  md:h-12 hover:shadow-lg transition">
                {button}
              </button>
            </Link>
          </div>
        </article>
      </li>
    </div>
  );
};

export default Slide;
