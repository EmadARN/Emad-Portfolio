"use client";
import { useId, useState } from "react";
import Slide from "./ui/carousel/Slide";
import { CarouselControl } from "./ui/carousel/CarouselControl";

interface SlideData {
  id: string;
  title: string;
  button: string;
  cover_image: string;
  description: string;
  time_line: string;
  live_link: string;
}

interface CarouselProps {
  slides: SlideData[];
}

export const RecentProjects = ({ slides }: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const id = useId();

  const handlePreviousClick = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  const handleNextClick = () => setCurrent((current + 1) % slides.length);

  const handleSlideClick = (index: number) => setCurrent(index);

  return (
    <section className="py-28" id="projects">
      <h1 className="heading">
        My <span className="text-purple"> projects</span>
      </h1>
      <div
        className="relative w-[70vmin] h-[70vmin] mx-auto mt-12"
        aria-labelledby={`carousel-heading-${id}`}
      >
        <ul
          className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${current * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <Slide
              key={index}
              slide={slide}
              index={index}
              current={current}
              handleSlideClick={handleSlideClick}
            />
          ))}
        </ul>
        <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
          <CarouselControl
            type="previous"
            title="Go to previous slide"
            handleClick={handlePreviousClick}
          />
          <CarouselControl
            type="next"
            title="Go to next slide"
            handleClick={handleNextClick}
          />
        </div>
      </div>
    </section>
  );
};
