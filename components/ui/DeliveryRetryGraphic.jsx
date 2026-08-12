// components/ui/DeliveryRetryGraphic.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Bot, X, Check } from "lucide-react";

export default function DeliveryRetryGraphic() {
  return (
    <>
      {/* =============================== DESKTOP (lg+) — UNCHANGED =============================== */}
      <div className="hidden lg:flex w-full h-[280px] bg-gradient-to-l from-[#FF6828]/[0.05] to-[#FF4C00]/[0.02] rounded-2xl items-center justify-center relative overflow-hidden select-none">
        {/* Background Soft Radial Glow */}
        <div className="absolute inset-0 bg-radial from-orange-100/40 via-transparent to-transparent pointer-events-none" />

        {/* Synchronized Coordinate Canvas */}
        <div className="relative w-full max-w-[500px] h-[200px] mx-auto flex items-center justify-center">

          {/* ==========================================
              1. ANIMATED SVG DOTTED CONNECTOR LINES
             ========================================== */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 500 200"
            fill="none"
          >
            {/* Path 1: Message Card -> Bot (Left Edge) */}
            <motion.path
              d="M 232 90 H 276"
              stroke="#94A3B8"
              strokeWidth="1.8"
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, -16] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />

            {/* Path 2: Bot (Right Edge) -> Clean Fork -> WhatsApp & Phone */}
            <motion.path
              d="M 324 90 H 365 V 45 H 416 M 365 90 V 135 H 416"
              stroke="#94A3B8"
              strokeWidth="1.8"
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, -16] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          {/* ==========================================
              2. LEFT NODE: Message Bubble & Failed Badge
             ========================================== */}
          <div className="absolute left-[2%] top-[45%] -translate-y-1/2 flex flex-col items-start z-10">
            {/* Failed Message Badge */}
            <div className="absolute -top-5 right-2 bg-white/95 backdrop-blur-xs pl-2.5 pr-1 py-0.5 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 flex items-center gap-1.5 z-20">
              <span className="text-[10px] font-medium text-gray-500 tracking-tight">
                Message Not Delivered
              </span>
              <div className="w-4 h-4 rounded-full bg-[#FF3B30] flex items-center justify-center text-white shrink-0">
                <X className="w-2.5 h-2.5 stroke-[3]" />
              </div>
            </div>

            {/* Main Message Pill */}
            <div className="bg-white/95 backdrop-blur-xs pl-2.5 pr-4 py-2.5 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white shrink-0 overflow-hidden p-1">
                <Image
                  src="/icons/whatsapp (2).png"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[11px] sm:text-[12px] font-semibold text-gray-800 tracking-tight whitespace-nowrap">
                Hi John, Your Order Is Confirmed
              </p>
            </div>
          </div>

          {/* ==========================================
              3. CENTER NODE: Bot / Auto Retry Logic
             ========================================== */}
          <div className="absolute left-[60%] top-[45%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10">
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="mt-6 ms-4 w-12 h-12 rounded-full bg-gradient-to-tr from-[#FF5E2C] via-[#FF4565] to-[#E040FB] flex items-center justify-center text-white shadow-[0_4px_16px_rgba(255,94,44,0.3)] border-2 border-white"
            >
              <Bot className="w-5 h-5 stroke-[2]" />
            </motion.div>
            <span className="text-[10px] sm:text-[11px] font-bold text-gray-800 mt-2 tracking-tight whitespace-nowrap">
              Auto Retry Logic
            </span>
          </div>

          {/* ==========================================
              4. RIGHT NODES: WhatsApp & Phone Channels
             ========================================== */}
          {/* WhatsApp Target Node */}
          <div className="absolute left-[88%] top-[22.5%] -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-12 h-12 rounded-full bg-white shadow-[0_6px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-center"
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white p-1">
                <Image
                  src="/icons/whatsapp (2).png"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Green Success Badge */}
              <div className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#00C853] text-white flex items-center justify-center border-2 border-white shadow-xs">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
            </motion.div>
          </div>

          {/* Phone Target Node */}
          <div className="absolute left-[88%] top-[67.5%] -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-12 h-12 rounded-full bg-white shadow-[0_6px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-center"
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white p-1.5">
                <Image
                  src="/icons/phone (2).png"
                  alt="Phone"
                  width={18}
                  height={18}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Green Success Badge */}
              <div className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#00C853] text-white flex items-center justify-center border-2 border-white shadow-xs">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* =============================== MOBILE / TABLET (below lg) — FIXED TOP CLIPPING =============================== */}
      <div className="lg:hidden w-full min-h-[380px] bg-gradient-to-b from-[#FF6828]/[0.05] to-[#FF4C00]/[0.02] rounded-2xl flex items-center justify-center relative overflow-hidden select-none py-10">
        {/* Background Soft Radial Glow */}
        <div className="absolute inset-0 bg-radial from-orange-100/40 via-transparent to-transparent pointer-events-none" />

        {/* Synchronized Coordinate Canvas — everything shifted down so the badge
            (which floats above the bubble) never sits at/above y=0, which is
            what was causing it to get clipped by the card's rounded top edge. */}
        <div className="relative w-full max-w-[280px] h-[300px] mx-auto flex items-center justify-center">

          {/* ==========================================
              1. ANIMATED SVG DOTTED CONNECTOR LINES (vertical)
             ========================================== */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 280 300"
            fill="none"
          >
            {/* Path 1: Message Bubble -> Bot (straight down) */}
            <motion.path
              d="M 140 68 V 108"
              stroke="#94A3B8"
              strokeWidth="1.8"
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, -16] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />

            {/* Path 2: Bot -> Fork -> WhatsApp (left) & Phone (right) */}
            <motion.path
              d="M 140 158 V 195 H 80 V 226 M 140 195 H 200 V 226"
              stroke="#94A3B8"
              strokeWidth="1.8"
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, -16] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          {/* ==========================================
              2. TOP NODE: Message Bubble & Failed Badge
             ========================================== */}
          {/* top-7 (not top-0) reserves room above the bubble for the badge,
              so the badge's own -top offset still lands safely inside the
              canvas instead of poking above y=0 and getting clipped. */}
          <div className="absolute top-7 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
            {/* Failed Message Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xs pl-2 pr-1 py-0.5 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 flex items-center gap-1 z-20 whitespace-nowrap">
              <span className="text-[9px] font-medium text-gray-500 tracking-tight">
                Message Not Delivered
              </span>
              <div className="w-3.5 h-3.5 rounded-full bg-[#FF3B30] flex items-center justify-center text-white shrink-0">
                <X className="w-2 h-2 stroke-[3]" />
              </div>
            </div>

            {/* Main Message Pill */}
            <div className="bg-white/95 backdrop-blur-xs pl-2 pr-3 py-2 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-white shrink-0 overflow-hidden p-1">
                <Image
                  src="/icons/whatsapp (2).png"
                  alt="WhatsApp"
                  width={18}
                  height={18}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[10px] font-semibold text-gray-800 tracking-tight whitespace-nowrap">
                Hi John, Your Order Is Confirmed
              </p>
            </div>
          </div>

          {/* ==========================================
              3. CENTER NODE: Bot / Auto Retry Logic
             ========================================== */}
          <div className="absolute top-[108px] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-10">
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FF5E2C] via-[#FF4565] to-[#E040FB] flex items-center justify-center text-white shadow-[0_4px_16px_rgba(255,94,44,0.3)] border-2 border-white"
            >
              <Bot className="w-5 h-5 stroke-[2]" />
            </motion.div>
            <span className="text-[10px] font-bold text-gray-800 mt-2 tracking-tight whitespace-nowrap">
              Auto Retry Logic
            </span>
          </div>

          {/* ==========================================
              4. BOTTOM NODES: WhatsApp & Phone Channels
             ========================================== */}
          {/* WhatsApp Target Node (bottom-left) */}
          <div className="absolute top-[226px] left-[80px] -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-12 h-12 rounded-full bg-white shadow-[0_6px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-center"
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white p-1">
                <Image
                  src="/icons/whatsapp (2).png"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* Phone Target Node (bottom-right) */}
          <div className="absolute top-[226px] left-[200px] -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-12 h-12 rounded-full bg-white shadow-[0_6px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-center"
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white p-1.5">
                <Image
                  src="/icons/phone (2).png"
                  alt="Phone"
                  width={18}
                  height={18}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </>
  );
}