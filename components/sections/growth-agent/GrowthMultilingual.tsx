"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Check, Clock, MessageSquare, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    id: "deployment",
    label: "Deployment",
    icon: "/icons/growth-agent/deployments.svg",
    title: "Deployment",
    description: "Go live in just 5 days with zero code required.",
  },
  {
    id: "multilingual-ai-coverage",
    label: "Multilingual AI Coverage",
    icon: "/icons/growth-agent/multilingual.svg",
    title: "Multilingual AI Coverage",
    description:
      "Engage customers fluently across 80+ languages on chat and voice.",
  },
  {
    id: "unified-customer-context",
    label: "Unified Customer Context",
    icon: "/icons/growth-agent/context.svg",
    title: "Unified Customer Context",
    description:
      "Share one central knowledge base, contact database, and conversation inbox across all three Exei agents.",
  },
  {
    id: "no-markup-messaging",
    label: "No-Markup Messaging",
    icon: "/icons/growth-agent/messaging.svg",
    title: "No-Markup Messaging",
    description:
      "Direct pay-as-you-go utility rates with zero hidden markups.",
  },
];

function BenefitGraphic({ index }: { index: number }) {
  if (index === 0) return <DeploymentGraphic />;
  if (index === 1) return <MultilingualGraphic />;
  if (index === 2) return <UnifiedContextGraphic />;
  return <NoMarkupMessagingGraphic />;
}

export default function BenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.35;

      cardRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerPoint && rect.bottom > triggerPoint) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCard = (index: number) => {
    setActiveIndex(index);
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section className="bg-[#fafafa] py-10 md:py-14 px-6 font-[var(--font-poppins)]">
      <div className="max-w-6xl mx-auto">
        {/* =============================== DESKTOP (lg+) =============================== */}
        <div className="hidden lg:grid grid-cols-12 gap-12">
          {/* LEFT: Header + Sticky Tabs */}
          <div className="col-span-6">
            <div className="sticky top-28">
              <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium text-gray-900 tracking-tight leading-tight mb-4">
                Built to Scale: Fast, Multilingual & Secure
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                AI agent for ecommerce growth engineered to deliver high-converting commerce conversations on the channels customers use most.
              </p>

              <div className="flex flex-col gap-2 max-w-[410px]">
                {benefits.map((benefit, i) => {
                  const isActive = activeIndex === i;
                  return (
                    <button
                      key={benefit.id}
                      onClick={() => scrollToCard(i)}
                      className={`relative flex items-center gap-3.5 text-left px-4 py-3 rounded-2xl border transition-all duration-300 ${
                        isActive
                          ? "border-[#FF5E2C] bg-white shadow-sm"
                          : "border-gray-200/80 bg-white hover:border-gray-300"
                      }`}
                    >
                      <span
                        className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-b from-[#FF7A38] via-[#FF5E2C] to-[#F04106]"
                            : "bg-gray-100 border border-gray-200/60"
                        }`}
                      >
                        <Image
                          src={benefit.icon}
                          alt={benefit.label}
                          width={20}
                          height={20}
                          className={`w-5 h-5 object-contain transition-all duration-300 ${
                            isActive ? "brightness-0 invert" : "opacity-60"
                          }`}
                        />
                      </span>
                      <span
                        className={`text-sm sm:text-base font-medium transition-colors duration-300 ${
                          isActive ? "text-gray-900" : "text-gray-600"
                        }`}
                      >
                        {benefit.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Benefit Cards Stack */}
          <div className="col-span-6 bg-white rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col gap-12">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.id}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="scroll-mt-32"
              >
                <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-1.5">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-md">
                  {benefit.description}
                </p>

                <div className="w-full rounded-2xl bg-[#FFF5F1] border border-orange-100/80 overflow-hidden p-4 sm:p-6 min-h-[320px] flex items-center justify-center relative">
                  <BenefitGraphic index={i} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =============================== MOBILE / TABLET =============================== */}
        <div className="lg:hidden">
          <h2 className="text-2xl font-medium text-gray-900 tracking-tight leading-tight mb-3">
            Built to Scale: Fast, Multilingual & Secure
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-8">
            AI agent for ecommerce growth engineered to deliver high-converting commerce conversations on the channels customers use most.
          </p>

          <div className="flex flex-col gap-10">
            {benefits.map((benefit, i) => (
              <div key={benefit.id}>
                <h3 className="text-lg font-bold text-gray-900 mb-1.5">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {benefit.description}
                </p>

                <div className="w-full rounded-2xl bg-[#FFF5F1] border border-orange-100/80 overflow-hidden p-4 min-h-[280px] flex items-center justify-center">
                  <BenefitGraphic index={i} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===========================================================================
   CARD 1 — DEPLOYMENT GRAPHIC
   =========================================================================== */
function DeploymentGraphic() {
  const steps = [
    {
      day: "Day 1",
      title: "Setup",
      icon: <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />,
    },
    {
      day: "Day 2",
      title: "Train AI",
      icon: <Clock className="w-4 h-4 text-emerald-600 stroke-[2.5]" />,
    },
    {
      day: "Day 3",
      title: "Connect",
      icon: <MessageSquare className="w-4 h-4 text-emerald-600 stroke-[2.5]" />,
    },
  ];

  return (
    <div className="w-full max-w-[320px] flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-full bg-[#FFFBF8] rounded-3xl p-4 sm:p-5 border border-orange-100/80 shadow-xs flex flex-col gap-3"
      >
        {steps.map((step, idx) => (
          <motion.div
            key={step.day}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.12 }}
            className="w-full bg-white rounded-2xl p-3.5 px-4 shadow-2xs border border-gray-100 flex items-center justify-between"
          >
            <div className="flex flex-col items-start">
              <span className="text-[11px] text-gray-400 font-normal">
                {step.day}
              </span>
              <span className="text-base font-bold text-gray-900 leading-tight">
                {step.title}
              </span>
            </div>
            <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100/80 flex items-center justify-center shrink-0">
              {step.icon}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <span className="text-xs font-medium text-gray-600 mt-3">
        + 2 more Steps
      </span>
    </div>
  );
}

/* ===========================================================================
   CARD 2 — MULTILINGUAL GRAPHIC (Image logo link replacement)
   =========================================================================== */
function MultilingualGraphic() {
  const languages = [
    { name: "Hindi (hi-IN)", active: false },
    { name: "Tamil (ta-IN)", active: true },
    { name: "Telugu (te-IN)", active: false },
    { name: "Marathi (mr-IN)", active: false },
    { name: "Bengali (bn-IN)", active: false },
  ];

  // REPLACE THIS PATH WITH YOUR OWN LOGO IMAGE SOURCE URL/PATH
  const logoSrc = "/icons/exeiLogo-black.png";

  return (
    <div className="w-full max-w-md flex flex-col items-center justify-center py-2 relative">
      {/* Custom Logo Image Link */}
      <div className="flex items-center justify-center mb-3">
        <Image
          src={logoSrc}
          alt="Brand Logo"
          width={110}
          height={32}
          className="h-7 w-auto object-contain"
        />
      </div>

      <div className="h-4 w-0 border-r border-dashed border-gray-300 mb-2" />

      {/* Main Voice Box */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-full px-4 py-2 shadow-md border border-gray-100 flex items-center gap-3 z-10"
      >
        <div className="flex items-center gap-0.5 shrink-0">
          {[10, 18, 12, 20, 8].map((h, i) => (
            <motion.span
              key={i}
              animate={{ height: [h, h * 1.35, h] }}
              transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
              className="w-1 bg-[#FF5E2C] rounded-full"
              style={{ height: h }}
            />
          ))}
        </div>

        <span className="text-xs font-medium text-gray-800 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
          Need help with appointments?
        </span>

        <div className="flex items-center gap-0.5 shrink-0">
          {[8, 20, 12, 18, 10].map((h, i) => (
            <motion.span
              key={i}
              animate={{ height: [h, h * 1.35, h] }}
              transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
              className="w-1 bg-[#FF5E2C] rounded-full"
              style={{ height: h }}
            />
          ))}
        </div>

        <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 relative shrink-0">
          <Image
            src="/images/growth-agent/user-agent.jpg"
            alt="User Avatar"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      <div className="h-4 w-0 border-r border-dashed border-gray-300 my-2" />

      {/* Language Chips */}
      <div className="w-full flex flex-wrap justify-center items-center gap-2">
        {languages.map((lang, index) => (
          <motion.div
            key={lang.name}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              lang.active
                ? "bg-[#FF4500] text-white border-[#FF4500] shadow-sm flex items-center gap-1.5"
                : "bg-white text-gray-800 border-gray-100"
            }`}
          >
            {lang.active && (
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            )}
            {lang.name}
          </motion.div>
        ))}
        <span className="text-xs text-gray-500 font-medium pl-1">+12 more</span>
      </div>
    </div>
  );
}

/* ===========================================================================
   CARD 3 — UNIFIED CONTEXT GRAPHIC (v5: outer pills nudged inward 10px)
   =========================================================================== */
function UnifiedContextGraphic() {
  const topAgents = [
    { label: "Customer Service", offset: "translate-y-3 translate-x-[10px]" },
    { label: "Shopping Assistant", offset: "-translate-y-5 z-20" },
    { label: "Growth Agent", offset: "translate-y-3 -translate-x-[10px]" },
  ];

  const bottomBoxes = [
    "Knowledge base",
    "Contact Database",
    "Conversation Inbox",
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center py-4 relative">
      {/* Top Stepped Bubbles */}
      <div className="w-full flex items-end justify-center gap-3 sm:gap-5 z-10 px-8 sm:px-10">
        {topAgents.map((agent) => (
          <motion.div
            key={agent.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`bg-white rounded-full px-2.5 sm:px-3.5 py-1.5 border-[1.5px] border-[#FF5E2C] shadow-md shadow-orange-950/5 flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-transform ${agent.offset}`}
          >
            {/* Logo Badge Placeholder */}
            <div className="w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full bg-black flex items-center justify-center shrink-0">
              <span className="text-[9px] sm:text-[10px] font-bold text-white leading-none">e</span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-semibold text-gray-800 tracking-tight">
              {agent.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* SVG Dashed Connections */}
      <div className="w-full h-14 relative">
        <svg
          className="w-full h-full block"
          viewBox="0 0 300 56"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Outer bends: pill -> horizontal junction -> down into side boxes */}
          <motion.path
            d="M 50 16 V 33 H 250 V 16 M 50 33 V 56 M 250 33 V 56"
            stroke="#B7BEC8"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -16] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
          />
          {/* Center: straight line, Shopping Assistant -> Contact Database */}
          <motion.path
            d="M 150 0 V 56"
            stroke="#B7BEC8"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -16] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
          />
        </svg>
      </div>

      {/* Bottom Tabs */}
      <div className="w-full grid grid-cols-3 gap-2 z-10">
        {bottomBoxes.map((comp) => (
          <motion.div
            key={comp}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white py-3 px-2 border border-gray-100 shadow-xs text-center text-[10px] sm:text-xs font-semibold text-gray-800 flex items-center justify-center leading-tight first:rounded-l-2xl last:rounded-r-2xl"
          >
            {comp}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
/* ===========================================================================
   CARD 4 — NO-MARKUP MESSAGING GRAPHIC (FIXED: Distinct visible stacked card layers)
   =========================================================================== */
function NoMarkupMessagingGraphic() {
  return (
    <div className="w-full max-w-md flex flex-col items-center justify-center relative py-10 px-2">
      <div className="relative w-full max-w-[320px] sm:max-w-[340px] flex items-center justify-center min-h-[90px]">
        {/* Deepest Back Layer Card (Topmost offset) */}
        <div className="absolute w-[82%] h-full bg-white/60 rounded-2xl border border-gray-200/40 shadow-sm -top-6 z-0" />

        {/* Middle Back Layer Card */}
        <div className="absolute w-[91%] h-full bg-white/85 rounded-2xl border border-gray-200/70 shadow-sm -top-3 z-1" />

        {/* Primary Foreground Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full bg-white rounded-2xl p-4 sm:p-5 shadow-xl shadow-gray-200/60 border border-gray-100 flex items-center gap-3.5 sm:gap-4"
        >
          {/* Circular Check Icon */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FF4500] flex items-center justify-center text-white shrink-0 shadow-xs">
            <Check className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
          </div>

          <div className="flex flex-col text-left">
            <h4 className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
              No Any Hidden Charger
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 font-normal mt-0.5">
              Direct Pay-as-you-go
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}