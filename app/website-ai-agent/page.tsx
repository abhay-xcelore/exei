"use client";

import Navbar from "@/components/layout/DarkNavbar";
import HowItWorksSection from "@/components/sections/website-ai-agent/HowExeiWorks";
import WebsiteChatbot from "@/components/sections/website-ai-agent/WebsiteChatbot";
import WebsiteFaq from "@/components/sections/website-ai-agent/WebsiteFaq";
import WebsiteHero from "@/components/sections/website-ai-agent/WebsiteHero";
import WebsiteMatrics from "@/components/sections/website-ai-agent/WebsiteMatrics";


export default function ShoppingAssistant() {
  return (
    <main className="min-h-screen p-2 text-white selection:bg-orange-500/30">
      <WebsiteHero />
      <WebsiteChatbot />
      <WebsiteMatrics />
      <HowItWorksSection />
      <WebsiteFaq />
    </main>
  )
}