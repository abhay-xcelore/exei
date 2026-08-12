"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { MessageSquare, RefreshCw, CheckSquare, Ear } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import RevealGroup, { revealItemVariants } from "@/components/animations/RevealGroup";

// Animated Counter Component
function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 75,
    damping: 15,
  });

  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  useEffect(() => {
    return display.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toString();
      }
    });
  }, [display]);

  return <span ref={ref}>0</span>;
}

const metrics = [
  {
    icon: MessageSquare,
    value: 90,
    suffix: "%",
    label: "Customer queries resolved without a human agent",
  },
  {
    icon: RefreshCw,
    value: 3,
    suffix: "x",
    label: "Return on Investment (ROI)",
  },
  {
    icon: CheckSquare,
    value: 15,
    suffix: "%",
    label: "Lift in average order value (AOV)",
  },
  {
    icon: Ear,
    value: 17,
    suffix: "%",
    label: "Drop in cart abandonment",
  },
];

export default function ImpactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", phone: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Invalid phone number";
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
      setFormData({ name: "", email: "", phone: "" });
    }
  };

  return (
    <section className="bg-[#FAFAFA] text-gray-900 py-10 md:py-14 px-6 font-[var(--font-poppins)]">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Top Hero Container */}
        <div className="bg-white rounded-3xl p-2 sm:p-2 md:p-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 pl-0 sm:pl-[20px]">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative inline-flex items-center justify-center overflow-hidden rounded-full mt-6 sm:mt-0"
            >
              {/* Top Soft Orange Accent Line */}
              <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#F56E35] to-transparent z-20 opacity-90 blur-[0.5px]" />

              {/* Figma Linear Gradient Fill */}
              <div className="relative z-10 bg-gradient-to-b from-white via-white/80 to-[#F56E35]/20 rounded-full px-4 sm:px-6 py-0.5 sm:py-1.5 border border-white/60">
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#999999]/10 to-transparent pointer-events-none" />
                <span className="relative z-10 text-black text-xs font-normal tracking-tight">
                  Proven Result
                </span>
              </div>
            </motion.div>

            <Reveal>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-medium text-gray-900 tracking-tight leading-[1.15]">
                The Impact of Connected AI Agents
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
                We turn every customer interaction into measurable business growth. Get live in 5 days and let our AI agents deliver instant resolution at every stage of your customer journey.
              </p>
            </Reveal>
          </div>

          {/* Right Live Voice Call Form */}
          <div className="lg:col-span-6 bg-black text-white p-6 sm:p-8 md:p-10 rounded-3xl">
            {/* Form Title */}
            <Reveal>
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-normal mb-6 leading-tight">
                Experience our AI voice agent live.
              </h3>
            </Reveal>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#27272a] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                  {errors.name && <p className="text-[10px] text-red-400 mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Email ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email id"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#27272a] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                  {errors.email && <p className="text-[10px] text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone no."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#27272a] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                />
                {errors.phone && <p className="text-[10px] text-red-400 mt-1">{errors.phone}</p>}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-2 bg-gradient-to-r from-[#FF5E2C] to-[#FF3B00] text-white text-[14px] font-medium py-3 rounded-full hover:brightness-105 active:scale-[0.99] transition-all"
              >
                {isSubmitted ? "Connecting Call..." : "Get an AI Call Now"}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center transition-shadow"
              >
                {/* Badge Icon Container */}
                <div className="w-12 h-12 rounded-full border border-orange-200 bg-[#FFF5F2] flex items-center justify-center text-[#FF5E2C] mb-4">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>
                <Reveal>
                {/* Animated Metric Number */}
                <div className="text-3xl sm:text-4xl lg:text-[36px] font-medium text-gray-900 tracking-tight mb-2 leading-none">
                  <Counter value={metric.value} />
                  {metric.suffix}
                </div>
                </Reveal>
                {/* Metric Label */}
                <Reveal delay={0.1}>
                  <p className="text-[14px] text-gray-600 font-medium leading-relaxed max-w-[200px]">
                    {metric.label}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}