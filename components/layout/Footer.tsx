"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-10 sm:pt-10 pb-12 px-4 sm:px-6 font-[var(--font-poppins)] overflow-hidden">
      {/* Background Curtain/Glow Image Layer */}
      <div className="absolute inset-x-0 bottom-0 h-full z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />
        <Image
          src="/images/bg-img.png"
          alt="Footer Backdrop"
          fill
          className="object-cover object-bottom opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-950/40 via-transparent to-transparent z-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Call To Action CTA */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white leading-tight max-w-3xl mb-4">
            Reach your Customers where they already Shop
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-[16px] leading-relaxed max-w-2xl px-2 mb-4 sm:mb-6">
            Your Customer Are Already On WhatsApp, Instagram And Voice. The
            Question Is Whether Your Brand Is There To Answer — Or Your
            Competitor Is.
          </p>

          {/* CTA Button */}
          <Link
            href="#demo"
            className="relative group inline-flex items-center gap-3 bg-gradient-to-b from-[#FF7B40] via-[#FF551D] to-[#FF4500] text-white text-[12px] font-normal px-4 sm:px-4 py-1 sm:py-1 rounded-full hover:brightness-105 active:scale-95 transition-all overflow-hidden border border-white/20"
          >
            {/* Top Edge Inner Light Highlight */}
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            {/* Button Text */}
            <span className="relative z-10 tracking-tight">Book a Demo</span>

            {/* Embedded Arrow Badge */}
            <div className="relative z-10 w-8 h-8 rounded-full bg-white/15 border border-white/30 flex items-center justify-center shadow-inner backdrop-blur-sm group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
            </div>
          </Link>
        </div>

        {/* White Floating Navigation Card */}
        <div className="bg-white text-gray-900 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl">
          {/* 5-Column Grid Layout (Col 1 takes 2 fractions, remaining 3 columns take 1 each) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 items-start mb-8 sm:mb-10 text-left">
            
            {/* Column 1: Brand Logo & Tagline (Wider) */}
            <div className="md:col-span-2 flex flex-col items-start text-left">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/icons/exeiLogo-black.png"
                  alt="Company Logo"
                  width={120}
                  height={40}
                  className="h-8 sm:h-10 w-auto object-contain"
                  priority
                />
              </Link>

              <p className="text-black text-sm font-medium max-w-xl">
                Purpose-built AI agents for modern ecommerce.
              </p>
            </div>

            {/* Column 2: Products & Channels */}
            <div className="flex flex-col items-start text-left">
              {/* Products */}
              <div className="mb-6">
                <p className="text-gray-900 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3">
                  Products
                </p>
                <ul className="space-y-2.5 font-medium text-gray-700 text-xs sm:text-sm">
                  <li>
                    <Link
                      href="/shopping-assistant/"
                      className="hover:text-[#FF5E2C] transition-colors"
                    >
                      Shopping Assistant
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/growth-agent/"
                      className="hover:text-[#FF5E2C] transition-colors"
                    >
                      Growth Agent
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/customer-service/"
                      className="hover:text-[#FF5E2C] transition-colors"
                    >
                      Customer Service Agent
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Channels */}
              <div>
                <p className="text-gray-900 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3">
                  Channels
                </p>
                <ul className="space-y-2.5 font-medium text-gray-700 text-xs sm:text-sm">
                  <li>
                    <Link
                      href="/whatsapp-ai-agent/"
                      className="hover:text-[#FF5E2C] transition-colors"
                    >
                      WhatsApp AI Agent
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shopify-ai-agent/"
                      className="hover:text-[#FF5E2C] transition-colors"
                    >
                      Shopify AI Agent
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ai-voice-agent/"
                      className="hover:text-[#FF5E2C] transition-colors"
                    >
                      Voice AI Agent
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/instagram-ai-agent/"
                      className="hover:text-[#FF5E2C] transition-colors"
                    >
                      Instagram AI Agent
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/website-ai-agent/"
                      className="hover:text-[#FF5E2C] transition-colors"
                    >
                      Website AI Agent
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/messenger-ai-agent/"
                      className="hover:text-[#FF5E2C] transition-colors"
                    >
                      Messenger AI Agent
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: Product Features & About Us */}
            <div className="flex flex-col items-start text-left">
              {/* Product Features */}
              <div className="mb-6">
                <p className="text-gray-900 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3">
                  Product Features
                </p>
                <ul className="space-y-2.5 font-medium text-gray-700 text-xs sm:text-sm">
                  <li>
                    <Link
                      href="/whatsapp-broadcast/"
                      className="hover:text-[#FF5E2C] transition-colors"
                    >
                      WhatsApp Broadcast
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/whatsapp-bulk-messages/"
                      className="hover:text-[#FF5E2C] transition-colors"
                    >
                      WhatsApp Bulk Messages
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/whatsapp-automation/"
                      className="hover:text-[#FF5E2C] transition-colors"
                    >
                      WhatsApp Automation
                    </Link>
                  </li>
                </ul>
              </div>

              {/* About Us (Includes Pricing) */}
              <div>
                <p className="text-gray-900 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3">
                  About Us
                </p>
                <ul className="space-y-2.5 font-medium text-gray-700 text-xs sm:text-sm">
                  <li>
                    <Link
                      href="#why-exei"
                      className="hover:text-[#FF5E2C] transition-colors"
                    >
                      Why Exei
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#become-partner"
                      className="hover:text-[#FF5E2C] transition-colors"
                    >
                      Become a Partner
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#pricing"
                      className="hover:text-[#FF5E2C] transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 4: Resources & Legal */}
            <div className="flex flex-col items-start text-left">
              {/* Resources */}
              <div className="mb-6">
                <p className="text-gray-900 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3">
                  Resources
                </p>
                <ul className="space-y-2.5 font-medium text-gray-700 text-xs sm:text-sm">
                  <li>
                    <Link
                      href="#blogs"
                      className="hover:text-[#FF5E2C] transition-colors"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#user-guide"
                      className="hover:text-[#FF5E2C] transition-colors"
                    >
                      User Guide
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#release-notes"
                      className="hover:text-[#FF5E2C] transition-colors"
                    >
                      Release notes
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <p className="text-gray-900 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3">
                  Legal
                </p>
                <ul className="space-y-2.5 font-medium text-gray-700 text-xs sm:text-sm">
                  <li>
                    <Link
                      href="/privacy-policy/"
                      className="hover:text-[#FF5E2C] transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms/"
                      className="hover:text-[#FF5E2C] transition-colors"
                    >
                      Terms & Condition
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Custom Clickable Social Icons */}
          <div className="pt-6 sm:pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500 text-left">
            <p>
              Copyright © 2026 Exei – AI Agents for eCommerce powered by Xcelore | All Rights Reserved
            </p>

            {/* Clickable Custom Social Media Icons */}
            <div className="flex items-center justify-start gap-5">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-5 h-5 relative flex items-center justify-center transition-opacity hover:opacity-75 active:scale-95"
              >
                <Image
                  src="/icons/instagram-icon.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-5 h-5 relative flex items-center justify-center transition-opacity hover:opacity-75 active:scale-95"
              >
                <Image
                  src="/icons/facebook-icon.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-5 h-5 relative flex items-center justify-center transition-opacity hover:opacity-75 active:scale-95"
              >
                <Image
                  src="/icons/linkedin-icon.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}