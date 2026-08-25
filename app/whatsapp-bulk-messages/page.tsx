"use client";

import Navbar from "@/components/layout/DarkNavbar";
import BulkFaq from "@/components/sections/whatsapp-bulk-messages/BulkFaq";
import BulkHero from "@/components/sections/whatsapp-bulk-messages/BulkHero";
import BulkSync from "@/components/sections/whatsapp-bulk-messages/BulkSync";
import BulkTarget from "@/components/sections/whatsapp-bulk-messages/BulkTarget";




export default function ShoppingAssistant() {
  return (
    <main className="min-h-screen p-2 text-white selection:bg-orange-500/30">
      <Navbar />
      <BulkHero />
      <BulkTarget />
      <BulkSync />
      <BulkFaq />
    </main>
  )
}