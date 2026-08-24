"use client";

import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
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
    iconSrc: "/icons/customer-service/connect.svg",
    title: "Connect Your Store",
    description:
      "Plug Exei directly into Shopify, CRMs, and messaging channels.",
  },
  {
    id: 1,
    iconSrc: "/icons/customer-service/knowledge.svg",
    title: "Upload Your Knowledge",
    description:
      "Effortlessly pull in store policies, help docs, and catalog data.",
  },
  {
    id: 2,
    iconSrc: "/icons/customer-service/guardrails.svg",
    title: "Configure Guardrails",
    description:
      "Customize brand tone, escalation triggers, and automated webhooks.",
  },
  {
    id: 3,
    iconSrc: "/icons/customer-service/makeit.svg",
    title: "Make It Yours",
    description:
      "Go live across Web, WhatsApp, Instagram, and Voice in just 5 days.",
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

function activeKeyframesFor(dotIndex: number) {
  const targetFrac = dotIndex / (N - 1);
  return headKf.map((h, idx) => {
    const t = tailKf[idx];
    return h >= targetFrac - 0.001 && t <= targetFrac + 0.001 ? 1 : 0;
  });
}

const INACTIVE_TRACK = "rgba(255, 255, 255, 0.3)";
const INACTIVE_DOT = "#FFFFFF";
const ACTIVE_LOADER = "#FF5D2B";
const INACTIVE_ICON_BG = "#FFFFFF";
const ACTIVE_ICON_BG = "#FF5D2B";
const TOTAL_DURATION = 10;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HowItWorksSection() {
  return (
    <section className="relative w-full overflow-hidden font-[var(--font-poppins)]">
      <div className="relative w-full rounded-[2.5rem] bg-[#0A0A0A] text-white py-8 sm:py-12 md:py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src="/images/bg-img.png"
            alt="Section Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom opacity-70 mix-blend-normal"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="text-center mb-10 md:mb-14"
          >
            <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-[36px] font-medium text-white tracking-tight leading-tight mb-4">
              How the Exei AI Customer Service Agent Works 
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
              Integrate into your existing helpdesk, CRM, and ecommerce stack with ease.
            </motion.p>
          </motion.div>

          {/* DESKTOP (md+) */}
          <div className="hidden md:block">
            <div className="relative grid grid-cols-4 mb-12">
              <div 
                className="absolute top-1/2 left-[12.5%] right-[12.5%] -translate-y-1/2 h-[3px] rounded-full" 
                style={{ backgroundColor: INACTIVE_TRACK }}
              />

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
                        backgroundColor: activeKf.map((a) => (a ? ACTIVE_LOADER : INACTIVE_DOT)), 
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

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="grid grid-cols-4 gap-6"
            >
              {steps.map((step, i) => {
                const activeKf = activeKeyframesFor(i);
                const bgKf = activeKf.map((a) => (a ? ACTIVE_ICON_BG : INACTIVE_ICON_BG));
                const filterKf = activeKf.map((a) => (a ? "brightness(0) invert(1)" : "none"));

                return (
                  <motion.div key={step.id} variants={itemVariants} className="flex flex-col items-center text-center">
                    <motion.div
                      animate={{ backgroundColor: bgKf }}
                      transition={{
                        duration: TOTAL_DURATION,
                        times: schedTimes,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-5 shadow-lg"
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

                    <motion.h4 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * i }}
                      className="text-base sm:text-lg font-semibold text-white mb-2"
                    >
                      {step.title}
                    </motion.h4>

                    <motion.p 
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.15 * i }}
                      className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-[220px] font-light"
                    >
                      {step.description}
                    </motion.p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* MOBILE / TABLET (below md) */}
          <MobileTimeline />
        </div>
      </div>
    </section>
  );
}

// Mobile vertical timeline
function MobileTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstDotRef = useRef<HTMLDivElement>(null);
  const lastDotRef = useRef<HTMLDivElement>(null);

  const [lineStyle, setLineStyle] = useState<{ top: number; height: number } | null>(null);

  useEffect(() => {
    const updateLine = () => {
      const container = containerRef.current;
      const firstDot = firstDotRef.current;
      const lastDot = lastDotRef.current;

      if (!container || !firstDot || !lastDot) return;

      const containerRect = container.getBoundingClientRect();
      const firstRect = firstDot.getBoundingClientRect();
      const lastRect = lastDot.getBoundingClientRect();

      // Get exact centers relative to container
      const top = firstRect.top + firstRect.height / 2 - containerRect.top;
      const bottom = lastRect.top + lastRect.height / 2 - containerRect.top;

      setLineStyle({
        top,
        height: Math.max(0, bottom - top),
      });
    };

    updateLine();

    const ro = new ResizeObserver(updateLine);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", updateLine);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateLine);
    };
  }, []);

  return (
    <div ref={containerRef} className="md:hidden relative">
      {lineStyle && (
        <>
          {/* Base vertical track centered on dots */}
          <div
            className="absolute left-8 w-[3px] -translate-x-1/2 rounded-full z-0"
            style={{
              top: lineStyle.top,
              height: lineStyle.height,
              backgroundColor: INACTIVE_TRACK,
            }}
          />

          {/* Animated vertical comet loader */}
          <motion.div
            animate={{
              clipPath: clipPathKfHorizontal.map((_, idx) => {
                const h = headKf[idx];
                const t = tailKf[idx];
                return `inset(${t * 100}% 0 ${(1 - h) * 100}% 0)`;
              }),
            }}
            transition={{
              duration: TOTAL_DURATION,
              times: schedTimes,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="absolute left-8 w-[3px] -translate-x-1/2 rounded-full z-0"
            style={{
              top: lineStyle.top,
              height: lineStyle.height,
              backgroundColor: ACTIVE_LOADER,
            }}
          />
        </>
      )}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="relative z-10 flex flex-col gap-10"
      >
        {steps.map((step, i) => {
          const activeKf = activeKeyframesFor(i);
          const dotScaleKf = activeKf.map((a) => (a ? 1.25 : 1));
          const iconBgKf = activeKf.map((a) => (a ? ACTIVE_ICON_BG : INACTIVE_ICON_BG));
          const filterKf = activeKf.map((a) => (a ? "brightness(0) invert(1)" : "none"));

          let dotRef = null;
          if (i === 0) dotRef = firstDotRef;
          if (i === N - 1) dotRef = lastDotRef;

          return (
            <motion.div key={step.id} variants={itemVariants} className="flex items-start gap-5">
              <div className="w-16 shrink-0 flex items-center justify-center pt-8">
                <motion.div
                  ref={dotRef}
                  animate={{
                    backgroundColor: activeKf.map((a) => (a ? ACTIVE_LOADER : INACTIVE_DOT)),
                    scale: dotScaleKf,
                  }}
                  transition={{
                    duration: TOTAL_DURATION,
                    times: schedTimes,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full relative z-10"
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
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg"
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

                <motion.h4
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-base font-semibold text-white mb-2"
                >
                  {step.title}
                </motion.h4>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-sm text-gray-300 leading-relaxed font-light"
                >
                  {step.description}
                </motion.p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}