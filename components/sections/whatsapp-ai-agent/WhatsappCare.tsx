"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Megaphone,
  ArrowRight,
  Phone,
  MoreVertical,
  Smile,
  Paperclip,
  Camera,
  Mic,
  Store,
  ArrowLeft,
  Bell,
} from "lucide-react";

/* ==========================================================================
   FEATURE 1 GRAPHIC COMPONENT
   ========================================================================== */
function AnimatedFeatureGraphic1() {
  return (
    <div className="relative w-full h-full min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] rounded-2xl bg-[#F5F6FA] flex flex-col items-center justify-center overflow-hidden p-4 sm:p-8 select-none">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-10 -left-10 w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] bg-[#FFD7CC]/60 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-[380px] sm:max-w-[460px] flex flex-col items-center justify-center my-auto scale-[0.82] xs:scale-[0.9] sm:scale-100 origin-center">
        {/* CENTRAL WHATSAPP CHAT FRAME */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-[280px] sm:w-[320px] h-[400px] sm:h-[430px] bg-[#EFEAE2] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden border border-black/5 z-10 flex flex-col justify-between"
        >
          <div className="bg-[#005C4B] text-white px-3.5 py-2.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 text-white/90 stroke-[2.5]" />
              <div className="w-7 h-7 rounded-full bg-[#D91B5C] flex items-center justify-center text-white font-bold text-xs shadow-xs">
                e
              </div>
              <div className="text-left pl-0.5">
                <h4 className="text-[11px] font-semibold leading-tight text-white tracking-wide">
                  Exei AI Agent
                </h4>
                <p className="text-[9px] text-emerald-100/70 font-normal leading-tight">
                  tap here for contact info
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <Store className="w-3.5 h-3.5" />
              <Phone className="w-3.5 h-3.5" />
              <MoreVertical className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="flex-1 w-full bg-[#EFEAE2] bg-[radial-gradient(#0000000d_1px,transparent_1px)] [background-size:12px_12px]" />

          <div className="p-2 bg-[#F0F2F5] flex items-center gap-2 border-t border-gray-200/40 shrink-0">
            <div className="flex-1 bg-white rounded-full px-3 py-1.5 flex items-center gap-2 shadow-2xs border border-gray-200/50">
              <Smile className="w-4 h-4 text-gray-400 shrink-0" />
              <span className="text-[11px] text-gray-400 font-normal flex-1">
                Type a message
              </span>
              <Paperclip className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <Camera className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            </div>
            <div className="w-7 h-7 rounded-full bg-[#00A884] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Mic className="w-3.5 h-3.5 fill-current" />
            </div>
          </div>
        </motion.div>

        {/* FLOATING AGENT GREETING CARD */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0, y: [0, -4, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: 0.2 },
            x: { duration: 0.5, delay: 0.2 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
          }}
          className="absolute top-[12%] -left-[14%] sm:-left-[4%] z-30 w-[220px] sm:w-[245px] bg-[#E2F7DC] p-3.5 rounded-2xl rounded-tl-xs shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-emerald-200/50 text-left"
        >
          <p className="text-[11px] sm:text-[12px] font-medium text-gray-900 leading-snug mb-3">
            Hi there 👋 I&apos;m your commerce assistant. How can I help you today?
          </p>
          <div className="space-y-1.5">
            {[
              "Check Order Status",
              "Initiate a Return",
              "Schedule Appointment",
            ].map((btn, idx) => (
              <div
                key={idx}
                className="bg-white/95 text-[#005C4B] font-semibold text-[10px] sm:text-[11px] px-3 py-1.5 rounded-full border border-emerald-100/60 text-center shadow-2xs cursor-pointer hover:bg-white"
              >
                {btn}
              </div>
            ))}
          </div>
        </motion.div>

        {/* FLOATING USER MESSAGE BUBBLE */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, y: [0, 4, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: 0.4 },
            x: { duration: 0.5, delay: 0.4 },
            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 },
          }}
          className="absolute top-[48%] -right-[10%] sm:-right-[4%] z-20 w-[180px] sm:w-[200px] bg-white p-3.5 rounded-2xl rounded-tr-xs shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-gray-100 text-left"
        >
          <p className="text-[11px] sm:text-[12px] font-normal text-gray-800 leading-relaxed">
            I&apos;d like to check my order status, please.
          </p>
        </motion.div>

        {/* DASHED LINE */}
        <div className="relative w-full h-12 z-10 flex justify-center items-center pointer-events-none">
          <svg className="w-full h-full overflow-visible">
            <motion.line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="#A0AEC0"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, -16] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>
        </div>

        {/* LANGUAGE SELECTION BADGES */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative z-20 w-full flex flex-col gap-2.5 items-center"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 w-full">
            <div className="bg-white text-gray-800 text-xs sm:text-[13px] font-semibold px-4 sm:px-5 py-2.5 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-gray-100">
              Hindi (hi-IN)
            </div>
            <div className="bg-[#00BFA5] text-white text-xs sm:text-[13px] font-semibold px-4 sm:px-5 py-2.5 rounded-xl shadow-md shadow-teal-500/20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Tamil (ta-IN)
            </div>
            <div className="bg-white text-gray-800 text-xs sm:text-[13px] font-semibold px-4 sm:px-5 py-2.5 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-gray-100">
              Telugu (te-IN)
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-3 w-full">
            <div className="bg-white text-gray-800 text-xs sm:text-[13px] font-semibold px-4 sm:px-5 py-2.5 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-gray-100">
              Marathi (mr-IN)
            </div>
            <div className="bg-white text-gray-800 text-xs sm:text-[13px] font-semibold px-4 sm:px-5 py-2.5 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-gray-100">
              Bengali (bn-IN)
            </div>
            <div className="text-gray-500 text-xs sm:text-[13px] font-medium px-3 py-2.5">
              +12 more
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ==========================================================================
   FEATURE 2 GRAPHIC COMPONENT (FIXED)
   ========================================================================== */
function AnimatedFeatureGraphic2() {
  return (
    <div className="relative w-full h-full min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] rounded-3xl bg-[#F5F6FA] flex flex-col items-center justify-center overflow-hidden p-4 sm:p-8 select-none">
      {/* Background Peach Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-12 -left-12 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] bg-[#FFD7CC]/60 rounded-full blur-3xl" />
      </div>

      {/* Canvas Wrapper */}
      <div className="relative w-full max-w-[340px] sm:max-w-[380px] flex flex-col items-center justify-center my-auto scale-[0.88] xs:scale-[0.95] sm:scale-100 origin-center">
        
        {/* TOP TRIGGER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100/80 z-20"
        >
          {/* Bell Badge Popover */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
            className="absolute -top-3.5 -left-3.5 w-12 h-12 rounded-full bg-[#EF4444] text-white flex items-center justify-center shadow-lg shadow-red-500/25 border-4 border-[#F5F6FA]"
          >
            <Bell className="w-5 h-5 fill-current" />
          </motion.div>

          {/* Card Main Inner Container - ADDED `relative` HERE */}
          <div className="bg-[#F0F1F3] rounded-xl p-2.5 flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-300 shrink-0">
              <Image
                src="/images/whatsapp-ai-agent/stripped.jpg"
                alt="Black Striped Jeans"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <span className="text-sm font-semibold text-gray-900 tracking-tight">
              Black Striped Jeans
            </span>
          </div>

          {/* Card Footer Labels */}
          <div className="mt-3 px-1 flex items-center justify-between text-xs sm:text-[13px] font-medium">
            <span className="text-gray-900 font-semibold">Cart Abandoned</span>
            <span className="text-gray-900 font-semibold">Trigger</span>
          </div>
        </motion.div>

        {/* DASHED VERTICAL CONNECTING LINE */}
        <div className="relative w-full h-16 flex justify-center items-center pointer-events-none my-1">
          <svg className="w-full h-full overflow-visible">
            <motion.line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="#94A3B8"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, -16] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>
        </div>

        {/* MIDDLE CHAT MESSAGE BUBBLE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="w-full bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100/80 mb-4 z-20 text-left"
        >
          <p className="text-sm sm:text-[15px] font-normal text-gray-800 leading-relaxed tracking-tight">
            Hey Sofia! 🛒 You left some items in your cart 2 days ago. Want to complete your order?
          </p>
        </motion.div>

        {/* BOTTOM CART CHECKOUT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="w-full bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100/80 z-20"
        >
          {/* Cart Item 1 */}
          <div className="flex items-center gap-3 mb-3">
            <div className="relative w-12 h-12 rounded-xl bg-[#F5F2EB] p-1.5 shrink-0 flex items-center justify-center">
              <Image
                src="/images/whatsapp-ai-agent/leather.png"
                alt="Leather Shoulder Bag"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-left">
              <h5 className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">
                Leather Shoulder Bag
              </h5>
              <p className="text-xs text-gray-500 font-medium mt-0.5">$120.00</p>
            </div>
          </div>

          {/* Cart Item 2 */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-12 h-12 rounded-xl bg-[#EBECE7] p-1.5 shrink-0 flex items-center justify-center">
              <Image
                src="/images/whatsapp-ai-agent/minimilist.png"
                alt="Minimalist Ceramic Mug"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-left">
              <h5 className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">
                Minimalist Ceramic Mug
              </h5>
              <p className="text-xs text-gray-500 font-medium mt-0.5">$24.00</p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gray-100 mb-3" />

          {/* Total Row */}
          <div className="flex items-center justify-between mb-3 text-xs sm:text-sm font-semibold text-gray-900">
            <span className="text-gray-500 font-normal">Total:</span>
            <span className="text-sm sm:text-base font-bold">$144.00</span>
          </div>

          {/* Action Button */}
          <button className="w-full bg-black text-white font-medium text-xs sm:text-sm py-2.5 rounded-xl transition-transform active:scale-[0.98]">
            Complete Purchase
          </button>
        </motion.div>

      </div>
    </div>
  );
}

/* ==========================================================================
   TYPES & DATA
   ========================================================================== */
interface FeaturePoint {
  title: string;
  description: string;
}

interface FeatureSectionData {
  id: number;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageSide: "left" | "right";
  points: FeaturePoint[];
}

const featureSections: FeatureSectionData[] = [
  {
    id: 1,
    title: "24/7 Customer Care with WhatsApp AI Agent",
    subtitle:
      "Answer questions instantly, resolve order issues, and reduce wait times using built-in WhatsApp Automation.",
    ctaText: "Explore WhatsApp Automation",
    ctaLink: "#",
    imageSide: "right",
    points: [
      {
        title: "Instant Support in 80+ Languages",
        description:
          "Provide immediate answers to product questions, store policies, and shipping queries in your customer's preferred language.",
      },
      {
        title: "Automated Order Updates & Ticket Creation",
        description:
          "Let buyers check order status, initiate returns, or schedule appointments directly in chat.",
      },
      {
        title: "Smooth Human Handover",
        description:
          "Automatically route complex inquiries or high-value issues to live support staff with full conversation history attached.",
      },
    ],
  },
  {
    id: 2,
    title: "Drive In-Chat Sales with a AI WhatsApp Chatbot",
    subtitle:
      "Guide buyers from initial product discovery to completed checkout without sending them away from WhatsApp.",
    ctaText: "Explore WhatsApp Broadcasts",
    ctaLink: "#",
    imageSide: "left",
    points: [
      {
        title: "Personalized Product Suggestions",
        description:
          "Suggest catalog items based on customer preferences, past purchases, and intent data.",
      },
      {
        title: "Cart Recovery & Restock Alerts",
        description:
          "Trigger timely notifications for abandoned carts, back-in-stock items, and special promotions.",
      },
      {
        title: "Cross-Sell and Upsell Opportunities",
        description:
          "Offer complementary items and bundle deals right when buyer interest is highest.",
      },
    ],
  },
];

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const cardSlideIn: Variants = {
  hidden: { opacity: 0, y: 25, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const iconPop: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.15,
    },
  },
};

/* ==========================================================================
   SINGLE FEATURE BLOCK COMPONENT (STICKY STACKED)
   ========================================================================== */
function FeatureCardBlock({
  section,
  index,
}: {
  section: FeatureSectionData;
  index: number;
}) {
  const isImageRight = section.imageSide === "right";

  return (
    <div
      className="sticky top-[30px] w-full"
      style={{ zIndex: index + 10 }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-gray-200/80 overflow-hidden mb-12 sm:mb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Content Column */}
          <div
            className={`lg:col-span-6 flex flex-col justify-between ${
              isImageRight ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div>
              {/* Main Title */}
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl lg:text-[32px] pt-2 sm:pt-4 pb-2 sm:pb-4 font-semibold text-gray-900 leading-tight tracking-tight mb-2"
              >
                {section.title}
              </motion.h2>

              {/* Subtitle / Description */}
              <motion.p
                variants={fadeInUp}
                className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 font-normal"
              >
                {section.subtitle}
              </motion.p>

              {/* Vertical Feature Cards List */}
              <div className="space-y-5">
                {section.points.map((point, idx) => (
                  <motion.div
                    key={idx}
                    variants={cardSlideIn}
                    className="relative pt-3"
                  >
                    {/* Floating Orange Icon Circle */}
                    <motion.div
                      variants={iconPop}
                      className="absolute -top-1 left-4 z-10 w-9 h-9 rounded-full bg-[#FF5E2C] text-white flex items-center justify-center shadow-sm"
                    >
                      <Megaphone className="w-4 h-4 fill-current text-white stroke-1" />
                    </motion.div>

                    {/* Card Container */}
                    <div className="bg-[#F8F9FA] border border-gray-100 rounded-2xl p-5 pt-6 hover:border-orange-200 transition-colors duration-300">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                        {point.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Link Button Below Content */}
            <motion.div variants={fadeInUp} className="mt-8 pt-2">
              <a
                href={section.ctaLink}
                className="group inline-flex items-center gap-2 text-[#FF5E2C] font-medium text-base hover:text-[#E64A19] transition-colors duration-200"
              >
                <span className="underline underline-offset-4 decoration-[#FF5E2C]/40 group-hover:decoration-[#E64A19]">
                  {section.ctaText}
                </span>
                <motion.span
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </a>
            </motion.div>
          </div>

          {/* Graphic Display Column */}
          <motion.div
            variants={fadeInUp}
            className={`lg:col-span-6 w-full ${
              isImageRight ? "lg:order-2" : "lg:order-1"
            }`}
          >
            {section.id === 1 ? (
              <AnimatedFeatureGraphic1 />
            ) : (
              <AnimatedFeatureGraphic2 />
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/* ==========================================================================
   MAIN MULTI-CARD FEATURE SECTION WITH STACKING EFFECT
   ========================================================================== */
export default function FeaturesSection() {
  return (
    <section className="relative w-full bg-[#FBFBFC] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto relative pb-20">
        {featureSections.map((section, index) => (
          <FeatureCardBlock
            key={section.id}
            section={section}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}