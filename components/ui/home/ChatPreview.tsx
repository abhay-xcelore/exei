"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const messages = [
  { id: 1, text: "Hi! How can I help you with your order today?", isUser: false },
  { id: 2, text: "Where is my package? Order #4521", isUser: true },
  {
    id: 3,
    text: "Let me check that for you! Your order #4521 shipped on July 23 and is currently in transit. Expected delivery: July 28.",
    isUser: false,
  },
];

export default function ChatPreview() {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => (prev < messages.length ? prev + 1 : 1));
    }, 3000); // Cycles continuously every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-white shadow-2xl transition-all duration-500">
      {/* Agent Header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
        <span className="text-orange-400 text-sm">✦</span>
        <span className="font-semibold text-sm tracking-wide">Agent</span>
      </div>

      {/* Messages List */}
      <div className="space-y-3 min-h-[200px] flex flex-col justify-end">
        {messages.slice(0, visibleCount).map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end gap-2 ${msg.isUser ? "justify-end" : "justify-start"} transition-all duration-500 animate-in fade-in slide-in-from-bottom-2`}
          >
            <div
              className={`max-w-[85%] text-xs p-3.5 rounded-2xl leading-relaxed ${
                msg.isUser
                  ? "bg-white/20 text-white rounded-br-none"
                  : "bg-white/10 text-gray-200 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
            {msg.isUser && (
              <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 border border-white/20">
                <Image src="/icons/exeiLogo.png" alt="User Avatar" width={24} height={24} className="object-cover" />
              </div>
            )}
          </div>
        ))}

        {visibleCount < messages.length && (
          <div className="flex gap-1 items-center text-gray-400 text-xs pl-2 pt-1">
            <span className="animate-bounce">.</span>
            <span className="animate-bounce [animation-delay:0.2s]">.</span>
            <span className="animate-bounce [animation-delay:0.4s]">.</span>
          </div>
        )}
      </div>
    </div>
  );
}