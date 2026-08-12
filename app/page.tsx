// app/page.tsx
"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import OverviewSection from "@/components/sections/OverviewSection";
import AgentsSection from "@/components/sections/AgentsSection";
import ChallengesSection from "@/components/sections/ChallengesSection";
import ImpactSection from "@/components/sections/ImpactSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import BlogsSection from "@/components/sections/BlogsSection";
import DemoSection from "@/components/sections/DemoSection";
import FaqSection from "@/components/sections/FaqSection";

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