// components/layout/Navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Channels", href: "#channels" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "#about-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

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
        // Close the mobile menu if it happens to be open while scrolling
        // the header away, so it doesn't linger detached off-screen.
        setMobileOpen(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 px-5 sm:px-0 transition-[padding] duration-300 font-[var(--font-poppins)] ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      {/* Single persisting row — logo, links, and CTA never remount between states. */}
      <motion.div
        layout
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        className={`mx-auto flex items-center justify-between rounded-full transition-colors duration-300 ${
          scrolled
            ? "max-w-4xl px-4 sm:px-5 py-2 bg-[#18181b]/90 backdrop-blur-xl shadow-xl"
            : "max-w-7xl px-0 sm:px-6 py-0 bg-transparent shadow-none"
        }`}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/icons/exeiLogo.png"
            alt="Exei Logo"
            width={130}
            height={56}
            className="h-7 w-auto object-contain"
            priority
          />
        </Link>

        {/* Center Menu — desktop only, unchanged */}
        <nav
          style={{
            backdropFilter: scrolled ? "none" : "blur(23.4px)",
            WebkitBackdropFilter: scrolled ? "none" : "blur(23.4px)",
          }}
          className={`hidden md:flex items-center gap-8 rounded-full transition-all duration-300 ${
            scrolled
              ? "px-0 py-0 bg-transparent shadow-none"
              : "px-12 py-2.5 bg-[#535353]/38 shadow-2xl"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm sm:text-base font-normal text-gray-200 hover:text-white transition-colors tracking-wide whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: CTA always visible, hamburger only on mobile */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            href="#explore"
            className="relative group inline-flex items-center gap-3 bg-gradient-to-b from-[#FF814C] to-[#FF4C00] text-white text-[12px] font-normal pl-4 pr-1 py-1 rounded-full hover:brightness-105 active:scale-95 transition-all overflow-hidden"
          >
            {/* Top Edge Subtle Light Reflection */}
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

            {/* Button Text */}
            <span className="relative z-10">Explore More</span>

            {/* Glossy Arrow Icon Circle */}
            <div className="relative z-10 w-7 h-7 rounded-full bg-white/15 border border-white/35 flex items-center justify-center shadow-inner backdrop-blur-xs group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
            </div>
          </Link>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="md:hidden relative w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white shrink-0"
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

      {/* Mobile dropdown panel — sits below the pill, appears/disappears with a
          smooth height+opacity+scale reveal. Desktop never renders this. */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden mt-3 mx-5 sm:mx-6 rounded-3xl bg-[#18181b]/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden"
          >
            <nav className="flex flex-col p-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: 0.05 + i * 0.05, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-2xl text-base font-medium text-gray-200 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}