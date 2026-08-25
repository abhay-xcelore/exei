// components/sections/BenefitsSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, Store, Phone, MoreVertical, MessageSquare } from "lucide-react";

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
  if (index === 0) return <LanguageSupportGraphic />;
  if (index === 1) return <OrderTrackingGraphic />;
  if (index === 2) return <CODVerificationGraphic />;
  return <HumanHandoverGraphic />;
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
      <div className="max-w-7xl mx-auto">
        {/* DESKTOP (lg+) */}
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

        {/* MOBILE / TABLET */}
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

/* ---------------------------------------------------------------------------
   Shared helpers
--------------------------------------------------------------------------- */

// Replace src path with your logo asset
function CustomLogo({ size = 28 }: { size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <Image
        src="/icons/exeiLogo.png"
        alt="Logo"
        fill
        className="object-contain"
      />
    </div>
  );
}

// Darker gray line (#4B5563) for continuous downward animation
function AnimatedDashedLine() {
  return (
    <svg className="w-full h-full" preserveAspectRatio="none">
      <motion.line
        x1="50%"
        y1="0"
        x2="50%"
        y2="100%"
        stroke="#4B5563"
        strokeWidth="2.5"
        strokeDasharray="5 5"
        animate={{ strokeDashoffset: [0, -20] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}

/* ---------------------------------------------------------------------------
   Card 1 Graphic — Instant Support in 80+ Languages
--------------------------------------------------------------------------- */
function LanguageSupportGraphic() {
  const topRow = [
    { name: "Hindi (hi-IN)", active: false },
    { name: "Tamil (ta-IN)", active: true },
    { name: "Telugu (te-IN)", active: false },
  ];
  const bottomRow = [
    { name: "Marathi (mr-IN)", active: false },
    { name: "Bengali (bn-IN)", active: false },
  ];

  return (
    <div className="w-full max-w-md flex flex-col items-center relative py-2">
      <div className="absolute top-8 bottom-12 left-1/2 -translate-x-1/2 w-1 z-0">
        <AnimatedDashedLine />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="relative z-10 flex items-center gap-1.5 mb-4 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-100 shadow-sm"
      >
        <CustomLogo size={24} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.15 }}
        className="relative z-10 bg-white rounded-full pl-5 pr-1.5 py-1.5 shadow-lg shadow-orange-950/5 border border-gray-100 flex items-center gap-3 mb-8 max-w-full"
      >
        <span className="text-xs sm:text-sm text-gray-800 font-medium whitespace-nowrap">
          I&apos;d like to check my order status.
        </span>
        <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-md relative shrink-0">
          <Image
            src="/images/growth-agent/user-agent.jpg"
            alt="Customer"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      <div className="relative z-10 w-full flex flex-col items-center gap-2">
        <div className="flex flex-wrap justify-center gap-2">
          {topRow.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 ${
                lang.active
                  ? "bg-[#FF5E2C] text-white shadow-md shadow-orange-500/25"
                  : "bg-white text-gray-800 shadow-sm border border-gray-100"
              }`}
            >
              {lang.active && (
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              )}
              {lang.name}
            </motion.div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2">
          {bottomRow.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.55 + i * 0.1 }}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap bg-white text-gray-800 shadow-sm border border-gray-100"
            >
              {lang.name}
            </motion.div>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.75 }}
            className="text-xs text-gray-500 font-medium pl-1 whitespace-nowrap"
          >
            +12 more
          </motion.span>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Shared WhatsApp phone-frame header
--------------------------------------------------------------------------- */
function WhatsAppHeader() {
  return (
    <div className="bg-[#075E54] px-3 py-2.5 flex items-center gap-2.5">
      <ChevronLeft className="w-4 h-4 text-white/90 shrink-0" />
      <div className="relative shrink-0">
        <CustomLogo size={28} />
        <motion.span
          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#075E54]"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white text-xs sm:text-sm font-semibold leading-tight truncate">
          AI Agent
        </p>
        <p className="text-white/60 text-[10px] leading-tight truncate">
          tap here for contact info
        </p>
      </div>
      <div className="flex items-center gap-2.5 text-white/80 shrink-0">
        <Store className="w-3.5 h-3.5" />
        <Phone className="w-3.5 h-3.5" />
        <MoreVertical className="w-3.5 h-3.5" />
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Card 2 Graphic — Live Order & Return Tracking
--------------------------------------------------------------------------- */
function OrderTrackingGraphic() {
  const quickReplies = ["Check Order Status", "Initiate a Return", "Schedule Appointment"];

  return (
    <div className="w-full max-w-[340px] mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
      <WhatsAppHeader />

      <div className="relative bg-[#EFEAE2] px-4 py-5 min-h-[230px] flex flex-col gap-3">
        {/* Custom WhatsApp background image overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 bg-repeat bg-center"
          style={{ backgroundImage: "url('/images/whatsapp-bg.png')" }} 
        />

        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative z-10 bg-[#D9FDD3] rounded-xl rounded-tl-sm p-3 max-w-[85%] shadow-sm"
        >
          <p className="text-[12px] sm:text-[13px] text-gray-900 leading-snug mb-2.5">
            Hi there 👋 I&apos;m your commerce assistant. How can I help you today?
          </p>
          <div className="flex flex-col gap-1.5">
            {quickReplies.map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.2 + i * 0.12 }}
                className="bg-white rounded-full py-1.5 px-3 text-center text-[11px] sm:text-xs font-semibold text-[#075E54] shadow-sm"
              >
                {label}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.75 }}
          className="relative z-10 self-end bg-white rounded-xl rounded-tr-sm p-3 max-w-[80%] shadow-sm"
        >
          <p className="text-[12px] sm:text-[13px] text-gray-900 leading-snug">
            I&apos;d like to check my order status, please.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Card 3 Graphic — Automated COD Verification
--------------------------------------------------------------------------- */
function CODVerificationGraphic() {
  return (
    <div className="w-full max-w-md flex flex-col items-center relative py-2">
      <div className="absolute top-10 bottom-6 left-1/2 -translate-x-1/2 w-1 z-0">
        <AnimatedDashedLine />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-white rounded-full pl-3 pr-5 py-1.5 shadow-lg shadow-orange-950/5 border border-gray-100 flex items-center gap-3 mb-10 max-w-full"
      >
        <CustomLogo size={32} />
        <span className="text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap">
          Hi, Please confirm your COD Order #10298
        </span>
      </motion.div>

      <div className="relative z-10 w-full max-w-[280px] flex flex-col gap-3">
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 + i * 0.15 }}
            className="bg-white rounded-full px-3 py-2.5 shadow-md border border-gray-100 flex items-center gap-3"
          >
            <div className="w-7 h-7 rounded-full bg-gray-200 shrink-0" />
            <div className="h-1.5 bg-gray-200 rounded-full flex-1" />
            <MessageSquare className="w-3.5 h-3.5 text-gray-300 shrink-0" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Card 4 Graphic — Smooth Human Handover
--------------------------------------------------------------------------- */
function HumanHandoverGraphic() {
  return (
    <div className="w-full max-w-[340px] mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
      <WhatsAppHeader />

      <div className="relative bg-[#EFEAE2] px-4 py-5 min-h-[260px] flex flex-col gap-3">
        {/* Custom WhatsApp background image overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 bg-repeat bg-center"
          style={{ backgroundImage: "url('/images/whatsapp-bg.png')" }} 
        />

        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative z-10 self-end bg-white rounded-xl rounded-tr-sm p-3 max-w-[80%] shadow-sm"
        >
          <p className="text-[12px] sm:text-[13px] text-gray-900 leading-snug">
            I&apos;d like to check my order status, please.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="relative z-10 bg-[#D9FDD3] rounded-xl rounded-tl-sm p-3 max-w-[85%] shadow-sm"
        >
          <p className="text-[12px] sm:text-[13px] text-gray-900 leading-snug">
            It looks like there may be a delivery issue. Would you like me to connect you with a support agent who can help resolve this?
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 10, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.8 }}
          whileHover={{ scale: 1.03 }}
          className="relative z-10 self-center mt-1 bg-white border-2 border-[#FF5E2C] rounded-full px-6 py-2.5 text-xs sm:text-sm font-bold text-gray-900 shadow-md"
        >
          Human Takeover
        </motion.button>
      </div>
    </div>
  );
}