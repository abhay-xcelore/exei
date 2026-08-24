"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ShopifyAgentsSection() {
  return (
    <section className="w-full bg-white text-gray-900 font-[var(--font-poppins)] pt-28 pb-10 sm:pb-12 lg:pb-14 px-6 md:px-12 lg:px-16">
      {/* Container restricted to max-w-7xl */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Left Column: Heading, Subtitle & CTA */}
        <div className="lg:col-span-6 flex flex-col justify-center items-start">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-gray-900 tracking-tight leading-[1.18] mb-6">
           Support Your Customers Instantly with Instagram AI Agents
          </h2>

          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-normal">
            AI Agents for Instagram that respond instantly, answer questions, resolve issues, and turn every interaction into a better customer experience. 
          </p>

          <button
            type="button"
            className="group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#FF5E2C] via-[#FF692E] to-[#FF7A28] text-white font-medium text-xs px-4 py-1 rounded-full hover:shadow-orange-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            <span>Install Now</span>
            <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-inner group-hover:bg-white/30 transition-colors">
              <ArrowRight className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
          </button>
        </div>

        {/* Right Column: Dark Overlay Image Box with Rounded Corners */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full aspect-square max-w-[540px] bg-black rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 flex items-center justify-center">
            {/* Background Texture/Image */}
            <Image
              src="/images/bg-img.png"
              alt="Shopify AI Agents Visual"
              fill
              className="object-cover opacity-80"
              priority
            />
            {/* 
              This box is ready for your media/image overlay. 
            */}
          </div>
        </div>

      </div>
    </section>
  );
}