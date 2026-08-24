"use client";

import ShopifyAutomation from "@/components/sections/shopify-ai-agent/ShopifyAutomation";
import ShopifyConversation from "@/components/sections/shopify-ai-agent/ShopifyConversation";
import ShopifyFaq from "@/components/sections/shopify-ai-agent/ShopifyFaq";
import ShopifyHero from "@/components/sections/shopify-ai-agent/ShopifyHero";
import ShopifyInsights from "@/components/sections/shopify-ai-agent/ShopifyInsights";
import ShopifyInstallation from "@/components/sections/shopify-ai-agent/ShopifyInstallation";
import ShopifyMatrics from "@/components/sections/shopify-ai-agent/ShopifyMatrics";


export default function ShoppingAssistant() {
  return (
    <main className="min-h-screen p-2 text-white selection:bg-orange-500/30">
      <ShopifyHero />
      <ShopifyMatrics />
      <ShopifyAutomation />
      <ShopifyConversation />
      <ShopifyInsights />
      <ShopifyInstallation />
      <ShopifyFaq />
    </main>
  )
}