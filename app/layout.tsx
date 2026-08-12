import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exei - AI Agents for Ecommerce",
  description: "Reach your customers where they already shop.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased text-white">
        {children}
        <Footer />
      </body>
    </html>
  );
}