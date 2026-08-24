"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const leftChallenges = [
  {
    iconPath: "/icons/customer-service/support.svg", 
    title: "Support Metrics",
    description:
      "Keep an immediate pulse on total conversation volume, ticket deflection, and agent fallbacks across every channel.",
  },
  {
    iconPath: "/icons/customer-service/topics.svg", 
    title: "Top Topics",
    description:
      "Group customer inquiries by recurring themes like order status, store policies, and cancellations to eliminate friction.",
  },
];

const rightChallenges = [
  {
    iconPath: "/icons/customer-service/performance.svg", 
    title: "Resolution Performance",
    description:
      "Measure incoming chat volume directly against autonomous resolution rates to maintain strict service standards.",
  },
  {
    iconPath: "/icons/customer-service/ticket.svg", 
    title: "Automated Ticket",
    description:
      "Track support tickets created and monitor human escalation patterns to refine your ai customer service agent over time.",
  },
];

// Animation Variants with explicit TypeScript typing
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
      staggerChildren: 0.15,
    },
  },
};

const textChildVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const centerImageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

const iconBadgeVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.3 },
  },
};

export default function ChallengesSection() {
  return (
    <section className="bg-[#FAFAFA] text-gray-900 pt-12 pb-10 md:pb-14 px-6 font-[var(--font-poppins)] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header with Motion Animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={headerVariants}
          className="flex flex-col items-center text-center mb-8 md:mb-12"
        >
          {/* Heading */}
          <motion.h2
            variants={textChildVariants}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight leading-tight mb-3"
          >
            Complete Visibility Over Every Conversation
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={textChildVariants}
            className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed font-normal"
          >
            Monitor resolution efficiency and support volume across every channel in real time with Customer Service AI agent specific insights.
          </motion.p>
        </motion.div>

        {/* Grid Layout: 2 Cards Left - Image Center - 2 Cards Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column (2 Cards) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardContainerVariants}
            className="lg:col-span-4 flex flex-col gap-6 justify-between"
          >
            {leftChallenges.map((item, idx) => {
              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="bg-white border border-gray-100/80 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 flex-1 justify-center space-y-3 cursor-default"
                >
                  <motion.div
                    variants={iconBadgeVariants}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF5E2C] to-[#FF7A28] text-white flex items-center justify-center mb-3 relative overflow-hidden"
                  >
                    <Image
                      src={item.iconPath}
                      alt={item.title}
                      width={22}
                      height={22}
                      className="object-contain"
                    />
                  </motion.div>
                  <motion.h3
                    variants={textChildVariants}
                    className="text-lg font-semibold text-gray-900"
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    variants={textChildVariants}
                    className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xs font-normal"
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Center Column (Featured Image Card) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={centerImageVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className="hidden lg:block lg:col-span-4 relative rounded-3xl overflow-hidden min-h-[380px] lg:min-h-full border border-gray-100 transition-shadow duration-300"
          >
            <Image
              src="/images/customer-service/conversation.png"
              alt="Ecommerce Challenge Solution"
              fill
              className="object-cover object-bottom"
              priority
            />
          </motion.div>

          {/* Right Column (2 Cards) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardContainerVariants}
            className="lg:col-span-4 flex flex-col gap-6 justify-between"
          >
            {rightChallenges.map((item, idx) => {
              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="bg-white border border-gray-100/80 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 flex-1 justify-center space-y-3 cursor-default"
                >
                  <motion.div
                    variants={iconBadgeVariants}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF5E2C] to-[#FF7A28] text-white flex items-center justify-center mb-3 relative overflow-hidden"
                  >
                    <Image
                      src={item.iconPath}
                      alt={item.title}
                      width={22}
                      height={22}
                      className="object-contain"
                    />
                  </motion.div>
                  <motion.h3
                    variants={textChildVariants}
                    className="text-lg font-semibold text-gray-900"
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    variants={textChildVariants}
                    className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xs font-normal"
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}