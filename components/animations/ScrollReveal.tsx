// components/animations/ScrollReveal.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
}

export default function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} // once: false triggers on both scroll up & down
      transition={{
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98], // smooth ease-out curve
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}