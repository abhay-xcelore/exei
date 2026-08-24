"use client";

import Image from "next/image";

export default function ConversationalShoppingSection() {
  return (
    <section className="relative w-full bg-black text-white font-[var(--font-poppins)] overflow-hidden rounded-2xl pt-8 md:pt-10 lg:pt-14 pb-10 md:pb-12 lg:pb-14 px-6 md:px-12 lg:px-16">
      {/* Full-width Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/bg-img.png"
          alt="Conversational Shopping Background"
          fill
          className="object-cover object-bottom opacity-75"
          priority
        />
        {/* Top gradient fade to keep header text clear */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent" />
      </div>

      {/* Content Container (Constrained to max-w-7xl) */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-white tracking-tight leading-[1.2] mb-4">
            End-to-End Conversational Shopping with Shopify AI Agents
          </h2>
          <p className="text-gray-300 text-sm sm:text-base font-normal leading-relaxed m-0">
            Guide shoppers smoothly from initial discovery to long-term loyalty.
          </p>
        </div>

        {/* Blank Container Area (Ready for cards, media, or interactive elements) */}
        <div className="w-full min-h-[300px] sm:min-h-[360px] lg:min-h-[380px] flex items-center justify-center">
          {/* 
            Your future content (cards/images/components) goes here.
          */}
        </div>

      </div>
    </section>
  );
}