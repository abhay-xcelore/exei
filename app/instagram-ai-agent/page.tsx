"use client";

import InstagramAutomation from "@/components/sections/instagram-ai-agent/InstagramAutomation";
import InstagramConversation from "@/components/sections/instagram-ai-agent/InstagramConversation";
import InstagramFaq from "@/components/sections/instagram-ai-agent/InstagramFaq";
import InstagramHero from "@/components/sections/instagram-ai-agent/InstagramHero";
import InstagramInsights from "@/components/sections/instagram-ai-agent/InstagramInsights";
import InstagramInstallation from "@/components/sections/instagram-ai-agent/InstagramInstallation";
import InstagramMatrics from "@/components/sections/instagram-ai-agent/InstagramMatrics";


export default function ShoppingAssistant() {
  return (
    <main className="min-h-screen p-2 text-white selection:bg-orange-500/30">
      <InstagramHero />
      <InstagramMatrics />
      <InstagramAutomation />
      <InstagramConversation />
      <InstagramInsights />
      <InstagramInstallation />
      <InstagramFaq />
    </main>
  )
}