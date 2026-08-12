"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    id: 0,
    tag: "Success Story",
    title: "The Ultimate Guide to Glowing Skin: Top Cosmetics Tips for Every Skin Type",
    description:
      "The Ultimate Guide to Glowing Skin: Top Cosmetics Tips for Every Skin Type",
    date: "August 24, 2026",
    linkText: "Read Case Study",
    image: "/images/blogimg.png",
  },
  {
    id: 1,
    tag: "Case Study",
    title: "How Fashion Brands Boosted AOV by 28% Using AI Recommendations",
    description:
      "Explore how real-time intent analysis transformed abandoned carts into high-converting sales conversations.",
    date: "July 12, 2026",
    linkText: "Read Case Study",
    image: "/images/blogimg.png",
  },
  {
    id: 2,
    tag: "E-Commerce Strategy",
    title: "Automating 24/7 Customer Support Across WhatsApp & Web",
    description:
      "A deep dive into zero-lag AI deflection strategies that maintain CSAT scores above 95%.",
    date: "June 05, 2026",
    linkText: "Read Article",
    image: "/images/blogimg.png",
  },
  {
    id: 3,
    tag: "Product Update",
    title: "Unified Omnichannel Inbox: Managing Conversations in One Place",
    description:
      "Streamline Instagram, Voice, and Web inquiries into a singular intelligent dashboard.",
    date: "May 18, 2026",
    linkText: "Read Update",
    image: "/images/blogimg.png",
  },
];

export default function BlogsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
  }, []);

  // Auto-sliding interval (5 seconds, pauses when hovered)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  const currentPost = blogPosts[currentIndex];

  return (
    <section className="bg-[#FAFAFA] text-gray-900 py-10 md:py-14 px-6 font-[var(--font-poppins)]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header with Custom Margins */}
        <div className="flex flex-col items-center text-center mb-4 md:mb-6">
          
          {/* Content Hub Pill Badge */}
          <div className="relative inline-flex items-center justify-center mb-6">
            {/* Top Glowing Orange Accent Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/5 h-[2px] bg-gradient-to-r from-transparent via-[#FF5E2C] to-transparent z-20 blur-[0.5px]" />

            {/* Main Pill Container */}
            <div className="relative z-10 bg-gradient-to-b from-white/95 via-white/85 to-[#FFEFE9] rounded-full px-4 sm:px-6 py-0.5 sm:py-1.5 overflow-hidden">
              {/* Inner Ambient Glow at Bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#FFD2C3]/40 to-transparent pointer-events-none" />

              <span className="relative z-10 text-gray-950 text-xs font-normal tracking-tight">
                Content Hub
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 tracking-tight leading-tight mb-4">
            Success Stories & Blogs
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xl">
            Explore our customer stories, practical insights, and ideas shaping the experiences of ecommerce brands.
          </p>
        </div>

        {/* Carousel Container (White card on gray background) */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative bg-white border border-gray-100/80 rounded-3xl p-2 sm:p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow duration-300 mb-6"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPost.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center"
            >
              {/* Left Image Column */}
              <div className="md:col-span-6 relative h-[260px] sm:h-[320px] w-full rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={currentPost.image}
                  alt={currentPost.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>

              {/* Right Content Column */}
              <div className="md:col-span-6 p-2 sm:p-4 flex flex-col justify-between h-full min-h-[260px]">
                <div>
                  {/* Tag Pill */}
                  <div className="mb-3">
                    <span className="inline-block bg-[#FFF0EB] text-[#FF5E2C] text-[11px] font-semibold px-3 py-1 rounded-full border border-orange-200/60">
                      {currentPost.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-900 leading-snug tracking-tight mb-2">
                    {currentPost.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {currentPost.description}
                  </p>
                </div>

                {/* Footer Info & Action Link */}
                <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-medium text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-900" />
                    <span>{currentPost.date}</span>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-gray-900 font-bold hover:text-[#FF5E2C] transition-colors underline underline-offset-4 decoration-gray-300 hover:decoration-[#FF5E2C]"
                  >
                    <span>{currentPost.linkText}</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Clickable Pagination Dots */}
        <div className="flex items-center justify-center gap-2">
          {blogPosts.map((_, index) => {
            const isActive = currentIndex === index;
            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-6 h-2 bg-gray-900"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}