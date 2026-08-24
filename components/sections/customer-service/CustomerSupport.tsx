"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeftRight,
  PackageCheck,
  RotateCcw,
  Pencil,
  HelpCircle,
  ShieldCheck,
  ShoppingCart,
  Bell,
  RefreshCw,
} from "lucide-react";

// Inbound Items (Left Side)
const inboundFeatures = [
  {
    icon: PackageCheck,
    title: "WISMO & Order Status",
    description:
      "Instantly resolves order tracking, shipping dates, and courier questions before they turn into tickets.",
  },
  {
    icon: RotateCcw,
    title: "End-to-End Returns & Exchanges",
    description:
      "Starts returns, issues return labels, and updates inventory without human agent delay.",
  },
  {
    icon: Pencil,
    title: "Order Edits Before Dispatch",
    description:
      "Updates shipping addresses, modifies items, or processes cancellations directly in Shopify.",
  },
  {
    icon: HelpCircle,
    title: "Instant Store FAQ Answers",
    description:
      "Answers policies, size guides, and product questions 24/7 directly from your documentation.",
  },
];

// Outbound Items (Right Side)
const outboundFeatures = [
  {
    icon: ShieldCheck,
    title: "COD Order Verification",
    description:
      "Sends automated confirmation messages the second a cash-on-delivery order is placed.",
  },
  {
    icon: ShoppingCart,
    title: "Abandoned Cart Recovery",
    description:
      "Sends timely nudges on WhatsApp/Instagram to bring high-intent shoppers back to checkout.",
  },
  {
    icon: Bell,
    title: "Shipping & Delivery Alerts",
    description:
      "Dispatches proactive alerts for order confirmations, dispatches, and out-of-delivery milestones.",
  },
  {
    icon: RefreshCw,
    title: "Smart Reorder Reminders",
    description:
      "Triggers automated replenishment prompts for consumable items based on past order cycles.",
  },
];

export default function CustomerSupportCoverage() {
  return (
    <section className="relative w-full bg-[#0A0A0A] text-white py-8 sm:py-12 md:py-14 font-[var(--font-poppins)] overflow-hidden rounded-2xl mx-2 mx-auto">
      
      {/* Background Image Layer — Full Width */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/bg-img.png" // Replace with your dark/orange background texture image
          alt="Support Coverage Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom opacity-60 mix-blend-screen"
        />
      </div>

      {/* Main Content Container — Limited to max-w-7xl */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-[38px] font-medium text-white tracking-tight leading-tight mb-4"
          >
            One AI Agent for Complete Customer <br className="hidden sm:inline" />
            Support Coverage
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed m-0"
          >
            Meet the Exei AI Agent for Customer Support Built for Inbound Resolutions & Outbound Engagement.
          </motion.p>
        </div>

        {/* Dual Card Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-white shadow-2xl"
        >
          {/* Central Connector Icon Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-b from-[#FF6B38] to-[#FF4D00] text-white flex items-center justify-center shadow-lg shadow-orange-500/30 border-2 border-black/40"
            >
              {/* Rotates icon 90 degrees on mobile for vertical flow alignment */}
              <ArrowLeftRight className="w-4 h-4 sm:w-5 sm:h-5 rotate-90 lg:rotate-0 transition-transform duration-300" />
            </motion.div>
          </div>

          {/* LEFT COLUMN — Inbound Query Resolution (Translucent Dark Side) */}
          <div className="bg-black/60 backdrop-blur-md p-6 sm:p-8 md:p-10 text-white flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative rounded-l-2xl">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-8">
                Inbound Query Resolution
              </h3>

              <div className="space-y-6 sm:space-y-7">
                {inboundFeatures.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * idx }}
                      className="flex items-start gap-3.5 group"
                    >
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FF551D]/15 border border-[#FF551D]/30 text-[#FF551D] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-white mb-1 tracking-tight">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed m-0">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — Outbound Event Triggers (Solid White Side) */}
          <div className="bg-white p-6 sm:p-8 md:p-10 text-gray-900 flex flex-col justify-between relative">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight mb-8">
                Outbound Event Triggers
              </h3>

              <div className="space-y-6 sm:space-y-7">
                {outboundFeatures.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * idx }}
                      className="flex items-start gap-3.5 group"
                    >
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FF551D]/10 border border-[#FF551D]/20 text-[#FF551D] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 tracking-tight">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed m-0">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}