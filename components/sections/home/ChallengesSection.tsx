"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Layout, Headphones, TrendingUp, Share2 } from "lucide-react";

const leftChallenges = [
  {
    icon: Layout,
    title: "Convert Browsers",
    description:
      "Our Shopping Assistant recommends products, answers catalog questions, and guides shoppers to checkout.",
  },
  {
    icon: Headphones,
    title: "Automate Support",
    description:
      "Our Customer Service Agent resolves WISMO, order status, and COD queries 24/7 without extra staff.",
  },
];

const rightChallenges = [
  {
    icon: TrendingUp,
    title: "Boost Repeat Sales",
    description:
      "Our Growth Agent triggers automated reorder nudges, win-backs, and loyalty campaigns via WhatsApp & Voice.",
  },
  {
    icon: Share2,
    title: "Unified Omnichannel",
    description:
      "Our AI agents deploy seamlessly across WhatsApp, Instagram, Web, and Voice under one roof.",
  },
];

export default function ChallengesSection() {
  return (
    <section className="bg-[#FAFAFA] text-gray-900 pt-0 pb-10 md:pb-14 px-6 font-[var(--font-poppins)]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header with Custom Bottom Margins */}
        <div className="flex flex-col items-center text-center mb-6 md:mb-8">
          
          {/* "The Exei Advantage" Pill Badge */}
          <div className="relative inline-flex items-center justify-center mb-6">
            {/* Top Glowing Orange Accent Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/5 h-[2px] bg-gradient-to-r from-transparent via-[#FF5E2C] to-transparent z-20 blur-[0.5px]" />

            {/* Main Pill Container */}
            <div className="relative z-10 bg-gradient-to-b from-white/95 via-white/85 to-[#FFEFE9] border border-orange-100/60 rounded-full px-4 sm:px-6 py-0.5 sm:py-1.5 overflow-hidden">
              {/* Inner Ambient Glow at Bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#FFD2C3]/40 to-transparent pointer-events-none" />

              <span className="relative z-10 text-gray-950 text-xs font-normal tracking-tight">
                The Exei Advantage
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 tracking-tight leading-tight">
            Ecommerce Challenges We Eliminate
          </h2>
        </div>

        {/* Grid Layout: 2 Cards Left - Image Center - 2 Cards Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column (2 Cards) */}
          <div className="lg:col-span-4 flex flex-col gap-6 justify-between">
            {leftChallenges.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white border border-gray-100/80 rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-shadow flex-1 justify-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF5E2C] to-[#FF7A28] text-white flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Center Column (Featured Image Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block lg:col-span-4 relative rounded-3xl overflow-hidden min-h-[380px] lg:min-h-full border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
          >
            <Image
              src="/images/challenge.png"
              alt="Ecommerce Challenge Solution"
              fill
              className="object-cover object-bottom"
              priority
            />
          </motion.div>

          {/* Right Column (2 Cards) */}
          <div className="lg:col-span-4 flex flex-col gap-6 justify-between">
            {rightChallenges.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                  className="bg-white border border-gray-100/80 rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-shadow flex-1 justify-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF5E2C] to-[#FF7A28] text-white flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}