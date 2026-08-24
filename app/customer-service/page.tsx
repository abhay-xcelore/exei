"use client";

import Navbar from "@/components/layout/DarkNavbar";
import CustomerAgent from "@/components/sections/customer-service/CustomerAgent";
import CustomerCarousel from "@/components/sections/customer-service/CustomerCarousel";
import CustomerDemo from "@/components/sections/customer-service/CustomerDemo";
import CustomerFaq from "@/components/sections/customer-service/CustomerFaq";
import CustomerHero from "@/components/sections/customer-service/CustomerHero";
import CustomerMetrics from "@/components/sections/customer-service/CustomerMetrics";
import CustomerSupport from "@/components/sections/customer-service/CustomerSupport";
import CustomerTrust from "@/components/sections/customer-service/CustomerTrust";
import CustomerVisibility from "@/components/sections/customer-service/CustomerVisibility";
import CustomerWorks from "@/components/sections/customer-service/CustomerWorks";



export default function ShoppingAssistant() {
  return (
    <main className="min-h-screen p-2 text-white selection:bg-orange-500/30">
      <Navbar />
      <CustomerHero />
      <CustomerMetrics />
      <CustomerSupport />
      <CustomerCarousel />
      <CustomerAgent />
      <CustomerWorks />
      <CustomerVisibility />
      <CustomerTrust />
      <CustomerDemo />
      <CustomerFaq />
    </main>
  )
}