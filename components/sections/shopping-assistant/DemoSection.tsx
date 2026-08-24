"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { px } from "framer-motion";

export default function EcommerceFeatureSection() {
  return (
    <section className="w-full bg-[#fafafa] font-[var(--font-poppins)]">
      {/* Full Width Main Outer Container */}
      <div className="relative w-full rounded-[24px] overflow-hidden bg-black text-white min-h-[460px] flex items-center">
        
        {/* Full-bleed Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/bg-img.png"
            alt="Background pattern"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Inner Content Grid */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[460px]">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-medium tracking-tight text-white leading-[1.14] mb-4">
              Designed Specifically For <br className="hidden sm:inline" />
              Ecommerce
            </h2>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg mb-16 font-[300]">
              Get started instantly with our pre-built plugin available on Shopify, or
              deploy across custom platforms like WooCommerce using our developer-friendly APIs.
            </p>

            {/* CTA Button */}
           <button className="inline-flex items-center gap-3 bg-gradient-to-b from-[#FF7E38] via-[#FF520B] to-[#EF3800] hover:from-[#FF8B4D] hover:to-[#FF3800] text-white font-normal text-xs pl-4 pr-2 py-1.5 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
  <span className="tracking-wide">Book a Demo</span>
  <div className="w-7 h-7 rounded-full bg-gradient-to-b from-white/30 to-white/5 border border-white/40 shadow-inner flex items-center justify-center -mr-1">
    <ArrowRight className="w-3 h-3 text-white stroke-[2.5]" />
  </div>
</button>
          </div>

          {/* RIGHT CARDS (Bleeding Top & Bottom) */}
          <div className="lg:col-span-5 absolute right-0 -top-8 -bottom-8 hidden lg:flex flex-col gap-4 w-[38%] max-w-[280px]">
            
            {/* Top Card (Overflows Top) */}
            <div className="w-full flex-1 bg-[#121212]/90 border border-white/10 rounded-2xl flex items-center justify-center p-6 backdrop-blur-md">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32">
                <Image
                  src="/images/shopping-assistant/Frame.png"
                  alt="Custom Integration Logo"
                  width={251}
                  height={251}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Bottom Card (Overflows Bottom) */}
            <div className="w-full flex-1 bg-[#121212]/90 border border-white/10 rounded-2xl flex items-center justify-center p-6 backdrop-blur-md">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32">
                <Image
                  src="/images/shopping-assistant/Group.png"
                  alt="Shopify Logo"
                  width={251}
                  height={251}
                  className="object-contain"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}