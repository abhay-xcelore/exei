// components/sections/ProcessSection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Headphones,
  ShoppingBag,
  Sparkle,
  SquareArrowOutUpRight,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    id: 0,
    number: "01",
    title: "Connect",
    description:
      "Integrate your product catalog, store data, and business policies seamlessly, no code needed. Your AI agents instantly absorb your operational context.",
    visual: "connect" as const,
    mediaSrc: null as string | null,
  },
  {
    id: 1,
    number: "02",
    title: "Configure",
    description:
      "Select your primary agent from Shopping, Customer Service, or Growth and tailor response parameters to match your operational workflows.",
    visual: "configure" as const,
    mediaSrc: null as string | null,
  },
  {
    id: 2,
    number: "03",
    title: "Deploy",
    description:
      "Activate across WhatsApp, Web, Instagram, and Voice channels within 5 days to deliver end-to-end automated sales and service.",
    visual: "deploy" as const,
    mediaSrc: null as string | null,
  },
];

const connectItems = [
  { label: "Product Catalog" },
  { label: "Store data" },
  { label: "Business Policies" },
];

const configureItems = [
  { label: "Customer Service Agent", icon: Headphones, checked: true },
  { label: "Shopping Assistant", icon: ShoppingBag, checked: false },
  { label: "Growth Agent", icon: TrendingUp, checked: false },
];

type Step = (typeof steps)[number];

function StepVisual({ step }: { step: Step }) {
  if (step.mediaSrc) {
    return (
      <Image
        src={step.mediaSrc}
        alt={step.title}
        fill
        className="object-cover"
      />
    );
  }
  if (step.visual === "connect") return <ConnectGraphic />;
  if (step.visual === "configure") return <ConfigureGraphic />;
  if (step.visual === "deploy") return <DeployGraphic />;
  return null;
}

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative bg-black text-white py-10 md:py-14 px-6 font-[var(--font-poppins)] overflow-hidden rounded-[1.5rem]">
      {/* Background Glow Layer */}
      <div className="absolute inset-x-0 bottom-0 h-[75%] z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />
        <Image
          src="/images/bg-img.png"
          alt="Process Backdrop"
          fill
          className="object-cover object-bottom opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-950/30 via-transparent to-transparent z-10" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-4 md:mb-6">
          {/* Badge */}
          <div className="relative inline-flex items-center justify-center mb-6">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF6A38] to-transparent z-20 shadow-[0_0_8px_#FF6A38] opacity-90" />
            <div className="relative z-10 bg-gradient-to-b from-[#141416] via-[#111113] to-[#2B170E] border border-white/10 rounded-full px-4 sm:px-6 py-0.5 sm:py-1.5 shadow-2xl overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#FF5E2C]/20 via-transparent to-transparent pointer-events-none" />
              <span className="relative z-10 text-white text-xs font-normal tracking-tight">
                Our Process
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-4">
            How Exei Works ?
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
            We work step by step to fit into your business, not the other way around. From the first conversation to live AI agents, every step is shaped by what your ecommerce business actually needs.
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row gap-5 w-full">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <div
                key={step.id}
                onMouseEnter={() => setActiveStep(idx)}
                className={`flex flex-col lg:h-[420px] bg-white text-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-100 relative overflow-hidden lg:transition-all lg:duration-500 lg:ease-out will-change-[flex] ${
                  isActive
                    ? "lg:flex-[2.5] bg-white"
                    : "lg:flex-[1] bg-white/95 lg:cursor-pointer"
                }`}
              >
                {/* Badge */}
                <div className="shrink-0 relative z-10">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-r from-[#FF5E2C] to-[#FF7A28] text-white text-xl font-semibold flex items-center justify-center shadow-md shadow-orange-500/20">
                    {step.number}
                  </div>
                </div>

                {/* Text column */}
                <div
                  className={`flex-1 flex flex-col justify-start lg:justify-end pr-0 lg:pr-4 z-10 relative pointer-events-none transition-[max-width] duration-500 ease-out max-w-full ${
                    isActive ? "lg:max-w-[50%]" : ""
                  }`}
                >
                  <div className="pt-6 sm:pt-8 pb-1 shrink-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 tracking-tight mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* MOBILE / TABLET (Static visual container) — unchanged */}
                <div className="lg:hidden z-10 relative mt-6 w-full">
                  <div className="w-full h-[240px] sm:h-[260px] bg-[#FFF5F2] rounded-2xl overflow-hidden border border-orange-100/60 relative flex items-center justify-center p-3">
                    <StepVisual step={step} />
                  </div>
                </div>

                {/* DESKTOP (Accordion visual container) — now flush to the card's
                    top, right, and bottom edges (inset-y-0 right-0, no margin).
                    The panel sits exactly at those edges, so the card's own
                    overflow-hidden + rounded-3xl automatically clips it into the
                    correct rounded corner shape — no border-radius needed on the
                    panel itself. Only the left side keeps spacing, via its width. */}
                <div
                  className={`hidden lg:block absolute inset-y-0 right-0 transition-all duration-500 ease-out overflow-hidden z-0 ${
                    isActive
                      ? "w-[48%] opacity-100 pointer-events-auto"
                      : "w-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="w-full h-full bg-[#FFF5F2] relative flex items-center justify-center p-3">
                    <StepVisual step={step} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ConnectGraphic() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-2">
      {/* Circular outline containing a rounded-square "expand" bracket icon,
          with the sparkle sitting INSIDE the circle at the top-right —
          matches the reference image exactly. */}
      <div className="relative w-16 h-16 rounded-full border-2 border-[#FF551D] bg-white flex items-center justify-center shadow-sm shrink-0 z-10">
        <SquareArrowOutUpRight className="w-6 h-6 text-[#FF551D]" strokeWidth={2} />
        <Sparkle className="w-3 h-3 text-[#FF551D] fill-[#FF551D] absolute top-2.5 right-2.5" />
      </div>

      <div className="w-[1.5px] h-5 border-l-2 border-dashed border-gray-300 my-1" />

      <div className="w-full max-w-[210px] space-y-2.5 z-10">
        {connectItems.map((item) => (
          <div
            key={item.label}
            className="text-xs sm:text-sm font-medium text-gray-900 text-center py-2.5 px-3 rounded-xl bg-white shadow-sm border border-gray-100/80 tracking-tight"
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

function ConfigureGraphic() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-2">
      <div className="w-full max-w-[220px] space-y-2.5">
        {configureItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={`relative flex items-center gap-3 bg-white rounded-xl px-3.5 py-2.5 shadow-sm border ${
                item.checked ? "border-orange-300" : "border-gray-100"
              }`}
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#FF5E2C] to-[#FF7A28] flex items-center justify-center shrink-0 shadow-xs">
                <Icon className="w-4 h-4 text-white" strokeWidth={2.25} />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-900 leading-tight">
                {item.label}
              </span>
              {item.checked && (
                <CheckCircle2 className="w-4 h-4 text-emerald-500 absolute -top-1 -right-1 bg-white rounded-full" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DeployGraphic() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-[#FFF5F2] rounded-xl flex items-center justify-center">
      
      {/* ================= MOBILE / TABLET VIEW (FULL CARD ORBIT) — unchanged ================= */}
      <div className="block lg:hidden w-full h-full relative">
        <svg
          viewBox="0 0 300 220"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Inner Arc */}
          <path
            d="M 25 220 A 125 125 0 0 1 275 220"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="2"
          />

          {/* Outer Arc */}
          <path
            d="M -5 220 A 155 155 0 0 1 305 220"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="2"
          />

          {/* 1. Web / Globe Icon (Far Left) */}
          <foreignObject x="8" y="145" width="48" height="48">
            <div className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center p-2.5">
              <Image
                src="/icons/web (2).png"
                alt="Web"
                width={28}
                height={28}
                className="w-full h-full object-contain"
              />
            </div>
          </foreignObject>

          {/* 2. Phone Icon (Top-Left Arc Curve) */}
          <foreignObject x="78" y="48" width="48" height="48">
            <div className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center p-2.5">
              <Image
                src="/icons/phone (2).png"
                alt="Phone"
                width={28}
                height={28}
                className="w-full h-full object-contain"
              />
            </div>
          </foreignObject>

          {/* 3. Instagram Icon (Top-Right Arc Curve) */}
          <foreignObject x="174" y="48" width="48" height="48">
            <div className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center p-2.5">
              <Image
                src="/icons/instagram.png"
                alt="Instagram"
                width={28}
                height={28}
                className="w-full h-full object-contain"
              />
            </div>
          </foreignObject>

          {/* 4. WhatsApp Icon (Far Right) */}
          <foreignObject x="244" y="145" width="48" height="48">
            <div className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center p-2.5">
              <Image
                src="/icons/whatsapp (2).png"
                alt="WhatsApp"
                width={28}
                height={28}
                className="w-full h-full object-contain"
              />
            </div>
          </foreignObject>
        </svg>
      </div>

      {/* ================= DESKTOP VIEW (RIGHT SIDE ARC) — unchanged ================= */}
      <div className="hidden lg:block w-full h-full relative">
        {/* Outer Right Arc */}
        <div className="absolute top-1/2 -right-[45%] -translate-y-1/2 w-[115%] aspect-square rounded-full border-[1.5px] border-gray-200/90 pointer-events-none" />

        {/* Inner Right Arc */}
        <div className="absolute top-1/2 -right-[45%] -translate-y-1/2 w-[80%] aspect-square rounded-full border-[1.5px] border-gray-200/90 pointer-events-none" />

        {/* Desktop Icons */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: "84%", left: "78%" }}>
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center p-3">
            <Image src="/icons/web (2).png" alt="Web" width={32} height={32} className="object-contain" />
          </div>
        </div>

        <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: "64%", left: "38%" }}>
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center p-3">
            <Image src="/icons/phone (2).png" alt="Phone" width={32} height={32} className="object-contain" />
          </div>
        </div>

        <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: "36%", left: "38%" }}>
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center p-3">
            <Image src="/icons/instagram.png" alt="Instagram" width={32} height={32} className="object-contain" />
          </div>
        </div>

        <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: "16%", left: "72%" }}>
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center p-3">
            <Image src="/icons/whatsapp (2).png" alt="WhatsApp" width={32} height={32} className="object-contain" />
          </div>
        </div>
      </div>

    </div>
  );
}