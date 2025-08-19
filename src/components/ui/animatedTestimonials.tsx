"use client";

import { IconArrowLeft, IconArrowRight, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  const handleImageClick = (src: string, index: number) => {
    setSelectedImage(src);
    setActive(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="relative mx-auto w-full font-sans antialiased">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-1">
        <div>
          <div className="relative h-64 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom cursor-pointer"
                  onClick={() => handleImageClick(testimonial.src, index)}
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={600}
                    height={600}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-contain"
                    priority
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute -bottom-12 left-1/2 translate-x-[-50%]">
          <div className="flex gap-4 pt-12">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-purple-700 hover:bg-purple-600"
            >
              <IconArrowLeft className="h-5 w-5 text-white transition-transform duration-300 group-hover/button:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-purple-700 hover:bg-purple-600"
            >
              <IconArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </div>

      {/* مودال برای بزرگ‌نمایی تصویر با امکان جابجایی */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={closeModal} // 👈 کلیک روی بک‌گراند مودال رو می‌بنده
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] h-[60vh] max-w-4xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // 👈 جلوگیری از بستن مودال هنگام کلیک روی تص5ویر
            >
              {/* دکمه قبلی */}
              <button
                onClick={() => {
                  const newIndex =
                    (active - 1 + testimonials.length) % testimonials.length;
                  setActive(newIndex);
                  setSelectedImage(testimonials[newIndex].src);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-md bg-violet-950 hover:bg-violet-900 text-4xl font-bold z-40 "
              >
                <IconArrowLeft size={30} color="#fff" />
              </button>

              <Image
                src={selectedImage}
                alt="Enlarged Image"
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 768px) 90vw, 80vw"
              />

              {/* دکمه بعدی */}
              <button
                onClick={() => {
                  const newIndex = (active + 1) % testimonials.length;
                  setActive(newIndex);
                  setSelectedImage(testimonials[newIndex].src);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2  text-2xl font-bold rounded-md  bg-violet-950 hover:bg-violet-900"
              >
                <IconArrowRight size={30} color="#fff" />
              </button>

              {/* دکمه بستن */}
              <button
                onClick={closeModal}
                className="absolute top-4  right-4 bg-purple-700 hover:bg-purple-600 p-2 rounded-md shadow text-white bg-violet-950 hover:bg-violet-900"
              >
                <IconX size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
