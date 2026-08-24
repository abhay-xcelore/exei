// components/graphics/NoMarkupMessagingGraphic.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

export default function NoMarkupMessagingGraphic() {
  const shouldReduceMotion = useReducedMotion();

  // Explicitly typed Variants with 'as const' easing tuples for Framer Motion
  const frameVariants: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
        when: "beforeChildren",
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.5,
        ease: [0.25, 1, 0.5, 1] as const,
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full max-w-[827px] mx-auto p-1.5 sm:p-3 bg-[#F8F5F3] rounded-[24px] @container">
      {/* 827 / 425 Aspect Ratio Frame */}
      <motion.div
        variants={frameVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={shouldReduceMotion ? {} : { y: -2 }}
        className="w-full aspect-[827/425] bg-[#DCDDE0] rounded-2xl overflow-hidden border border-black/5 shadow-lg flex flex-col relative select-none font-sans"
      >
        {/* Top Browser Bar */}
        <div className="h-[15.5%] bg-[#DCDDE0] px-[3%] flex items-center gap-[1.2%] shrink-0">
          <div className="w-[2.2%] aspect-square min-w-[8px] max-w-[11px] rounded-full bg-[#FF5F56]" />
          <div className="w-[2.2%] aspect-square min-w-[8px] max-w-[11px] rounded-full bg-[#FFBD2E]" />
          <div className="w-[2.2%] aspect-square min-w-[8px] max-w-[11px] rounded-full bg-[#27C93F]" />
        </div>

        {/* Content Body */}
        <div className="flex-1 bg-[#F8F8F8] px-[5%] py-[6%] flex flex-col justify-center gap-[10%] relative overflow-hidden">
          
          {/* Card 1: Alexa */}
          <motion.div
            variants={cardVariants}
            className="relative bg-white rounded-xl border border-[#E7E7E7] px-[4%] pt-[4%] pb-[3.5%] shadow-sm flex flex-col justify-between"
          >
            {/* Neutral Badge */}
            <motion.div
              variants={badgeVariants}
              className="absolute -top-[23%] right-[7%] bg-[#FFE7B5] text-[#171717] px-[3.2%] py-[1.2%] rounded-full text-[clamp(9px,1.6cqw,14px)] font-bold flex items-center gap-1.5 shadow-sm"
            >
              <span className="text-[1.15em] leading-none">😐</span>
              <span>Neutral</span>
            </motion.div>

            {/* Profile Info */}
            <div className="flex items-start gap-[3.5%] mb-[2.5%]">
              <div className="w-[10%] aspect-square max-w-[48px] min-w-[32px] rounded-full overflow-hidden shrink-0 border border-black/5 relative bg-gray-200">
                <Image
                  src="/images/growth-agent/alexa.jpg"
                  alt="Alexa"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-[4px] pt-[0.5%]">
                <span className="text-[clamp(11px,2.1cqw,17px)] font-bold text-[#171717] leading-none">
                  Alexa
                </span>
                <p className="text-[clamp(10px,1.8cqw,15px)] text-[#555555] font-normal leading-tight">
                  I&apos;d like to know your business hours.
                </p>
              </div>
            </div>

            {/* Intent Badge */}
            <motion.div
              variants={badgeVariants}
              className="self-start bg-[#FF0066] text-white px-[3%] py-[1.4%] rounded-full text-[clamp(8px,1.4cqw,13px)] font-semibold flex items-center gap-1.5 shadow-sm"
            >
              <span className="w-[1.25em] h-[1.25em] rounded-full bg-white flex items-center justify-center shrink-0">
                <svg
                  className="w-[60%] h-[60%] text-[#FF0066]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>Intent: General Inquiry</span>
            </motion.div>
          </motion.div>

          {/* Card 2: Rowan */}
          <motion.div
            variants={cardVariants}
            className="relative bg-white rounded-xl border border-[#E7E7E7] px-[4%] pt-[4%] pb-[3.5%] shadow-sm flex flex-col justify-between"
          >
            {/* Negative Badge */}
            <motion.div
              variants={badgeVariants}
              className="absolute -top-[23%] right-[7%] bg-[#FFC5CD] text-[#171717] px-[3.2%] py-[1.2%] rounded-full text-[clamp(9px,1.6cqw,14px)] font-bold flex items-center gap-1.5 shadow-sm"
            >
              <span className="text-[1.15em] leading-none">😡</span>
              <span>Negative</span>
            </motion.div>

            {/* Profile Info */}
            <div className="flex items-start gap-[3.5%] mb-[2.5%]">
              <div className="w-[10%] aspect-square max-w-[48px] min-w-[32px] rounded-full overflow-hidden shrink-0 border border-black/5 relative bg-gray-200">
                <Image
                  src="/images/growth-agent/alexa.jpg"
                  alt="Rowan"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-[4px] pt-[0.5%]">
                <span className="text-[clamp(11px,2.1cqw,17px)] font-bold text-[#171717] leading-none">
                  Rowan
                </span>
                <p className="text-[clamp(10px,1.8cqw,15px)] text-[#555555] font-normal leading-tight">
                  My order hasn&apos;t arrived yet.
                </p>
              </div>
            </div>

            {/* Intent Badge */}
            <motion.div
              variants={badgeVariants}
              className="self-start bg-[#FF0066] text-white px-[3%] py-[1.4%] rounded-full text-[clamp(8px,1.4cqw,13px)] font-semibold flex items-center gap-1.5 shadow-sm"
            >
              <span className="w-[1.25em] h-[1.25em] rounded-full bg-white flex items-center justify-center shrink-0">
                <svg
                  className="w-[60%] h-[60%] text-[#FF0066]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>Intent: Support</span>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}