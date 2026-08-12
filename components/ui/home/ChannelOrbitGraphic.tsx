// components/ui/ChannelOrbitGraphic.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Channel = {
  id: string;
  iconSrc: string;
  alt: string;
  bg: string;
  radius: number;      // Distance from center (in pixels) — matched to the ring's actual radius
  startAngle: number;  // Fixed position in degrees (0 = top, clockwise)
  shakeDelay: number;  // Offsets each icon's shake so they don't move in sync
};

// Radius values are matched to the actual rendered ring circles:
// container is max-w-[250px] → half = 125px.
// Outer ring: inset-[6%]  → 125 - (6%  of 250) = 110px radius.
// Inner ring: inset-[26%] → 125 - (26% of 250) = 60px radius.
// Icons now center exactly on these ring lines instead of sitting inside them.
const channels: Channel[] = [
  // INNER RING
  {
    id: "instagram",
    iconSrc: "/icons/instagram.png",
    alt: "Instagram",
    bg: "bg-white shadow-md border border-gray-100",
    radius: 60,
    startAngle: 312,
    shakeDelay: 0,
  },
  {
    id: "globe",
    iconSrc: "/icons/web (2).png",
    alt: "Web",
    bg: "bg-white shadow-md border border-gray-100",
    radius: 60,
    startAngle: 175,
    shakeDelay: 0.5,
  },

  // OUTER RING
  {
    id: "whatsapp",
    iconSrc: "/icons/whatsapp (2).png",
    alt: "WhatsApp",
    bg: "bg-white shadow-md border border-gray-100",
    radius: 110,
    startAngle: 43,
    shakeDelay: 0.9,
  },
  {
    id: "messenger",
    iconSrc: "/icons/messanger (2).png",
    alt: "Messenger",
    bg: "bg-white shadow-md border border-gray-100",
    radius: 110,
    startAngle: 105,
    shakeDelay: 0.2,
  },
  {
    id: "phone",
    iconSrc: "/icons/phone (2).png",
    alt: "Phone",
    bg: "bg-white shadow-md border border-gray-100",
    radius: 110,
    startAngle: 253,
    shakeDelay: 1.3,
  },
];

export default function ChannelOrbitGraphic({
  logoSrc,
  background = "bg-gradient-to-l from-[#FF6828]/[0.05] to-[#FF4C00]/[0.02]",
}: {
  logoSrc?: string;
  background?: string;
}) {
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center p-2 rounded-2xl overflow-hidden select-none ${background}`}
    >
      {/* Centered bounded canvas */}
      <div className="relative w-full max-w-[250px] sm:max-w-[270px] aspect-square flex items-center justify-center">
        {/* Outer Ring Track */}
        <motion.div
          className="absolute inset-[6%] rounded-full border border-black/10 pointer-events-none"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Inner Ring Track */}
        <motion.div
          className="absolute inset-[26%] rounded-full border border-black/10 pointer-events-none"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        />

        {/* Center Logo Node */}
        <motion.div
          className="absolute z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center overflow-hidden p-2"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {logoSrc ? (
            <Image
              src="/icons/exeicon.png"
              alt="Logo"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          ) : (
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-tr from-[#DD2A7B] via-[#F58529] to-[#8134AF] bg-clip-text text-transparent">
              e
            </span>
          )}
        </motion.div>

        {/* Static Channel Icons — centered exactly on the ring lines, each with a
            tiny, staggered shake so they feel alive. */}
        {channels.map((channel) => {
          const angleRad = (channel.startAngle * Math.PI) / 180;
          const x = channel.radius * Math.sin(angleRad);
          const y = -channel.radius * Math.cos(angleRad);

          return (
            <div
              key={channel.id}
              className="absolute pointer-events-none flex items-center justify-center"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <motion.div
                animate={{
                  x: [0, 1.5, -1.5, 1, 0],
                  y: [0, -1.5, 1.5, -1, 0],
                  rotate: [0, 2, -2, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: channel.shakeDelay,
                }}
                className={`pointer-events-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center overflow-hidden p-2 sm:p-2.5 transition-transform hover:scale-110 ${channel.bg}`}
              >
                <Image
                  src={channel.iconSrc}
                  alt={channel.alt}
                  width={22}
                  height={22}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}