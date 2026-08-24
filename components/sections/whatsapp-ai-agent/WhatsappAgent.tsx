"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { MessageSquareCheck, Quote } from "lucide-react";

/* ==========================================================================
   ANIMATION VARIANTS
   ========================================================================== */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ==========================================================================
   MAIN COMPONENT
   ========================================================================== */
export default function AiVoiceAgentSection() {
  return (
    <section className="w-full bg-[#FBFBFC] py-10 sm:py-14 px-4 sm:px-6 lg:px-8 text-gray-900 font-[var(--font-poppins)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="text-center mb-10 sm:mb-14"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-[36px] font-medium tracking-tight text-gray-900 leading-tight"
          >
            AI Voice Agent Built For Everyday Ecommerce Operations
          </motion.h2>
        </motion.div>

        {/* Bento Grid Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[280px]"
        >
          {/* ----------------------------------------------------------------
             CARD 1 (Tall Left Testimonial Card - Spans 2 Rows)
             ---------------------------------------------------------------- */}
          <motion.div
            variants={cardVariant}
            className="lg:row-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden h-full"
          >
            {/* Top User Profile Header */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-amber-100 shrink-0">
                  <Image
                    src="/images/growth-agent/alexa.jpg"
                    alt="William M"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 leading-tight">
                    William M
                  </h4>
                  <p className="text-xs text-gray-400 font-medium">
                    CEO of NovaTech
                  </p>
                </div>
              </div>
              <Quote className="w-9 h-9 text-gray-200 fill-gray-100 rotate-180 shrink-0" />
            </div>

            {/* Testimonial Content */}
            <div className="my-auto pt-6 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug tracking-tight">
                “Using this platform has completely changed way”
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
                I handle my business payments. Everything is fast, secure, and
                easy to manage. Using this platform has completely changed the
                way I handle my business payments. Everything is fast, secure, and
                easy.
              </p>
            </div>
          </motion.div>

          {/* ----------------------------------------------------------------
             CARD 2 (Center Image Showcase Card with Overlay)
             ---------------------------------------------------------------- */}
          <motion.div
            variants={cardVariant}
            className="relative rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100/80 group h-full"
          >
            <Image
              src="/images/customer-service/conversation.png"
              alt="Instant Answers & Sales"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Glassmorphic Overlay Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md rounded-2xl p-3.5 border border-white/20 text-white z-10">
              <h4 className="text-xs sm:text-sm font-bold leading-tight">
                Instant Answers & Sales
              </h4>
              <p className="text-[11px] text-gray-200 font-normal mt-0.5">
                Get Faster replies, more completed checkouts.
              </p>
            </div>
          </motion.div>

          {/* ----------------------------------------------------------------
             CARD 3 (Stat: 60% Cost Reduction)
             ---------------------------------------------------------------- */}
          <motion.div
            variants={cardVariant}
            className="bg-white rounded-3xl p-6 border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full"
          >
            {/* Orange Icon Circle */}
            <div className="w-10 h-10 rounded-full border border-orange-200 bg-orange-50/50 flex items-center justify-center text-[#FF5E2C]">
              <MessageSquareCheck className="w-5 h-5 stroke-[1.8]" />
            </div>

            {/* Stat & Label */}
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-1">
                60<span className="text-[#FF5E2C]">%</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-600 leading-tight">
                Cost Reduction in <br />
                Customer Support
              </p>
            </div>
          </motion.div>

          {/* ----------------------------------------------------------------
             CARD 4 (Stat: 2x Faster Resolution)
             ---------------------------------------------------------------- */}
          <motion.div
            variants={cardVariant}
            className="bg-white rounded-3xl p-6 border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full"
          >
            {/* Orange Icon Circle */}
            <div className="w-10 h-10 rounded-full border border-orange-200 bg-orange-50/50 flex items-center justify-center text-[#FF5E2C]">
              <MessageSquareCheck className="w-5 h-5 stroke-[1.8]" />
            </div>

            {/* Stat & Label */}
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-1">
                2<span className="text-[#FF5E2C]">x</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-600 leading-tight">
                Faster Resolution Time
              </p>
            </div>
          </motion.div>

          {/* ----------------------------------------------------------------
             CARD 5 (Stat: 5000+ Queries Resolved)
             ---------------------------------------------------------------- */}
          <motion.div
            variants={cardVariant}
            className="bg-white rounded-3xl p-6 border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full"
          >
            {/* Orange Icon Circle */}
            <div className="w-10 h-10 rounded-full border border-orange-200 bg-orange-50/50 flex items-center justify-center text-[#FF5E2C]">
              <MessageSquareCheck className="w-5 h-5 stroke-[1.8]" />
            </div>

            {/* Stat & Label */}
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-1">
                5000<span className="text-[#FF5E2C]">+</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-600 leading-tight">
                Queries Resolved
              </p>
            </div>
          </motion.div>

          {/* ----------------------------------------------------------------
             CARD 6 (Dark Bottom Testimonial Card - Spans 2 Columns)
             ---------------------------------------------------------------- */}
          <motion.div
            variants={cardVariant}
            className="lg:col-span-2 bg-black rounded-3xl p-6 sm:p-8 text-white border border-gray-900 flex flex-col justify-between relative overflow-hidden h-full"
          >
            {/* Quote Header */}
            <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-gray-100 pr-4">
              “I started with the free plan and quickly upgraded. The investment
              tools are clear, easy to understand, and actually helped me make
              smarter decisions.”
            </p>

            {/* User Profile & Quote Icon Footer */}
            <div className="flex items-end justify-between w-full pt-4">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-teal-800 shrink-0 border border-teal-500/30">
                  <Image
                    src="/images/growth-agent/alexa.jpg"
                    alt="James R"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    James R
                  </h4>
                  <p className="text-xs text-gray-400 font-medium mt-0.5">
                    Business Owner
                  </p>
                </div>
              </div>
              <Quote className="w-10 h-10 text-zinc-800 fill-zinc-800 rotate-180 shrink-0" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}