"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Lock, Search, Sparkles } from "lucide-react";

interface CardData {
  id: number;
  icon: React.ReactNode;
  gradient: string;
  title: string;
  description: string;
}

const cards: CardData[] = [
  {
    id: 0,
    icon: <Lock className="w-5 h-5 text-gray-900" />,
    gradient: "from-sky-200 via-indigo-100 to-purple-200",
    title: "Zero data retention and training.",
    description:
      "Keep sensitive information out of training and control retention based on your policy.",
  },
  {
    id: 1,
    icon: <Search className="w-5 h-5 text-gray-900" />,
    gradient: "from-pink-300 via-rose-200 to-amber-100",
    title: "Audit every AI interaction.",
    description:
      "Deep insights into what agents say and what actions they take across channels.",
  },
  {
    id: 2,
    icon: <Sparkles className="w-5 h-5 text-gray-900" />,
    gradient: "from-teal-200 via-emerald-100 to-cyan-200",
    title: "Real-time Store Sync.",
    description:
      "Instantly sync catalog updates, inventory changes, and promotional campaigns automatically.",
  },
];

export default function Conversational3DSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate 3D carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-black text-white font-[var(--font-poppins)] overflow-hidden rounded-[2rem] py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16">
      {/* Full-width Ambient Glow Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/bg-img.png"
          alt="Conversational Shopping Background"
          fill
          className="object-cover object-bottom opacity-75"
          priority
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent" />
      </div>

      {/* 7xl Constrained Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Column: Aligned Top Content */}
        <div className="lg:col-span-5 flex flex-col items-start justify-start">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-white tracking-tight leading-[1.2] mb-4">
            End-to-End Conversational Shopping with Shopify AI Agents
          </h2>
          
          <p className="text-gray-400 text-xs sm:text-sm font-normal leading-relaxed mb-8 max-w-md">
            Guide shoppers smoothly from initial discovery to long-term loyalty.
          </p>

          <button
            type="button"
            className="group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#FF5E2C] via-[#FF692E] to-[#FF7A28] text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            <span>Install Exei Now</span>
            <div className="w-5 h-5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <ArrowRight className="w-3 h-3 text-white" strokeWidth={2.5} />
            </div>
          </button>
        </div>

        {/* Right Column: 3D Animated Card Carousel Showcase */}
        <div className="lg:col-span-7 w-full flex flex-col items-center justify-center min-h-[360px] sm:min-h-[420px] relative">
          
          {/* 3D Perspective Stage */}
          <div className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center [perspective:1000px]">
            {cards.map((card, idx) => {
              // Calculate relative 3D stack positions
              const total = cards.length;
              let offset = (idx - activeIndex + total) % total;
              if (offset > total / 2) offset -= total;

              // Derive 3D transforms based on relative offset
              const isCenter = offset === 0;
              const xTranslate = offset * 140; // Horizontal offset shift
              const scale = isCenter ? 1 : 0.82;
              const rotateY = offset * -18; // 3D Y-axis tilt angle
              const zIndex = 20 - Math.abs(offset) * 10;
              const opacity = isCenter ? 1 : 0.45;
              const blur = isCenter ? "blur(0px)" : "blur(2px)";

              return (
                <motion.div
                  key={card.id}
                  onClick={() => setActiveIndex(idx)}
                  animate={{
                    x: xTranslate,
                    scale: scale,
                    rotateY: rotateY,
                    opacity: opacity,
                    filter: blur,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ zIndex }}
                  className={`absolute w-[250px] sm:w-[280px] h-[300px] sm:h-[340px] rounded-3xl p-6 bg-gradient-to-br ${card.gradient} text-gray-900 shadow-2xl backdrop-blur-md border border-white/40 cursor-pointer flex flex-col justify-between select-none origin-center`}
                >
                  {/* Top Floating Badge Icon */}
                  <div className="w-10 h-10 rounded-2xl bg-white/70 backdrop-blur-md shadow-sm border border-white/60 flex items-center justify-center">
                    {card.icon}
                  </div>

                  {/* Card Content Footer */}
                  <div className="mt-auto">
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-gray-900 mb-2 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-700 leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center gap-2 mt-4 relative z-20">
            {cards.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? "w-6 bg-white/90"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}