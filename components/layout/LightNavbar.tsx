// components/layout/LightNavbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";

// Dropdown data structure containing all menu routes
const dropdownData = {
  Products: {
    columns: [
      {
        title: "PRODUCTS",
        items: [
          { label: "Shopping Assistant", href: "/shopping-assistant" },
          { label: "Growth Agent", href: "/growth-agent" },
          { label: "Customer Service Agent", href: "/customer-service" },
        ],
      },
      {
        title: "PRODUCT FEATURES",
        items: [
          { label: "WhatsApp Broadcast", href: "/whatsapp-broadcast" },
          { label: "WhatsApp Bulk Messages", href: "/whatsapp-bulk-messages" },
          { label: "WhatsApp Automation", href: "/whatsapp-automation" },
        ],
      },
    ],
  },
  Channels: {
    columns: [
      {
        title: "CHANNELS",
        items: [
          { label: "WhatsApp AI Agent", href: "/whatsapp-ai-agent" },
          { label: "Shopify AI Agent", href: "/shopify-ai-agent" },
          { label: "Voice AI Agent", href: "/ai-voice-agent" },
          { label: "Instagram AI Agent", href: "/instagram-ai-agent" },
          { label: "Website AI Agent", href: "/website-ai-agent" },
          { label: "Messenger AI Agent", href: "/messenger-ai-agent" },
        ],
      },
    ],
  },
};

const navLinks = [
  { label: "Products", href: "#products", hasDropdown: true },
  { label: "Channels", href: "#channels", hasDropdown: true },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about-us" },
];

export default function LightNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

  const lastScrollY = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY.current;
      const scrollingDown = currentScrollY > lastScrollY.current;

      if (currentScrollY <= 20) {
        setHidden(false);
        setScrolled(false);
      } else if (scrollingUp) {
        setHidden(false);
        setScrolled(true);
      } else if (scrollingDown) {
        setHidden(true);
        setMobileOpen(false);
        setActiveDropdown(null);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (label in dropdownData) {
      setActiveDropdown(label);
    } else {
      setActiveDropdown(null);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 px-5 sm:px-0 transition-[padding] duration-300 font-[var(--font-poppins)] ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <motion.div
        layout
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        className={`mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "max-w-4xl px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-xl shadow-lg border border-gray-200/80"
            : "max-w-7xl px-0 sm:px-6 py-0 bg-transparent shadow-none"
        }`}
      >
        {/* Black Logo for White Background */}
        <Link href="/" className="flex items-center shrink-0 cursor-pointer">
          <Image
            src="/icons/exeiLogo-black.png"
            alt="Exei Logo"
            width={130}
            height={56}
            className="h-7 w-auto object-contain"
            priority
          />
        </Link>

        {/* Center Desktop Navigation Pill Container */}
        <nav
          onMouseLeave={handleMouseLeave}
          style={{
            backdropFilter: scrolled ? "none" : "blur(23.4px)",
            WebkitBackdropFilter: scrolled ? "none" : "blur(23.4px)",
          }}
          className={`hidden md:flex items-center gap-8 rounded-full transition-all duration-300 relative ${
            scrolled
              ? "px-6 py-2 bg-white/80 shadow-none border border-gray-200/60"
              : "px-10 py-2.5 bg-gray-100/80 shadow-md border border-gray-200/60"
          }`}
        >
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="py-1"
              onMouseEnter={() => handleMouseEnter(link.label)}
            >
              <Link
                href={link.href}
                className="group flex items-center gap-1.5 text-sm sm:text-[15px] font-medium text-gray-800 hover:text-black transition-colors tracking-tight whitespace-nowrap cursor-pointer"
              >
                <span>{link.label}</span>
                {link.hasDropdown && (
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-gray-600 transition-transform duration-200 ${
                      activeDropdown === link.label ? "rotate-180 text-black" : ""
                    }`}
                  />
                )}
              </Link>
            </div>
          ))}

          {/* Desktop Dropdown Container aligned to Nav Pill edges */}
          <AnimatePresence>
            {activeDropdown && dropdownData[activeDropdown as keyof typeof dropdownData] && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`absolute top-full mt-3 p-6 rounded-3xl border border-gray-200 shadow-2xl backdrop-blur-2xl transition-colors duration-300 bg-white/95 ${
                  activeDropdown === "Products" ? "left-0" : "left-24"
                }`}
              >
                <div className="flex gap-10 whitespace-nowrap">
                  {dropdownData[activeDropdown as keyof typeof dropdownData].columns.map((col, idx) => (
                    <div key={idx} className="flex flex-col gap-3 min-w-[170px]">
                      <span className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase">
                        {col.title}
                      </span>
                      <div className="flex flex-col gap-2.5">
                        {col.items.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-gray-700 hover:text-black hover:translate-x-1 transition-all duration-150"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            href="#explore"
            className="relative group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#FF814C] via-[#FF5E2C] to-[#FF4C00] text-white text-[12px] font-medium pl-4 pr-1 py-1 rounded-full shadow-md hover:brightness-105 active:scale-95 transition-all overflow-hidden cursor-pointer"
          >
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
            <span className="relative z-10">Explore More</span>
            <div className="relative z-10 w-7 h-7 rounded-full bg-white/20 border border-white/40 flex items-center justify-center shadow-inner backdrop-blur-xs group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
            </div>
          </Link>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="md:hidden relative w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-900 shrink-0 cursor-pointer"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <X className="w-4 h-4" strokeWidth={2.5} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Menu className="w-4 h-4" strokeWidth={2.5} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.div>

      {/* Mobile Dropdown Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden mt-3 mx-5 sm:mx-6 rounded-3xl bg-white/95 backdrop-blur-xl border border-gray-200 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col p-3">
              {navLinks.map((link, i) => {
                const isDropdown = link.hasDropdown && dropdownData[link.label as keyof typeof dropdownData];
                const isExpanded = expandedMobileItem === link.label;

                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: 0.05 + i * 0.05,
                      ease: "easeOut",
                    }}
                    className="flex flex-col"
                  >
                    <div
                      onClick={() => {
                        if (isDropdown) {
                          setExpandedMobileItem(isExpanded ? null : link.label);
                        } else {
                          setMobileOpen(false);
                        }
                      }}
                      className="flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          if (isDropdown) e.preventDefault();
                        }}
                      >
                        {link.label}
                      </Link>
                      {isDropdown && (
                        <ChevronDown
                          className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </div>

                    {/* Mobile Accordion Content */}
                    {isDropdown && isExpanded && (
                      <div className="pl-6 pr-4 py-2 flex flex-col gap-4 bg-gray-50 rounded-2xl my-1">
                        {dropdownData[link.label as keyof typeof dropdownData].columns.map((col, cIdx) => (
                          <div key={cIdx} className="flex flex-col gap-2">
                            <span className="text-[10px] font-semibold text-gray-400 tracking-wider uppercase">
                              {col.title}
                            </span>
                            {col.items.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-sm font-medium text-gray-700 hover:text-black py-1 transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}