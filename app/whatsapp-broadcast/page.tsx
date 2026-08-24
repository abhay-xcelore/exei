"use client";

import Navbar from "@/components/layout/DarkNavbar";
import BroadcastFaq from "@/components/sections/whatsapp-broadcast/BroadcastFaq";
import BroadcastHero from "@/components/sections/whatsapp-broadcast/BroadcastHero";
import BroadcastImpact from "@/components/sections/whatsapp-broadcast/BroadcastImpact";
import BroadcastTracking from "@/components/sections/whatsapp-broadcast/BroadcastTracking";




export default function ShoppingAssistant() {
  return (
    <main className="min-h-screen p-2 text-white selection:bg-orange-500/30">
      <Navbar />
      <BroadcastHero />
      <BroadcastImpact />
      <BroadcastTracking />
      <BroadcastFaq />
    </main>
  )
}