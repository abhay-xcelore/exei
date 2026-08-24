"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

/* ==========================================================================
   RIGHT COLUMN: CLEAN TECH STACK GRAPHIC (NO DASHED LINES)
   ========================================================================== */
function TechStackGraphic({
  shopifyLogo = "/icons/shopify.png",
  whatsappLogo = "/icons/whatsapp (2).png",
  metaLogo = "/images/meta.png",
}: {
  shopifyLogo?: string;
  whatsappLogo?: string;
  metaLogo?: string;
}) {
  return (
    <div className="relative w-full h-[360px] sm:h-[400px] lg:h-[430px] max-w-[520px] bg-[#0c0c0e]/90 backdrop-blur-xl rounded-t-[2rem] border-t border-x border-white/10 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-6 select-none">
      {/* Top-Right Corner Ambient Orange Glow */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#ff5500]/25 via-[#180b05]/10 to-transparent pointer-events-none" />

      {/* 1. TOP-LEFT SHOPIFY NODE */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-12 w-14 h-14 rounded-full bg-[#1c1c20] border border-white/15 flex items-center justify-center shadow-xl z-10"
      >
        <div className="relative w-7 h-7">
          <Image
            src={shopifyLogo}
            alt="Shopify"
            fill
            sizes="28px"
            className="object-contain"
            onError={(e) => {
              (e.target as HTMLElement).style.display = "none";
            }}
          />
          <span className="text-2xl leading-none"></span>
        </div>
      </motion.div>

      {/* 2. TOP-RIGHT SHOPIFY NODE */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute top-16 right-12 w-14 h-14 rounded-full bg-[#1c1c20] border border-white/15 flex items-center justify-center shadow-xl z-10"
      >
        <div className="relative w-7 h-7">
          <Image
            src={shopifyLogo}
            alt="Shopify"
            fill
            sizes="28px"
            className="object-contain"
            onError={(e) => {
              (e.target as HTMLElement).style.display = "none";
            }}
          />
          <span className="text-2xl leading-none"></span>
        </div>
      </motion.div>

      {/* 3. CENTER WHATSAPP BUSINESS PLATFORM CAPSULE */}
      <motion.div
        animate={{ scale: [1, 1.015, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-20 flex items-center gap-3 bg-[#131316]/95 border border-white/20 rounded-full px-6 py-3 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-md"
      >
        {/* WhatsApp Icon Slot */}
        <div className="relative w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 overflow-hidden shadow-inner">
          <Image
            src={whatsappLogo}
            alt="WhatsApp"
            fill
            sizes="32px"
            className="object-contain p-1"
            onError={(e) => {
              (e.target as HTMLElement).style.display = "none";
            }}
          />
          <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
          </svg>
        </div>

        <span className="text-base sm:text-lg font-medium text-white tracking-tight">
          WhatsApp Business Platform
        </span>
      </motion.div>

      {/* 4. META PARTNER SUB-TEXT */}
      <motion.div
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-20 flex items-center gap-2 mt-4"
      >
        <div className="relative w-4 h-4 shrink-0">
          <Image
            src={metaLogo}
            alt="Meta"
            fill
            sizes="16px"
            className="object-contain"
            onError={(e) => {
              (e.target as HTMLElement).style.display = "none";
            }}
          />
          <svg className="w-4 h-4 fill-[#0081FB]" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.502h-2V13h2v3.502zm0-5.502h-2V7.5h2V11z" />
          </svg>
        </div>
        <span className="text-xs font-normal text-gray-300 tracking-wide">
          Official Meta Tech Provider
        </span>
      </motion.div>

      {/* 5. BOTTOM-LEFT SHOPIFY NODE */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute bottom-12 left-24 w-14 h-14 rounded-full bg-[#1c1c20] border border-white/15 flex items-center justify-center shadow-xl z-10"
      >
        <div className="relative w-7 h-7">
          <Image
            src={shopifyLogo}
            alt="Shopify"
            fill
            sizes="28px"
            className="object-contain"
            onError={(e) => {
              (e.target as HTMLElement).style.display = "none";
            }}
          />
          <span className="text-2xl leading-none"></span>
        </div>
      </motion.div>

      {/* 6. BOTTOM-RIGHT SHOPIFY NODE */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
        className="absolute bottom-16 right-20 w-14 h-14 rounded-full bg-[#1c1c20] border border-white/15 flex items-center justify-center shadow-xl z-10"
      >
        <div className="relative w-7 h-7">
          <Image
            src={shopifyLogo}
            alt="Shopify"
            fill
            sizes="28px"
            className="object-contain"
            onError={(e) => {
              (e.target as HTMLElement).style.display = "none";
            }}
          />
          <span className="text-2xl leading-none"></span>
        </div>
      </motion.div>
    </div>
  );
}

/* ==========================================================================
   PARENT SECTION COMPONENT
   ========================================================================== */
export default function TechStackSection() {
  return (
    <section className="relative w-full bg-black text-white font-[var(--font-poppins)] overflow-hidden rounded-[2rem] pt-10 md:pt-14 pb-0 px-6 md:px-12 lg:px-16">
      {/* Full-width Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/bg-img.png"
          alt="Tech Stack Background"
          fill
          className="object-cover object-bottom"
          priority
        />
        {/* Subtle top gradient overlay */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black via-black/60 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-6 flex flex-col justify-between pt-2 pb-12 md:pb-16">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-medium text-white tracking-tight leading-[1.2] mb-4">
              Connect WhatsApp To Your Existing Stack
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              As an Official Meta Tech Provider, Exei connects natively with the
              WhatsApp Business Platform while syncing with your CRM, helpdesk,
              Shopify store, and custom databases. Maintain complete data security,
              high message deliverability, and real-time record updates across your
              entire business—with zero risk of phone number bans.
            </p>
          </div>

          {/* Button pushed to the bottom */}
          <div className="mt-12 lg:mt-16">
            <button
              type="button"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF5E2C] via-[#FF692E] to-[#FF7A28] text-white font-normal text-sm sm:text-base px-5 py-2 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer shadow-lg"
            >
              <span>Book a Demo</span>
              <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-inner group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
            </button>
          </div>
        </div>

        {/* Right Column: Clean Graphic Card flush with bottom edge */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end items-end">
          <TechStackGraphic
            shopifyLogo="/icons/shopify.png"
            whatsappLogo="/icons/whatsapp (2).png"
            metaLogo="/images/meta.png"
          />
        </div>
      </div>
    </section>
  );
}