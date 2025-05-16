"use client";

import { useEffect } from "react";

export const useDynamicMarquee = (
  trackRef: React.RefObject<HTMLElement>,
  listLength: number
) => {
  useEffect(() => {
    if (!trackRef.current) return;

    // Cast the first item as HTMLElement, since offsetHeight exists only on HTMLElement
    const firstItem = trackRef.current.querySelector(".item") as HTMLElement;
    if (!firstItem) return;

    const itemHeight = firstItem.offsetHeight;
    const totalHeight = itemHeight * listLength;

    // Remove previous keyframes if they exist
    const existingStyle = document.getElementById("dynamic-marquee-keyframes");
    if (existingStyle) existingStyle.remove();

    // Create new style
    const style = document.createElement("style");
    style.id = "dynamic-marquee-keyframes";
    style.innerHTML = `
      @keyframes scroll-items {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(-${totalHeight}px);
        }
      }
    `;
    document.head.appendChild(style);

    // Apply the dynamic animation to the marquee track
    trackRef.current.style.animation = `scroll-items ${
      listLength * 0.8
    }s linear infinite`;
  }, [trackRef, listLength]);
};
