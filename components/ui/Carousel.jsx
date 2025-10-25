"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
  items = [],
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}) {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const { trackItemOffset, carouselItems } = useMemo(() => {
    const effectiveWidth = containerWidth || 600;
    const calculatedTrackItemOffset = effectiveWidth + GAP;
    const calculatedCarouselItems = loop ? [...items, items[0]] : items;
    return {
      trackItemOffset: calculatedTrackItemOffset,
      carouselItems: calculatedCarouselItems,
    };
  }, [containerWidth, items, loop]);

  useEffect(() => {
    if (!containerRef.current) return;
    setContainerWidth(containerRef.current.clientWidth);

    const observer = new ResizeObserver((entries) => {
      if (entries.length > 0) {
        setContainerWidth(entries[0].contentRect.width);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const el = containerRef.current;
      const enter = () => setIsHovered(true);
      const leave = () => setIsHovered(false);
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      return () => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, carouselItems.length, pauseOnHover]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full"
    >
      <motion.div
        className="flex"
        style={{
          gap: `${GAP}px`,
          x,
        }}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
      >
        {carouselItems.map((item, index) => (
          <motion.div
            key={index}
            className="shrink-0 w-full"
            style={{
              flex: "0 0 100%", // full width slide
            }}
          >
            {item.description}
          </motion.div>
        ))}
      </motion.div>

      {/* Indicators */}
      <div className="flex w-full justify-center mt-6">
        <div className="flex gap-3">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                currentIndex % items.length === index
                  ? "bg-[#01458d]"
                  : "bg-gray-300"
              }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
