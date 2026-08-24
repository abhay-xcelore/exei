"use client";

import { motion, Variants } from "framer-motion";

interface ComparisonRow {
  id: number;
  basicText: string;
  featureName: string;
  aiAgentText: string;
}

const comparisonData: ComparisonRow[] = [
  {
    id: 1,
    basicText: "Manual replies, limited hours.",
    featureName: "Response Capability",
    aiAgentText: "24/7 instant, natural context-aware responses.",
  },
  {
    id: 2,
    basicText: "Single language, manual setups",
    featureName: "Language Support",
    aiAgentText: "80+ languages and voice interaction support",
  },
  {
    id: 3,
    basicText: "Fails on complex or non-standard queries",
    featureName: "Handling Capacity",
    aiAgentText: "Resolves up to 90% of inquiries & routes edge cases",
  },
  {
    id: 4,
    basicText: "Static forms or manual entry",
    featureName: "Lead Generation",
    aiAgentText: "Automatic qualification and instant CRM routing",
  },
  {
    id: 5,
    basicText: "Generic Whatsapp Bulk Messages",
    featureName: "Promotional Outreach",
    aiAgentText: "Personalized Whatsapp Broadcast campaigns tailored to buyer intent",
  },
  {
    id: 6,
    basicText: "Unofficial / Third-party (Risk of number ban)",
    featureName: "API & Account Safety",
    aiAgentText: "Official Meta Tech Provider(100% compliant & verified)",
  },
];

/* ==========================================================================
   EXPLICITLY TYPED ANIMATION VARIANTS
   ========================================================================== */
const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const rowContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const leftCardVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const rightCardVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const centerFeatureVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Mobile-only card entrance — simple fade + rise, one card at a time via
// the shared rowContainerVariants stagger on the parent.
const mobileCardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function GrowthAgentEngine() {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 px-4 sm:px-6 lg:px-12 overflow-hidden font-[var(--font-poppins)] text-gray-900">
      <div className="max-w-6xl mx-auto">

        {/* Header Title Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={headerVariants}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold tracking-tight text-[#0F172A] leading-tight mb-3">
            Inside The Growth Agent Revenue Engine
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-normal">
            How Exei Growth Agent turns one-time shoppers into repeat buyers.
          </p>
        </motion.div>

        {/* Desktop Header Column Titles */}
        <div className="hidden md:grid grid-cols-12 gap-4 items-center mb-6 text-center font-bold text-base lg:text-lg">
          <div className="col-span-5 text-[#1E293B]">
            Basic Keyword Chatbot
          </div>
          <div className="col-span-2"></div>
          <div className="col-span-5 text-[#0F172A]">
            Exei WhatsApp AI Agent
          </div>
        </div>

        {/* =====================================================================
            DESKTOP (md+) — three-column grid layout, completely unchanged.
           ===================================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={rowContainerVariants}
          className="relative hidden md:flex flex-col gap-4 sm:gap-5"
        >
          {comparisonData.map((row, index) => (
            <motion.div
              key={row.id}
              className="relative grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center"
            >
              {/* Left Card - Basic Keyword Chatbot */}
              <motion.div
                variants={leftCardVariants}
                whileHover={{ scale: 1.015, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="md:col-span-5 bg-[#F7F9FA] border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center flex items-center justify-center min-h-[64px] shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-xs sm:text-sm font-semibold text-[#183E35] leading-snug m-0">
                  {row.basicText}
                </p>
              </motion.div>

              {/* Center Column - Feature Label with Connecting Vertical Line */}
              <div className="hidden md:flex md:col-span-2 relative flex-col items-center justify-center py-1">
                {/* Connecting Vertical Line Segment */}
                {index < comparisonData.length - 1 && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[2px] h-[calc(100%+20px)] bg-gradient-to-b from-orange-400/80 via-orange-300/40 to-orange-400/80 z-0 pointer-events-none" />
                )}

                {/* Feature Name Pill / Badge */}
                <motion.div
                  variants={centerFeatureVariants}
                  className="relative z-10 text-xs lg:text-sm font-semibold text-[#334155] text-center px-2 py-1 bg-[#FAFAFA]"
                >
                  {row.featureName}
                </motion.div>
              </div>

              {/* Right Card - Exei WhatsApp AI Agent */}
              <motion.div
                variants={rightCardVariants}
                whileHover={{ scale: 1.015, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="md:col-span-5 bg-[#FF4D00] border border-[#FF4D00] rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center flex items-center justify-center min-h-[64px] shadow-md shadow-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20 transition-all cursor-default"
              >
                <p className="text-xs sm:text-sm font-medium text-white leading-snug m-0 tracking-wide">
                  {row.aiAgentText}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* =====================================================================
            MOBILE / TABLET (below md) — one white card per feature, with a
            "Basic Chatbot" labeled gray box on top and an "Exei AI Agent"
            labeled orange box below, matching the reference layout.
           ===================================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={rowContainerVariants}
          className="flex md:hidden flex-col gap-4"
        >
          {comparisonData.map((row) => (
            <motion.div
              key={row.id}
              variants={mobileCardVariants}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
            >
              {/* Feature title with orange accent bar */}
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="w-1 h-4 rounded-full bg-[#FF4D00] shrink-0" />
                <h3 className="text-sm font-bold text-[#0F172A] leading-tight m-0">
                  {row.featureName}
                </h3>
              </div>

              {/* Basic Chatbot block */}
              <div className="mb-3">
                <span className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                  Basic Chatbot
                </span>
                <div className="bg-[#F1F2F4] rounded-xl p-3">
                  <p className="text-xs font-medium text-gray-600 leading-snug m-0">
                    {row.basicText}
                  </p>
                </div>
              </div>

              {/* Exei AI Agent block */}
              <div>
                <span className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                  Exei AI Agent
                </span>
                <div className="relative bg-[#FF4D00] rounded-xl p-3 pr-8 shadow-md shadow-orange-500/15">
                  <p className="text-xs font-medium text-white leading-snug m-0">
                    {row.aiAgentText}
                  </p>
                  <span className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-white/20" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}