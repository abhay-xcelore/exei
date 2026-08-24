"use client";

import MessengerCare from "@/components/sections/messenger-ai-agent/MessengerCare";
import MessengerFaq from "@/components/sections/messenger-ai-agent/MessengerFaq";
import MessengerHero from "@/components/sections/messenger-ai-agent/MessengerHero";
import MessengerMatrics from "@/components/sections/messenger-ai-agent/MessengerMatrics";
import MessengerWorks from "@/components/sections/messenger-ai-agent/MessengerWorks";




export default function ShoppingAssistant() {
  return (
    <main className="min-h-screen p-2 text-white selection:bg-orange-500/30">
      <MessengerHero />
      <MessengerMatrics />
      <MessengerCare />
      <MessengerWorks />
      <MessengerFaq />
    </main>
  )
}