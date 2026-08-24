"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

/* ==========================================================================
   EXACT EXEI LOGO COMPONENT
   ========================================================================== */
function ExeiLogo({ size = "w-6 h-6" }: { size?: string }) {
  return (
    <div
      className={`${size} rounded-full bg-black p-[2px] relative flex items-center justify-center shadow-md flex-shrink-0`}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF5E2C] via-[#E10098] to-[#6E00F5] -z-0" />
      <div className="w-full h-full bg-black rounded-full flex items-center justify-center relative z-10">
        <span className="text-white font-bold text-xs font-sans tracking-tighter leading-none mb-[1px]">
          e
        </span>
      </div>
    </div>
  );
}

/* ==========================================================================
   SEQUENTIAL CHATBOT COMPONENT
   ========================================================================== */
function MotionChatbot() {
  const [typingText, setTypingText] = useState("");
  const [showCursor, setShowCursor] = useState(false);
  const fullText = "A whole new way to work";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCursor(true);
      let index = 0;
      const interval = setInterval(() => {
        if (index <= fullText.length) {
          setTypingText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 90);

      return () => clearInterval(interval);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const bubbleVariants: Variants = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    visible: (customStep: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: customStep * 1.2,
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <div className="w-full max-w-[360px] sm:max-w-[420px] bg-white rounded-[28px] sm:rounded-[32px] border-[1.5px] border-[#FF5E2C] shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden text-left flex flex-col font-sans relative z-20">
      {/* Header */}
      <div className="p-3.5 sm:p-4 border-b border-gray-100 flex items-center gap-2.5 bg-white">
        <ExeiLogo size="w-7 h-7" />
        <div>
          <h4 className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">
            Exei AI Agent
          </h4>
          <p className="text-[11px] font-medium text-gray-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            AI · Online
          </p>
        </div>
      </div>

      {/* Message Area */}
      <div className="p-4 sm:p-5 space-y-3 bg-white min-h-[350px] sm:min-h-[370px] flex flex-col justify-end">
        {/* Message 1 */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={bubbleVariants}
          className="flex items-start gap-2.5"
        >
          <ExeiLogo size="w-6 h-6" />
          <div className="bg-[#F3F3F3] text-gray-800 text-xs sm:text-sm py-2.5 px-3.5 rounded-2xl rounded-tl-xs max-w-[82%] font-normal leading-snug">
            Hello! Describe the agent you want to build.
          </div>
        </motion.div>

        {/* Message 2 */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={bubbleVariants}
          className="flex justify-end"
        >
          <div className="bg-black text-white text-xs sm:text-sm py-3 px-4 rounded-2xl rounded-tr-xs max-w-[82%] font-normal leading-snug shadow-md">
            Handle customer order updates and returns
          </div>
        </motion.div>

        {/* Message 3 */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={bubbleVariants}
          className="flex items-start gap-2.5"
        >
          <ExeiLogo size="w-6 h-6" />
          <div className="bg-[#F3F3F3] text-gray-800 p-3.5 rounded-2xl rounded-tl-xs max-w-[88%] w-full space-y-2">
            <p className="text-xs sm:text-sm font-semibold text-gray-900">
              Updates & return agent
            </p>
            <div className="pl-3 border-l-2 border-gray-400/80 space-y-1 my-1.5">
              <p className="text-xs text-gray-500">Product recommendations</p>
              <p className="text-xs text-gray-500">Update order status</p>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-gray-900">
              Resolved automatically
            </p>
          </div>
        </motion.div>

        {/* Persistent Input Bar */}
        <div className="pt-1.5">
          <div className="bg-[#F3F3F3] rounded-full py-2.5 px-4 flex items-center justify-between">
            <span className="text-xs sm:text-sm text-gray-900 font-normal flex items-center min-h-[20px]">
              {typingText}
              {showCursor && (
                <span className="w-[1.5px] h-4 bg-gray-900 ml-0.5 animate-pulse" />
              )}
            </span>
            <div className="w-6.5 h-6.5 rounded-full bg-[#FF5E2C] flex items-center justify-center flex-shrink-0 shadow-sm cursor-pointer">
              <svg
                className="w-3.5 h-3.5 text-white fill-white translate-x-[1px]"
                viewBox="0 0 24 24"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   MAIN HERO SECTION COMPONENT
   ========================================================================== */
export default function HeroSection() {
  return (
    <section className="w-full bg-white text-gray-900 pt-16 sm:pt-24 lg:pt-28 pb-0 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight text-gray-900 max-w-4xl leading-[1.15] mb-4 sm:mb-5"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5E2C] via-[#FF7733] to-[#FFA066]">
            Website AI
          </span>{" "}
          Agent for <br className="hidden sm:inline" />
          Conversion and Support.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-gray-500 text-xs sm:text-sm md:text-base max-w-2xl font-normal leading-relaxed mb-10 sm:mb-14"
        >
          Deploy website AI chatbot and encourage users to start a conversation,
          address queries, recommend products and offer quick support.
        </motion.p>

        {/* Extended Hero Banner Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ backgroundImage: "url('/images/bg-img.png')" }}
          className="w-full max-w-[1280px] rounded-t-[32px] sm:rounded-t-[40px] bg-cover bg-center bg-no-repeat pt-10 sm:pt-16 pb-0 px-4 sm:px-8 relative overflow-hidden flex justify-center items-end"
        >
          {/* Vertical Warm Glow Overlay */}
          <div
            style={{
              background:
                "radial-gradient(circle at 50% 100%, rgba(180, 70, 20, 0.45) 0%, rgba(20, 10, 5, 0.85) 75%)",
            }}
            className="absolute inset-0 pointer-events-none z-0"
          />

          {/* Stacked Layout on Mobile / Side-by-Side Flex on Desktop */}
          <div className="relative z-10 w-full max-w-[980px] grid grid-cols-1 items-end justify-items-center md:flex md:flex-row md:items-end md:justify-center">
            {/* Background Browser Frame (Full Width Behind on Mobile) */}
            <div className="col-start-1 row-start-1 w-full md:w-[600px] lg:w-[680px] flex-shrink-0 md:-mr-28 lg:-mr-36 relative z-0">
              <div className="rounded-t-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-b-[6px] border-[#E3531D] w-full">
                <Image
                  src="/images/website-ai-agent/chatbot-bg.png"
                  alt="Website Dashboard Mockup"
                  width={700}
                  height={450}
                  priority
                  className="w-full h-auto object-contain block opacity-95"
                />
              </div>
            </div>

            {/* Foreground Chatbot Window (Overlaid in Front on Mobile) */}
            <div className="col-start-1 row-start-1 w-full md:w-auto flex justify-center relative z-20 md:mt-0 mb-4">
              <MotionChatbot />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}