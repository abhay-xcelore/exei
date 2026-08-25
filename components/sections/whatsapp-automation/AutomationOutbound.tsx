"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Megaphone,
  UserPlus,
  RefreshCw,
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

interface CapabilityCard {
  id: number;
  icon?: LucideIcon;
  logoSrc?: string; // Set this if you want to use custom image logos instead of Lucide icons
  title: string;
  description: string;
}

const capabilities: CapabilityCard[] = [
  {
    id: 1,
    icon: ShoppingCart,
    logoSrc: "/icons/whatsapp-automation/cart (2).svg", 
    title: "Abandoned Cart Recovery",
    description:
      "Trigger whatsapp automated messages with direct checkout links when shoppers leave items behind, recovering revenue while intent is high.",
  },
  {
    id: 2,
    icon: Megaphone,
    logoSrc: "/icons/whatsapp-automation/megaphone.svg",
    title: "New Drops & Seasonal Broadcasts",
    description:
      "Send personalized offers, festival discounts, and collection announcements to targeted buyer segments via official WhatsApp broadcasts.",
  },
  {
    id: 3,
    icon: UserPlus,
    logoSrc: "/icons/whatsapp-automation/user.svg",
    title: "Win-Back Inactive Shoppers",
    description:
      "Automatically re-engage customers who have not made a purchase in 30, 60, or 90 days with deals tailored to their past order history.",
  },
  {
    id: 4,
    icon: RefreshCw,
    logoSrc: "/icons/whatsapp-automation/shopify.svg",
    title: "Shopify & CRM Sync",
    description:
      "Keep contact tags, campaign activity, and purchase history updated across your entire store stack in real time.",
  },
];

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
        setMaxIndex(Math.max(0, capabilities.length - 3));
      } else if (window.innerWidth >= 640) {
        setMaxIndex(Math.max(0, capabilities.length - 2));
      } else {
        setMaxIndex(Math.max(0, capabilities.length - 1));
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

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [handleNext, isHovered]);

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
    <section className="relative w-full overflow-hidden font-[var(--font-poppins)]">
      {/* Outer Dark Wrapper */}
      <div className="relative w-full rounded-[2.5rem] bg-[#0A0A0A] text-white py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src="/images/bg-img.png"
            alt="Capabilities Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom opacity-70 mix-blend-normal"
          />
        </div>

        {/* Content Section */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium tracking-tight text-white leading-tight mb-3">
                Outbound Engagement & WhatsApp Marketing Automation
              </h2>
              <p className="text-sm sm:text-base text-gray-300 font-[300] m-0">
                Reach shoppers with proactive, high-converting campaigns that
                bring them back to checkout.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3 shrink-0 self-center md:self-auto">
              <button
                onClick={handlePrev}
                aria-label="Previous card"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all active:scale-95 bg-white text-black hover:bg-gray-100 shadow-lg cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next card"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all active:scale-95 bg-white text-black hover:bg-gray-100 shadow-lg cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
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
            >
              {capabilities.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="shrink-0 w-[85vw] sm:w-[340px] md:w-[360px] lg:w-[calc((100%-48px)/3)] bg-white text-gray-900 rounded-[2rem] p-6 sm:p-8 flex flex-col items-center text-center select-none shadow-xl min-h-[300px] justify-start"
                  >
                    {/* Top Circular Orange Badge Logo/Icon Container */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FF5E2C] flex items-center justify-center text-white mb-6 shrink-0 shadow-md">
                      {item.logoSrc ? (
                        <div className="relative w-7 h-7">
                          <Image
                            src={item.logoSrc}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        IconComponent && <IconComponent className="w-7 h-7" strokeWidth={2} />
                      )}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-gray-900 mb-3 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal m-0 max-w-[95%]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}