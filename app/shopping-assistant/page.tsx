"use client";

import Navbar from "@/components/layout/DarkNavbar";

import ScrollReveal from "@/components/animations/ScrollReveal";
import ShoppingHero from "@/components/sections/shopping-assistant/ShoppingHero";
import PerformanceMetrics from "@/components/sections/shopping-assistant/PerformanceMetrics";
import CapabilitiesCarousel from "@/components/sections/shopping-assistant/CapabilitiesCarousel";
import HowItWorksSection from "@/components/sections/shopping-assistant/HowItWorksSection";
import BenefitsSection from "@/components/sections/shopping-assistant/BenefitsSection";
import CustomerTrust from "@/components/sections/shopping-assistant/CustomerTrust";
import DemoSection from "@/components/sections/shopping-assistant/DemoSection";
import FaqShoppingAssistant from "@/components/sections/shopping-assistant/FaqShoppingAssistant";

export default function ShoppingAssistant() {
  return (
    <main className="min-h-screen p-2 text-white selection:bg-orange-500/30">
      <Navbar />
       <ShoppingHero />
       <PerformanceMetrics />
       <CapabilitiesCarousel />
       <HowItWorksSection />
       <BenefitsSection />
       <CustomerTrust />
       <DemoSection />
       <FaqShoppingAssistant />
    </main>
  )
}