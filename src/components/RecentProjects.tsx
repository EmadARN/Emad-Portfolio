"use client";
import { useId, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import SkeletonSlide from "./ui/skelton/SkeletonSlide";
import Link from "next/link";

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

// شبیه‌سازی لود دیتا
const simulateDataFetch = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), 2000);
  });
};

export const RecentProjects = ({ slides }: CarouselProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const id = useId();

  useEffect(() => {
    const loadData = async () => {
      try {
        await simulateDataFetch();
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading data:", error);
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <section className="py-28" id="projects">
      <h1 className="heading">
        My <span className="text-purple">projects</span>
      </h1>

      <div className="relative w-[90%] max-w-[1200px] mx-auto mt-12">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array(slides.length)
              .fill(0)
              .map((_, idx) => (
                <SkeletonSlide key={idx} />
              ))}
          </div>
        ) : (
          <Swiper
            modules={[Autoplay, A11y, EffectCoverflow]}
            effect="coverflow"
            centeredSlides
            grabCursor
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2,
              slideShadows: false,
              scale: 0.9,
            }}
            slidesPerView={1} // پیش‌فرض روی موبایل یک اسلاید کامل
            spaceBetween={20}
            loop
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 }, // موبایل (یک اسلاید کامل)
              768: { slidesPerView: 2, spaceBetween: 30 }, // تبلت
              1024: { slidesPerView: 2.5, spaceBetween: 40 }, // دسکتاپ
            }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Link href={`/projects/${slide.id}/details/`} target="_blank">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105">
                    <div className="relative w-full h-64">
                      <Image
                        src={slide.cover_image}
                        alt={slide.title}
                        fill
                        className="object-cover rounded-t-2xl"
                        priority
                      />
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-900 text-center">
                      <h2 className="text-lg font-bold">{slide.title}</h2>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};
