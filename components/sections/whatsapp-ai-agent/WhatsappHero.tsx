"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";

/* ==========================================================================
   SEQUENTIAL MOTION GRAPHIC CHATBOT
   ========================================================================== */
function MotionChatbot() {
  const [typingText, setTypingText] = useState("");
  const [showInput, setShowInput] = useState(false);
  const fullText = "A whole new way to work";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInput(true);
      let index = 0;
      const interval = setInterval(() => {
        if (index <= fullText.length) {
          setTypingText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 110);

      return () => clearInterval(interval);
    }, 5400);

    return () => clearTimeout(timer);
  }, []);

  const bubbleVariants: Variants = {
    hidden: { opacity: 0, y: 18, scale: 0.97 },
    visible: (customStep: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: customStep * 1.8,
        duration: 0.65,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <div className="w-full max-w-[380px] sm:max-w-[440px] bg-white rounded-t-2xl border-b-0 overflow-hidden text-left flex flex-col font-sans shadow-2xl">
      {/* Chat Header */}
      <div className="p-4 sm:p-4.5 border-b border-gray-100 flex items-center gap-3 bg-white">
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF0066] to-[#FF5E2C] flex items-center justify-center text-white shadow-sm">
            <Sparkles className="w-4 h-4 fill-current" />
          </div>
          <span className="w-2 h-2 rounded-full bg-emerald-500 border border-white absolute bottom-0 right-0" />
        </div>
        <div>
          <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
            Support Agent
          </h4>
          <p className="text-[11px] font-medium text-gray-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            AI · Online
          </p>
        </div>
      </div>

      {/* Sequential Message Body */}
      <div className="p-4 sm:p-5 space-y-4 bg-white min-h-[360px] sm:min-h-[380px] flex flex-col justify-end">
        {/* Step 1 */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={bubbleVariants}
          className="flex items-start gap-2.5"
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#FF0066] to-[#FF5E2C] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
            <Sparkles className="w-3 h-3 fill-current" />
          </div>
          <div className="bg-[#F5F5F3] text-gray-800 text-xs sm:text-sm p-3.5 rounded-2xl rounded-tl-xs max-w-[82%] font-medium leading-relaxed">
            Hello! Describe the agent you want to build.
          </div>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={bubbleVariants}
          className="flex justify-end"
        >
          <div className="bg-black text-white text-xs sm:text-sm p-3.5 rounded-2xl rounded-tr-xs max-w-[82%] font-normal leading-snug shadow-md">
            Handle customer order updates and returns
          </div>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={bubbleVariants}
          className="flex items-start gap-2.5"
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#FF0066] to-[#FF5E2C] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
            <Sparkles className="w-3 h-3 fill-current" />
          </div>
          <div className="bg-[#F5F5F3] text-gray-800 p-4 rounded-2xl rounded-tl-xs max-w-[88%] w-full space-y-2">
            <p className="text-xs sm:text-sm font-semibold text-gray-900">
              Updates & return agent
            </p>

            <div className="pl-3 border-l-2 border-gray-400/60 space-y-1 my-2">
              <p className="text-xs text-gray-400 font-medium">
                Product recommendations
              </p>
              <p className="text-xs text-gray-500 font-medium">
                Update order status
              </p>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-gray-900 pt-0.5">
              Resolved automatically
            </p>
          </div>
        </motion.div>

        {/* Step 4: Input Bar */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={bubbleVariants}
          className="pt-1"
        >
          <div className="p-[2px] rounded-full bg-gradient-to-r from-[#FF0055] via-[#FF5E2C] to-[#FF0055] shadow-lg shadow-pink-500/10">
            <div className="bg-white rounded-full px-3.5 py-2 flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#FF0066] to-[#FF5E2C] shrink-0" />
              <div className="text-xs sm:text-sm text-gray-900 font-normal flex-1 flex items-center">
                <span>{typingText}</span>
                {showInput && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-[1.5px] h-4 bg-gray-900 ml-0.5 inline-block"
                  />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ==========================================================================
   HERO SECTION COMPONENT
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
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-bold tracking-tight text-gray-900 max-w-4xl leading-[1.12] mb-4 sm:mb-5"
        >
          Enhance Customer Experience <br className="hidden sm:inline" />
          with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF521B] via-[#FF733A] to-[#FF9566] inline-block">
            WhatsApp AI
          </span>{" "}
          Agents
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-gray-500 text-xs sm:text-sm md:text-base max-w-4xl font-normal leading-relaxed mb-6 sm:mb-8"
        >
          Exei WhatsApp AI Chatbot delivers 24/7 customer care, sends personalized product recommendations, and runs targeted Whatsapp Broadcast campaigns that turn chats into sales.
        </motion.p>

        {/* Logo / Badge Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex items-center justify-center gap-2 mb-10 sm:mb-12"
        >
          {/* Replace src with your actual logo image URL */}
          <Image
            src="/images/your-logo.png"
            alt="Logo"
            width={120}
            height={30}
            className="h-6 w-auto object-contain"
          />
          <span className="h-4 w-[1px] bg-gray-300 mx-1" />
          <span className="text-xs sm:text-sm font-medium text-gray-700">
            Official Meta Tech Provider
          </span>
        </motion.div>

        {/* Extended Banner Container (Rounded top corners ONLY) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ backgroundImage: "url('/images/bg-img.png')" }}
          className="w-full max-w-[1280px] rounded-t-[36px] sm:rounded-t-[48px] rounded-b-none bg-cover bg-bottom bg-no-repeat pt-12 sm:pt-20 pb-0 px-4 sm:px-12 relative overflow-hidden flex justify-center items-end"
        >
          {/* Vertical Warm Curtain Glow Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-50 z-0">
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-700/60 via-amber-950/20 to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_0%,transparent_15%,transparent_85%,#000_100%)] opacity-80" />
          </div>

          {/* Centered Chatbot Aligned at Bottom */}
          <div className="relative z-10 w-full flex justify-center items-end">
            <MotionChatbot />
          </div>
        </motion.div>
      </div>
    </section>
  );
}