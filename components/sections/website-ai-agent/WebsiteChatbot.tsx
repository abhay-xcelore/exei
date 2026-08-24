"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Megaphone } from "lucide-react";

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
  imageSrc: string;
  imageAlt: string;
}

const featureSections: FeatureSectionData[] = [
  {
    id: 1,
    title: "Intelligent Website AI Chatbot Engaging Visitors 24/7",
    subtitle:
      "Initiate real-time conversations with AI chatbot for websites that have tailored responses and proactive nudges driven by our Shopping Assistant agent.",
    imageSide: "right",
    imageSrc: "/images/website-ai-agent/visitors.png",
    imageAlt: "Intelligent Website AI Chatbot Interface Preview",
    points: [
      {
        title: "Browsing-Based Engagement",
        description:
          "Start conversations based on what visitors are viewing and their past interactions.",
      },
      {
        title: "Product Recommendations",
        description:
          "Exei's Shopping Assistant suggests relevant products with product cards and direct add-to-cart options with AI chat automation.",
      },
      {
        title: "Personalized Offers",
        description:
          "Share relevant offers, new arrivals, and stock updates based on customer interest to drive repeat purchases and AOV.",
      },
    ],
  },
  {
    id: 2,
    title: "AI powered Chat for Customer Support",
    subtitle:
      "Execute instant backend actions through a customer service AI chatbot solution for ecommerce on your live chat website widget.",
    imageSide: "left",
    imageSrc: "/images/website-ai-agent/chat.png",
    imageAlt: "AI Customer Support Interface Preview",
    points: [
      {
        title: "Instant Order & Support Actions",
        description:
          "Update orders, track WISMO requests, schedule appointments, and raise support tickets through Exei's Customer Service Agent.",
      },
      {
        title: "Feedback & Escalations",
        description:
          "AI chatbot collects feedback automatically and hand off complex issues to human agents when needed.",
      },
      {
        title: "24/7 Query Resolution",
        description:
          "Handle returns, cancellations, and product questions instantly across 80+ languages.",
      },
    ],
  },
  {
    id: 3,
    title: "Automate & Qualify Leads",
    subtitle:
      "Don't let high-intent visitors drop off. Turn every chat into a qualified sales opportunity with an AI Agent for the website.",
    imageSide: "right",
    imageSrc: "/images/website-ai-agent/qualify.png",
    imageAlt: "Lead Qualification AI Agent Preview",
    points: [
      {
        title: "Intelligent Lead Capture",
        description:
          "Our Website AI chatbot engages visitors in real time, captures their details, understands their interests, and picks up buying signals directly from the conversation.",
      },
      {
        title: "Faster Conversions",
        description:
          "Capture buyer intent while the customer is actively exploring, helping your sales team follow up faster without relying on static contact forms.",
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
      className="sticky top-0 mb-8 last:mb-0"
      style={{
        zIndex: index + 1,
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-100/80 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Content Column */}
          <div
            className={`lg:col-span-6 flex flex-col justify-center ${
              isImageRight ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {/* Main Title */}
            <motion.h2
              variants={fadeInUp}
              className="text-xl sm:text-2xl lg:text-[28px] font-medium text-gray-900 leading-tight tracking-tight mb-2 sm:mb-3"
            >
              {section.title}
            </motion.h2>

            {/* Subtitle / Description */}
            <motion.p
              variants={fadeInUp}
              className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 font-normal"
            >
              {section.subtitle}
            </motion.p>

            {/* Vertical Feature Cards List */}
            <div className="space-y-3">
              {section.points.map((point, idx) => (
                <motion.div
                  key={idx}
                  variants={pointCardVariants}
                  className="relative pt-3"
                >
                  {/* Floating Orange Icon Circle */}
                  <div className="absolute -top-1 left-4 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FF5E2C] text-white flex items-center justify-center shadow-md shadow-orange-500/20">
                    <Megaphone className="w-3.5 h-3.5 fill-current text-white stroke-1" />
                  </div>

                  {/* Card Container */}
                  <div className="bg-[#F8F9FA] border border-gray-100/60 rounded-2xl p-3 sm:p-4 pt-5 sm:pt-6">
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-0.5">
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

          {/* Image Display Column */}
          <motion.div
            variants={fadeInUp}
            className={`lg:col-span-6 w-full flex items-center justify-center ${
              isImageRight ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="w-full h-[380px] sm:h-[520px] lg:h-[560px] rounded-2xl relative overflow-hidden bg-transparent">
              <Image
                src={section.imageSrc}
                alt={section.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={section.id === 1}
                className="object-cover rounded-2xl p-1"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/* ==========================================================================
   MAIN MULTI-CARD FEATURE SECTION
   ========================================================================== */
export default function FeaturesSection() {
  return (
    <section className="w-full bg-[#FBFBFC] py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto relative">
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