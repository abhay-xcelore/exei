"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

interface InsightItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const insights: InsightItem[] = [
  {
    id: "shopping-behavior",
    title: "Shopping Behavior Tracking",
    description:
      "Track browsing patterns, product queries, and conversion signals in real time to optimize merchandising.",
    imageSrc: "/images/insights/shopping-behavior.png",
    imageAlt: "Shopping Behavior Tracking Preview",
  },
  {
    id: "customer-service",
    title: "Customer Service Agent",
    description:
      "Analyze support ticket trends, customer query frequency, and satisfaction metrics to continually improve automated responses.",
    imageSrc: "/images/insights/customer-service.png",
    imageAlt: "Customer Service Analytics Preview",
  },
  {
    id: "growth-agent",
    title: "Growth Agent",
    description:
      "Measure channel performance, broadcast conversion rates, and revenue attribution across all proactive outreach campaigns.",
    imageSrc: "/images/insights/growth-agent.png",
    imageAlt: "Growth Analytics Preview",
  },
];

export default function CustomerInsightsSection() {
  const [activeId, setActiveId] = useState<string>("shopping-behavior");

  const activeInsight =
    insights.find((item) => item.id === activeId) || insights[0];

  const toggleAccordion = (id: string) => {
    setActiveId(id);
  };

  return (
    <section className="w-full bg-[#FBFBFC] text-gray-900 font-[var(--font-poppins)] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-tight mb-3">
            Customer Insights & Conversion Analytics
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-normal m-0">
            Turn customer interactions across support, shopping, and outreach into actionable business intelligence.
          </p>
        </div>

        {/* Interactive Showcase Grid: Left Image, Right Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Dynamic Showcase Image Card */}
          <div className="lg:col-span-7 w-full h-[360px] sm:h-[450px] lg:h-[500px] relative bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeInsight.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-gray-100/40 p-6 flex flex-col items-center justify-center text-center">
                  <Image
                    src={activeInsight.imageSrc}
                    alt={activeInsight.imageAlt}
                    fill
                    className="object-contain p-4 sm:p-8"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  {/* Placeholder label when image is not present */}
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-widest pointer-events-none">
                    {activeInsight.title} Visual Preview
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 order-1 lg:order-2">
            {insights.map((item) => {
              const isOpen = activeId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => toggleAccordion(item.id)}
                  className={`cursor-pointer rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? "bg-white border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-5 sm:p-6"
                      : "bg-white/80 hover:bg-white border-gray-100/60 p-5 sm:p-6"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 tracking-tight m-0">
                      {item.title}
                    </h3>
                    <button
                      type="button"
                      aria-label={isOpen ? "Collapse" : "Expand"}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                        isOpen
                          ? "bg-gray-100 text-gray-800"
                          : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {isOpen ? (
                        <X className="w-4 h-4" strokeWidth={2.5} />
                      ) : (
                        <Plus className="w-4 h-4" strokeWidth={2.5} />
                      )}
                    </button>
                  </div>

                  {/* Expandable Content Area */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal pt-3.5 sm:pt-4 m-0">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}