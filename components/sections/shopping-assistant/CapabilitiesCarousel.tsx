"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface CapabilityCard {
  id: number;
  iconSrc: string;
  title: string;
  description: string;
}

const capabilities: CapabilityCard[] = [
  {
    id: 1,
    iconSrc: "/icons/shopping-assistant/natural.svg",
    title: "Natural Language Discovery",
    description:
      'Shoppers express what they want in plain English—like "a comfortable outfit for a summer wedding". Exei shopping assistant decodes layered requests to surface best-fit items immediately.',
  },
  {
    id: 2,
    iconSrc: "/icons/shopping-assistant/live.svg",
    title: "Live Catalog Sync",
    description:
      "Synchronizes continuously with your live store catalog. The second an item sells out, it disappears from AI suggestions automatically, preventing post-purchase frustration.",
  },
  {
    id: 3,
    iconSrc: "/icons/shopping-assistant/rich.svg",
    title: "Rich Visual Product Cards",
    description:
      "Present high-resolution visual product cards complete with live pricing, item details, and embedded call-to-action buttons. Customers browse and add to cart directly inside the conversation.",
  },
  {
    id: 4,
    iconSrc: "/icons/shopping-assistant/upsell.svg",
    title: "Upsells & Smart Recommendations",
    description:
      "Asks intelligent qualifying questions at moments of hesitation. Recommends relevant cross-sells and upgrades based on active buying signals to boost cart total.",
  },
  {
    id: 5,
    iconSrc: "/icons/shopping-assistant/omnichannel.svg",
    title: "Omnichannel Deployment",
    description:
      "Deploy your AI agents for virtual shopping across WhatsApp, Website, Instagram, and Voice. Shared context ensures every touchpoint feels consistent and personal.",
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
        setMaxIndex(capabilities.length - 3); // Displays ~3 visible cards on desktop
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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 sm:mb-8">
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
                  className="shrink-0 w-[78vw] sm:w-[320px] md:w-[340px] lg:w-[calc((100%-48px)/3.05)] bg-white text-gray-900 rounded-[1.8rem] p-6 sm:p-8 flex flex-col items-center text-center min-h-[310px] select-none"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-[#FF7A43] to-[#FF4D00] flex items-center justify-center mb-6 shadow-md shadow-orange-500/20 p-2.5">
                    <Image
                      src={item.iconSrc}
                      alt={item.title}
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain pointer-events-none"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-semibold tracking-tight text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal m-0">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}