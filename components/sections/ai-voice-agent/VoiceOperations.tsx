"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { MessageSquareCheck } from "lucide-react";

/* ==========================================================================
   ANIMATION VARIANTS
   ========================================================================== */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ==========================================================================
   MAIN COMPONENT
   ========================================================================== */
export default function AiVoiceAgentSection() {
  return (
    <section className="w-full bg-[#FBFBFC] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 text-gray-900 font-[var(--font-poppins)]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-semibold tracking-tight text-gray-900 leading-tight">
            AI Voice Agent Built For Everyday Ecommerce Operations
          </h2>
        </div>

        {/* Bento Grid Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[270px]"
        >
          {/* =================================================================
              CARD 1: Custom Voice Personas (Tall Left Card - Spans 2 Rows)
              ================================================================= */}
          <motion.div
            variants={cardVariant}
            className="lg:row-span-2 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#FFECE4] via-[#FFF8F5] to-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-sm flex flex-col justify-between relative overflow-hidden h-full"
          >
            {/* Top Graphic + Voice Badges Area */}
            <div className="w-full flex flex-col items-center pt-2">
              {/* Top Centered Sphere Graphic */}
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center">
                <Image
                  src="/images/ai-voice-agent/card1.png"
                  alt="AI Voice Sphere"
                  width={190}
                  height={190}
                  className="object-contain drop-shadow-[0_12px_28px_rgba(255,94,44,0.35)]"
                />
              </div>

              {/* Stacked Voice Selection Pills with Spacing */}
              <div className="w-full max-w-[210px] space-y-3 mt-4">
                {/* Male Voices Badge */}
                <div className="bg-white/95 backdrop-blur-md border border-[#FFD9CD] rounded-full py-1.5 px-3 flex items-center gap-2.5 shadow-sm">
                  <div className="flex -space-x-1.5 overflow-hidden">
                    <Image
                      src="/images/ai-voice-agent/u1.jpg"
                      alt="Male Voice 1"
                      width={22}
                      height={22}
                      className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover"
                    />
                    <Image
                      src="/images/ai-voice-agent/u2.png"
                      alt="Male Voice 2"
                      width={22}
                      height={22}
                      className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover"
                    />
                    <Image
                      src="/images/ai-voice-agent/u3.png"
                      alt="Male Voice 3"
                      width={22}
                      height={22}
                      className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover"
                    />
                  </div>
                  <span className="text-xs font-semibold text-gray-800">
                    Male Voices
                  </span>
                </div>

                {/* Female Voices Badge */}
                <div className="bg-white/95 backdrop-blur-md border border-[#FFD9CD] rounded-full py-1.5 px-3 flex items-center gap-2.5 shadow-sm">
                  <div className="flex -space-x-1.5 overflow-hidden">
                    <Image
                      src="/images/ai-voice-agent/u4.png"
                      alt="Female Voice 1"
                      width={22}
                      height={22}
                      className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover"
                    />
                    <Image
                      src="/images/ai-voice-agent/u5.png"
                      alt="Female Voice 2"
                      width={22}
                      height={22}
                      className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover"
                    />
                    <Image
                      src="/images/ai-voice-agent/u6.png"
                      alt="Female Voice 3"
                      width={22}
                      height={22}
                      className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover"
                    />
                  </div>
                  <span className="text-xs font-semibold text-gray-800">
                    Female Voices
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Card Copy */}
            <div className="pt-4">
              <h3 className="text-lg font-bold text-gray-900 leading-snug">
                Custom Voice Personas
              </h3>
              <p className="text-xs text-gray-500 font-normal leading-relaxed mt-1.5">
                Choose natural male or female voices that match your brand tone.
              </p>
            </div>
          </motion.div>

          {/* =================================================================
              CARD 2: Support Indian Native Languages (Image Card)
              ================================================================= */}
          <motion.div
            variants={cardVariant}
            className="relative rounded-3xl overflow-hidden shadow-sm border border-gray-100 group h-full"
          >
            <Image
              src="/images/ai-voice-agent/card2.jpg"
              alt="Support Indian Native Languages"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Frosted Dark Glass Badge Container with Orange Border */}
            <div className="absolute bottom-3 left-3 right-3 bg-black/45 backdrop-blur-md rounded-2xl p-3.5 border border-[#FF5E2C]/40 ring-1 ring-[#FF5E2C]/20 text-white z-10">
              <h4 className="text-xs sm:text-sm font-bold leading-tight">
                Support Indian Native Languages
              </h4>
              <p className="text-[11px] text-gray-200 font-normal mt-1 leading-snug">
                Speak with your customers in their preferred regional languages for natural communication.
              </p>
            </div>
          </motion.div>

          {/* =================================================================
              CARD 3: Stat (80% Routine Queries Handled)
              ================================================================= */}
          <motion.div
            variants={cardVariant}
            className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between h-full"
          >
            {/* Checkmark Circle Icon */}
            <div className="w-10 h-10 rounded-full border border-orange-200 bg-orange-50/50 flex items-center justify-center text-[#FF5E2C]">
              <MessageSquareCheck className="w-5 h-5 stroke-[1.8]" />
            </div>

            {/* Metric Display */}
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-1">
                80<span className="text-[#FF5E2C]">%</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-700 leading-snug">
                Routine queries Handled.
              </p>
            </div>
          </motion.div>

          {/* =================================================================
              CARD 4: Stat (3x Win Back Rate)
              ================================================================= */}
          <motion.div
            variants={cardVariant}
            className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between h-full"
          >
            {/* Checkmark Circle Icon */}
            <div className="w-10 h-10 rounded-full border border-orange-200 bg-orange-50/50 flex items-center justify-center text-[#FF5E2C]">
              <MessageSquareCheck className="w-5 h-5 stroke-[1.8]" />
            </div>

            {/* Metric Display */}
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-1">
                3<span className="text-[#FF5E2C]">x</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-700 leading-snug">
                Win back Rate.
              </p>
            </div>
          </motion.div>

          {/* =================================================================
              CARD 5: Stat (2x More Customer Conversations)
              ================================================================= */}
          <motion.div
            variants={cardVariant}
            className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between h-full"
          >
            {/* Checkmark Circle Icon */}
            <div className="w-10 h-10 rounded-full border border-orange-200 bg-orange-50/50 flex items-center justify-center text-[#FF5E2C]">
              <MessageSquareCheck className="w-5 h-5 stroke-[1.8]" />
            </div>

            {/* Metric Display */}
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-1">
                2<span className="text-[#FF5E2C]">x</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-700 leading-snug">
                more Customer conversations.
              </p>
            </div>
          </motion.div>

          {/* =================================================================
              CARD 6: Smart Automatic Re-dial (Wide Bottom Image - Spans 2 Columns)
              ================================================================= */}
          <motion.div
            variants={cardVariant}
            className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-sm border border-gray-100 group h-full"
          >
            <Image
              src="/images/ai-voice-agent/card6.png"
              alt="Smart Automatic Re-dial"
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            {/* Frosted Dark Glass Badge Container with Orange Border */}
            <div className="absolute bottom-3 left-3 right-3 bg-black/45 backdrop-blur-md rounded-2xl p-4 border border-[#FF5E2C]/40 ring-1 ring-[#FF5E2C]/20 text-white z-10">
              <h4 className="text-sm sm:text-base font-bold leading-tight">
                Smart Automatic Re-dial
              </h4>
              <p className="text-xs text-gray-200 font-normal mt-1 leading-snug">
                Automatically retry unanswered or dropped calls at optimal times.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}