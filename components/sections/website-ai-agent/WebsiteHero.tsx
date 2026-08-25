"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Globe } from "lucide-react";
import { motion } from "framer-motion";

/* ==========================================================================
   PRODUCT CARDS DATA
   ========================================================================== */
const productCards = [
  {
    id: 1,
    title: "Black Sleeveless Bodycon",
    price: "₹1,499",
    color: "Color: Black",
    imgSrc: "/images/website-ai-agent/product-1.png",
  },
  {
    id: 2,
    title: "Red Wine Dress",
    price: "₹1,499",
    color: "Color: Red",
    imgSrc: "/images/website-ai-agent/product-2.jpg",
  },
  {
    id: 3,
    title: "White",
    price: "₹1,499",
    color: "Color: Black",
    imgSrc: "/images/website-ai-agent/product-3.jpg",
  },
];

/* ==========================================================================
   MODULAR LOGO COMPONENT
   ========================================================================== */
function CustomLogo() {
  return (
    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full relative flex items-center justify-center shrink-0 overflow-hidden shadow-md">
      <Image
        src="/images/website-ai-agent/exei-logo.png"
        alt="Logo"
        fill
        className="object-contain"
        onError={(e) => {
          (e.target as HTMLElement).style.display = "none";
        }}
      />
      <div className="w-full h-full bg-gradient-to-tr from-[#FF5E2C] via-[#E10098] to-[#6E00F5] flex items-center justify-center">
        <span className="text-white font-bold text-xs">e</span>
      </div>
    </div>
  );
}

/* ==========================================================================
   RIGHT COLUMN: PURPLE MOTION GRAPHIC CANVAS (FULL BORDER CROPPED & RESPONSIVE)
   ========================================================================== */
function HeroGraphic() {
  return (
    <div className="relative w-full max-w-[580px] lg:max-w-[620px] rounded-[24px] sm:rounded-[32px] p-4 sm:p-7 pt-8 sm:pt-12 pb-6 flex flex-col items-center justify-between overflow-hidden">
      
      {/* 
        BACKGROUND LAYER: 
        Scales the background image slightly (108%) to crop out the burnt-in white border from the image file itself.
      */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-[1.08] pointer-events-none"
        style={{ backgroundImage: "url('/images/website-ai-agent/website-bg.png')" }}
      />

      {/* SVG ANIMATED CONNECTOR LINES */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 600 630"
        preserveAspectRatio="none"
      >
        {/* Top Vertical Line from Chat Bubble down to Branch */}
        <motion.path
          d="M 300,135 L 300,185"
          stroke="rgba(255, 255, 255, 0.75)"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          fill="none"
          animate={{ strokeDashoffset: [0, -24] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Horizontal Branching Line */}
        <motion.path
          d="M 140,185 L 460,185"
          stroke="rgba(255, 255, 255, 0.75)"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          fill="none"
          animate={{ strokeDashoffset: [0, -24] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        {/* 3 Vertical Lines Dropping into Cards */}
        <motion.path
          d="M 140,185 L 140,230 M 300,185 L 300,230 M 460,185 L 460,230"
          stroke="rgba(255, 255, 255, 0.75)"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          fill="none"
          animate={{ strokeDashoffset: [0, -24] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Bottom Line Connecting Cards down through Sarah Rai and Ayushi */}
        <motion.path
          d="M 300,435 L 300,580"
          stroke="rgba(255, 255, 255, 0.75)"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          fill="none"
          animate={{ strokeDashoffset: [0, -24] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* TOP FLOATING BADGE: Website AI Agent / Deploy */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-20 bg-white/95 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-lg border-2 border-orange-500/40 flex items-center gap-3 sm:gap-5"
      >
        <div className="flex items-center gap-2 sm:gap-2.5">
          <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
          <span className="text-xs sm:text-base font-semibold text-gray-800 tracking-tight">
            Website AI Agent
          </span>
        </div>
        <button
          type="button"
          className="bg-[#FF5E2C] text-white text-[11px] sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-md hover:bg-[#FF4500] transition-colors"
        >
          Deploy
        </button>
      </motion.div>

      {/* SECOND BADGE: AI Chat Intro Bubble */}
      <motion.div
        initial={{ opacity: 0, y: -15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="relative z-20 mt-3 sm:mt-4 bg-white/95 backdrop-blur-md px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-md border border-white/60 flex items-center gap-2.5 sm:gap-3.5 max-w-[98%] sm:max-w-[95%]"
      >
        <CustomLogo />
        <p className="text-[11px] sm:text-sm font-medium text-gray-800 leading-tight">
          I found a few matching items based on your preferences.
        </p>
      </motion.div>

      {/* MIDDLE SECTION: PRODUCT CARDS */}
      <div className="relative z-20 w-full grid grid-cols-3 gap-2 sm:gap-4 my-4 sm:my-8">
        {productCards.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 + idx * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-xl border border-white/80 flex flex-col justify-between w-full"
          >
            {/* Image Box */}
            <div className="relative w-full aspect-[3/3.8] rounded-lg sm:rounded-xl bg-gray-100 overflow-hidden mb-1.5 sm:mb-2">
              <Image
                src={product.imgSrc}
                alt={product.title}
                fill
                className="object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <div className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 bg-black/80 backdrop-blur-xs p-1 sm:p-1.5 rounded-md text-white">
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h6v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z" />
                </svg>
              </div>
            </div>

            {/* Product Meta */}
            <div>
              <h5 className="text-[10px] sm:text-sm font-bold text-gray-900 leading-snug truncate">
                {product.title}
              </h5>
              <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5 text-[9px] sm:text-xs text-gray-400">
                <span className="font-semibold text-gray-600">{product.price}</span>
                <span>·</span>
                <span className="truncate">{product.color}</span>
              </div>
              <button
                type="button"
                className="mt-1 sm:mt-1.5 text-[9px] sm:text-xs text-blue-600 font-semibold hover:underline block"
              >
                Know More ›
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* BOTTOM SECTION: USER PILLS */}
      <div className="relative z-20 w-full flex flex-col items-center gap-2 sm:gap-2.5 mb-1 sm:mb-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md border border-white/60 flex items-center gap-2.5 sm:gap-3 min-w-[130px] sm:min-w-[150px]"
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-orange-100 overflow-hidden relative shrink-0">
            <Image
              src="/images/website-ai-agent/user1.jpg"
              alt="Sarah Rai"
              fill
              className="object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-gray-800">Sarah Rai</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.85 }}
          className="bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md border border-white/60 flex items-center gap-2.5 sm:gap-3 min-w-[130px] sm:min-w-[150px]"
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-purple-100 overflow-hidden relative shrink-0">
            <Image
              src="/images/website-ai-agent/user2.png"
              alt="Ayushi"
              fill
              className="object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-gray-800">Ayushi</span>
        </motion.div>
      </div>
    </div>
  );
}

/* ==========================================================================
   MAIN HERO SECTION COMPONENT
   ========================================================================== */
export default function HeroSection() {
  return (
    <section className="w-full bg-white text-gray-900 py-20 sm:py-20 lg:pt-24 pb-8 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        {/* LEFT COLUMN: TEXT CONTENT */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-gray-900 leading-[1.12] mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5E2C] via-[#FF7733] to-[#FFA066]">
              Website AI
            </span>{" "}
            Agent for Conversion and Support.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-gray-500 text-sm sm:text-base lg:text-lg max-w-xl font-normal leading-relaxed mb-4"
          >
            Deploy website AI chatbot and encourage users to start a conversation,
            address queries, recommend products and offer quick support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              type="button"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#FF5E2C] via-[#FF692E] to-[#FF7A28] text-white font-medium text-sm pl-6 pr-2 py-2.5 rounded-full hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <span>See How It Works</span>
              <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-inner group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
            </button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: MOTION GRAPHIC CANVAS */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <HeroGraphic />
        </div>
      </div>
    </section>
  );
}