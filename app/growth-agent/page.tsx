"use client";

import Navbar from "@/components/layout/DarkNavbar";
import GrowthCarousel from "@/components/sections/growth-agent/GrowthCarousel";
import GrowthCustomerTrust from "@/components/sections/growth-agent/GrowthCustomerTrust";
import GrowthDemo from "@/components/sections/growth-agent/GrowthDemo";
import GrowthEngine from "@/components/sections/growth-agent/GrowthEngine";
import GrowthFaq from "@/components/sections/growth-agent/GrowthFaq";
import GrowthHero from "@/components/sections/growth-agent/GrowthHero";
import GrowthMetrics from "@/components/sections/growth-agent/GrowthMetrics";
import GrowthMultilingual from "@/components/sections/growth-agent/GrowthMultilingual";



export default function ShoppingAssistant() {
  return (
    <main className="min-h-screen p-2 text-white selection:bg-orange-500/30">
      <Navbar />
       <GrowthHero />
       <GrowthMetrics />
       <GrowthCarousel />
       <GrowthEngine />
       <GrowthMultilingual />
       <GrowthDemo />
       <GrowthCustomerTrust />
       <GrowthFaq />
    </main>
  )
}