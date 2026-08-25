"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

/* ==========================================================================
   ANIMATION VARIANTS
   ========================================================================== */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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
   HELPER COMPONENTS
   ========================================================================== */

// Custom Logo Helper
function CustomLogo({ size = 24 }: { size?: number }) {
  return (
    <Image
      src="/icons/exeicon.png"
      alt="Exe Logo"
      width={size}
      height={size}
      className="shrink-0 object-contain"
    />
  );
}

// Custom Stat Card Icon Helper
function StatIcon() {
  return (
    <div className="w-10 h-10 rounded-full border border-orange-200 bg-orange-50/50 flex items-center justify-center shrink-0">
      <Image
        src="/icons/growth-agent/context.svg"
        alt="Stat Icon"
        width={18}
        height={18}
        className="object-contain"
      />
    </div>
  );
}

/* ==========================================================================
   CARD 1: AUTOMATIC LEAD ROUTING ANIMATED GRAPHIC
   ========================================================================== */
function LeadRoutingGraphic() {
  const crmLogos = [
    { name: "HubSpot", icon: "/images/whatsapp-ai-agent/hubspot.svg" },
    { name: "Salesforce", icon: "/images/whatsapp-ai-agent/salesforce.svg" },
    { name: "Zoho", icon: "/images/whatsapp-ai-agent/image3.svg" },
    { name: "Pipedrive", icon: "/images/whatsapp-ai-agent/p.svg" },
  ];

  return (
    <div className="relative w-full h-full min-h-[340px] bg-gradient-to-b from-orange-100/60 via-orange-50/30 to-white rounded-2xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
      {/* Messages Stack */}
      <div className="flex flex-col gap-3 relative z-10">
        {/* Bot Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative bg-white rounded-2xl p-3 shadow-md shadow-orange-950/5 border border-orange-100/50 max-w-[88%] self-start"
        >
          <div className="absolute -top-2.5 -left-2 z-20">
            <CustomLogo size={22} />
          </div>
          <p className="text-xs sm:text-sm text-gray-900 font-medium pl-2 pt-0.5">
            Can i have your Name and Email Address?
          </p>
        </motion.div>

        {/* User Response */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="relative bg-white rounded-2xl p-3 shadow-md shadow-orange-950/5 border border-orange-100/50 max-w-[92%] self-end"
        >
          <div className="absolute -top-2.5 -right-2 w-7 h-7 rounded-full overflow-hidden border-2 border-white shadow-sm z-20">
            <Image
              src="/images/growth-agent/alexa.jpg"
              alt="User"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xs sm:text-sm text-gray-900 font-semibold pr-3">
            Sure, Daniel Reed daniel@techcore.io
          </p>
        </motion.div>
      </div>

      {/* SVG Tree Connector Lines with Pulse Animation */}
      <div className="relative w-full h-14 my-1">
        <svg
          className="w-full h-full"
          viewBox="0 0 300 60"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M 150 0 V 25 M 150 25 H 35 V 60 M 150 25 H 110 V 60 M 150 25 H 190 V 60 M 150 25 H 265 V 60"
            stroke="#FDBA74"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Animated pulse dot travelling down */}
          <motion.circle
            r="4"
            fill="#FF5E2C"
            animate={{
              cx: [150, 150, 35, 110, 190, 265],
              cy: [0, 25, 60, 60, 60, 60],
              opacity: [0, 1, 1, 1, 1, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      {/* Dynamic CRM Grid Icons */}
      <div className="grid grid-cols-4 gap-2 relative z-10">
        {crmLogos.map((crm, idx) => (
          <motion.div
            key={crm.name}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.45 + idx * 0.1 }}
            whileHover={{ y: -3 }}
            className="bg-white rounded-2xl p-2.5 border border-gray-100 shadow-sm flex items-center justify-center aspect-square"
          >
            <Image
              src={crm.icon}
              alt={crm.name}
              width={26}
              height={26}
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>

      {/* Status Confirmation Pill */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.85 }}
        className="bg-white rounded-full py-2 px-4 border border-gray-100 shadow-md flex items-center justify-center gap-2 mt-4 relative z-10"
      >
        <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-100" />
        <span className="text-xs font-bold text-gray-900">
          New Lead Captured
        </span>
      </motion.div>
    </div>
  );
}

/* ==========================================================================
   MAIN SECTION COMPONENT
   ========================================================================== */
export default function AiVoiceAgentSection() {
  return (
    <section className="w-full bg-[#FBFBFC] py-10 sm:py-14 px-4 sm:px-6 lg:px-8 text-gray-900 font-[var(--font-poppins)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="text-center mb-10 sm:mb-14"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-[36px] font-semibold tracking-tight text-gray-900 leading-tight"
          >
            Why Choose Exei WhatsApp AI Agent
          </motion.h2>
        </motion.div>

        {/* Bento Grid Container (Matches Layout Grid EXACTLY) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[280px]"
        >
          {/* ----------------------------------------------------------------
              CARD 1: TALL LEFT CARD (Automatic Lead Routing - Spans 2 Rows)
              ---------------------------------------------------------------- */}
          <motion.div
            variants={cardVariant}
            className="lg:row-span-2 bg-white rounded-3xl p-5 sm:p-6 border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full"
          >
            {/* Top Interactive Motion Graphic */}
            <LeadRoutingGraphic />

            {/* Bottom Title & Description */}
            <div className="pt-5">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                Automatic Lead Routing
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed mt-1">
                Quick follow-ups with zero manual entry.
              </p>
            </div>
          </motion.div>

          {/* ----------------------------------------------------------------
              CARD 2: TOP CENTER IMAGE (Instant Answers & Sales)
              ---------------------------------------------------------------- */}
          <motion.div
            variants={cardVariant}
            className="relative rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100/80 group h-full"
          >
            <Image
              src="/images/customer-service/conversation.png"
              alt="Instant Answers & Sales"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Glassmorphic Overlay Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md rounded-2xl p-3.5 border border-white/20 text-white z-10">
              <h4 className="text-xs sm:text-sm font-bold leading-tight">
                Instant Answers & Sales
              </h4>
              <p className="text-[11px] text-gray-200 font-normal mt-0.5">
                Get Faster replies, more completed checkouts.
              </p>
            </div>
          </motion.div>

          {/* ----------------------------------------------------------------
              CARD 3: STAT CARD 1 (60% Cost Reduction)
              ---------------------------------------------------------------- */}
          <motion.div
            variants={cardVariant}
            className="bg-white rounded-3xl p-6 border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full"
          >
            <StatIcon />

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-1">
                60<span className="text-[#FF5E2C]">%</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-600 leading-tight">
                Cost Reduction in <br />
                Customer Support
              </p>
            </div>
          </motion.div>

          {/* ----------------------------------------------------------------
              CARD 4: STAT CARD 2 (2x Faster Resolution)
              ---------------------------------------------------------------- */}
          <motion.div
            variants={cardVariant}
            className="bg-white rounded-3xl p-6 border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full"
          >
            <StatIcon />

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-1">
                2<span className="text-[#FF5E2C]">x</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-600 leading-tight">
                Faster Resolution Time
              </p>
            </div>
          </motion.div>

          {/* ----------------------------------------------------------------
              CARD 5: STAT CARD 3 (5000+ Queries Resolved)
              ---------------------------------------------------------------- */}
          <motion.div
            variants={cardVariant}
            className="bg-white rounded-3xl p-6 border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full"
          >
            <StatIcon />

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-1">
                5000<span className="text-[#FF5E2C]">+</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-600 leading-tight">
                Queries Resolved
              </p>
            </div>
          </motion.div>

          {/* ----------------------------------------------------------------
              CARD 6: BOTTOM RIGHT IMAGE CARD (24/7 Support & Tracking - Spans 2 Cols)
              ---------------------------------------------------------------- */}
          <motion.div
            variants={cardVariant}
            className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100/80 group h-full"
          >
            <Image
              src="/images/whatsapp-ai-agent/whatsapp-agent.png"
              alt="24/7 Support & Tracking"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Glassmorphic Dark Overlay Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-white z-10">
              <h4 className="text-xs sm:text-sm font-bold leading-tight">
                24/7 Support & Tracking
              </h4>
              <p className="text-[11px] sm:text-xs text-gray-300 font-normal mt-1 leading-relaxed">
                Handle order tracking and FAQs automatically, with smooth handoffs to human staff when needed.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}