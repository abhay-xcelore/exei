"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import RevealGroup, { revealItemVariants } from "@/components/animations/RevealGroup";

export default function OverviewSection() {
  return (
    <section className="bg-[#fafafa] min-h-screen flex items-center justify-center pt-0 pb-6 sm:pb-12 md:pb-16 font-[var(--font-poppins)] overflow-hidden">
      {/* Outer White Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl bg-white rounded-3xl p-4 md:p-6 lg:p-8 flex flex-col items-center text-center relative"
      >
        {/* Pill Badge */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="relative inline-flex items-center justify-center mt-6 sm:mt-0 mb-6 overflow-hidden rounded-full p-[1px]"
>
  {/* Top Soft Orange Accent Line */}
  <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#F56E35] to-transparent z-20 opacity-90 blur-[0.5px]" />

  {/* Figma Linear Gradient Fill: Pure white at top transitioning to #F56E35 orange tint & soft gray at bottom */}
  <div className="relative z-10 bg-gradient-to-b from-white via-white/80 to-[#F56E35]/20 rounded-full px-4 sm:px-6 py-0.5 sm:py-1.5 border border-white/60">
    {/* Additional subtle grey/60 (10%) inner wash at the bottom */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#999999]/10 to-transparent pointer-events-none" />

    {/* Text Label */}
    <span className="relative z-10 text-black text-xs font-normal tracking-tight">
      Overview
    </span>
  </div>
</motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-2xl lg:text-[36px] font-medium tracking-tight text-black mb-4 leading-tight"
        >
          AI Agents that Sell, Support &amp; Scale
        </motion.h2>

        {/* Subtitle Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[#4C4C4C] text-sm sm:text-base lg:text-[16px] font-normal max-w-4xl leading-relaxed mb-6 md:mb-8"
        >
          Exei AI agents for ecommerce support the full customer journey, helping
          shoppers find what they need, resolving issues as they arise, and
          turning first-time buyers into repeat customers, all from one shared
          customer record.
        </motion.p>

        {/* Video Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="relative w-full max-w-5xl"
        >
          {/* SUBTLE BOTTOM-ONLY AMBIENT GLOW */}
          <div
            className="absolute -bottom-6 inset-x-4 h-24 rounded-full blur-xl opacity-10 pointer-events-none z-0"
            style={{
              background: `linear-gradient(90deg, #FF9669 0%, #FF4C00 50%, #FF9669 100%)`,
            }}
          />

          {/* Video Container with #515151 Border */}
          <div className="relative z-10 w-full rounded-2xl md:rounded-[24px] overflow-hidden border-[4px] border-[#515151] bg-black">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto aspect-video object-cover rounded-2xl md:rounded-[24px] block"
            >
              <source src="/videos/download.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}