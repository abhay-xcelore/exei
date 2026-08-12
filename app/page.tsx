// app/page.tsx
"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/home/Hero";
import LogoMarquee from "@/components/sections/home/LogoMarquee";
import OverviewSection from "@/components/sections/home/OverviewSection";
import AgentsSection from "@/components/sections/home/AgentsSection";
import ChallengesSection from "@/components/sections/home/ChallengesSection";
import ImpactSection from "@/components/sections/home/ImpactSection";
import CapabilitiesSection from "@/components/sections/home/CapabilitiesSection";
import ProcessSection from "@/components/sections/home/ProcessSection";
import BlogsSection from "@/components/sections/home/BlogsSection";
import DemoSection from "@/components/sections/home/DemoSection";
import FaqSection from "@/components/sections/home/FaqSection";

import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen p-2 text-white selection:bg-orange-500/30">
      <Navbar />
        <Hero />
        <LogoMarquee />
        <OverviewSection />
        <AgentsSection />
        <ImpactSection />
        <CapabilitiesSection />
        <ProcessSection />
        <BlogsSection />
        <ChallengesSection />
        <DemoSection />
        <FaqSection />
    </main>
  );
}