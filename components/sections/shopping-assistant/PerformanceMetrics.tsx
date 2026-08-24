"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { MessageSquare, RefreshCw, CheckSquare } from "lucide-react";

interface MetricCardProps {
  icon: React.ElementType;
  value: number;
  suffix?: string;
  label: string;
}

function CounterCard({ icon: Icon, value, suffix = "", label }: MetricCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });

  const [displayValue, setDisplayValue] = useState(0);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const rounded = useTransform(springValue, (latest) => Math.floor(latest));

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [rounded]);

  useEffect(() => {
    if (isInView) {
      motionValue.set(0);
      motionValue.set(value);
    } else {
      motionValue.set(0);
    }
  }, [isInView, value, motionValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: false }}
      className="flex flex-col items-center justify-center bg-white rounded-2xl px-6 py-8 sm:px-8 sm:py-10 border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-center transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Icon Badge */}
      <div className="w-12 h-12 rounded-full border border-[#FF551D]/30 bg-[#FFF5F2] flex items-center justify-center mb-6">
        <Icon className="w-5 h-5 text-[#FF551D]" strokeWidth={2} />
      </div>

      {/* Number with Counter Animation */}
      <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-800 tracking-tight mb-2 flex items-center justify-center">
        <span>{displayValue}</span>
        <span>{suffix}</span>
      </div>

      {/* Metric Label */}
      <p className="text-xs sm:text-sm font-medium text-gray-500 tracking-tight m-0">
        {label}
      </p>
    </motion.div>
  );
}

export default function PerformanceMetrics() {
  const metrics = [
    {
      icon: MessageSquare,
      value: 33,
      suffix: "%",
      label: "Conversion Uplift",
    },
    {
      icon: RefreshCw,
      value: 25,
      suffix: "%",
      label: "LTV Growth",
    },
    {
      icon: CheckSquare,
      value: 5,
      suffix: " \u00A0Days",
      label: "Time-to-Live",
    },
  ];

  return (
    <section className="bg-[#FAFAFA] text-gray-900 pt-12 pb-12 sm:pt-14 sm:pb-14 px-6 font-[var(--font-poppins)]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          {/* Main Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 leading-tight mb-4">
            Conversation-Driven Growth You Can Measure
          </h2>
          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xl mx-auto m-0">
            Hyper-personalized selling built to lift conversion rates, increase basket size, and drive customer retention.
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {metrics.map((metric, idx) => (
            <CounterCard
              key={idx}
              icon={metric.icon}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
            />
          ))}
        </div>

      </div>
    </section>
  );
}