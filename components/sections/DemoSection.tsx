"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function DemoSection() {
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

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", phone: "", email: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Invalid phone number";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email ID is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 4000);
      setFormData({ name: "", phone: "", email: "" });
    }
  };

  return (
    <section className="relative bg-black text-white py-10 md:py-14 px-6 font-[var(--font-poppins)] overflow-hidden rounded-[1.5rem]">
      {/* Background Glow/Curtain Image Layer */}
      <div className="absolute inset-x-0 bottom-0 h-[80%] z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />
        <Image
          src="/images/bg-img.png"
          alt="Demo Section Backdrop"
          fill
          className="object-cover object-bottom opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-950/30 via-transparent to-transparent z-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column Text (Aligned to top, 48px font-size, font-medium) */}
        <div className="lg:col-span-7 space-y-6 pt-2">
          {/* Ready When You Are Pill Badge matching design */}
          <div className="relative inline-flex items-center justify-center">
            <div className="absolute top-0 inset-x-4 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF5E2C] to-transparent z-20" />
          <div className="relative inline-flex items-center justify-center">
  {/* Top Glowing Orange Accent Line */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF6A38] to-transparent z-20 shadow-[0_0_8px_#FF6A38] opacity-90" />

  {/* Main Pill Container */}
  <div className="relative z-10 bg-gradient-to-b from-[#141416] via-[#111113] to-[#2B170E] border border-white/10 rounded-full px-4 sm:px-6 py-0.5 sm:py-1.5 shadow-2xl overflow-hidden">
    {/* Inner Ambient Glow at Bottom */}
    <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#FF5E2C]/20 via-transparent to-transparent pointer-events-none" />

    <span className="relative z-10 text-white text-xs font-normal tracking-tight">
      Ready When You Are
    </span>
  </div>
</div>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white tracking-tight leading-[1.15] max-w-xl">
            Let us help you with our pre-build AI Agents to scale your Ecommerce Brand.
          </h2>
        </div>

        {/* Right Column Form */}
        <div className="lg:col-span-5 bg-[#121212]/90 border border-white/10 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-medium text-white mb-2 tracking-tight">
            Get Your Personalised Demo
          </h3>

          <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
            1-on-1 walkthrough tailored to your store catalog, brand voice, and workflows.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-[#242424] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              />
              {errors.name && (
                <p className="text-[10px] text-red-400 mt-1">{errors.name}</p>
              )}
            </div>

            {/* Phone Number Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your phone no."
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full bg-[#242424] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              />
              {errors.phone && (
                <p className="text-[10px] text-red-400 mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Email ID Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Email ID <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email id"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-[#242424] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              />
              {errors.email && (
                <p className="text-[10px] text-red-400 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Submit Button (Fully rounded pill style with gradient) */}
            <button
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-[#FF5E2C] to-[#FF3B00] text-white text-sm font-normal py-3 rounded-full hover:brightness-105 active:scale-[0.99] transition-all"
            >
              {isSubmitted ? "Request Submitted!" : "Book a Demo"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}