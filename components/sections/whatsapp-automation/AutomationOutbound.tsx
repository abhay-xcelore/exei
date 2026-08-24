"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface CapabilityCard {
  id: number;
  mediaSrc: string; // Image or Motion Graphic asset path
  title: string;
  description: string;
}

const capabilities: CapabilityCard[] = [
  {
    id: 1,
    mediaSrc: "/images/capabilities/natural-language.png",
    title: "Abandoned Cart Recovery",
    description:
      "Trigger whatsapp automated messages with direct checkout links when shoppers leave items behind, recovering revenue while intent is high.",
  },
  {
    id: 2,
    mediaSrc: "/images/capabilities/live-sync.png",
    title: "New Drops & Seasonal Broadcasts",
    description:
      "Send personalized offers, festival discounts, and collection announcements to targeted buyer segments via official WhatsApp broadcasts.",
  },
  {
    id: 3,
    mediaSrc: "/images/capabilities/visual-cards.png",
    title: "Win-Back Inactive Shoppers",
    description:
      "Automatically re-engage customers who have not made a purchase in 30, 60, or 90 days with deals tailored to their past order history.",
  },
  {
    id: 4,
    mediaSrc: "/images/capabilities/upsell.png",
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

      // Responsive max index calculation to prevent scrolling past the last card
      if (window.innerWidth >= 1024) {
        setMaxIndex(Math.max(0, capabilities.length - 3)); // Displays ~3 visible cards on desktop
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

  // Auto-slide every 3 seconds (pauses on hover/touch)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [handleNext, isHovered]);

  // Handle touch swipe / drag gestures
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
      {/* Outer Dark Wrapper spanning full width with inner container limits */}
      <div className="relative w-full rounded-[2.5rem] bg-[#0A0A0A] text-white py-10 sm:py-14 md:py-16 overflow-hidden">
        
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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium tracking-tight text-white leading-tight mb-3">
                Deploy Next-Gen AI Shopping <br className="hidden sm:inline" />
                Assistant Capabilities
              </h2>
              <p className="text-sm sm:text-base text-gray-100 font-[300] m-0">
                Designed specifically to turn customer intent into completed checkouts.
              </p>
            </div>

            {/* Navigation Buttons — Centered on Mobile & Compact Size */}
            <div className="flex items-center gap-3 shrink-0 self-center md:self-auto">
              {/* Back Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous card"
                className="w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all active:scale-95 bg-white text-black hover:bg-gray-100 shadow-lg cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                aria-label="Next card"
                className="w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all active:scale-95 bg-white text-black hover:bg-gray-100 shadow-lg cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
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
              {capabilities.map((item) => (
                <div
                  key={item.id}
                  className="shrink-0 w-[82vw] sm:w-[340px] md:w-[360px] lg:w-[calc((100%-48px)/3.05)] bg-white text-gray-900 rounded-[1.8rem] p-4 sm:p-5 flex flex-col items-center text-center overflow-hidden select-none shadow-xl"
                >
                  {/* Top Image / Motion Graphic Container */}
                  <div className="relative w-full aspect-[4/3] rounded-[1.4rem] bg-[#F4F4F5] overflow-hidden mb-5 flex items-center justify-center border border-gray-100/80">
                    <Image
                      src={item.mediaSrc}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 360px, 400px"
                      className="object-cover pointer-events-none transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Title & Description Container */}
                  <div className="px-2 pb-3 flex flex-col items-center">
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-gray-900 mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal m-0 max-w-[95%]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}