"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, Send } from "lucide-react";

/* ==========================================================================
   HEADER AVATAR COMPONENT (CUSTOM LOGOS)
   ========================================================================== */
function HeaderDualAvatar() {
  return (
    <div className="flex items-center justify-center -space-x-2.5 mb-3">
      {/* WhatsApp Custom Logo */}
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white p-0.5 shadow-md z-10 flex items-center justify-center relative overflow-hidden">
        <Image
          src="/icons/whatsapp (2).png"
          alt="WhatsApp Logo"
          fill
          className="object-contain p-1"
        />
      </div>

      {/* Exei Custom Logo */}
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white p-0.5 shadow-md z-20 flex items-center justify-center relative overflow-hidden">
        <Image
          src="/images/whatsapp-ai-agent/exei-logo.png"
          alt="Exei Logo"
          fill
          className="object-contain p-1"
        />
      </div>
    </div>
  );
}

/* ==========================================================================
   MINI BOT AVATAR COMPONENT (CUSTOM LOGO)
   ========================================================================== */
function MiniBotAvatar() {
  return (
    <div className="w-5 h-5 rounded-full bg-white p-0.5 shadow-sm shrink-0 flex items-center justify-center relative overflow-hidden">
      <Image
        src="/images/website-ai-agent/exei-logo.png"
        alt="Exei Logo"
        fill
        className="object-contain p-0.5"
      />
    </div>
  );
}

/* ==========================================================================
   RIGHT COLUMN: SEQUENTIAL WHATSAPP MOTION GRAPHIC
   ========================================================================== */
function MotionChatbot() {
  const [typingText, setTypingText] = useState("");
  const fullText = "Need Update";

  useEffect(() => {
    // Delay typing effect until step 3 (User reply sequence)
    const timer = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= fullText.length) {
          setTypingText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 120);

      return () => clearInterval(interval);
    }, 4200);

    return () => clearTimeout(timer);
  }, []);

  const bubbleVariants: Variants = {
    hidden: { opacity: 0, y: 16, scale: 0.96 },
    visible: (customStep: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: customStep * 1.4,
        duration: 0.55,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <div className="relative w-full max-w-[540px] rounded-[28px] sm:rounded-[36px] p-4 sm:p-7 pt-7 sm:pt-9 pb-6 flex flex-col justify-between overflow-hidden shadow-2xl shadow-green-900/20">
      {/* Background Graphic */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-[1.08] pointer-events-none"
        style={{
          backgroundImage: "url('/images/whatsapp-ai-agent/whatsapp-ai.png')",
        }}
      />

      {/* Chat Header */}
      <div className="relative z-10 flex flex-col items-center mb-4 sm:mb-6">
        <span className="text-xs sm:text-sm font-semibold text-gray-800 mb-2 tracking-tight">
          WhatsApp AI Agent
        </span>
        <HeaderDualAvatar />
      </div>

      {/* Chat Messages Body */}
      <div className="relative z-10 space-y-3.5 sm:space-y-4 my-auto">
        {/* Step 1: First Bot Bubble */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={bubbleVariants}
          className="flex flex-col items-start max-w-[88%] sm:max-w-[82%]"
        >
          <div className="bg-white text-gray-900 text-xs sm:text-sm p-3.5 sm:p-4 rounded-2xl rounded-tl-sm shadow-md font-normal leading-relaxed">
            Hey Sofia I wanted to give you a quick heads-up about your order.
          </div>
          <span className="text-[10px] text-gray-600 font-medium mt-1 ml-1">
            10:02 AM
          </span>
        </motion.div>

        {/* Step 2: System Status Pill */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={bubbleVariants}
          className="flex justify-start max-w-[90%]"
        >
          <div className="bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm border border-white/60 flex items-center gap-2 text-[10px] sm:text-xs font-semibold text-gray-700 tracking-wider uppercase">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100" />
            <span>LETTING USER KNOW ABOUT THE ORDER UPDATES</span>
          </div>
        </motion.div>

        {/* Step 3: Second Bot Bubble */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={bubbleVariants}
          className="flex items-end gap-1.5 max-w-[90%] sm:max-w-[85%]"
        >
          <MiniBotAvatar />
          <div className="flex flex-col items-start w-full">
            <div className="bg-white text-gray-900 text-xs sm:text-sm p-3.5 sm:p-4 rounded-2xl rounded-bl-sm shadow-md font-normal leading-relaxed">
              Your Brown Faux Leather Jacket may arrive 1 day later than
              expected due to carrier congestion.
            </div>
            <span className="text-[10px] text-gray-600 font-medium mt-1 ml-1">
              10:02 AM
            </span>
          </div>
        </motion.div>

        {/* Step 4: User Reply Bubble (Black) */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={bubbleVariants}
          className="flex flex-col items-end ml-auto max-w-[82%] sm:max-w-[78%]"
        >
          <div className="bg-black text-white text-xs sm:text-sm p-3.5 sm:p-4 rounded-2xl rounded-tr-sm shadow-lg font-normal leading-snug">
            Thanks for letting me know!
          </div>
          <span className="text-[10px] text-gray-600 font-medium mt-1 mr-1">
            10:02 AM
          </span>
        </motion.div>
      </div>

      {/* Input Bar (Visible from start) */}
      <div className="relative z-10 mt-5 sm:mt-6">
        <div className="bg-white rounded-full px-4 sm:px-5 py-2.5 sm:py-3 shadow-lg flex items-center justify-between gap-3 border border-white/80">
          <div className="text-xs sm:text-sm text-gray-900 font-normal flex items-center flex-1">
            <span>{typingText}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="w-[1.5px] h-4 bg-gray-900 ml-0.5 inline-block"
            />
          </div>
          <button
            type="button"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FF5E2C] text-white flex items-center justify-center shrink-0 shadow-sm hover:bg-[#FF4500] transition-colors"
          >
            <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5" />
          </button>
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
    <section className="w-full bg-white text-gray-900 py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-gray-900 leading-[1.12] mb-5"
          >
            Enhance Customer Experience with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5E2C] via-[#FF733A] to-[#FFA066] inline-block">
              WhatsApp AI
            </span>{" "}
            Agents
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-gray-500 text-sm sm:text-base lg:text-lg max-w-xl font-normal leading-relaxed mb-8"
          >
            Exei WhatsApp AI Chatbot delivers 24/7 customer care, sends
            personalized product recommendations, and runs targeted Whatsapp
            Broadcast campaigns that turn chats into sales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10 sm:mb-12"
          >
            <button
              type="button"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#FF5E2C] via-[#FF692E] to-[#FF7A28] text-white font-medium text-sm sm:text-base px-7 py-3.5 rounded-full hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer"
            >
              <span>Install Now</span>
              <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-inner group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
              </div>
            </button>
          </motion.div>

          {/* Meta Provider Logo Block */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-2.5 text-gray-800"
          >
            <div className="relative h-6 w-16">
              <Image
                src="/images/meta.png"
                alt="Meta Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="h-4 w-[1px] bg-gray-300 mx-1" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700">
              Official Meta Tech Provider
            </span>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <MotionChatbot />
        </div>
      </div>
    </section>
  );
}