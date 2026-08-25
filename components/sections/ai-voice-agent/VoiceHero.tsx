"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

/* ==========================================================================
   HERO SECTION WITH DEMO FORM & ADJUSTED NAV PADDING
   ========================================================================== */
export default function HeroSection() {
  // Form state & error tracking
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form validation handler
  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", phone: "", email: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    const phoneRegex = /^[0-9+\s-]{8,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section className="w-full bg-white text-gray-900 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
        
        {/* ==========================================
            LEFT COLUMN: HEADLINE & BADGES
            ========================================== */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-gray-900 leading-[1.12] mb-5"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5E2C] via-[#FF733A] to-[#FFA066] inline-block">
              AI Voice
            </span>{" "}
            Agent for Optimal Ecommerce Communication
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-xl font-normal leading-relaxed mb-8"
          >
            Handle inbound support and run automated phone campaigns using
            human-like voice agents that speak native Indian languages.
          </motion.p>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-10 sm:mb-12"
          >
            <button
              type="button"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#FF5E2C] via-[#FF692E] to-[#FF7A28] text-white font-medium text-sm sm:text-base px-7 py-3.5 rounded-full hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer"
            >
              <span>Install Now</span>
              <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-inner group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
              </div>
            </button>
          </motion.div>

          {/* 3 Feature Logos & Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row flex-wrap items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-6 text-gray-900 font-semibold text-xs sm:text-sm"
          >
            {/* Feature 1: Shopify */}
            <div className="flex items-center gap-2">
              <div className="relative w-5 h-5 shrink-0">
                <Image
                  src="/icons/shopify.png"
                  alt="Shopify"
                  fill
                  className="object-contain"
                />
              </div>
              <span>Available on Shopify App Store</span>
            </div>

            {/* Feature 2: Zero-Latency */}
            <div className="flex items-center gap-2">
              <div className="relative w-5 h-5 shrink-0">
                <Image
                  src="/icons/ai-voice-agent/live.png"
                  alt="Latency Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <span>Instant Zero-Latency Replies</span>
            </div>

            {/* Feature 3: Indian Languages */}
            <div className="flex items-center gap-2">
              <div className="relative w-5 h-5 shrink-0">
                <Image
                  src="/icons/ai-voice-agent/language (2).png"
                  alt="Languages Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <span>Native Indian Languages</span>
            </div>
          </motion.div>
        </div>

        {/* ==========================================
            RIGHT COLUMN: DEMO FORM CARD
            ========================================== */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[480px] bg-[#121212] text-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-9 shadow-2xl border border-gray-800"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white tracking-tight">
              Get Your Personalised Demo
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
              1-on-1 walkthrough tailored to your store catalog, brand voice,
              and workflows.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-3"
              >
                <CheckCircle2 className="w-12 h-12 text-[#FF5E2C]" />
                <h4 className="text-lg font-semibold text-white">
                  Demo Request Received!
                </h4>
                <p className="text-xs text-gray-400 max-w-xs">
                  Our team will reach out to you shortly to schedule your personalized walkthrough.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Input 1: Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full bg-[#242424] border ${
                      errors.name ? "border-red-500" : "border-transparent"
                    } focus:border-[#FF5E2C] text-white text-xs sm:text-sm rounded-xl px-4 py-3 outline-none transition-colors placeholder:text-gray-500`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-400 ml-1">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Input 2: Phone Number */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone no."
                    className={`w-full bg-[#242424] border ${
                      errors.phone ? "border-red-500" : "border-transparent"
                    } focus:border-[#FF5E2C] text-white text-xs sm:text-sm rounded-xl px-4 py-3 outline-none transition-colors placeholder:text-gray-500`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-400 ml-1">
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Input 3: Email ID */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-gray-300">
                    Email ID
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email id"
                    className={`w-full bg-[#242424] border ${
                      errors.email ? "border-red-500" : "border-transparent"
                    } focus:border-[#FF5E2C] text-white text-xs sm:text-sm rounded-xl px-4 py-3 outline-none transition-colors placeholder:text-gray-500`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-400 ml-1">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Form Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-2 bg-gradient-to-r from-[#FF5E2C] via-[#FF692E] to-[#FF7A28] text-white font-semibold text-xs sm:text-sm py-3.5 rounded-xl hover:opacity-95 active:scale-[0.99] transition-all duration-200 shadow-md shadow-orange-500/20 cursor-pointer"
                >
                  Book a Demo
                </button>
              </form>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
}