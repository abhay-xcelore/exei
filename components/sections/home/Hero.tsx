"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";

const chatSequence = [
  {
    id: 1,
    type: "agent",
    text: "Hi! How can I help you with your order today?",
  },
  {
    id: 2,
    type: "user",
    text: "Where is my package? Order #4521",
    avatar: "/images/exeichat.jpg",
  },
  {
    id: 3,
    type: "agent",
    text: "Let me check that for you! Your order #4521 shipped on July 23 and is currently in transit. Expected delivery: July 28.",
  },
];

export default function Hero() {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    // Continuous sequence loop
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 6);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative p-3 min-h-[auto] md:min-h-screen w-full flex items-center justify-center pt-28 pb-12 md:pt-36 md:pb-36 rounded-[1.5rem] overflow-hidden font-[var(--font-poppins)]">
      
      {/* Mobile Background Image (Visible only on screens below md breakpoint) */}
      <div className="absolute inset-0 w-full h-full z-0 md:hidden">
        <Image
          src="/images/bg-img.png"
          alt="Hero Mobile Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Desktop Background Video (Hidden on mobile, visible on md and up) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/exei-hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Grid container strictly matching Navbar alignment */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
        
        {/* Left Column Content - Direct gap-4 with tight tracking for equal gaps */}
        <div className="lg:col-span-7 text-white flex flex-col items-start gap-4">
          <Reveal className="w-full">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-tight tracking-tight m-0 p-0">
             AI Agents for <br />
             Ecommerce Businesses
            </h1>
          </Reveal>

          <Reveal delay={0.1} className="w-full">
            <p className="text-[#E7E7E7] text-sm sm:text-base max-w-xl leading-relaxed m-0 pb-1 sm:pb-3">
              Exei drives ecommerce revenue and automates your entire customer
              journey - from product discovery and 24/7 customer support to cart
              recovery and repeat sales on WhatsApp, Call, and Web.
            </p>
          </Reveal>

          <div className="m-0 p-0">
            <button className="relative group inline-flex items-center gap-3 bg-gradient-to-b from-[#FF814C] to-[#FF4C00] text-white text-[12px] font-normal pl-4 pr-1 py-1 rounded-full hover:brightness-105 active:scale-95 transition-all shrink-0 overflow-hidden">
              {/* Top Edge Subtle Light Reflection */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

              {/* Button Text */}
              <span className="relative z-10 tracking-tight">See How It Works</span>

              {/* Glossy Arrow Icon Circle */}
              <div className="relative z-10 w-7 h-7 rounded-full bg-white/15 border border-white/35 flex items-center justify-center shadow-inner backdrop-blur-xs group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
              </div>
            </button>
          </div>

          {/* Integration Icons */}
          <div className="pt-2 sm:pt-4 space-y-3">
            <p className="text-[14px] text-[#E7E7E7] tracking-wider font-[400]">
              Deploy Across
            </p>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 p-2 backdrop-blur-md flex items-center justify-center">
                <Image src="/icons/whatsapp (2).png" alt="WhatsApp" width={28} height={28} className="object-contain" />
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/10 p-2 backdrop-blur-md flex items-center justify-center">
                <Image src="/icons/phone (2).png" alt="Phone" width={28} height={28} className="object-contain" />
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/10 p-2 backdrop-blur-md flex items-center justify-center">
                <Image src="/icons/messanger (2).png" alt="Messenger" width={28} height={28} className="object-contain" />
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/10 p-2 backdrop-blur-md flex items-center justify-center">
                <Image src="/icons/instagram.png" alt="Instagram" width={28} height={28} className="object-contain" />
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/10 p-2 backdrop-blur-md flex items-center justify-center">
                <Image src="/icons/web (2).png" alt="Web" width={28} height={28} className="object-contain" />
              </div>
            </div>

            <div className="flex items-center gap-2 text-[14px] text-white pt-1">
              <Image src="/icons/shopify.png" alt="Shopify" width={18} height={18} />
              <span>Available on shopify app store</span>
            </div>
          </div>
        </div>

        {/* Right Column Chat Widget (Compact Desktop Size) */}
        <div className="hidden md:flex lg:col-span-5 justify-center lg:justify-end items-end w-full h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[340px] bg-black/33 backdrop-blur-xl rounded-2xl p-4 shadow-2xl space-y-3 text-white self-end"
          >
            {/* Header: Agent Tag */}
            <div className="flex items-center gap-2 text-white font-medium text-sm pb-0.5">
              <Image 
                src="/icons/chaticon.png" 
                alt="Agent Icon" 
                width={18} 
                height={18} 
                className="w-4 h-4 object-contain"
              />
              <span>Agent</span>
            </div>

            {/* Chat Messages Container */}
            <div className="space-y-2.5 min-h-[200px] flex flex-col justify-start">
              {/* Message 1 (Agent) */}
              {step >= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex justify-start"
                >
                  <div className="px-3 py-2 bg-white/15 text-white/90 rounded-xl text-xs leading-relaxed max-w-[88%]">
                    {chatSequence[0].text}
                  </div>
                </motion.div>
              )}

              {/* Message 2 (User) */}
              {step >= 2 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-end gap-1.5"
                >
                  <div className="px-3 py-2 bg-white/20 text-white rounded-xl text-xs leading-relaxed max-w-[85%]">
                    {chatSequence[1].text}
                  </div>
                  <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 border border-white/20 bg-gray-600">
                    <Image
                      src={chatSequence[1].avatar || "/icons/web (2).png"}
                      alt="User"
                      width={24}
                      height={24}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </motion.div>
              )}

              {/* Message 3 (Agent) */}
              {step >= 4 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex justify-start"
                >
                  <div className="px-3 py-2 bg-white/15 text-white/90 rounded-xl text-xs leading-relaxed max-w-[90%]">
                    {chatSequence[2].text}
                  </div>
                </motion.div>
              )}

              {/* Bare 3-Dot Wavy Loading Effect */}
              {(step === 0 || step === 3) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-1.5 pt-1 pl-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" />
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}