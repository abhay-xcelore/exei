"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  DollarSign,
  ShoppingBag,
  MessageSquareText,
  Bell,
} from "lucide-react";

const benefits = [
  {
    id: "funnel-visibility",
    label: "Funnel Visibility",
    iconSrc: "/icons/shopping-assistant/funnell.svg",
    title: "Funnel Visibility",
    description:
      "Track shopper progression in real time from initial product impressions and clicks to add-to-cart actions and completed orders.",
  },
  {
    id: "revenue-dashboard",
    label: "Revenue Dashboard",
    iconSrc: "/icons/shopping-assistant/revenue.svg",
    title: "Revenue Dashboard",
    description:
      "Measure total store revenue, total orders, and average order value generated directly by your shopping assistant.",
  },
  {
    id: "engagement-analytics",
    label: "Engagement Analytics",
    iconSrc: "/icons/shopping-assistant/engagement.svg",
    title: "Engagement Analytics",
    description:
      "Monitor total customer interactions to understand how shoppers discover items through natural conversation.",
  },
  {
    id: "product-impression",
    label: "Product Impression",
    iconSrc: "/icons/shopping-assistant/product.svg",
    title: "Product Impression",
    description:
      "Analyze top-viewed product cards and recommendations to optimize catalog performance and drive higher conversion rates.",
  },
];

function BenefitGraphic({ index }: { index: number }) {
  if (index === 0) return <FunnelVisibilityGraphic />;
  if (index === 1) return <RevenueDashboardGraphic />;
  if (index === 2) return <EngagementAnalyticsGraphic />;
  return <ProductImpressionGraphic />;
}

export default function BenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cardRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCard = (index: number) => {
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section className="bg-[#fafafa] py-10 md:py-14 px-4 sm:px-6 font-[var(--font-poppins)]">
      <div className="max-w-6xl mx-auto">
        {/* =============================== DESKTOP (lg+) — scrollspy layout =============================== */}
        <div className="hidden lg:grid grid-cols-12 gap-12">
          {/* LEFT: Header + sticky tabs */}
          <div className="col-span-6">
            <div className="sticky top-28">
              <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium text-gray-900 tracking-tight leading-tight mb-4">
                Measure Sales Performance &amp; Revenue Impact
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                Learn what drives revenue and where customer friction happens with our shopping assistant specific insights.
              </p>

              <div className="flex flex-col gap-3 max-w-[410px]">
                {benefits.map((benefit, i) => {
                  const isActive = activeIndex === i;
                  return (
                    <button
                      key={benefit.id}
                      onClick={() => scrollToCard(i)}
                      className={`relative flex items-center gap-3.5 text-left px-5 py-3.5 rounded-xl border transition-all duration-300 ${
                        isActive
                          ? "border-[#FF5E2C] bg-white shadow-sm"
                          : "border-gray-200/80 bg-white hover:border-gray-300"
                      }`}
                    >
                      <span
                        className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 overflow-hidden ${
                          isActive
                            ? "bg-[#FF5E2C]"
                            : "bg-gray-100 border border-gray-200/60"
                        }`}
                      >
                        <Image
                          src={benefit.iconSrc}
                          alt={benefit.label}
                          width={20}
                          height={20}
                          className={`w-5 h-5 object-contain transition-all duration-300 ${
                            isActive ? "brightness-0 invert" : "opacity-60"
                          }`}
                        />
                      </span>
                      <span
                        className={`text-sm sm:text-base font-medium transition-colors duration-300 ${
                          isActive ? "text-gray-900" : "text-gray-600"
                        }`}
                      >
                        {benefit.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Single white container housing all 4 benefit blocks */}
          <div className="col-span-6 bg-white rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col gap-8">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.id}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="scroll-mt-32"
              >
                <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-1.5">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-md">
                  {benefit.description}
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full rounded-2xl bg-[#FFF1EA] border border-orange-100/70 overflow-hidden p-4 sm:p-6 md:p-8 min-h-[300px] flex items-center justify-center"
                >
                  <BenefitGraphic index={i} />
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* =============================== MOBILE / TABLET (below lg) =============================== */}
        <div className="lg:hidden">
          <h2 className="text-2xl font-medium text-gray-900 tracking-tight leading-tight mb-3">
            Measure Sales Performance &amp; Revenue Impact
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-8">
            Learn what drives revenue and where customer friction happens with our shopping assistant specific insights.
          </p>

          <div className="flex flex-col gap-10">
            {benefits.map((benefit, i) => (
              <div key={benefit.id}>
                <h3 className="text-lg font-bold text-gray-900 mb-1.5">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {benefit.description}
                </p>

                <div className="w-full rounded-2xl bg-[#FFF1EA] border border-orange-100/70 overflow-hidden p-3 sm:p-5 min-h-[260px] flex items-center justify-center">
                  <BenefitGraphic index={i} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Graphics (Mobile Optimized)
// ---------------------------------------------------------------------------
function FunnelVisibilityGraphic() {
  const stats = [
    { label: "Impression", value: "124.5k" },
    { label: "Click rate", value: "38.2k" },
    { label: "Add to cart", value: "12.9k" },
  ];

  return (
    <div className="w-full max-w-md relative pt-3 pl-2 sm:pt-4 sm:pl-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-orange-950/5 border border-gray-100 p-4 pl-6 sm:p-6 sm:pl-8 relative z-10"
      >
        <div className="mb-4 sm:mb-6 pl-4 sm:pl-9">
          <h4 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">
            Track Shopper Progression
          </h4>
          <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">exei.ai</p>
        </div>

        <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="bg-[#F3F4F6] rounded-xl sm:rounded-2xl px-1.5 py-2.5 sm:p-3 border border-gray-100/80 text-center sm:text-left"
            >
              <p className="text-sm sm:text-xl font-extrabold text-gray-900 tracking-tight whitespace-nowrap">
                {stat.value}
              </p>
              <p className="text-[10px] sm:text-[11px] text-gray-500 font-medium mt-0.5 sm:mt-1 leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 200 }}
        className="absolute -top-1 -left-1 z-20 bg-gradient-to-tr from-[#EF4444] to-[#F87171] w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-500/30 border-2 sm:border-4 border-white"
      >
        <Bell className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
        whileHover={{ scale: 1.03 }}
        className="absolute -bottom-3 right-1 sm:-bottom-4 sm:right-2 z-20 bg-[#2563EB] text-white text-[11px] sm:text-xs font-medium pl-3 sm:pl-4 pr-1 sm:pr-1.5 py-1 sm:py-1.5 rounded-full shadow-lg shadow-blue-500/25 flex items-center gap-1.5 sm:gap-2 cursor-pointer"
      >
        <span>Turn on Notification</span>
        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-black flex items-center justify-center shrink-0">
          <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[2.5]" />
        </div>
      </motion.div>
    </div>
  );
}

function RevenueDashboardGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-orange-950/5 border border-gray-100 overflow-hidden"
    >
      <div className="flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 bg-[#EDEDEF]">
        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF5F56]" />
        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27C93F]" />
      </div>

      <div className="p-3.5 sm:p-5 space-y-3 sm:space-y-4 bg-white">
        <h4 className="text-sm sm:text-base font-bold text-gray-900">Dashboard</h4>

        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-[#F8F9FA] rounded-xl p-2.5 sm:p-3 border border-gray-100 flex items-center gap-2 sm:gap-3"
          >
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2.5} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-[11px] text-gray-500 font-medium truncate">Total Revenue</p>
              <p className="text-xs sm:text-sm font-bold text-gray-900 tracking-tight whitespace-nowrap">
                $129,917.00
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="bg-[#F8F9FA] rounded-xl p-2.5 sm:p-3 border border-gray-100 flex items-center gap-2 sm:gap-3"
          >
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2} />
            </div>
            <div>
              <p className="text-[10px] sm:text-[11px] text-gray-500 font-medium">Total Orders</p>
              <p className="text-xs sm:text-sm font-bold text-gray-900 tracking-tight">876</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="bg-white rounded-xl p-2.5 sm:p-3 border border-gray-100"
        >
          <p className="text-[11px] sm:text-xs font-semibold text-gray-800 mb-1.5 sm:mb-2">Yearly Total Revenue</p>
          <div className="relative h-14 sm:h-16 w-full">
            <div className="absolute left-0 top-0 text-[8px] sm:text-[9px] text-gray-300 font-medium">$12k</div>
            <div className="absolute left-0 bottom-0 text-[8px] sm:text-[9px] text-gray-300 font-medium">$0k</div>
            <div className="absolute left-5 sm:left-6 right-0 top-2 border-t border-dashed border-gray-200" />

            <svg viewBox="0 0 300 60" className="w-full h-full overflow-visible pl-5 sm:pl-6">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 0 50 Q 40 45, 70 32 T 150 28 T 220 16 T 300 12 L 300 60 L 0 60 Z"
                fill="url(#chartGradient)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <motion.path
                d="M 0 50 Q 40 45, 70 32 T 150 28 T 220 16 T 300 12"
                fill="none"
                stroke="#2563EB"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function EngagementAnalyticsGraphic() {
  const backgroundCards = [
    { label: "AVG. Session", value: "31m 23s" },
    { label: "AVG. Session", value: "31m 23s" },
    { label: "Resolution rate", value: "89.4%" },
    { label: "Resolution rate", value: "89.4%" },
  ];

  return (
    <div className="w-full max-w-md relative h-[190px] sm:h-[220px] flex items-center justify-center">
      <div className="absolute inset-0 grid grid-cols-2 gap-2 sm:gap-3 opacity-40 blur-[1.5px] scale-95 pointer-events-none">
        {backgroundCards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-2.5 sm:p-3 shadow-sm border border-gray-100 flex items-center gap-2 sm:gap-2.5"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-200 shrink-0" />
            <div>
              <p className="text-[9px] sm:text-[10px] text-gray-400 font-medium">{card.label}</p>
              <p className="text-xs sm:text-sm font-bold text-gray-700">{card.value}</p>
              <p className="text-[8px] sm:text-[9px] text-emerald-500 font-semibold">+4.2% vs last week</p>
            </div>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 15 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring", stiffness: 180 }}
        className="relative z-10 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-2xl shadow-orange-950/10 border border-gray-100 flex items-center gap-3 sm:gap-4 max-w-[90%] sm:min-w-[260px]"
      >
        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
          <MessageSquareText className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
        </div>
        <div>
          <p className="text-[11px] sm:text-xs font-medium text-gray-400">Total Interaction</p>
          <p className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mt-0.5">
            17,250
          </p>
          <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5 text-[10px] sm:text-[11px]">
            <span className="font-bold text-emerald-600">+22.3%</span>
            <span className="text-gray-400">vs last week</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ProductImpressionGraphic() {
  return (
    <div className="w-full max-w-md relative flex flex-col items-center pt-3 sm:pt-4">
      <div className="absolute top-0 w-[85%] h-12 sm:h-14 bg-white/60 rounded-2xl border border-gray-100 shadow-sm" />
      <div className="absolute top-2 sm:top-2.5 w-[92%] h-12 sm:h-14 bg-white/85 rounded-2xl border border-gray-100 shadow-sm" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="w-full mt-4 sm:mt-5 bg-white rounded-2xl p-3 sm:p-3.5 shadow-xl shadow-orange-950/5 border border-gray-100 flex items-center gap-2.5 sm:gap-3 relative z-10"
      >
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 border-2 sm:border-4 border-[#D8E9FF] shadow-sm">
          <Image
            src="/images/shopping-assistant/merino-wool-sweater.jpg"
            alt="Merino Wool Sweater"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="text-xs sm:text-sm font-medium text-gray-600 truncate mb-0.5">
            Merino Wool Sweater
          </h4>
          <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
            <span className="text-sm sm:text-base font-bold text-gray-900 whitespace-nowrap">8.4k view</span>
            <span className="text-gray-400 font-normal">•</span>
            <span className="text-sm sm:text-base font-bold text-gray-900 whitespace-nowrap">$2,000 USD</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}