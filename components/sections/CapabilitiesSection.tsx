// components/sections/CapabilitiesSection.tsx
"use client";

import { motion } from "framer-motion";
import SmartSegmentationGraphic from "@/components/ui/SmartSegmentationGraphic";
import DeliveryRetryGraphic from "@/components/ui/DeliveryRetryGraphic";
import BuyingIntentGraphic from "@/components/ui/BuyingIntentGraphic";
import ChannelOrbitGraphic from "@/components/ui/ChannelOrbitGraphic";
import Reveal from "@/components/animations/Reveal";
import RevealGroup, { revealItemVariants } from "@/components/animations/RevealGroup";

const capabilities = [
  {
    id: "segmentation",
    title: "Smart Segmentation",
    description:
      "Build audiences from purchase behaviour, order history, and engagement.",
    gridSpan: "col-span-12 md:col-span-5",
  },
  {
    id: "retry",
    title: "Delivery Retry Logic",
    description:
      "WhatsApp doesn't go through? Automatic retry on WhatsApp and voice.",
    gridSpan: "col-span-12 md:col-span-7",
  },
  {
    id: "signals",
    title: "Buying Intent Signals",
    description:
      "See who added to cart, asked about price, or had a long conversation.",
    gridSpan: "col-span-12 md:col-span-7",
  },
  {
    id: "conversations",
    title: "Unified Conversations",
    description:
      "Every conversation across every agent and channel — filterable, searchable, actionable.",
    gridSpan: "col-span-12 md:col-span-5",
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="bg-[#FAFAFA] text-gray-900 pt-0 pb-10 md:pb-14 px-6 font-[var(--font-poppins)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Custom Margins */}
        <div className="flex flex-col items-center text-center mb-4 md:mb-6">
          {/* Badge */}
          <div className="relative inline-flex items-center justify-center mb-6">
            {/* Top Glowing Orange Accent Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/5 h-[2px] bg-gradient-to-r from-transparent via-[#FF5E2C] to-transparent z-20 blur-[0.5px]" />

            {/* Main Badge Container */}
            <div className="relative z-10 bg-gradient-to-b from-white/90 via-white/80 to-[#FFEFE9] border border-orange-100/60 rounded-full px-4 sm:px-6 py-0.5 sm:py-1.5 overflow-hidden">
              {/* Inner Ambient Glow at Bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#FFD2C3]/40 to-transparent pointer-events-none" />
              
              <span className="relative z-10 text-gray-950 text-xs font-normal tracking-tight">
                The Capabilities
              </span>
            </div>
          </div>

          {/* Heading */}
          <Reveal>
            <h2 className="text-xl sm:text-2xl lg:text-[36px] font-medium text-gray-900 tracking-tight leading-tight max-w-3xl mb-4">
              The Features that Quietly Move the Needle
            </h2>
          </Reveal>

          {/* Subtitle / Description */}
          <Reveal delay={0.1}>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Our AI agents do more than answer questions. They understand your
              business, work within your workflows, and turn customer
              conversations into meaningful experiences, actions, and revenue.
            </p>
          </Reveal>
        </div>

        {/* Asymmetric 2x2 Feature Grid */}
        <div className="grid grid-cols-12 gap-6">
          {capabilities.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`${item.gridSpan} bg-white border border-gray-100/80 rounded-3xl p-2 sm:p-4 flex flex-col justify-start shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-300 group`}
            >
              {/* Graphic Area */}
              <div className="w-full flex-none h-[260px] sm:h-[280px] bg-[#FAFAFA] rounded-2xl overflow-hidden mb-4 relative flex items-center justify-center border border-gray-100/80">
                {item.id === "segmentation" ? (
                  <SmartSegmentationGraphic />
                ) : item.id === "retry" ? (
                  <DeliveryRetryGraphic />
                ) : item.id === "signals" ? (
                  <BuyingIntentGraphic />
                ) : item.id === "conversations" ? (
                  <ChannelOrbitGraphic logoSrc="/images/exei-mark.png" />
                ) : (
                  <div className="text-xs text-gray-400">
                    Graphic Placeholder
                  </div>
                )}
              </div>

              {/* Text Block inside Card */}
              <div className="flex-1 flex flex-col justify-start px-1 pb-1">
                <h3 className="text-lg sm:text-xl font-medium text-gray-900 leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}