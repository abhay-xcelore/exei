"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";

// Structure containing all dropdown menu items
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

export default function Navbar() {
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
      {/* Persisting Top Navigation Bar */}
      <motion.div
        layout
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        className={`mx-auto flex items-center justify-between rounded-full transition-colors duration-300 relative z-20 ${
          scrolled
            ? "max-w-4xl px-4 sm:px-5 py-2 bg-[#18181b]/90 backdrop-blur-xl shadow-xl"
            : "max-w-7xl px-0 sm:px-6 py-0 bg-transparent shadow-none"
        }`}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center shrink-0 cursor-pointer">
          <Image
            src="/icons/exeiLogo.png"
            alt="Exei Logo"
            width={130}
            height={56}
            className="h-7 w-auto object-contain"
            priority
          />
        </Link>

        {/* Center Desktop Navigation Links */}
        <nav
          onMouseLeave={handleMouseLeave}
          style={{
            backdropFilter: scrolled ? "none" : "blur(23.4px)",
            WebkitBackdropFilter: scrolled ? "none" : "blur(23.4px)",
          }}
          className={`hidden md:flex items-center gap-8 rounded-full transition-all duration-300 relative ${
            scrolled
              ? "px-6 py-2 bg-[#18181b]/80 shadow-none border border-white/5"
              : "px-10 py-2.5 bg-[#535353]/38 shadow-2xl"
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
                className="group flex items-center gap-1.5 text-sm sm:text-base font-normal text-gray-200 hover:text-white transition-colors tracking-wide whitespace-nowrap cursor-pointer"
              >
                <span>{link.label}</span>
                {link.hasDropdown && (
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-gray-300 transition-transform duration-200 ${
                      activeDropdown === link.label ? "rotate-180 text-white" : ""
                    }`}
                  />
                )}
              </Link>
            </div>
          ))}

          {/* Single Desktop Dropdown Container aligned to Navigation Pill */}
          <AnimatePresence>
            {activeDropdown && dropdownData[activeDropdown as keyof typeof dropdownData] && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`absolute top-full mt-3 p-6 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-2xl transition-colors duration-300 ${
                  activeDropdown === "Products" ? "left-0" : "left-24"
                } ${
                  scrolled ? "bg-[#18181b]/95" : "bg-[#2A2A2A]/90"
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
                            className="text-sm text-gray-200 hover:text-white hover:translate-x-1 transition-all duration-150"
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

        {/* Right side CTA & Mobile Hamburger Icon */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            href="#explore"
            className="relative group inline-flex items-center gap-3 bg-gradient-to-b from-[#FF814C] to-[#FF4C00] text-white text-[12px] font-normal pl-4 pr-1 py-1 rounded-full hover:brightness-105 active:scale-95 transition-all overflow-hidden cursor-pointer"
          >
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
            <span className="relative z-10">Explore More</span>
            <div className="relative z-10 w-7 h-7 rounded-full bg-white/15 border border-white/35 flex items-center justify-center shadow-inner backdrop-blur-xs group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
            </div>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="md:hidden relative w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white shrink-0 cursor-pointer"
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

      {/* Mobile Accordion Dropdown Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className={`md:hidden mt-3 mx-5 sm:mx-6 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden transition-colors duration-300 ${
              scrolled ? "bg-[#18181b]/95" : "bg-[#1f1f23]/90"
            }`}
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
                      className="flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium text-gray-200 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
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
                          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-white" : ""
                          }`}
                        />
                      )}
                    </div>

                    {/* Mobile Inner Dropdown List */}
                    {isDropdown && isExpanded && (
                      <div className="pl-6 pr-4 py-2 flex flex-col gap-4 bg-white/5 rounded-2xl my-1">
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
                                className="text-sm text-gray-300 hover:text-white py-1 transition-colors"
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