"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const capabilities: CapabilityItem[] = [
  {
    id: "shopping-assistant",
    title: "Shopping Assistant",
    description:
      "Acts as a personal shopping assistant for every visitor. Queries your live catalog in real time, suggests curated comparisons, provides fit guidance, and drives high-intent upsells and cross-sells directly to checkout.",
    imageSrc: "/images/capabilities/shopping-assistant.png",
    imageAlt: "Shopping Assistant Capability Preview",
  },
  {
    id: "customer-service",
    title: "Customer Service Agent",
    description:
      "Handles 24/7 post-purchase support, instant WISMO order tracking, returns, cancellations, and complex escalations automatically across 80+ languages.",
    imageSrc: "/images/capabilities/customer-service.png",
    imageAlt: "Customer Service Agent Capability Preview",
  },
  {
    id: "growth-agent",
    title: "Growth Agent",
    description:
      "Proactively re-engages abandoned carts, triggers back-in-stock notifications, and drives personalized re-order broadcasts to maximize customer lifetime value.",
    imageSrc: "/images/capabilities/growth-agent.png",
    imageAlt: "Growth Agent Capability Preview",
  },
];

export default function CapabilitiesSection() {
  const [activeId, setActiveId] = useState<string>("shopping-assistant");

  const activeCapability =
    capabilities.find((item) => item.id === activeId) || capabilities[0];

  const toggleAccordion = (id: string) => {
    // Keeps at least one open if clicked again, or allows toggling
    setActiveId(id);
  };

  return (
    <section className="w-full bg-[#FBFBFC] text-gray-900 font-[var(--font-poppins)] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-tight mb-3">
            Capabilities That Go Beyond Basic Automation
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-normal m-0">
            Each ai agent focuses on a distinct stage of the shopper lifecycle.
          </p>
        </div>

        {/* Accordion & Interactive Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Accordion List */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {capabilities.map((item) => {
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

          {/* Right Column: Dynamic Showcase Card */}
          <div className="lg:col-span-7 w-full h-[360px] sm:h-[450px] lg:h-[500px] relative bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCapability.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* 
                  Replace src with your actual image paths once ready. 
                  Below includes a clean fallback state overlay.
                */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-gray-100/40 p-6 flex flex-col items-center justify-center text-center">
                  <Image
                    src={activeCapability.imageSrc}
                    alt={activeCapability.imageAlt}
                    fill
                    className="object-contain p-4 sm:p-8"
                    onError={(e) => {
                      // Hide image if src is not yet available
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  {/* Visual Placeholder Label when image path is missing */}
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-widest pointer-events-none">
                    {activeCapability.title} Interactive Preview
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}