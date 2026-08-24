"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

export default function Hero() {
  return (
    <section className="relative p-3 min-h-[auto] md:min-h-screen w-full flex items-center justify-center pt-28 pb-12 md:pt-36 md:pb-36 rounded-[1.5rem] overflow-hidden font-[var(--font-poppins)]">
      
      {/* Background Image (Top-Right Aligned on Mobile, Right/Center on Desktop) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/shopping-assistant/shoppingg-hero.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-[85%_top] sm:object-right"
        />
      </div>

      {/* Gradient Overlay: Solid Black on Left (~50%), Fading to Transparent on Right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 md:via-black/55 to-transparent z-10" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        
        {/* Left Column Content */}
        <div className="max-w-3xl text-white flex flex-col items-start gap-5">
          <Reveal className="w-full">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-tight tracking-tight m-0 p-0">
              Drive Full-Funnel Repeat Sales with a Growth Agent
            </h1>
          </Reveal>

          <Reveal delay={0.1} className="w-full">
            <p className="text-[#E7E7E7] text-sm sm:text-base max-w-xl leading-relaxed m-0 pb-3">
              Run two-way WhatsApp and Voice campaigns, seasonal drops, win-back flows, and loyalty journeys — personalized by purchase history.
            </p>
          </Reveal>

          {/* CTA Button */}
          <div className="m-0 p-0">
            <button className="inline-flex items-center gap-3 bg-gradient-to-b from-[#FF7E38] via-[#FF520B] to-[#EF3800] hover:from-[#FF8B4D] hover:to-[#FF3800] text-white font-normal text-xs px-3 py-1.5 rounded-full shadow-[0_10px_25px_-5px_rgba(255,82,11,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              <span className="tracking-wide">See How It Works</span>
              <div className="w-7 h-7 rounded-full bg-gradient-to-b from-white/30 to-white/5 border border-white/40 shadow-inner flex items-center justify-center -mr-1">
                <ArrowRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}