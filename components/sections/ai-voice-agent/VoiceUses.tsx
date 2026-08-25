"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mic, Search, Phone, ImageIcon } from "lucide-react";

/* Animated Waveform Component */
const AudioWaveform = () => (
  <div className="flex items-center gap-0.5 h-3.5">
    {[0.4, 0.9, 0.6, 1, 0.5, 0.8, 0.3].map((height, i) => (
      <motion.span
        key={i}
        className="w-[2.5px] bg-[#FF5E2C] rounded-full"
        animate={{ scaleY: [height, height * 0.3, height] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          delay: i * 0.1,
          ease: "easeInOut",
        }}
        style={{ height: "100%", transformOrigin: "center" }}
      />
    ))}
  </div>
);


const GraphicStageBg = () => (
  <>
    <div className="absolute inset-0 bg-[#0a0808] pointer-events-none" />
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "linear-gradient(225deg, rgba(255,106,44,0.55) 0%, rgba(214,74,24,0.35) 16%, rgba(120,45,20,0.20) 34%, rgba(60,24,14,0.10) 52%, transparent 70%, transparent 100%)",
      }}
    />
    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FF6A2C]/45 via-[#B33A12]/15 to-transparent pointer-events-none" />
  </>
);

export default function WhereToUse() {
  return (
    <>
      <Head>
        <title>Where You Can Use Exei AI Voice Agent</title>
      </Head>

  
      <section
        style={{ backgroundImage: "url('/images/agentbg.png')" }}
        className="bg-black bg-cover bg-center bg-no-repeat text-white py-12 md:py-20 relative overflow-hidden rounded-3xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <h2 className="text-center text-2xl md:text-[38px] font-semibold tracking-tight mb-10 md:mb-14 text-white">
            Where You Can Use Exei AI Voice Agent
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* =================================================================
                CARD 1: On Your Website & Mobile App
                ================================================================= */}
            <div className="flex flex-col">
              {/* Graphic Stage */}
              <div className="relative rounded-3xl p-6 sm:p-8 h-[390px] sm:h-[430px] flex flex-col items-center justify-between overflow-hidden shadow-2xl">
                <GraphicStageBg />

                {/* Center Glow behind Search Icon */}
                <div className="absolute top-[51%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#FF5E2C]/40 rounded-full blur-2xl pointer-events-none z-0" />

               
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  {/* Mic pill -> query pill */}
                  <line
                    x1="50%" y1="16%" x2="50%" y2="28%"
                    stroke="rgba(255, 255, 255, 0.4)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="animate-[dash_1.5s_linear_infinite]"
                  />
                  {/* Query pill -> search icon */}
                  <line
                    x1="50%" y1="42%" x2="50%" y2="49%"
                    stroke="rgba(255, 255, 255, 0.4)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="animate-[dash_1.5s_linear_infinite]"
                  />
                  {/* Search icon -> bracket stem */}
                  <line
                    x1="50%" y1="59%" x2="50%" y2="65%"
                    stroke="rgba(255, 255, 255, 0.4)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="animate-[dash_2s_linear_infinite]"
                  />
                  {/* Horizontal bracket bar */}
                  <line
                    x1="37.5%" y1="65%" x2="62.5%" y2="65%"
                    stroke="rgba(255, 255, 255, 0.4)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="animate-[dash_2s_linear_infinite]"
                  />
                  {/* Left branch down to 2nd product card */}
                  <line
                    x1="37.5%" y1="65%" x2="37.5%" y2="72%"
                    stroke="rgba(255, 255, 255, 0.4)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="animate-[dash_2s_linear_infinite]"
                  />
                  {/* Right branch down to 3rd product card */}
                  <line
                    x1="62.5%" y1="65%" x2="62.5%" y2="72%"
                    stroke="rgba(255, 255, 255, 0.4)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="animate-[dash_2s_linear_infinite]"
                  />
                </svg>

                {/* Node 1: Top Mic Pill — solid orange ring, no rainbow border */}
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="z-10 bg-white rounded-full ring-2 ring-[#FF5E2C] shadow-lg px-3.5 py-1.5 flex items-center gap-3"
                >
                  <div className="w-7 h-7 rounded-full bg-[#2A2B2E] flex items-center justify-center text-white">
                    <Mic className="w-4 h-4" />
                  </div>
                  <AudioWaveform />
                </motion.div>

                {/* Node 2: Main Query Speech Pill */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="z-10 w-full max-w-[340px] sm:max-w-[390px] bg-white rounded-full p-2.5 px-4 flex items-center justify-between shadow-2xl"
                >
                  <AudioWaveform />
                  <div className="bg-[#EFEFEF] text-gray-900 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full text-center whitespace-normal max-w-[210px] leading-tight">
                    Need to know the trending product
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <AudioWaveform />
                    <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-white shrink-0 shadow-sm">
                      <Image
                        src="/images/ai-voice-agent/u6.png"
                        alt="User Avatar"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Node 3: Glowing Search Icon */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="z-10 w-11 h-11 rounded-full bg-gradient-to-tr from-[#FF3B00] to-[#FF7A00] flex items-center justify-center text-white shadow-[0_0_25px_rgba(255,94,44,0.9)]"
                >
                  <Search className="w-5 h-5 stroke-[2.5]" />
                </motion.div>

                {/* Node 4: Product Placeholders */}
                <div className="z-10 grid grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-[340px] sm:max-w-[390px] pt-1">
                  {[
                    { border: false },
                    { border: true },
                    { border: true },
                    { border: false },
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      className={`bg-white rounded-xl p-2 flex flex-col justify-between h-20 sm:h-24 shadow-md ${
                        card.border
                          ? "ring-2 ring-[#FF5E2C]"
                          : "border border-gray-100"
                      }`}
                    >
                      <div className="w-full bg-[#F3F4F6] rounded-lg h-10 sm:h-12 flex items-center justify-center text-gray-300">
                        <ImageIcon className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <div className="space-y-1">
                        <div className="h-1.5 bg-gray-300 rounded-full w-3/4" />
                        <div className="h-1 bg-gray-200 rounded-full w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Copy */}
              <div className="pt-5 px-1">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  On Your Website & Mobile App
                </h3>
                {/* Color forced inline so it can never be overridden to
                    white by an inherited or global text-color rule. */}
                <p
                  className="text-xs sm:text-sm leading-relaxed font-normal text-white"
                >
                  With Exei Voice Agent, people can ask questions, get help, or
                  explore what you offer using their voice, right on your
                  website or mobile app. It makes your online experience
                  faster, more personal, and way more fun to use.
                </p>
              </div>
            </div>

            {/* =================================================================
                CARD 2: On Toll-Free Numbers & Call Centers
                ================================================================= */}
            <div className="flex flex-col">
              {/* Graphic Stage */}
              <div className="relative rounded-3xl p-6 sm:p-8 h-[390px] sm:h-[430px] flex flex-col items-center justify-between overflow-hidden shadow-2xl">
                <GraphicStageBg />

              
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  {/* Mic pill -> query pill */}
                  <line
                    x1="50%" y1="16%" x2="50%" y2="28%"
                    stroke="rgba(255, 255, 255, 0.4)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="animate-[dash_1.5s_linear_infinite]"
                  />
                  {/* Query pill -> phone icon (was missing before) */}
                  <line
                    x1="50%" y1="40%" x2="50%" y2="48%"
                    stroke="rgba(255, 255, 255, 0.4)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="animate-[dash_1.5s_linear_infinite]"
                  />
                  {/* Phone icon -> AI reply pill */}
                  <line
                    x1="50%" y1="56%" x2="50%" y2="66%"
                    stroke="rgba(255, 255, 255, 0.4)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="animate-[dash_1.5s_linear_infinite]"
                  />
                </svg>

                {/* Node 1: Top Mic Pill — solid orange ring, no rainbow border */}
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="z-10 bg-white rounded-full ring-2 ring-[#FF5E2C] shadow-lg px-3.5 py-1.5 flex items-center gap-3"
                >
                  <div className="w-7 h-7 rounded-full bg-[#2A2B2E] flex items-center justify-center text-white">
                    <Mic className="w-4 h-4" />
                  </div>
                  <AudioWaveform />
                </motion.div>

                {/* Node 2: Customer Query Speech Pill */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="z-10 w-full max-w-[340px] sm:max-w-[390px] bg-white rounded-full p-2.5 px-4 flex items-center justify-between shadow-2xl"
                >
                  <AudioWaveform />
                  <div className="bg-[#EFEFEF] text-gray-900 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full text-center whitespace-normal max-w-[210px] leading-tight">
                    I need details about my item order status
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <AudioWaveform />
                    <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-white shrink-0 shadow-sm">
                      <Image
                        src="/images/ai-voice-agent/u6.png"
                        alt="Customer Avatar"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Node 3: Green Call Icon Circle */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="z-10 w-12 h-12 rounded-full bg-[#4CD964] flex items-center justify-center text-white shadow-[0_0_20px_rgba(76,217,100,0.4)]"
                >
                  <Phone className="w-5 h-5 fill-white stroke-none" />
                </motion.div>

                {/* Node 4: AI Reply Speech Pill */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="z-10 w-full max-w-[340px] sm:max-w-[390px] bg-white rounded-full p-2.5 px-4 flex items-center justify-between shadow-2xl"
                >
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FF3B00] via-purple-600 to-amber-500 flex items-center justify-center text-white font-extrabold text-sm shadow-sm">
                      e
                    </div>
                    <AudioWaveform />
                  </div>
                  <div className="bg-[#EFEFEF] text-gray-900 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full text-center whitespace-normal max-w-[210px] leading-tight">
                    Your Order is shipped. Will delivered soon.
                  </div>
                  <AudioWaveform />
                </motion.div>
              </div>

              {/* Bottom Card Copy */}
              <div className="pt-5 px-1">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  On Toll-Free Numbers & Call Centers
                </h3>
                <p
                  className="text-xs sm:text-sm leading-relaxed font-normal text-white"
                >
                  Use Exei Voice Agent on your toll-free numbers or in your call
                  center to answer calls, handle customer queries, and speak
                  fluently in 80+ languages without long hold times. It sounds
                  natural, understands callers&apos; needs, assists them in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Keyframes */}
        <style jsx global>{`
          @keyframes dash {
            to {
              stroke-dashoffset: -16;
            }
          }
        `}</style>
      </section>
    </>
  );
}