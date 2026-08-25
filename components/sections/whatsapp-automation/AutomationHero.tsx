"use client";

import Image from "next/image";
import { ArrowRight, Languages } from "lucide-react";

/* Custom Meta / Infinity SVG Icon */
const MetaIcon = () => (
  <svg
    className="w-5 h-5 text-[#0081FB] shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 12c-1.657 0-3-1.075-3-2.4 0-1.326 1.343-2.4 3-2.4s3 1.074 3 2.4c0 1.325-1.343 2.4-3 2.4zm-6.5-2.4C5.5 7.61 3.933 6 2 6S0 8.015 0 10.5 1.933 15 3.833 15c1.833 0 3.334-1.29 4.334-2.88 1.002 1.59 2.502 2.88 4.333 2.88 1.9 0 3.833-2.015 3.833-4.5S18.5 6 16.567 6c-1.933 0-3.5 1.61-3.5 3.6 0 .343.048.673.138.983-.711.835-1.74 1.417-2.705 1.417-.965 0-1.994-.582-2.705-1.417.09-.31.138-.64.138-.983z" />
  </svg>
);

/* Custom Shopify Bag SVG Icon */
const ShopifyIcon = () => (
  <svg
    className="w-4 h-4 text-[#95BF47] shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.825 6.333c-.022-.162-.164-.288-.328-.288-.135 0-8.916.035-8.916.035s-2.043-2.008-2.28-2.234c-.237-.225-.765-.164-.981.011C6.104 4.032 4.4 5.378 4.4 5.378s-.361.271-.19.805c.172.535 2.868 9.588 2.868 9.588l6.88 3.52 6.13-1.716s3.882-10.742 3.882-10.781c0-.039-.022-.301-.145-.461z" />
  </svg>
);

export default function ScaleOperationsHero() {
  return (
    <section className="relative w-full bg-black text-white font-[var(--font-poppins)] overflow-hidden rounded-[2rem] pt-28 sm:pt-36 md:pt-44 pb-16 sm:pb-24 md:pb-32 px-6 md:px-12 lg:px-16">
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
          Scale Your Store Operations with WhatsApp Automation
        </h1>

        {/* Subtitle / Description */}
        <p className="text-gray-300 text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10">
          Deliver 24/7 customer care, answer product questions, and drive repeat revenue using built-in whatsapp marketing automation.
        </p>

        {/* Primary Call To Action Button */}
        <button
          type="button"
          className="group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#FF5E2C] via-[#FF692E] to-[#FF7A28] text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer mb-16 sm:mb-20"
        >
          <span>Book a Demo</span>
          <div className="w-5 h-5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <ArrowRight className="w-3 h-3 text-white" strokeWidth={2.5} />
          </div>
        </button>

        {/* Bottom Feature Tags / Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-gray-200 font-medium">
          {/* Tag 1 */}
          <div className="flex items-center gap-2">
            <MetaIcon />
            <span>Official Meta Tech Provider</span>
          </div>

          {/* Tag 2 */}
          <div className="flex items-center gap-2">
            <Languages className="w-4 h-4 text-[#00E599] shrink-0" />
            <span>80+ language Supported</span>
          </div>

          {/* Tag 3 */}
          <div className="flex items-center gap-2">
            <ShopifyIcon />
            <span>Shopify & CRM Ready</span>
          </div>
        </div>

      </div>
    </section>
  );
}