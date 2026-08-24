// components/sections/Agent3DCarouselSection.tsx
"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Headphones,
  ShoppingCart,
  TrendingUp,
  Check,
} from "lucide-react";

interface CarouselCardData {
  id: number;
  title: string;
  badgeIcon: React.ReactNode;
  badgeText: string;
  imageSrc: string;
  imageAlt: string;
  features: string[];
}

const CAROUSEL_DATA: CarouselCardData[] = [
  {
    id: 0,
    title: "Customer Service Agent",
    badgeIcon: <Headphones className="w-3.5 h-3.5 text-white" />,
    badgeText: "Service Operations",
    imageSrc: "/images/ai-voice-agent/customer.webp",
    imageAlt: "Customer Service Agent UI Preview",
    features: [
      "24/7 post-purchase support, inbound query resolution, and event-driven updates.",
      "Resolves WISMO questions, handles delivery rescheduling, and confirms COD orders over phone calls by connecting directly to real-time order data.",
    ],
  },
  {
    id: 1,
    title: "Shopping Assistant Agent",
    badgeIcon: <ShoppingCart className="w-3.5 h-3.5 text-white" />,
    badgeText: "Guided Buying",
    imageSrc: "/images/ai-voice-agent/shopping.webp",
    imageAlt: "Shopping Assistant Agent UI Preview",
    features: [
      "Guided product discovery and phone-assisted buying.",
      "Turns phone calls into personal shopping experiences. Shoppers can ask questions in natural language, and the agent queries live catalog inventory to suggest recommendations and text purchase links directly.",
    ],
  },
  {
    id: 2,
    title: "Growth Agent",
    badgeIcon: <TrendingUp className="w-3.5 h-3.5 text-white" />,
    badgeText: "Proactive Outreach",
    imageSrc: "/images/ai-voice-agent/growth.webp",
    imageAlt: "Growth Agent UI Preview",
    features: [
      "Proactive outbound sales, abandoned cart recovery, and retention campaigns.",
      "Executes automated, targeted call campaigns for cart recovery, lapsed customer win-backs, new product launches, and loyalty updates—using smart retry features to maximize connect rates.",
    ],
  },
];

export default function Agent3DCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const touchStartX = useRef<number>(0);
  const slideDuration = 4000;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_DATA.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + CAROUSEL_DATA.length) % CAROUSEL_DATA.length
    );
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, slideDuration);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 40) {
      nextSlide();
    } else if (diff < -40) {
      prevSlide();
    }
  };

  const getCardPositionClass = (index: number) => {
    const total = CAROUSEL_DATA.length;
    if (index === currentIndex) return "active";
    if (index === (currentIndex - 1 + total) % total) return "left";
    if (index === (currentIndex + 1) % total) return "right";
    return "hidden";
  };

  return (
    <section className="w-full bg-[#FAFAFC] pb-10 sm:pb-14 px-4 sm:px-6 flex flex-col items-center justify-center relative overflow-hidden font-[var(--font-poppins)]">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-3">
        <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium text-gray-900 tracking-tight leading-tight mb-3">
          Specialized AI Agents Powered By Voice
        </h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-3xl mx-auto leading-relaxed">
          Exei structures your Ecommerce operations automation through a
          specialized AI voice agent for every workflow. Each AI-Powered voice
          agent focuses on a specific operational goal driving automated
          calling across every stage.
        </p>
      </div>

      {/* 3D Carousel Stage */}
      <div
        className="w-full max-w-[1280px] h-[600px] sm:h-[680px] relative flex items-center justify-center"
        style={{ perspective: "1200px" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Desktop Prev Button — pinned ~25px from the stage's left edge */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-gray-200/60 items-center justify-center text-gray-700 hover:scale-110 transition-all z-40"
          style={{ left: "25px" }}
        >
          <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* 3D Track Container with preserve-3d */}
        <div
          className="w-full h-full relative flex justify-center items-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {CAROUSEL_DATA.map((card, index) => {
            const position = getCardPositionClass(index);

            // Side cards pushed further out (±420px) for a wider, more
            // visible gap between them and the active center card, while
            // still clearing the active card's own edge comfortably.
            let transformStyle = "";
            let opacityStyle = 1;
            let zIndexStyle = 10;
            let shadowStyle = "";

            if (position === "active") {
              transformStyle =
                "translate3d(0px, 0px, 0px) rotateY(0deg) scale(1)";
              opacityStyle = 1;
              zIndexStyle = 30;
              shadowStyle =
                "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] border-gray-200/80";
            } else if (position === "left") {
              transformStyle =
                "translate3d(-362px, 20px, -50px) rotateY(15deg) scale(0.85)";
              opacityStyle = 0.7;
              zIndexStyle = 10;
              shadowStyle = "shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] border-gray-200/40";
            } else if (position === "right") {
              transformStyle =
                "translate3d(345px, 20px, 50px) rotateY(-15deg) scale(0.85)";
              opacityStyle = 0.7;
              zIndexStyle = 10;
              shadowStyle = "shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] border-gray-200/40";
            }

            return (
              <div
                key={card.id}
                onClick={() => {
                  if (index !== currentIndex) {
                    setCurrentIndex(index);
                  }
                }}
                style={{
                  transform: transformStyle,
                  opacity: opacityStyle,
                  zIndex: zIndexStyle,
                  transformStyle: "preserve-3d",
                  transition:
                    "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s ease",
                }}
                className={`absolute w-[310px] sm:w-[360px] h-[540px] sm:h-[620px] bg-white rounded-[28px] p-5 sm:p-6 flex flex-col items-start text-left cursor-pointer border overflow-hidden ${shadowStyle}`}
              >
                {/* Image Container */}
                <div className="w-full h-[260px] sm:h-[340px] rounded-2xl mb-4 relative overflow-hidden shrink-0 bg-gray-50 border border-gray-100">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    className="object-cover object-top"
                  />

                  {/* Badge */}
                  <div className="absolute bottom-3 left-3 bg-[#18181B] text-white px-3.5 py-1.5 rounded-full text-[11px] font-semibold shadow-md flex items-center gap-1.5">
                    {card.badgeIcon}
                    <span>{card.badgeText}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight mb-3">
                  {card.title}
                </h3>

                {/* Features */}
                <div className="flex flex-col gap-2.5 w-full">
                  {card.features.map((featureText, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-relaxed text-gray-600 font-medium"
                    >
                      <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-amber-500 bg-[#0D0D0D] border border-transparent [background:linear-gradient(#0d0d0d,#0d0d0d)_padding-box,linear-gradient(90deg,#f7931e_0%,#a855f7_100%)_border-box] mt-0.5 shadow-[0_0_8px_rgba(247,147,30,0.15)]">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                      <span>{featureText}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Next Button — pinned ~25px from the stage's right edge */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-gray-200/60 items-center justify-center text-gray-700 hover:scale-110 transition-all z-40"
          style={{ right: "25px" }}
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-between sm:justify-center w-full max-w-[340px] sm:max-w-none px-4 z-40">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="md:hidden w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center text-gray-800"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={togglePlayPause}
          aria-label="Toggle Auto Play"
          className="w-11 h-11 bg-white rounded-full shadow-md hover:shadow-lg border border-gray-200 flex items-center justify-center text-gray-900 hover:scale-105 transition-all"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-current text-gray-900" />
          ) : (
            <Play className="w-4 h-4 fill-current text-gray-900 ml-0.5" />
          )}
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="md:hidden w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center text-gray-800"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}