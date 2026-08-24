"use client";

import VoiceConnect from "@/components/sections/ai-voice-agent/VoiceConnect";
import VoiceFaq from "@/components/sections/ai-voice-agent/VoiceFaq";
import VoiceHero from "@/components/sections/ai-voice-agent/VoiceHero";
import VoiceOperations from "@/components/sections/ai-voice-agent/VoiceOperations";
import VoiceSpecialized from "@/components/sections/ai-voice-agent/VoiceSpecialized";
import VoiceUses from "@/components/sections/ai-voice-agent/VoiceUses";



export default function ShoppingAssistant() {
  return (
    <main className="min-h-screen p-2 text-white selection:bg-orange-500/30">
      <VoiceHero />
      <VoiceOperations />
      <VoiceSpecialized />
      <VoiceUses />
      <VoiceConnect />
      <VoiceFaq />
    </main>
  )
}