"use client";

import WhatsappAgent from "@/components/sections/whatsapp-ai-agent/WhatsappAgent";
import WhatsappBroadcast from "@/components/sections/whatsapp-ai-agent/WhatsappBroadcast";
import WhatsappCare from "@/components/sections/whatsapp-ai-agent/WhatsappCare";
import WhatsappEngine from "@/components/sections/whatsapp-ai-agent/WhatsappEngine";
import WhatsappHero from "@/components/sections/whatsapp-ai-agent/WhatsappHero";
import WhatsappIntegrate from "@/components/sections/whatsapp-ai-agent/WhatsappIntegrate";
import WhatsappStack from "@/components/sections/whatsapp-ai-agent/WhatsappStack";
import WhatsappFaq from "@/components/sections/whatsapp-ai-agent/WhatsappFaq";



export default function ShoppingAssistant() {
  return (
    <main className="min-h-screen p-2 text-white selection:bg-orange-500/30">
      <WhatsappHero />
      <WhatsappCare />
      <WhatsappBroadcast />
      <WhatsappAgent />
      <WhatsappEngine />
      <WhatsappIntegrate />
      <WhatsappStack />
      <WhatsappFaq />
    </main>
  )
}