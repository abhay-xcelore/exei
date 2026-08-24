// components/sections/BenefitsSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Bell, ArrowRight } from "lucide-react";
import NoMarkupMessagingGraphic from "@/components/ui/growth-agent/NoMarkupMessagingGraphic";

const benefits = [
  {
    id: "instant-support",
    label: "Instant Support in 80+ Languages",
    icon: "/icons/growth-agent/multilingual.svg",
    title: "Instant Support in 80+ Languages",
    description:
      "Automate WhatsApp messages to answer questions about product details, shipping timelines, and store policies in your buyer's preferred language.",
  },
  {
    id: "live-order-return-tracking",
    label: "Live Order & Return Tracking",
    icon: "/icons/growth-agent/deployments.svg",
    title: "Live Order & Return Tracking",
    description:
      "Send timely whatsapp-automated messages for order tracking (WISMO), return requests, and address updates without tying up your staff.",
  },
  {
    id: "automated-cod-verification",
    label: "Automated COD Verification",
    icon: "/icons/growth-agent/context.svg",
    title: "Automated COD Verification",
    description:
      "Trigger confirmation messages the moment an order is placed to verify intent, filter suspicious orders, and reduce return-to-origin (RTO) costs.",
  },
  {
    id: "smooth-human-handover",
    label: "Smooth Human Handover",
    icon: "/icons/growth-agent/messaging.svg",
    title: "Smooth Human Handover",
    description:
      "Route complex or high-priority inquiries to live team members with full customer conversation history attached.",
  },
];

function BenefitGraphic({ index }: { index: number }) {
  if (index === 0) return <FunnelVisibilityGraphic />;
  if (index === 1) return <MultilingualGraphic />;
  if (index === 2) return <UnifiedContextGraphic />;
  return <NoMarkupMessagingGraphic />;
}

export default function BenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scrollspy logic to keep tab focus synced with user scroll position
  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.35; // 35% down viewport

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
              <h2 className="text-2xl sm:text-3xl md:text-[36px] font-semibold text-gray-900 tracking-tight leading-tight mb-4">
                Inbound Support & Operations with WhatsApp Automation
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Handle high-volume customer inquiries instantly, confirm orders, and cut response times to zero using official Meta technology.
              </p>

              <div className="flex flex-col gap-2.5 max-w-[420px]">
                {benefits.map((benefit, i) => {
                  const isActive = activeIndex === i;
                  return (
                    <button
                      key={benefit.id}
                      onClick={() => scrollToCard(i)}
                      className={`relative flex items-center gap-3.5 text-left px-4 py-3.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "border-[#FF5E2C] bg-white shadow-sm"
                          : "border-gray-200/80 bg-white hover:border-gray-300"
                      }`}
                    >
                      {/* Rounded Circular Icon Container */}
                      <span
                        className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-b from-[#FF7A38] via-[#FF5E2C] to-[#F04106]"
                            : "bg-gray-100 border border-gray-200/60"
                        }`}
                      >
                        <Image
                          src={benefit.icon}
                          alt={benefit.label}
                          width={18}
                          height={18}
                          className={`w-4 h-4 object-contain transition-all duration-300 ${
                            isActive ? "brightness-0 invert" : "opacity-60"
                          }`}
                        />
                      </span>
                      <span
                        className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${
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
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1.5">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 max-w-md">
                  {benefit.description}
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full rounded-2xl bg-[#FFF1EA] border border-orange-100/70 overflow-hidden p-4 sm:p-6 min-h-[320px] flex items-center justify-center relative"
                >
                  <BenefitGraphic index={i} />
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* =============================== MOBILE / TABLET =============================== */}
        <div className="lg:hidden">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight leading-tight mb-3">
            Inbound Support & Operations with WhatsApp Automation
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Handle high-volume customer inquiries instantly, confirm orders, and cut response times to zero using official Meta technology.
          </p>

          <div className="flex flex-col gap-10">
            {benefits.map((benefit, i) => (
              <div key={benefit.id}>
                <h3 className="text-lg font-semibold text-gray-900 mb-1.5">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {benefit.description}
                </p>

                <div className="w-full rounded-2xl bg-[#FFF1EA] border border-orange-100/70 overflow-hidden p-4 min-h-[280px] flex items-center justify-center">
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

// ---------------------------------------------------------------------------
// Card 1 Graphic — Funnel Visibility
// ---------------------------------------------------------------------------
function FunnelVisibilityGraphic() {
  const stats = [
    { label: "Impression", value: "124.5k" },
    { label: "Click rate", value: "38.2k" },
    { label: "Add to cart", value: "12.9k" },
  ];

  return (
    <div className="w-full max-w-md relative pt-4 pl-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl shadow-xl shadow-orange-950/5 border border-gray-100 p-6 pl-8 relative z-10"
      >
        <div className="mb-6 pl-9">
          <h4 className="text-base font-bold text-gray-900 leading-tight">
            Track Shopper Progression
          </h4>
          <p className="text-xs text-gray-400 mt-0.5">exei.ai</p>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="bg-[#F3F4F6] rounded-2xl p-3 border border-gray-100/80"
            >
              <p className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight">
                {stat.value}
              </p>
              <p className="text-[11px] text-gray-500 font-medium mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 200 }}
        className="absolute -top-1 -left-1 z-20 bg-gradient-to-tr from-[#EF4444] to-[#F87171] w-11 h-11 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-500/30 border-4 border-white"
      >
        <Bell className="w-4 h-4 fill-white" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
        whileHover={{ scale: 1.03 }}
        className="absolute -bottom-4 right-2 z-20 bg-[#2563EB] text-white text-xs font-medium pl-4 pr-1.5 py-1.5 rounded-full shadow-lg shadow-blue-500/25 flex items-center gap-2 cursor-pointer"
      >
        <span>Turn on Notification</span>
        <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center shrink-0">
          <ArrowRight className="w-3 h-3 stroke-[2.5]" />
        </div>
      </motion.div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Card 2 Graphic — Multilingual AI Coverage
// ---------------------------------------------------------------------------
function MultilingualGraphic() {
  const languages = [
    { name: "Hindi (hi-IN)", active: false },
    { name: "Tamil (ta-IN)", active: true },
    { name: "Telugu (te-IN)", active: false },
    { name: "Marathi (mr-IN)", active: false },
    { name: "Bengali (bn-IN)", active: false },
  ];

  return (
    <div className="w-full max-w-md flex flex-col items-center justify-center py-2 relative">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-1 font-bold text-gray-900 text-sm mb-3"
      >
        <span className="w-4 h-4 rounded-full bg-[#FF5E2C] flex items-center justify-center text-white text-[10px]">
          e
        </span>
        <span>exei</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-full px-4 py-2 shadow-lg shadow-orange-950/5 border border-gray-100 flex items-center gap-3 relative z-10"
      >
        <div className="flex items-center gap-0.5">
          {[12, 20, 10, 18, 8].map((h, i) => (
            <motion.span
              key={i}
              animate={{ height: [h, h * 1.5, h] }}
              transition={{ repeat: Infinity, duration: 1, delay: i * 0.15 }}
              className="w-1 bg-[#FF5E2C] rounded-full"
              style={{ height: h }}
            />
          ))}
        </div>

        <span className="text-xs font-medium text-gray-700 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
          Need help with appointments?
        </span>

        <div className="flex items-center gap-0.5">
          {[8, 18, 10, 20, 12].map((h, i) => (
            <motion.span
              key={i}
              animate={{ height: [h, h * 1.5, h] }}
              transition={{ repeat: Infinity, duration: 1, delay: i * 0.15 }}
              className="w-1 bg-[#FF5E2C] rounded-full"
              style={{ height: h }}
            />
          ))}
        </div>

        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-md relative shrink-0">
          <Image
            src="/images/growth-agent/user-agent.jpg"
            alt="User Avatar"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      <div className="h-6 w-0 border-r-2 border-dashed border-gray-300 my-1" />

      <div className="w-full flex flex-wrap justify-center gap-2">
        {languages.map((lang, index) => (
          <motion.div
            key={lang.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
              lang.active
                ? "bg-[#FF5E2C] text-white border-[#FF5E2C] shadow-md shadow-orange-500/20 flex items-center gap-1.5"
                : "bg-white text-gray-700 border-gray-100"
            }`}
          >
            {lang.active && (
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            )}
            {lang.name}
          </motion.div>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-xs text-gray-500 self-center font-medium pl-1"
        >
          +12 more
        </motion.span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Card 3 Graphic — Unified Context
// ---------------------------------------------------------------------------
function UnifiedContextGraphic() {
  const agents = ["Customer Service", "Shopping Assistant", "Growth Agent"];
  const components = [
    "Knowledge base",
    "Contact Database",
    "Conversation Inbox",
  ];

  return (
    <div className="w-full max-w-md flex flex-col items-center justify-center py-2 relative">
      <div className="w-full grid grid-cols-3 gap-2">
        {agents.map((agent, i) => (
          <motion.div
            key={agent}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className="bg-white rounded-full py-1.5 px-2 border border-orange-500/40 shadow-sm flex items-center justify-center gap-1 text-[11px] font-medium text-gray-800"
          >
            <span className="w-3.5 h-3.5 rounded-full bg-[#FF5E2C] text-white flex items-center justify-center text-[8px] font-bold">
              e
            </span>
            <span className="truncate">{agent}</span>
          </motion.div>
        ))}
      </div>

      <div className="w-full h-8 relative my-1">
        <svg className="w-full h-full" viewBox="0 0 300 30" fill="none">
          <path
            d="M 50 0 V 15 H 250 V 0 M 150 0 V 30 M 50 15 V 30 M 250 15 V 30"
            stroke="#CBD5E1"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
        </svg>
      </div>

      <div className="w-full grid grid-cols-3 gap-2">
        {components.map((comp, i) => (
          <motion.div
            key={comp}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
            className="bg-white rounded-xl py-3 px-2 border border-gray-100 shadow-sm text-center text-xs font-semibold text-gray-800"
          >
            {comp}
          </motion.div>
        ))}
      </div>
    </div>
  );
}