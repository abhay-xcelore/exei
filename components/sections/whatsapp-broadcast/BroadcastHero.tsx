"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ScaleOperationsHero() {
  return (
    <section className="relative w-full bg-black text-white font-[var(--font-poppins)] overflow-hidden rounded-[2rem] pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-28 md:pb-36 px-6 md:px-12 lg:px-16">
      {/* Full-width Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/bg-img.png"
          alt="WhatsApp Automation Background"
          fill
          className="object-cover object-bottom opacity-75"
          priority
        />
        {/* Subtle Top Dark Gradient Overlay for optimal readability */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent" />
      </div>

      {/* Center-aligned Content Area (Constrained to max-w-7xl) */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold text-white tracking-tight leading-[1.15] max-w-4xl mb-5">
          Turn Every WhatsApp Broadcast Message into a Sale
        </h1>

        {/* Subtitle / Description */}
        <p className="text-gray-300 text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10">
          Deliver personalized offers and updates straight to buyer inboxes using an official broadcast message for whatsapp that turns casual chats into direct sales.
        </p>

        {/* Primary Call To Action Button */}
        <button
          type="button"
          className="group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#FF5E2C] via-[#FF692E] to-[#FF7A28] text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
        >
          <span>See How It Works</span>
          <div className="w-5 h-5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <ArrowRight className="w-3 h-3 text-white" strokeWidth={2.5} />
          </div>
        </button>

      </div>
    </section>
  );
}