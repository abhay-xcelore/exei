"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { PhoneCall, Languages, MessageSquare } from "lucide-react";
import ExeiAgentMotionGraphic from "@/components/ui/customer-agent/ExeiAgentMotionGraphic";

// Header Variants
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
      staggerChildren: 0.1,
    },
  },
};

const textChildVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const iconVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 280, damping: 18, delay: 0.15 },
  },
};

/* ==========================================================================
   INDIAN NATIVE LANGUAGES GRAPHIC
   ========================================================================== */
function LanguageTickerGraphic() {
  const row1 = [
    { label: "Hindi (hi-IN)", active: false },
    { label: "Tamil (ta-IN)", active: true },
    { label: "Telugu (te-IN)", active: false },
    { label: "Kannada (kn-IN)", active: false },
  ];

  const row2 = [
    { label: "Marathi (mr-IN)", active: false },
    { label: "Bengali (bn-IN)", active: false },
    { label: "+12 more", active: false, isMore: true },
    { label: "Gujarati (gu-IN)", active: false },
  ];

  return (
    <div className="w-full flex flex-col justify-end items-center gap-2 overflow-hidden pb-4">
      {/* Row 1 */}
      <motion.div
        animate={{ x: [0, -120, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-2 whitespace-nowrap"
      >
        {[...row1, ...row1, ...row1].map((item, idx) => (
          <div
            key={idx}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide flex items-center gap-1.5 ${
              item.active
                ? "bg-[#FF4500] text-white shadow-xs"
                : "bg-[#F4F4F5] text-gray-700"
            }`}
          >
            {item.active && (
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            )}
            {item.label}
          </div>
        ))}
      </motion.div>

      {/* Row 2 */}
      <motion.div
        animate={{ x: [-100, 0, -100] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-2 whitespace-nowrap"
      >
        {[...row2, ...row2, ...row2].map((item, idx) => (
          <div
            key={idx}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide ${
              item.isMore
                ? "bg-transparent text-gray-500 font-medium"
                : "bg-[#F4F4F5] text-gray-700"
            }`}
          >
            {item.label}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ==========================================================================
   MAIN SECTION COMPONENT
   ========================================================================== */
export default function VoiceAgentSection() {
  return (
    <section className="w-full bg-[#FAFAFA] text-gray-900 py-10 md:py-14 px-4 sm:px-6 font-[var(--font-poppins)] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={headerVariants}
          className="flex flex-col items-center text-center mb-8 md:mb-10"
        >
          <motion.h2
            variants={textChildVariants}
            className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-gray-900 tracking-tight leading-tight mb-2"
          >
            Customer Support AI Voice Agent
          </motion.h2>

          <motion.p
            variants={textChildVariants}
            className="text-gray-500 text-xs sm:text-sm max-w-xl leading-relaxed font-normal"
          >
            Replace frustrating phone menus with natural, conversational AI voice Agent.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* CARD 1: Hands-Free Call Handling */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="lg:col-span-7 bg-white border border-gray-100 rounded-[20px] pt-6 px-6 sm:pt-7 sm:px-7 pb-0 flex flex-col md:flex-row items-stretch justify-between transition-all duration-300 min-h-[250px] shadow-xs overflow-hidden"
          >
            <div className="w-full md:w-[50%] flex flex-col justify-start items-start text-left z-10 shrink-0 pb-6 md:pb-7">
              <motion.div
                variants={iconVariants}
                className="w-9 h-9 rounded-full bg-[#FF5E2C] text-white flex items-center justify-center shadow-xs mb-3 shrink-0"
              >
                <PhoneCall className="w-4 h-4 stroke-[2]" />
              </motion.div>

              <motion.h3
                variants={textChildVariants}
                className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 leading-snug"
              >
                Hands-Free Call Handling
              </motion.h3>

              <motion.p
                variants={textChildVariants}
                className="text-gray-500 text-xs sm:text-[13px] leading-relaxed font-normal"
              >
                Efficiently manage high call volumes with an AI voice agent for customer service that speaks naturally and resolves phone queries instantly.
              </motion.p>
            </div>

            {/* Image Container: Scaled up slightly with transform scale */}
            <div className="w-full md:w-[48%] h-[220px] sm:h-[250px] relative shrink-0 mt-2 md:mt-0 self-end translate-y-2 scale-105 transform origin-bottom">
              <Image
                src="/images/customer-service/hands-free-call.png"
                alt="Hands-Free Call Handling"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </motion.div>

          {/* CARD 2: Supports Indian Native Languages */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="lg:col-span-5 bg-white border border-gray-100 rounded-[20px] pt-6 sm:pt-7 pb-2 flex flex-col justify-between transition-all duration-300 min-h-[250px] shadow-xs overflow-hidden"
          >
            <div className="flex flex-col items-start text-left px-6 sm:px-7">
              <motion.div
                variants={iconVariants}
                className="w-9 h-9 rounded-full bg-[#FF5E2C] text-white flex items-center justify-center shadow-xs mb-3 shrink-0"
              >
                <Languages className="w-4 h-4 stroke-[2]" />
              </motion.div>

              <motion.h3
                variants={textChildVariants}
                className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 leading-snug"
              >
                Supports Indian native Languages
              </motion.h3>

              <motion.p
                variants={textChildVariants}
                className="text-gray-500 text-xs sm:text-[13px] leading-relaxed font-normal"
              >
                Speak your customers&apos; preferred language natively, removing global support barriers.
              </motion.p>
            </div>

            {/* Language Ticker: Edge-to-edge layout without side padding */}
            <div className="w-full flex justify-center items-end mt-4">
              <LanguageTickerGraphic />
            </div>
          </motion.div>

          {/* CARD 3: Advanced Intent Detection with GSAP SVG Motion Graphic */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="lg:col-span-12 bg-white border border-gray-100 rounded-[20px] pt-6 px-6 sm:pt-7 sm:px-7 pb-0 flex flex-col md:flex-row items-stretch justify-between transition-all duration-300 min-h-[260px] shadow-xs overflow-hidden"
          >
            <div className="w-full md:w-[32%] flex flex-col justify-start items-start text-left shrink-0 z-10 pb-6 md:pb-7">
              <motion.div
                variants={iconVariants}
                className="w-9 h-9 rounded-full bg-[#FF5E2C] text-white flex items-center justify-center shadow-xs mb-3 shrink-0"
              >
                <MessageSquare className="w-4 h-4 stroke-[2]" />
              </motion.div>

              <motion.h3
                variants={textChildVariants}
                className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 leading-snug"
              >
                Advanced Intent Detection
              </motion.h3>

              <motion.p
                variants={textChildVariants}
                className="text-gray-500 text-xs sm:text-[13px] leading-relaxed font-normal max-w-xs"
              >
                Our voice agents don&apos;t just hear words, they understand intent to tailor responses that solve the actual issue.
              </motion.p>
            </div>

            {/* Reusable GSAP Component: Pulled down to eliminate bottom whitespace */}
            <div className="w-full md:w-[66%] self-end shrink-0 mt-4 md:mt-0 -mb-2 leading-none flex items-end justify-center">
              <ExeiAgentMotionGraphic />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}