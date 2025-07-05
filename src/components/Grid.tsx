"use client";
import { useState, useEffect } from "react";
import { gridItems } from "../constants";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const simulateDataFetch = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(gridItems); // شبیه‌سازی دیتا
    }, 2000); // تأخیر ۲ ثانیه
  });
};
const Grid = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        await simulateDataFetch(); // یا fetchData() برای API واقعی
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading data:", error);
        setIsLoading(false); // حتی در صورت خطا، لودینگ رو خاموش کن
      }
    };

    loadData();
  }, []);

  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
            isLoading={isLoading}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
