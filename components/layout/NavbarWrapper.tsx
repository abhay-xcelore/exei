// components/layout/NavbarWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import LightNavbar from "./LightNavbar";
import DarkNavbar from "./DarkNavbar"

// Add routes here that use the white background hero
const LIGHT_BG_ROUTES = [
  "/website-ai-agent",
  "/ai-voice-agent",
  "/whatsapp-ai-agent",
  "/messenger-ai-agent",
  "/shopify-ai-agent",
  "/instagram-ai-agent"
];

export default function NavbarWrapper() {
  const pathname = usePathname();

  // Check if current page is in the light background list
  const isLightPage = LIGHT_BG_ROUTES.includes(pathname);

  return isLightPage ? <LightNavbar /> : <DarkNavbar />;
}