"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface CapabilityCard {
  id: number;
  iconSrc: string;
  title: string;
  description: string;
}

const capabilities: CapabilityCard[] = [
  {
    id: 1,
    iconSrc: "/icons/customer-service/wismo.svg",
    title: "Instant WISMO & Order Tracking",
    description:
      "Provides real-time order status, tracking links, and delivery windows across WhatsApp and Web chat, stopping shipping queries before they reach your support desk.",
  },
  {
    id: 2,
    iconSrc: "/icons/customer-service/order.svg",
    title: " Self-Service Returns & Order Edits",
    description:
      "Modifies active orders, issues return labels, updates shipping addresses, or cancels items in Shopify before fulfillment begins.",
  },
  {
    id: 3,
    iconSrc: "/icons/customer-service/policy.svg",
    title: "Grounded & Accurate Policy Answers",
    description:
      "Answers size guides, warranty terms, and store policies using only your verified store documents and guidelines.",
  },
  {
    id: 4,
    iconSrc: "/icons/customer-service/cart.svg",
    title: "Automated Cart Recovery & COD Verification",
    description:
      "Triggers automated WhatsApp and Instagram notifications for abandoned checkouts and verifies cash-on-delivery orders instantly.",
  },
  {
    id: 5,
    iconSrc: "/icons/customer-service/handoff.svg",
    title: "Clean Human Handoff",
    description:
      "Escalates complex customer requests directly to your support team with full chat logs attached so buyers never have to repeat themselves.",
  },
  {
    id: 6,
    iconSrc: "/icons/customer-service/deployment.svg",
    title: "Complete Omnichannel Deployment",
    description:
      "Runs across Web chat, WhatsApp, Instagram, Voice, and Custom APIs while sharing one central knowledge base and contact record.",
  },
];

// Motion Animation Variants
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardChildVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function CapabilitiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stepWidth, setStepWidth] = useState(330);
  const [maxIndex, setMaxIndex] = useState(2);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateBounds = () => {
      if (containerRef.current && containerRef.current.children[0]) {
        const firstCard = containerRef.current.children[0] as HTMLElement;
        const style = window.getComputedStyle(containerRef.current);
        const gap = parseFloat(style.gap) || 24;
        setStepWidth(firstCard.offsetWidth + gap);
      }

      if (window.innerWidth >= 1024) {
        setMaxIndex(capabilities.length - 3);
      } else if (window.innerWidth >= 640) {
        setMaxIndex(capabilities.length - 2);
      } else {
        setMaxIndex(capabilities.length - 1);
      }
    };

    calculateBounds();
    window.addEventListener("resize", calculateBounds);
    return () => window.removeEventListener("resize", calculateBounds);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-slide every 3 seconds (pauses when user hovers/touches)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [handleNext, isHovered]);

  // Handle manual touch drag ending
  const handleDragEnd = (
    _: unknown,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  return (
    <section className="relative w-full bg-[#fafafa] py-8 sm:py-10 md:py-12 font-[var(--font-poppins)] overflow-hidden">
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        {/* Header Row with Framer Motion */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={headerVariants}
          >
            <motion.h2 className="text-2xl sm:text-3xl md:text-[36px] font-semibold tracking-tight text-gray-900 leading-tight mb-3">
              Everything You Need to Automate <br className="hidden sm:inline" />
              Ecommerce Support
            </motion.h2>
            <motion.p className="text-sm sm:text-base text-gray-600 font-[300] m-0 leading-relaxed">
              Slash support volume and reclaim abandoned revenue without losing control of your brand voice. 
            </motion.p>
          </motion.div>

          {/* Navigation Buttons — Centered on Mobile & Small Sized */}
          <motion.div
            className="flex items-center gap-3 shrink-0 self-center md:self-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {/* Back Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous card"
              className="w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all active:scale-95 bg-gray-900 text-white hover:bg-gray-800 shadow-md cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next card"
              className="w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all active:scale-95 bg-gray-900 text-white hover:bg-gray-800 shadow-md cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </button>
          </motion.div>
        </div>

        {/* Cards Carousel Viewport */}
        <div
          className="w-full overflow-visible touch-pan-y"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <motion.div
            ref={containerRef}
            className="flex gap-6 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            animate={{ x: -currentIndex * stepWidth }}
            transition={{ type: "spring", stiffness: 200, damping: 26 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardContainerVariants}
          >
            {capabilities.map((item) => (
              <motion.div
                key={item.id}
                variants={cardChildVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="shrink-0 w-[78vw] sm:w-[320px] md:w-[340px] lg:w-[calc((100%-48px)/3.05)] bg-white border border-gray-100 shadow-sm hover:shadow-md text-gray-900 rounded-[1.8rem] p-6 sm:p-8 flex flex-col items-center text-center min-h-[310px] transition-shadow duration-300 select-none"
              >
                {/* Animated Icon Container */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="w-12 h-12 rounded-2xl bg-gradient-to-b from-[#FF7A43] to-[#FF4D00] flex items-center justify-center mb-6 shadow-md shadow-orange-500/20 p-2.5"
                >
                  <Image
                    src={item.iconSrc}
                    alt={item.title}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain pointer-events-none"
                  />
                </motion.div>

                {/* Animated Title */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="text-base sm:text-lg font-semibold tracking-tight text-gray-900 mb-3"
                >
                  {item.title}
                </motion.h3>

                {/* Animated Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal m-0"
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}