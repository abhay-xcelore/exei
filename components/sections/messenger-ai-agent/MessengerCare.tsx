"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Megaphone, ArrowRight } from "lucide-react";

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
  points: FeaturePoint[];
  imageSide: "left" | "right";
  ctaText: string;
  ctaHref: string;
}

const featureSections: FeatureSectionData[] = [
  {
    id: 1,
    title: "24/7 Customer Care with Messenger AI Agent",
    subtitle:
      "Answer questions instantly, resolve order issues, and reduce wait times using built-in Messenger Automation.",
    imageSide: "right",
    ctaText: "Explore Messenger Automation",
    ctaHref: "#",
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
    title: "Drive In-Chat Sales with an AI Messenger Chatbot",
    subtitle:
      "Guide buyers from initial product discovery to completed checkout without sending them away from Messenger.",
    imageSide: "left",
    ctaText: "Explore Messenger Broadcasts",
    ctaHref: "#",
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
  {
    id: 3,
    title: "Drive In-Chat Sales with an AI Messenger Chatbot",
    subtitle:
      "Guide buyers from initial product discovery to completed checkout without sending them away from Messenger.",
    imageSide: "right",
    ctaText: "Explore Messenger Broadcasts",
    ctaHref: "#",
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

const pointCardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ==========================================================================
   SINGLE FEATURE BLOCK COMPONENT
   ========================================================================== */
function FeatureCardBlock({ section }: { section: FeatureSectionData }) {
  const isImageRight = section.imageSide === "right";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
      className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 last:mb-0 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Content Column */}
        <div
          className={`lg:col-span-6 flex flex-col ${
            isImageRight ? "lg:order-1" : "lg:order-2"
          }`}
        >
          {/* Main Title */}
          <motion.h2
            variants={fadeInUp}
            className="text-xl sm:text-2xl lg:text-[28px] font-medium text-gray-900 leading-tight tracking-tight mb-3 sm:mb-4"
          >
            {section.title}
          </motion.h2>

          {/* Subtitle / Description */}
          <motion.p
            variants={fadeInUp}
            className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 font-normal"
          >
            {section.subtitle}
          </motion.p>

          {/* Vertical Feature Cards List */}
          <div className="space-y-4 sm:space-y-5">
            {section.points.map((point, idx) => (
              <motion.div
                key={idx}
                variants={pointCardVariants}
                className="relative pt-3"
              >
                {/* Floating Orange Icon Circle */}
                <div className="absolute -top-1 left-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FF5E2C] text-white flex items-center justify-center shadow-md shadow-orange-500/20">
                  <Megaphone className="w-4 h-4 fill-current text-white stroke-1" />
                </div>

                {/* Card Container */}
                <div className="bg-[#F8F9FA] border border-gray-100/80 rounded-2xl p-4 sm:p-5 pt-6 sm:pt-7">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal m-0">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Clickable CTA Link */}
          <motion.div variants={fadeInUp} className="mt-6 sm:mt-8">
            <a
              href={section.ctaHref}
              className="group inline-flex items-center gap-2 text-[#FF5E2C] hover:text-[#e04d1f] font-medium text-sm sm:text-base transition-colors duration-200"
            >
              <span>{section.ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* Image Display Column */}
        <motion.div
          variants={fadeInUp}
          className={`lg:col-span-6 w-full ${
            isImageRight ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div className="w-full h-[380px] sm:h-[500px] lg:h-[600px] rounded-2xl bg-[#FDEAE1] flex items-center justify-center overflow-hidden relative">
            {/* Soft Warm Glow Backdrop Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FDEAE1] via-[#FFF5F0] to-[#FDEAE1]" />
            
            {/* Visual Placeholder Content / Image Container */}
            <div className="relative z-10 text-center p-6">
              <span className="text-sm font-semibold text-[#FF5E2C]/60 uppercase tracking-widest">
                Interactive Showcase Block {section.id}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ==========================================================================
   MAIN MULTI-CARD FEATURE SECTION
   ========================================================================== */
export default function FeaturesSection() {
  return (
    <section className="w-full bg-[#FBFBFC] py-10 sm:py-14 px-4 sm:px-6 lg:px-8 font-[var(--font-poppins)]">
      <div className="max-w-[1240px] mx-auto">
        {featureSections.map((section) => (
          <FeatureCardBlock key={section.id} section={section} />
        ))}
      </div>
    </section>
  );
}