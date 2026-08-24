"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 0,
    question: "What is Exei?",
    answer:
      "Exei builds AI agents for ecommerce brands. 3 specialised agents - a Customer Service Agent, Shopping Assistant, and Growth Agent that handle support, product discovery, and marketing end-to-end, inside the channels you already use.",
  },
  {
    id: 1,
    question: "What are AI agents for eCommerce?",
    answer:
      "AI agents for eCommerce are autonomous software assistants designed to interact with shoppers, resolve customer service inquiries, recommend targeted products, and trigger automated retention workflows across platforms like WhatsApp, Instagram, and Web.",
  },
  {
    id: 2,
    question: "How is an AI agent different from a chatbot?",
    answer:
      "Unlike traditional rule-based chatbots that follow static decision trees, AI agents understand contextual intent, connect directly to your store catalog and APIs, perform complex actions (like processing returns or checking order statuses), and continuously adapt to user behaviors.",
  },
  {
    id: 3,
    question: "Which AI agents for ecommerce does Exei offer?",
    answer:
      "Exei offers three specialized agents: the Shopping Assistant (for personalized product recommendations & conversion), the Customer Service Agent (for 24/7 automated support & WISMO queries), and the Growth Agent (for re-engagement & win-back campaigns).",
  },
  {
    id: 4,
    question: "What can Exei's Shopping Assistant do?",
    answer:
      "Exei's Shopping AI Agent recommends products from a brand's live catalog in real time and shows product cards with price and add-to-cart inside the conversation.",
  },
  {
    id: 5,
    question: "What can Exei's Growth AI Agent do?",
    answer:
      "Exei's Growth AI Agent runs campaigns and loyalty programs — win-back messages, seasonal campaigns, and points-expiry reminders — on WhatsApp and voice.",
  },
  
  {
    id: 6,
    question: "How long does it take to set up Exei's AI agents?",
    answer:
      "Exei's AI agents for ecommerce can go live in 5 days — connecting a brand's catalog, choosing the first agent, and deploying across WhatsApp, voice, web, and Instagram.",
  },
  {
    id: 7,
    question: "Which channels do Exei's ecommerce AI agents support?",
    answer:
      "Exei's AI agents for ecommerce work on WhatsApp, voice calls, website chat, and Instagram, all managed from one dashboard.",
  },
  {
    id: 8,
    question: "Can Exei integrate with existing platforms?",
    answer:
      "Yes, Exei seamlessly integrates with major e-commerce platforms like Shopify, WooCommerce, and custom tech stacks via dedicated APIs.",
  },
  {
    id: 9,
    question: "How are Exei's AI agents for ecommerce different from a generic chatbot?",
    answer:
      "Exei's AI agents for ecommerce share one customer record across shopping, support, and growth, so a conversation on one channel carries context into the next instead of starting over.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(0);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  // Split items evenly: Left column (5) & Right column (5) for desktop
  const leftFaqs = faqs.slice(0, 5);
  const rightFaqs = faqs.slice(5, 10);

  const renderFaqCard = (faq: (typeof faqs)[0]) => {
    const isOpen = openId === faq.id;

    return (
      <div
        key={faq.id}
        className={`bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 ${
          isOpen ? "shadow-md ring-1 ring-[#FF5E2C]/20" : "shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
        }`}
      >
        {/* Clickable Header Bar */}
        <button
          onClick={() => toggleFaq(faq.id)}
          className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none group"
        >
          <span className="text-sm sm:text-base font-medium text-gray-900 tracking-tight group-hover:text-[#FF5E2C] transition-colors">
            {faq.question}
          </span>

          {/* Elegant Floating Plus Button with Spring Physics */}
          <motion.div
            animate={{
              rotate: isOpen ? 135 : 0,
              backgroundColor: isOpen ? "#FF5E2C" : "#F3F3F5",
              color: isOpen ? "#FFFFFF" : "#374151",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
            }}
            className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-xs"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
          </motion.div>
        </button>

        {/* Smooth Expandable Answer */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <p className="px-6 pb-5 text-xs sm:text-sm text-gray-500 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="bg-[#FAFAFA] text-gray-900 py-10 md:py-14 px-6 font-[var(--font-poppins)]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-6">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* 2-Column Grid Layout for Desktop ([] []), Single Column for Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          {/* Left Column (5 Questions) */}
          <div className="space-y-4">
            {leftFaqs.map((faq) => renderFaqCard(faq))}
          </div>

          {/* Right Column (5 Questions) */}
          <div className="space-y-4">
            {rightFaqs.map((faq) => renderFaqCard(faq))}
          </div>
        </div>

      </div>
    </section>
  );
}