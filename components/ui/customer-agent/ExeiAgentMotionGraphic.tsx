"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface Props {
  phoneImageUrl?: string;
  avatarImageUrl?: string;
}

export default function ExeiAgentMotionGraphic({
  phoneImageUrl = "/images/customer-service/intent-agent.png",
  avatarImageUrl = "/images/growth-agent/user-agent.jpg",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            "#message",
            "#avatar",
            "#appointment-card-1",
            "#appointment-card-2",
            "#appointment-card-3",
          ],
          { opacity: 1, scale: 1, y: 0 }
        );
        gsap.set("#connection-paths path", { opacity: 1 });
        return;
      }

      // ---- Entrance timeline ----
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      gsap.set("#message", { opacity: 0, scale: 0.95, y: 8 });
      gsap.set("#avatar", { opacity: 0, scale: 0.85 });
      gsap.set(
        ["#appointment-card-1", "#appointment-card-2", "#appointment-card-3"],
        { opacity: 0, y: 12, scale: 0.94 }
      );
      gsap.set("#connection-paths path", { opacity: 0 });
      gsap.set(["#waveform-left", "#waveform-right"], { opacity: 0 });

      tl.to("#connection-paths path", { opacity: 1, duration: 0.4 }, 0.1)
        .to("#waveform-left, #waveform-right", { opacity: 1, duration: 0.3 }, 0.35)
        .to("#message", { opacity: 1, scale: 1, y: 0, duration: 0.45 }, 0.45)
        .to("#avatar", { opacity: 1, scale: 1, duration: 0.4 }, 0.6)
        .to(
          "#appointment-card-1",
          { opacity: 1, y: 0, scale: 1, duration: 0.4 },
          0.85
        )
        .to(
          "#appointment-card-2",
          { opacity: 1, y: 0, scale: 1, duration: 0.4 },
          1.0
        )
        .to(
          "#appointment-card-3",
          { opacity: 1, y: 0, scale: 1, duration: 0.4 },
          1.15
        );

      // ---- Continuous marching dashed lines ----
      // stroke-dasharray is "6 6" (12px pattern). Offsetting by a multiple
      // of 12 (here 24) means the tween can restart at 0 with no visible
      // jump, producing a seamless, endlessly "moving" dashed line.
      const animatedPaths = document.querySelectorAll<SVGPathElement>(
        "#connection-paths path"
      );
      animatedPaths.forEach((path) => {
        gsap.to(path, {
          strokeDashoffset: -24,
          repeat: -1,
          duration: 1.4,
          ease: "none",
          delay: 1.4,
        });
      });

      // ---- Audio waveform pulse loop ----
      const bars = document.querySelectorAll("#waveforms rect");
      bars.forEach((bar, i) => {
        gsap.to(bar, {
          scaleY: 1.6,
          transformOrigin: "50% 50%",
          duration: 0.35 + (i % 4) * 0.08,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.0 + i * 0.03,
        });
      });

      // ---- Subtle ambient float (after entrance completes) ----
      gsap.to("#phone", {
        y: "-=4",
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.6,
      });
      gsap.to("#avatar", {
        y: "-=3",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.6,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full relative flex items-center justify-center overflow-hidden"
    >
      <svg
        viewBox="0 0 1000 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* ================= PHONE ================= */}
        <g id="phone" transform="translate(20, 10)">
          <foreignObject x="0" y="0" width="340" height="400">
            <div className="w-full h-full relative flex items-center justify-center">
              <Image
                src={phoneImageUrl}
                alt="Phone UI"
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>
          </foreignObject>
        </g>

        {/* ================= DASHED CONNECTOR LINES ================= */}
        {/*
          Layout reference:
          - Path A: phone edge -> up -> into left waveform
          - Path B: single vertical line from the very top of the canvas,
            straight down through the horizontal junction, into card 3
          - Path C: horizontal line joining the drops into card 1 and card 2
        */}
        <g
          id="connection-paths"
          stroke="#C9CDD3"
          strokeWidth="2"
          strokeDasharray="6 6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          {/* A: phone -> waveform 1 */}
          <path d="M 358 208 H 425 V 88 H 488" />
          {/* B: top of canvas straight down into card 3 (crosses the horizontal at y=145) */}
          <path d="M 695 0 V 270" />
          {/* C: horizontal junction connecting card 1 and card 2 drops */}
          <path d="M 565 145 H 800" />
          {/* D: drop into card 1 */}
          <path d="M 565 145 V 195" />
          {/* E: drop into card 2 */}
          <path d="M 800 145 V 195" />
        </g>

        {/* ================= AUDIO WAVEFORMS ================= */}
        <g id="waveforms" fill="#FF5E2C">
          <g id="waveform-left" transform="translate(490, 68)">
            <rect x="0" y="8" width="3" height="20" rx="1.5" />
            <rect x="5" y="3" width="3" height="30" rx="1.5" />
            <rect x="10" y="10" width="3" height="16" rx="1.5" />
            <rect x="15" y="0" width="3" height="36" rx="1.5" />
            <rect x="20" y="6" width="3" height="24" rx="1.5" />
            <rect x="25" y="2" width="3" height="32" rx="1.5" />
            <rect x="30" y="9" width="3" height="18" rx="1.5" />
          </g>
          <g id="waveform-right" transform="translate(792, 68)">
            <rect x="0" y="6" width="3" height="24" rx="1.5" />
            <rect x="5" y="10" width="3" height="16" rx="1.5" />
            <rect x="10" y="1" width="3" height="34" rx="1.5" />
            <rect x="15" y="7" width="3" height="22" rx="1.5" />
            <rect x="20" y="0" width="3" height="36" rx="1.5" />
            <rect x="25" y="9" width="3" height="18" rx="1.5" />
            <rect x="30" y="3" width="3" height="30" rx="1.5" />
          </g>
        </g>

        {/* ================= MESSAGE BUBBLE ================= */}
        <g id="message" transform="translate(548, 60)">
          <rect width="232" height="52" rx="26" fill="#EFEFEF" />
          <text
            x="116"
            y="31"
            textAnchor="middle"
            fill="#2D3748"
            fontSize="13"
            fontWeight="500"
            fontFamily="sans-serif"
          >
            Need help with appointments?
          </text>
        </g>

        {/* ================= AVATAR ================= */}
        <g id="avatar" transform="translate(855, 50)">
          <foreignObject width="70" height="70" className="overflow-visible">
            <div className="w-[70px] h-[70px] rounded-full border-2 border-white shadow-md overflow-hidden relative">
              <Image
                src={avatarImageUrl}
                alt="Avatar"
                fill
                className="object-cover"
              />
            </div>
          </foreignObject>
        </g>

        {/* ================= APPOINTMENT CARDS ================= */}
        {/* Card 1: "Meeting Appointment" (upper-left) */}
        <g id="appointment-card-1" transform="translate(485, 195)">
          <rect
            width="160"
            height="48"
            rx="24"
            fill="white"
            stroke="#FF5E2C"
            strokeWidth="1.8"
            className="filter drop-shadow-md"
          />
          <circle cx="26" cy="24" r="15" fill="#0A0A0A" />
          <text
            x="26"
            y="29"
            textAnchor="middle"
            fill="#FF5E2C"
            fontSize="13"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            e
          </text>
          <text x="50" y="20" fill="#111827" fontSize="11" fontWeight="700" fontFamily="sans-serif">
            Meeting
          </text>
          <text x="50" y="34" fill="#111827" fontSize="11" fontWeight="700" fontFamily="sans-serif">
            Appointment
          </text>
        </g>

        {/* Card 2: "Schedule for Thursday" (upper-right) */}
        <g id="appointment-card-2" transform="translate(715, 195)">
          <rect
            width="160"
            height="48"
            rx="24"
            fill="white"
            stroke="#FF5E2C"
            strokeWidth="1.8"
            className="filter drop-shadow-md"
          />
          <circle cx="26" cy="24" r="15" fill="#0A0A0A" />
          <text
            x="26"
            y="29"
            textAnchor="middle"
            fill="#FF5E2C"
            fontSize="13"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            e
          </text>
          <text x="50" y="20" fill="#111827" fontSize="11" fontWeight="700" fontFamily="sans-serif">
            Schedule for
          </text>
          <text x="50" y="34" fill="#111827" fontSize="11" fontWeight="700" fontFamily="sans-serif">
            Thursday
          </text>
        </g>

        {/* Card 3: "Meeting Appointment" (lower-center) */}
        <g id="appointment-card-3" transform="translate(605, 270)">
          <rect
            width="170"
            height="48"
            rx="24"
            fill="white"
            stroke="#FF5E2C"
            strokeWidth="1.8"
            className="filter drop-shadow-md"
          />
          <circle cx="26" cy="24" r="15" fill="#0A0A0A" />
          <text
            x="26"
            y="29"
            textAnchor="middle"
            fill="#FF5E2C"
            fontSize="13"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            e
          </text>
          <text x="50" y="20" fill="#111827" fontSize="11" fontWeight="700" fontFamily="sans-serif">
            Meeting
          </text>
          <text x="50" y="34" fill="#111827" fontSize="11" fontWeight="700" fontFamily="sans-serif">
            Appointment
          </text>
        </g>
      </svg>
    </div>
  );
}