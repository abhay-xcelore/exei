// components/sections/CapabilitiesCarousel.tsx
"use client";

import { useState, useRef, useEffect, useCallback, ReactNode } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Check, Contact, Tag, MessageSquare, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

/* ==========================================================================
   GRAPHIC SHELL — plain flex container, no background of its own. The card
   frame around it now supplies the background (see the per-card radial
   gradient in the render below), so this stays fully transparent.
   ========================================================================== */
function GraphicShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-3 sm:p-5 select-none">
      {children}
    </div>
  );
}

/* ==========================================================================
   GRAPHIC 1: NEW LAUNCHES & SEASONAL OFFERS
   ========================================================================== */
function Graphic1({ logoSrc = "/images/logo.png" }: { logoSrc?: string }) {
  return (
    <GraphicShell>
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 300" fill="none">
        <motion.path
          d="M 95 95 C 60 130, 60 155, 130 168"
          stroke="#6b7280"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, -16] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 320 110 C 340 140, 330 155, 270 168"
          stroke="#6b7280"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, -16] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 155 195 C 90 210, 90 225, 130 232"
          stroke="#6b7280"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, -16] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="relative w-full flex items-start justify-between z-10">
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 bg-[#1f2024]/90 border border-white/15 rounded-full px-3 py-1.5 shadow-xl backdrop-blur-sm"
        >
          <div className="w-5 h-5 rounded-full bg-[#10b981] flex items-center justify-center text-black font-extrabold text-[10px]">
            %
          </div>
          <span className="text-[11px] sm:text-xs font-medium text-white/90 whitespace-nowrap">
            Now at Flat 40% Off
          </span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="flex flex-col gap-1.5"
        >
          <div className="bg-white rounded-full px-2.5 py-1.5 flex items-center gap-2 shadow-md w-32">
            <div className="w-4 h-4 rounded-full bg-gray-300 shrink-0" />
            <div className="h-1 bg-gray-200 rounded-full flex-1" />
            <MessageSquare className="w-2.5 h-2.5 text-gray-400 shrink-0" />
          </div>
          <div className="bg-white rounded-full px-2.5 py-1.5 flex items-center gap-2 shadow-md w-32">
            <div className="w-4 h-4 rounded-full bg-gray-300 shrink-0" />
            <div className="h-1 bg-gray-200 rounded-full flex-1" />
            <MessageSquare className="w-2.5 h-2.5 text-gray-400 shrink-0" />
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -5, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 my-5 bg-[#111113] border-2 border-[#ff5500] rounded-full px-3.5 py-2 flex items-center gap-3 shadow-[0_0_25px_rgba(255,85,0,0.25)]"
      >
        <div className="relative w-8 h-8 rounded-full overflow-hidden bg-black flex items-center justify-center shrink-0 border border-white/20">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
            e
          </div>
          <Image
            src={logoSrc}
            alt="Custom Logo"
            fill
            sizes="32px"
            className="object-cover p-1 relative z-10"
            onError={(e) => {
              const target = e.target as HTMLElement;
              target.style.display = "none";
            }}
          />
        </div>

        <span className="text-xs sm:text-sm font-semibold text-white tracking-tight pr-1 whitespace-nowrap">
          Automate the response
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="relative z-10 self-start flex items-center gap-2 bg-[#dcf8c6] rounded-2xl px-3.5 py-2 shadow-lg"
      >
        <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center text-white text-[10px] font-bold shrink-0">
          ✓
        </div>
        <span className="text-[11px] sm:text-xs font-semibold text-gray-900 tracking-tight whitespace-nowrap">
          This sale is you&apos;ve waiting for !
        </span>
      </motion.div>
    </GraphicShell>
  );
}

/* ==========================================================================
   GRAPHIC 2: WIN BACK INACTIVE CUSTOMERS
   ========================================================================== */
function Graphic2() {
  return (
    <GraphicShell>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[85%] bg-[#1a1a1e] border-2 border-[#ff5500] rounded-2xl p-2.5 shadow-[0_10px_30px_rgba(255,85,0,0.15)] z-10"
      >
        <div className="w-full bg-white rounded-xl p-3 flex flex-col items-center justify-center relative min-h-[64px]">
          <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-[#10b981] flex items-center justify-center text-black text-[9px] font-bold">
            %
          </div>
          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-lg">
            🖼️
          </div>
        </div>
        <div className="mt-2.5 space-y-1.5 px-1">
          <div className="h-1.5 bg-gray-700/80 rounded-full w-full" />
          <div className="h-1.5 bg-gray-700/50 rounded-full w-2/3" />
        </div>
      </motion.div>

      <div className="relative h-8 w-1 my-1 z-0 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 2 32">
          <motion.line
            x1="1" y1="0" x2="1" y2="32"
            stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -16] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="space-y-1.5 w-[75%] z-10"
      >
        <div className="bg-white rounded-full px-3 py-1.5 flex items-center gap-2 shadow-md">
          <div className="w-4 h-4 rounded-full bg-gray-300 shrink-0" />
          <div className="h-1 bg-gray-200 rounded-full flex-1" />
          <MessageSquare className="w-3 h-3 text-gray-400 shrink-0" />
        </div>
        <div className="bg-white rounded-full px-3 py-1.5 flex items-center gap-2 shadow-md">
          <div className="w-4 h-4 rounded-full bg-gray-300 shrink-0" />
          <div className="h-1 bg-gray-200 rounded-full flex-1" />
          <MessageSquare className="w-3 h-3 text-gray-400 shrink-0" />
        </div>
      </motion.div>
    </GraphicShell>
  );
}

/* ==========================================================================
   GRAPHIC 3: LOYALTY & CUSTOMER SYNC
   ========================================================================== */
function Graphic3() {
  return (
    <GraphicShell>
      <div className="flex flex-col items-center gap-2.5 w-full">
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[88%] bg-[#121214] border border-white/10 rounded-2xl p-2.5 flex items-center justify-between shadow-lg -translate-x-2 z-10"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-4 rounded-full bg-black border border-green-500 flex items-center p-0.5">
              <motion.div
                animate={{ x: [0, 14, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                className="w-3 h-3 rounded-full bg-green-500"
              />
            </div>
            <span className="text-xs font-medium text-white">Expiry Alerts</span>
          </div>
          <div className="w-4 h-4 rounded-full bg-[#10b981] flex items-center justify-center">
            <Check className="w-2.5 h-2.5 text-black stroke-[3]" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="w-[88%] bg-white rounded-2xl p-2.5 flex items-center justify-between shadow-xl translate-x-2 z-10"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-4 rounded-full bg-gray-200 flex items-center p-0.5 justify-end">
              <div className="w-3 h-3 rounded-full bg-gray-400" />
            </div>
            <span className="text-xs font-semibold text-gray-900">VIP Offers</span>
          </div>
          <div className="w-4 h-4 rounded-full bg-[#10b981] flex items-center justify-center">
            <Check className="w-2.5 h-2.5 text-black stroke-[3]" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="w-[88%] bg-[#121214] border border-white/10 rounded-2xl p-2.5 flex items-center justify-between shadow-lg -translate-x-2 z-10"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-4 rounded-full bg-black border border-green-500 flex items-center p-0.5">
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-xs font-medium text-white">Order History</span>
          </div>
          <div className="w-4 h-4 rounded-full bg-[#10b981] flex items-center justify-center">
            <Check className="w-2.5 h-2.5 text-black stroke-[3]" />
          </div>
        </motion.div>
      </div>
    </GraphicShell>
  );
}

/* ==========================================================================
   GRAPHIC 4: CRM SYNC — plain Lucide icons, flat black circle, thin orange
   ring, no heavy glow.
   ========================================================================== */
function Graphic4() {
  const nodes = [
    { key: "contact", Icon: Contact },
    { key: "tag", Icon: Tag },
    { key: "message", Icon: MessageSquare },
  ];

  return (
    <GraphicShell>
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="bg-[#141416] border border-white/15 rounded-full px-4 py-2 flex items-center gap-2.5 shadow-xl mb-8 z-10"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white"
        >
          <RefreshCw className="w-3 h-3" />
        </motion.div>
        <span className="text-xs sm:text-sm font-semibold text-white tracking-tight whitespace-nowrap">
          Syncing the details...
        </span>
      </motion.div>

      <svg className="w-56 sm:w-64 h-12 overflow-visible stroke-gray-500 z-0" fill="none">
        <motion.path
          d="M 112 0 C 112 25, 20 25, 20 50"
          stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, -16] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 112 0 L 112 50"
          stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, -16] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 112 0 C 112 25, 204 25, 204 50"
          stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, -16] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="flex items-center justify-between w-56 sm:w-64 mt-1 z-10">
        {nodes.map(({ key, Icon }, i) => (
          <motion.div
            key={key}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#ff5500] bg-black flex items-center justify-center text-white"
          >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
          </motion.div>
        ))}
      </div>
    </GraphicShell>
  );
}

/* ==========================================================================
   MAIN CAROUSEL COMPONENT
   ========================================================================== */
interface CapabilityCard {
  id: number;
  graphic: ReactNode;
  title: string;
  description: string;
}

const capabilities: CapabilityCard[] = [
  {
    id: 0,
    graphic: <Graphic1 logoSrc="/images/logo.png" />,
    title: "New Launches & Seasonal Offers",
    description:
      "Share new collections, festive offers, and exclusive sales with the right customer segments through WhatsApp Broadcasts.",
  },
  {
    id: 1,
    graphic: <Graphic2 />,
    title: "Win Back Inactive Customers",
    description:
      "Re-engage customers who haven't purchased in 30, 60, or 90 days with offers based on their past purchases.",
  },
  {
    id: 2,
    graphic: <Graphic3 />,
    title: "Loyalty & Customer Sync",
    description:
      "Send loyalty expiry alerts, VIP offers, and keep customer tags and order history updated across your store.",
  },
  {
    id: 3,
    graphic: <Graphic4 />,
    title: "CRM Sync",
    description:
      "Keep customer records updated by automatically syncing contact details, tags, and conversation history.",
  },
];

export default function CapabilitiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stepWidth, setStepWidth] = useState(330);
  const [maxIndex, setMaxIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateBounds = () => {
      if (containerRef.current && containerRef.current.children[0]) {
        const firstCard = containerRef.current.children[0] as HTMLElement;
        const style = window.getComputedStyle(containerRef.current);
        const gap = parseFloat(style.gap) || 24;
        setStepWidth(firstCard.offsetWidth + gap);
      }

      if (window.innerWidth >= 1024) {
        setMaxIndex(capabilities.length - 3);
      } else if (window.innerWidth >= 640) {
        setMaxIndex(capabilities.length - 2);
      } else {
        setMaxIndex(capabilities.length - 1);
      }

      // Autoslide is mobile-only — desktop advances only on click.
      setIsMobile(window.innerWidth < 640);
    };

    calculateBounds();
    window.addEventListener("resize", calculateBounds);
    return () => window.removeEventListener("resize", calculateBounds);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    // Only run the autoplay timer on mobile viewports. Desktop/tablet
    // carousels stay static until the user clicks a nav button or drags.
    if (!isMobile || isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(timer);
  }, [handleNext, isHovered, isMobile]);

  const handleDragEnd = (
    _: unknown,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  return (
    <section className="relative w-full overflow-hidden font-[var(--font-poppins)]">
      {/* Parent background — same inline background-image pattern used by
          HowItWorksSection (bg-cover / bg-center / bg-no-repeat / rounded),
          in place of a separate <Image> element. */}
      <div
        style={{ backgroundImage: "url('/images/agentbg.png')" }}
        className="w-full text-white py-10 sm:py-14 md:py-16 relative overflow-hidden bg-cover bg-center bg-no-repeat rounded-[2.5rem]"
      >
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium tracking-tight text-white leading-tight mb-3">
                Re-Engage Buyers with Targeted <br className="hidden sm:inline" />
                WhatsApp Broadcast Campaigns
              </h2>
              <p className="text-sm sm:text-base text-gray-300 font-[300] m-0">
                Send proactive, personalized messages to bring shoppers back and drive repeat orders.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 self-center md:self-auto">
              <button
                onClick={handlePrev}
                aria-label="Previous card"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all active:scale-95 bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10 shadow-lg cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next card"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all active:scale-95 bg-white text-black hover:bg-gray-100 shadow-lg cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          <div
            className="w-full overflow-visible touch-pan-y"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            <motion.div
              ref={containerRef}
              className="flex gap-6 sm:gap-8 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              animate={{ x: -currentIndex * stepWidth }}
              transition={{ type: "spring", stiffness: 200, damping: 26 }}
            >
              {capabilities.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[85vw] sm:min-w-[320px] md:min-w-[320px] lg:w-[calc((100%-64px)/3.05)] shrink-0 flex flex-col text-left select-none"
                >
                  {/* Graphic frame — same radial-gradient formula and same
                      height values (300px / 340px) as HowItWorksSection's
                      per-card container, so the color and proportions
                      match exactly. */}
                  <div
                    style={{
                      background:
                        "radial-gradient(circle at 100% 0%, #68351e 0%, #2b160d 30%, #0d0a08 65%, #050404 100%)",
                    }}
                    className="w-full h-[300px] sm:h-[340px] rounded-[28px] overflow-hidden relative shadow-2xl mb-6 flex-shrink-0"
                  >
                    {item.graphic}
                  </div>

                  {/* Text block below the frame — transparent, no card fill */}
                  <div className="flex flex-col pr-2">
                    <h3 className="text-white font-semibold text-lg sm:text-xl mb-2.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}