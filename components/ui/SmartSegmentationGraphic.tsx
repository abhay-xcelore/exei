"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const tags = [
  "High Spend",
  "Added to cart",
  "High Engagement",
  "Viewed Product",
  "Order History",
  "Repeat Buyer",
  "Cart Abandoner",
];

export default function SmartSegmentationGraphic() {
  const [activeIndex, setActiveIndex] = useState(2); // "High Engagement" starts centered

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tags.length);
    }, 2500); // Holds in middle before sliding to next card

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[310px] flex items-center justify-center overflow-hidden py-6 select-none bg-gradient-to-l from-[#FF6828]/[0.05] to-[#FF4C00]/[0.02]">
      
      {/* Ambient Radial Glow Behind Center Position */}
      <div className="absolute w-[260px] h-[50px] bg-gradient-to-r from-[#FF5E2C]/20 to-[#E056FD]/20 rounded-full blur-xl pointer-events-none z-0" />

      {/* Infinite Card Stack Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {tags.map((tag, index) => {
          // Calculate relative distance from current active card with smooth array wrap-around
          let diff = index - activeIndex;
          if (diff > tags.length / 2) diff -= tags.length;
          if (diff < -tags.length / 2) diff += tags.length;

          const isCenter = diff === 0;
          const absDiff = Math.abs(diff);

          // Calculate continuous layout properties based on distance from center
          let y = 0;
          let width = 280;
          let height = 54;
          let zIndex = 30;
          let opacity = 1;

          if (diff === 0) {
            y = 0;
            width = 280;
            height = 54;
            zIndex = 30;
            opacity = 1;
          } else if (diff === 1) {
            // Card directly below coming up
            y = 38;
            width = 232;
            height = 46;
            zIndex = 20;
            opacity = 0.75;
          } else if (diff === -1) {
            // Card directly above moving out
            y = -38;
            width = 232;
            height = 46;
            zIndex = 20;
            opacity = 0.75;
          } else if (diff === 2) {
            y = 72;
            width = 186;
            height = 40;
            zIndex = 10;
            opacity = 0.35;
          } else if (diff === -2) {
            y = -72;
            width = 186;
            height = 40;
            zIndex = 10;
            opacity = 0.35;
          } else {
            // Offscreen cards
            y = diff > 0 ? 110 : -110;
            width = 150;
            height = 36;
            zIndex = 0;
            opacity = 0;
          }

          return (
            <motion.div
              key={tag}
              initial={false}
              animate={{
                y,
                width,
                height,
                opacity,
                zIndex,
              }}
              /* Ultra-smooth spring physics for natural sliding and center snapping */
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
                mass: 0.8,
              }}
              className="absolute flex items-center justify-center rounded-full"
            >
              {/* Card Container */}
              <div
                className={`relative w-full h-full rounded-full flex items-center justify-center bg-white overflow-hidden transition-shadow duration-500 ${
                  isCenter
                    ? "shadow-[0_8px_24px_rgba(255,94,44,0.18)]"
                    : "shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                }`}
              >
                {/* Active Gradient Border (Fades in seamlessly when entering middle) */}
                <motion.div
                  animate={{ opacity: isCenter ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#FF6B2C] via-[#FF5E2C] to-[#E056FD]"
                >
                  <div className="w-full h-full bg-white rounded-full" />
                </motion.div>

                {/* Inactive Card Border */}
                <motion.div
                  animate={{ opacity: isCenter ? 0 : 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 rounded-full border border-gray-200/80 pointer-events-none"
                />

                {/* Text Label */}
                <motion.span
                  animate={{
                    color: isCenter ? "#1f2937" : "#9ca3af",
                    fontWeight: isCenter ? 600 : 500,
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 text-xs sm:text-sm tracking-tight whitespace-nowrap"
                >
                  {tag}
                </motion.span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}