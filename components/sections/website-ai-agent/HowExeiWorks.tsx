"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Globe, MessageSquare, BookOpen, FileText } from "lucide-react";

/* ==========================================================================
   ANIMATION VARIANTS
   ========================================================================== */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
   EXACT SVG LOGO COMPONENT
   ========================================================================== */
function ExeiLogo() {
  return (
    <div className="w-6 h-6 rounded-full bg-black p-[2px] relative flex items-center justify-center shadow-md flex-shrink-0">
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
   MOTION GRAPHICS COMPONENTS
   ========================================================================== */

// --- GRAPHIC 1: SOURCE TAGS ---
function SourceTagsGraphic() {
  const sources = [
    { icon: Globe, label: "Website" },
    { icon: MessageSquare, label: "FAQ" },
    { icon: BookOpen, label: "Knowledge base" },
    { icon: FileText, label: "Documents" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-6 gap-3.5 relative overflow-hidden">
      {sources.map((src, idx) => (
        <motion.div
          key={src.label}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: idx * 0.2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 3.5,
          }}
          className="w-full max-w-[270px] bg-white rounded-2xl py-3 px-4 shadow-[0_10px_25px_rgba(0,0,0,0.5)] flex items-center gap-3.5"
        >
          <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
            <src.icon className="w-4.5 h-4.5 text-[#FF5E2C]" />
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            <span className="text-gray-900 font-medium text-sm leading-none">
              {src.label}
            </span>
            <div className="h-1 bg-gray-100 rounded-full w-2/3" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// --- GRAPHIC 2: INTERACTIVE CHAT UI ---
function AnimatedChatGraphic() {
  const [typedText, setTypedText] = useState("");
  const fullText = "A whole new way to look";

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let index = 0;

    const type = () => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
        timeoutId = setTimeout(type, 80);
      } else {
        timeoutId = setTimeout(() => {
          index = 0;
          setTypedText("");
          type();
        }, 3000);
      }
    };

    type();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 relative overflow-hidden text-left">
      <div className="flex flex-col gap-4 pt-2 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="self-end bg-white text-gray-900 text-xs sm:text-sm font-medium py-2.5 px-4 rounded-2xl shadow-lg max-w-[85%]"
        >
          Show the Lastest new arrivals.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="self-start flex items-center gap-2.5 max-w-[90%]"
        >
          <ExeiLogo />
          <div className="bg-black/90 border border-[#FF5E2C] text-gray-100 text-xs sm:text-sm py-2.5 px-4 rounded-2xl shadow-xl leading-relaxed">
            showing dresses that look expensive without trying too hard
          </div>
        </motion.div>
      </div>

      <div className="bg-[#18181b]/90 border border-white/10 rounded-full py-2.5 px-4 flex items-center justify-between mt-auto relative z-10 shadow-2xl backdrop-blur-md">
        <span className="text-gray-200 text-xs sm:text-sm font-normal tracking-wide flex items-center">
          {typedText}
          <span className="w-[1.5px] h-4 bg-gray-200 ml-0.5 animate-pulse" />
        </span>
        <div className="w-7 h-7 rounded-full bg-[#1e1e22] border border-white/10 flex items-center justify-center shadow-inner">
          <svg
            className="w-3.5 h-3.5 text-[#FF5E2C] fill-[#FF5E2C] translate-x-[1px]"
            viewBox="0 0 24 24"
          >
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// --- GRAPHIC 3: CONVERSATIONS CARDS ---
function StackedCardsGraphic() {
  return (
    <div className="w-full h-full flex flex-col justify-end items-center px-6 relative overflow-hidden">
     
      <motion.div
        aria-hidden="true"
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-4 right-4 z-20 pointer-events-none"
      >
        {/* Solid leading bar */}
        <div className="h-[4px] w-full rounded-full bg-[#FF5E2C]" />
        {/* Soft glow trailing below the bar, fading to transparent */}
        <div
          className="h-48 w-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,94,44,0.35) 0%, rgba(255,94,44,0.12) 40%, transparent 100%)",
          }}
        />
      </motion.div>

      <div className="w-full max-w-[260px] h-[90%] relative flex justify-center items-end">
        {/* Back card — static, no shake */}
        <div className="absolute top-0 w-full h-full bg-white/20 rounded-t-2xl border-t border-white/30 backdrop-blur-xs opacity-40 scale-[0.9]" />

        {/* Middle card — static, no shake */}
        <div className="absolute top-3.5 w-full h-full bg-white/40 rounded-t-2xl border-t border-white/40 backdrop-blur-sm opacity-70 scale-[0.955]" />

        {/* Front card — static, no shake */}
        <div className="relative z-10 w-full h-[88%] bg-gradient-to-b from-white via-gray-200 to-gray-900 rounded-t-2xl p-4 shadow-2xl flex flex-col gap-4 text-left border-t border-white/80">
          <h4 className="text-gray-900 font-semibold text-sm tracking-tight">
            Conversations
          </h4>

          <div className="flex items-start gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5E2C] mt-1 flex-shrink-0 shadow-sm" />
            <div className="flex flex-col gap-1.5 w-full">
              <div className="h-2 bg-white/90 rounded-full w-[85%]" />
              <div className="h-2 bg-white/60 rounded-full w-[50%]" />
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5E2C] mt-1 flex-shrink-0 shadow-sm" />
            <div className="flex flex-col gap-1.5 w-full">
              <div className="h-2 bg-white/90 rounded-full w-[85%]" />
              <div className="h-2 bg-white/60 rounded-full w-[50%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   MAIN SECTION COMPONENT
   ========================================================================== */
export default function HowItWorksSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (window.innerWidth < 768) {
        const nextIndex = (activeIndex + 1) % 3;
        const scrollAmount = container.clientWidth * nextIndex;
        container.scrollTo({ left: scrollAmount, behavior: "smooth" });
        setActiveIndex(nextIndex);
      }
    }, 3800);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const cardsData = [
    {
      Graphic: SourceTagsGraphic,
      title: "Gets Better With Every Conversation",
      description:
        "Exei learns from interactions and feedback to improve responses, spot customer trends, and adapt to changing needs without constant manual updates.",
    },
    {
      Graphic: AnimatedChatGraphic,
      title: "Gets Better With Every Conversation",
      description:
        "Exei learns from interactions and feedback to improve responses, spot customer trends, and adapt to changing needs without constant manual updates.",
    },
    {
      Graphic: StackedCardsGraphic,
      title: "Gets Better With Every Conversation",
      description:
        "Exei learns from interactions and feedback to improve responses, spot customer trends, and adapt to changing needs without constant manual updates.",
    },
  ];

  return (
    <section 
  style={{ backgroundImage: "url('/images/agentbg.png')" }}
  className="w-full text-white pt-10 pb-14 sm:pt-14 sm:pb-16 px-4 sm:px-6 relative overflow-hidden bg-cover bg-center bg-no-repeat rounded-2xl"
>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white mb-3 leading-tight"
        >
          How Exei Works for Your Website
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-gray-300 text-xs sm:text-sm md:text-base max-w-3xl leading-relaxed font-normal mb-8 sm:mb-12"
        >
          Regardless of your website either WordPress, Wix, or a custom build,
          integrating Exei is effortless. Our Website AI Agent runs on clear,
          intelligent steps
        </motion.p>

        {/* 3-CARD GRID */}
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-6 sm:gap-8 w-full mb-8 sm:mb-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-4"
        >
          {cardsData.map((card, index) => {
            const GraphicComponent = card.Graphic;
            return (
              <motion.div
                key={index}
                variants={cardVariant}
                className="min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center flex flex-col text-left"
              >
                {/* 
                  INDIVIDUAL GRADIENT CONTAINER FOR EACH CARD
                  Uses inline style to guarantee top-right copper glow strictly inside each frame 
                */}
                <div
                  style={{
                    background:
                      "radial-gradient(circle at 100% 0%, #68351e 0%, #2b160d 30%, #0d0a08 65%, #050404 100%)",
                  }}
                  className="w-full h-[300px] sm:h-[340px] rounded-[28px] overflow-hidden relative shadow-2xl mb-6 flex-shrink-0"
                >
                  <GraphicComponent />
                </div>

                {/* TEXT BLOCK BELOW CARD CONTAINER */}
                <div className="flex flex-col pr-2">
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-2.5 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE CAROUSEL INDICATORS */}
        <div className="flex md:hidden gap-2 mb-8">
          {cardsData.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? "w-6 bg-[#FF5E2C]" : "w-1.5 bg-gray-600"
              }`}
            />
          ))}
        </div>

        {/* BOTTOM HEADER & CTA BUTTON */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-6 text-center md:text-left">
          <motion.h3
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg font-semibold text-white tracking-tight leading-snug max-w-2xl"
          >
            Partner with the Best AI agent for Website and take a Leap Forward
            with Exei.
          </motion.h3>

          <motion.div variants={fadeInUp} className="flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="bg-gradient-to-r from-[#FF5E2C] to-[#FF3B00] text-white px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm shadow-lg shadow-orange-500/25 flex items-center gap-2 transition-all duration-200"
            >
              <span>Explore More</span>
              <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-white" />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}