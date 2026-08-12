"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    id: 1,
    title: "Black Stripped Jeans",
    price: "$486",
    avg: "$120",
    action: "Product Added to cart",
    user: "John",
    image: "/images/bis1.jpg",
  },
  {
    id: 2,
    title: "Black Stripped Jeans",
    price: "$486",
    avg: "$120",
    action: "Product Added to cart",
    user: "Sourav",
    image: "/images/bis2.jpg",
  },
  {
    id: 3,
    title: "Black Stripped Jeans",
    price: "$486",
    avg: "$120",
    action: "Product Added to cart",
    user: "Sam",
    image: "/images/bis3.jpg",
  },
  {
    id: 4,
    title: "Black Stripped Jeans",
    price: "$486",
    avg: "$120",
    action: "Product Added to cart",
    user: "Alex",
    image: "/images/bis1.jpg",
  },
];

export default function BuyingIntentGraphic() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // 5000ms center pause + 800ms slide duration = 5800ms
    const timer = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 5800);

    return () => clearInterval(timer);
  }, []);

  const visibleOffsets = [-2, -1, 0, 1, 2];

  return (
    <div className="w-full h-full min-h-[230px] bg-gradient-to-l from-[#FF6828]/[0.05] to-[#FF4C00]/[0.02] rounded-2xl overflow-hidden flex items-center justify-center relative select-none">
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-radial from-orange-100/60 via-transparent to-transparent pointer-events-none" />

      {/* Side Edge Vignette Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-r from-[#FFF3EE] to-transparent z-30 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-l from-[#FFF3EE] to-transparent z-30 pointer-events-none" />

      {/* 3-Card Stage Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {visibleOffsets.map((offset) => {
          const virtualIndex = activeIndex + offset;
          const itemIndex =
            ((virtualIndex % items.length) + items.length) % items.length;
          const item = items[itemIndex];

          const isCenter = offset === 0;
          const isVisible = Math.abs(offset) <= 1;

          return (
            <motion.div
              key={virtualIndex}
              initial={false}
              animate={{
                x: offset * 220, // Increased offset stride to maintain a distinct 15-20px gap
                scale: isCenter ? 1.08 : 0.84,
                opacity: isVisible ? (isCenter ? 1 : 0.6) : 0,
                zIndex: isCenter ? 20 : 10 - Math.abs(offset),
                y: isCenter ? -2 : 4,
              }}
              transition={{
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1],
              }}
              className={`absolute w-[190px] sm:w-[210px] bg-white rounded-2xl p-3 border transition-shadow duration-200 ${
                isCenter
                  ? "shadow-[0_12px_28px_rgba(0,0,0,0.08)] border-orange-200/90"
                  : "shadow-xs border-gray-100"
              }`}
            >
              {/* Product Info Pill */}
              <div className="bg-[#F5F5F7] rounded-xl p-2 flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-200 shrink-0 bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-[11px] font-bold text-gray-900 truncate tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-[9px] text-gray-500 font-medium mt-0.5">
                    Now: <span className="font-bold text-gray-900">{item.price}</span>{" "}
                    <span className="text-gray-300 mx-0.5">•</span> Avg: {item.avg}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="flex items-center justify-between mt-2 px-1">
                <span className="text-[9px] font-semibold text-gray-800 tracking-tight">
                  {item.action}
                </span>
                <span className="text-[9px] font-medium text-gray-500">
                  By: <strong className="font-bold text-gray-900">{item.user}</strong>
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}