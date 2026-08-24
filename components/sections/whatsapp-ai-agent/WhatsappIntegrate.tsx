// components/sections/ProcessSection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, LayoutGrid, MessageSquare, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    id: 0,
    number: "01",
    title: "Set Up Your Connection",
    description:
      "Open your Exei Dashboard, go to the Channels section, and click WhatsApp.",
    visual: "connect" as const,
    mediaSrc: "/images/step1.png", // Fallback image if needed, otherwise uses custom Motion Graphic
  },
  {
    id: 1,
    number: "02",
    title: "Link Your Business Account",
    description:
      "As an Official Meta Tech Provider, Exei connects securely through Meta. Log in, select your Business Page, add your WhatsApp number, and verify with an OTP.",
    visual: "configure" as const,
    mediaSrc: "/images/whatsapp-ai-agent/panel.png", // <-- Replace with your step 2 image path
  },
  {
    id: 2,
    number: "03",
    title: "Personalize Your Agent",
    description:
      "Name your AI Agent and customize its profile, including name, details, and appearance, to match your brand’s identity.",
    visual: "deploy" as const,
    mediaSrc: "/images/whatsapp-ai-agent/nocode.png", // <-- Replace with your step 3 image path
  },
];

type Step = (typeof steps)[number];

function StepVisual({ step, isActive }: { step: Step; isActive: boolean }) {
  if (step.visual === "connect") return <ConnectGraphic isActive={isActive} />;

  return (
    <AnimatedCardImage
      src={step.mediaSrc}
      alt={step.title}
      isActive={isActive}
    />
  );
}

/* ==========================================================================
   SLIDING ANIMATED MOCKUP IMAGE COMPONENT (FOR CARDS 2 AND 3)
   ========================================================================== */
function AnimatedCardImage({
  src,
  alt,
  isActive,
}: {
  src: string | null;
  alt: string;
  isActive: boolean;
}) {
  return (
    <div className="w-full h-full relative overflow-hidden flex items-center justify-end p-2 sm:p-4">
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            key={src || "empty"}
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -30, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 25,
              mass: 0.8,
            }}
            className="relative w-full h-full rounded-2xl overflow-hidden border border-orange-200/50 shadow-xl shadow-orange-500/5 bg-white"
          >
            {src ? (
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover object-left-top"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-white to-[#FFF5F2] flex items-center justify-center p-6 text-center text-xs font-medium text-orange-400">
                Place image file path in step.mediaSrc
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ==========================================================================
   CARD 1: CONNECT MOTION GRAPHIC (EXEI LOGO + STEP NODES)
   ========================================================================== */
function ConnectGraphic({ isActive }: { isActive: boolean }) {
  const items = [
    {
      label: "Open Dashboard",
      icon: <LayoutGrid className="w-4 h-4 text-white" />,
      highlight: false,
    },
    {
      label: "Channels",
      icon: <MessageSquare className="w-4 h-4 text-white" />,
      highlight: false,
    },
    {
      label: "Connect WhatsApp",
      icon: (
        <Image
          src="/icons/whatsapp (2).png"
          alt="WhatsApp"
          width={18}
          height={18}
          className="object-contain"
        />
      ),
      highlight: true,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Glow pulse */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-36 h-36 rounded-full bg-orange-400/20 blur-2xl pointer-events-none"
      />

      {/* Main Logo Container */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-14 h-14 rounded-full bg-white border-2 border-orange-200 shadow-md flex items-center justify-center p-2 mb-1"
      >
        <Image
          src="/icons/exei-logo.png"
          alt="Exei Logo"
          width={32}
          height={32}
          className="object-contain"
          onError={(e) => {
            (e.target as HTMLElement).style.display = "none";
          }}
        />
        <span className="text-xl font-bold text-[#FF5E2C]">e</span>
      </motion.div>

      {/* Connecting Vertical Line */}
      <div className="w-[2px] h-6 border-l-2 border-dashed border-gray-300 my-1 z-0" />

      {/* Cascading Animated Badges */}
      <div className="w-full max-w-[230px] space-y-2.5 z-10">
        {items.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: 40 }}
            animate={
              isActive
                ? { opacity: 1, x: 0 }
                : { opacity: 0.7, x: 0 }
            }
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 24,
              delay: idx * 0.1,
            }}
            className={`flex items-center gap-3 p-1.5 pl-2 pr-4 rounded-full shadow-sm transition-all border ${
              item.highlight
                ? "bg-white border-orange-500 shadow-orange-500/10 ring-1 ring-orange-500/20"
                : "bg-white/90 border-gray-100"
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                item.highlight
                  ? "bg-emerald-500 text-white"
                  : "bg-gradient-to-r from-[#FF5E2C] to-[#FF7A28]"
              }`}
            >
              {item.icon}
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-800 tracking-tight">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ==========================================================================
   MAIN PROCESS SECTION COMPONENT
   ========================================================================== */
export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative bg-[#FAFAFA] text-gray-900 py-12 md:py-16 px-6 font-[var(--font-poppins)] overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 tracking-tight leading-tight mb-3">
            Integrate Exei “No-Code WhatsApp AI Agent” <br className="hidden sm:inline" />
            in 3 Simple Steps.
          </h2>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row gap-5 w-full mb-10 md:mb-12">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <div
                key={step.id}
                onMouseEnter={() => setActiveStep(idx)}
                className={`flex flex-col lg:h-[420px] bg-white text-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm relative overflow-hidden lg:transition-all lg:duration-500 lg:ease-out will-change-[flex] ${
                  isActive
                    ? "lg:flex-[2.5] bg-white"
                    : "lg:flex-[1] bg-white/95 lg:cursor-pointer"
                }`}
              >
                {/* Badge */}
                <div className="shrink-0 relative z-10">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-r from-[#FF5E2C] to-[#FF7A28] text-white text-xl font-semibold flex items-center justify-center shadow-md shadow-orange-500/20">
                    {step.number}
                  </div>
                </div>

                {/* Text column */}
                <div
                  className={`flex-1 flex flex-col justify-start lg:justify-end pr-0 lg:pr-4 z-10 relative pointer-events-none transition-[max-width] duration-500 ease-out max-w-full ${
                    isActive ? "lg:max-w-[50%]" : ""
                  }`}
                >
                  <div className="pt-6 sm:pt-8 pb-1 shrink-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 tracking-tight mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* MOBILE / TABLET VIEW */}
                <div className="lg:hidden z-10 relative mt-6 w-full">
                  <div className="w-full h-[240px] sm:h-[260px] bg-[#FFF5F2] rounded-2xl overflow-hidden border border-orange-100/60 relative flex items-center justify-center p-3">
                    <StepVisual step={step} isActive={true} />
                  </div>
                </div>

                {/* DESKTOP VIEW WITH SLIDING EXPANSION */}
                <div
                  className={`hidden lg:block absolute inset-y-0 right-0 transition-all duration-500 ease-out overflow-hidden z-0 ${
                    isActive
                      ? "w-[50%] opacity-100 pointer-events-auto"
                      : "w-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="w-full h-full bg-[#FFF5F2] relative flex items-center justify-center p-3">
                    <StepVisual step={step} isActive={isActive} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <button
          type="button"
          className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-[#FF5E2C] via-[#FF692E] to-[#FF7A28] text-white font-normal text-xs pl-4 pr-1 py-1.5 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer shadow-md"
        >
          <span>Set Up Exei Now</span>
          <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-inner group-hover:bg-white/30 transition-colors">
            <ArrowRight className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
        </button>
      </div>
    </section>
  );
}