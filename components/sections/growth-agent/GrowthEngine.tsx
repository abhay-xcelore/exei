// components/sections/HowItWorksSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Step = {
  id: number;
  iconSrc: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    id: 0,
    iconSrc: "/icons/growth-agent/discover.svg",
    title: "Discover",
    description:
      "Scans order records, replenishment cycles, and past interactions to identify target audience segments ready for outreach.",
  },
  {
    id: 1,
    iconSrc: "/icons/growth-agent/personalized.svg",
    title: "Personalize",
    description:
      "Matches exact product recommendations, reorder timings, and offers to individual customer purchase histories.",
  },
  {
    id: 2,
    iconSrc: "/icons/growth-agent/dispatch.svg",
    title: "Dispatch",
    description:
      "Triggers brand-initiated campaigns natively on WhatsApp and Voice at optimal engagement times.",
  },
  {
    id: 3,
    iconSrc: "/icons/growth-agent/retain.svg",
    title: "Retain",
    description:
      "Converts past buyers into repeat orders, achieving a 20% boost in repeat purchase rates for retention cohorts.",
  },
];

const N = steps.length;

const GROW_FRAC = 0.09;
const HOLD_FRAC = 0.05;
const FINAL_HOLD_FRAC = 0.12;
const RESET_HOLD_FRAC = 0.001;

function buildCometSchedule(stepCount: number) {
  const times: number[] = [0];
  const head: number[] = [0];
  const tail: number[] = [0];
  let t = 0;

  for (let i = 1; i < stepCount; i++) {
    t += GROW_FRAC;
    times.push(t);
    head.push(i / (stepCount - 1));
    tail.push(0);

    t += i === stepCount - 1 ? FINAL_HOLD_FRAC : HOLD_FRAC;
    times.push(t);
    head.push(i / (stepCount - 1));
    tail.push(0);
  }

  for (let i = 1; i < stepCount; i++) {
    t += GROW_FRAC;
    times.push(t);
    head.push(1);
    tail.push(i / (stepCount - 1));

    t += i === stepCount - 1 ? RESET_HOLD_FRAC : HOLD_FRAC;
    times.push(t);
    head.push(1);
    tail.push(i / (stepCount - 1));
  }

  const max = times[times.length - 1];
  return {
    times: times.map((x) => x / max),
    head,
    tail,
  };
}

const { times: schedTimes, head: headKf, tail: tailKf } = buildCometSchedule(N);

const clipPathKfHorizontal = headKf.map(
  (h, idx) => `inset(0 ${(1 - h) * 100}% 0 ${tailKf[idx] * 100}%)`
);

// Dot & Icon activate EXACTLY when the progress head reaches the dot position
// and remain active until the progress tail passes beyond it.
function activeKeyframesFor(dotIndex: number) {
  const targetFrac = dotIndex / (N - 1);
  return headKf.map((h, idx) => {
    const t = tailKf[idx];
    return h >= targetFrac - 0.001 && t <= targetFrac + 0.001 ? 1 : 0;
  });
}

// Color Configuration
const INACTIVE_TRACK = "#E5E7EB"; // gray-200
const ACTIVE_LOADER = "#FF5D2B";  // Main progress orange
const INACTIVE_ICON_BG = "#F3F4F6"; // gray-100
const ACTIVE_ICON_BG = "#FF5D2B"; // Orange
const TOTAL_DURATION = 10;

export default function HowItWorksSection() {
  return (
    <section className="bg-[#FAFAF8] py-10 md:py-14 px-6 font-[var(--font-poppins)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium text-gray-900 tracking-tight leading-tight mb-4">
            Inside the Growth Agent Revenue Engine
          </h2>
          <p className="text-gray-700 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            How Exei Growth Agent turns one-time shoppers into repeat buyers.
          </p>
        </div>

        {/* =============================== DESKTOP (md+) =============================== */}
        <div className="hidden md:block">
          <div className="relative grid grid-cols-4 mb-12">
            {/* Base gray track */}
            <div 
              className="absolute top-1/2 left-[12.5%] right-[12.5%] -translate-y-1/2 h-[3px] rounded-full" 
              style={{ backgroundColor: INACTIVE_TRACK }}
            />

            {/* Animated orange comet loader */}
            <motion.div
              animate={{ clipPath: clipPathKfHorizontal }}
              transition={{
                duration: TOTAL_DURATION,
                times: schedTimes,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="absolute top-1/2 left-[12.5%] right-[12.5%] -translate-y-1/2 h-[3px] rounded-full z-0"
              style={{ backgroundColor: ACTIVE_LOADER }}
            />

            {steps.map((step, i) => {
              const activeKf = activeKeyframesFor(i);
              const scaleKf = activeKf.map((a) => (a ? 1.25 : 1));

              return (
                <div key={step.id} className="relative z-10 flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      backgroundColor: activeKf.map((a) => (a ? ACTIVE_LOADER : INACTIVE_TRACK)), 
                      scale: scaleKf 
                    }}
                    transition={{
                      duration: TOTAL_DURATION,
                      times: schedTimes,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className="relative w-3 h-3 rounded-full"
                  />
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const activeKf = activeKeyframesFor(i);
              const bgKf = activeKf.map((a) => (a ? ACTIVE_ICON_BG : INACTIVE_ICON_BG));
              const filterKf = activeKf.map((a) => (a ? "brightness(0) invert(1)" : "none"));

              return (
                <div key={step.id} className="flex flex-col items-center text-center">
                  <motion.div
                    animate={{ backgroundColor: bgKf }}
                    transition={{
                      duration: TOTAL_DURATION,
                      times: schedTimes,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className="w-16 h-16 rounded-4xl flex items-center justify-center mb-4 shadow-sm"
                  >
                    <motion.div
                      animate={{ filter: filterKf }}
                      transition={{
                        duration: TOTAL_DURATION,
                        times: schedTimes,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    >
                      <Image
                        src={step.iconSrc}
                        alt={step.title}
                        width={44}
                        height={44}
                        className="w-8 h-8 object-contain"
                      />
                    </motion.div>
                  </motion.div>

                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-[220px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* =============================== MOBILE / TABLET (below md) =============================== */}
        <MobileTimeline />
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Mobile vertical timeline
// ---------------------------------------------------------------------------
function MobileTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lineBounds, setLineBounds] = useState<{ top: number; bottom: number } | null>(null);

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const firstDot = dotRefs.current[0];
      const lastDot = dotRefs.current[N - 1];
      if (!container || !firstDot || !lastDot) return;

      const containerRect = container.getBoundingClientRect();
      const firstRect = firstDot.getBoundingClientRect();
      const lastRect = lastDot.getBoundingClientRect();

      const firstCenter = firstRect.top + firstRect.height / 2 - containerRect.top;
      const lastCenter = lastRect.top + lastRect.height / 2 - containerRect.top;

      setLineBounds({ top: firstCenter, bottom: lastCenter });
    };

    measure();

    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div ref={containerRef} className="md:hidden relative">
      {lineBounds && (
        <>
          {/* Base vertical track */}
          <div
            className="absolute left-8 w-[3px] rounded-full"
            style={{ 
              top: lineBounds.top, 
              height: lineBounds.bottom - lineBounds.top,
              backgroundColor: INACTIVE_TRACK 
            }}
          />

          {/* Animated vertical comet segment */}
          <motion.div
            animate={{ clipPath: clipPathKfHorizontal.map((_, idx) => {
              const h = headKf[idx];
              const t = tailKf[idx];
              return `inset(${t * 100}% 0 ${(1 - h) * 100}% 0)`;
            }) }}
            transition={{
              duration: TOTAL_DURATION,
              times: schedTimes,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="absolute left-8 w-[3px] rounded-full z-0"
            style={{ 
              top: lineBounds.top, 
              height: lineBounds.bottom - lineBounds.top,
              backgroundColor: ACTIVE_LOADER 
            }}
          />
        </>
      )}

      <div className="flex flex-col gap-10">
        {steps.map((step, i) => {
          const activeKf = activeKeyframesFor(i);
          const dotScaleKf = activeKf.map((a) => (a ? 1.25 : 1));
          const iconBgKf = activeKf.map((a) => (a ? ACTIVE_ICON_BG : INACTIVE_ICON_BG));
          const filterKf = activeKf.map((a) => (a ? "brightness(0) invert(1)" : "none"));

          return (
            <div key={step.id} className="relative z-10 flex items-start gap-5">
              <div className="w-16 shrink-0 flex items-center justify-center pt-8">
                <motion.div
                  ref={(el) => {
                    dotRefs.current[i] = el;
                  }}
                  animate={{ 
                    backgroundColor: activeKf.map((a) => (a ? ACTIVE_LOADER : INACTIVE_TRACK)), 
                    scale: dotScaleKf 
                  }}
                  transition={{
                    duration: TOTAL_DURATION,
                    times: schedTimes,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full"
                />
              </div>

              <div className="flex-1 flex flex-col items-start text-left">
                <motion.div
                  animate={{ backgroundColor: iconBgKf }}
                  transition={{
                    duration: TOTAL_DURATION,
                    times: schedTimes,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-16 h-16 rounded-4xl flex items-center justify-center mb-4 shadow-sm"
                >
                  <motion.div
                    animate={{ filter: filterKf }}
                    transition={{
                      duration: TOTAL_DURATION,
                      times: schedTimes,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    <Image
                      src={step.iconSrc}
                      alt={step.title}
                      width={44}
                      height={44}
                      className="w-8 h-8 object-contain"
                    />
                  </motion.div>
                </motion.div>

                <h4 className="text-base font-semibold text-gray-900 mb-2">
                  {step.title}
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}