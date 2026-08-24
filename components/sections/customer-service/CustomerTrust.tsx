"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Logo asset paths
const row1Logos = [
  { name: "Oaktree", src: "/icons/oaktreee.png" },
  { name: "Mr Makhana", src: "/icons/makhanaa.webp" },
  { name: "ProSupps", src: "/icons/prosupps.png" },
  { name: "Recliners India", src: "/icons/recliner-india.png" },
  { name: "Neferex", src: "/icons/nefrex.png" },
];

const row2Logos = [
  { name: "Neferex", src: "/icons/nefrex.png" },
  { name: "Steris", src: "/icons/steris-logo.png" },
  { name: "Comfort Factory", src: "/icons/Comfort-Factoryy.png" },
  { name: "P N Rao", src: "/icons/pnraoo.png" },
  { name: "Recliners India", src: "/icons/recliner-india.png" },
];

export default function TrustedCustomersSection() {
  return (
    <section className="bg-[#fafafa] py-10 md:py-14 font-[var(--font-poppins)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <h2 className="text-2xl sm:text-4xl font-medium text-gray-900 tracking-tight">
          Customers Who Trusted Us
        </h2>
      </div>

      {/* Infinite Slider Wrapper - Constrained to max-w-7xl on desktop */}
      <div className="relative w-full max-w-7xl mx-auto px-0 sm:px-6 overflow-hidden flex flex-col gap-4 sm:gap-6 py-2">
        {/* Side Fades - Aligned inside the max-w container */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 sm:w-28 bg-gradient-to-r from-[#fafafa] via-[#fafafa]/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 sm:w-28 bg-gradient-to-l from-[#fafafa] via-[#fafafa]/80 to-transparent" />

        {/* First Layout: Left to Right */}
        <MarqueeRow items={row1Logos} direction="left-to-right" speed={55} />

        {/* Second Layout: Right to Left */}
        <MarqueeRow items={row2Logos} direction="right-to-left" speed={55} />
      </div>
    </section>
  );
}

interface LogoItem {
  name: string;
  src: string;
}

interface MarqueeRowProps {
  items: LogoItem[];
  direction: "left-to-right" | "right-to-left";
  speed?: number;
}

function MarqueeRow({ items, direction, speed = 55 }: MarqueeRowProps) {
  const duplicatedItems = [...items, ...items, ...items, ...items];

  const initialX = direction === "left-to-right" ? "-50%" : "0%";
  const animateX = direction === "left-to-right" ? "0%" : "-50%";

  return (
    <div className="flex w-full overflow-hidden select-none">
      <motion.div
        className="flex gap-4 sm:gap-6 shrink-0 items-center"
        initial={{ x: initialX }}
        animate={{ x: animateX }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex items-center justify-center min-w-[140px] sm:min-w-[180px] h-20 sm:h-24 px-3 py-2"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              className="max-h-12 sm:max-h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
              width={220}
              height={220}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}