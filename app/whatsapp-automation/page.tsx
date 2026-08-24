"use client";

import Navbar from "@/components/layout/DarkNavbar";
import AutomationFaq from "@/components/sections/whatsapp-automation/AutomationFaq";
import AutomationHero from "@/components/sections/whatsapp-automation/AutomationHero";
import AutomationInbound from "@/components/sections/whatsapp-automation/AutomationInbound";
import AutomationOutbound from "@/components/sections/whatsapp-automation/AutomationOutbound";



export default function ShoppingAssistant() {
  return (
    <main className="min-h-screen p-2 text-white selection:bg-orange-500/30">
      <Navbar />
      <AutomationHero />
      <AutomationInbound />
      <AutomationOutbound />
      <AutomationFaq />
    </main>
  )
}