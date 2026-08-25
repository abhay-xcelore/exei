import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Mock data for integration logos. Replace with your actual logo assets.
const leftColumnLogos = [
  { id: 1, src: '/icons/instagram.png', alt: 'Instagram' }, // Replace with actual paths
  { id: 2, src: '/icons/whatsapp (2).png', alt: 'whatsapp' },
  { id: 3, src: '/icons/messanger (2).png', alt: 'messanger' },
  // ... more logos
];

const rightColumnLogos = [
  { id: 4, src: '/icons/web (2).png', alt: 'web' },
  { id: 5, src: '/icons/phone (2).png', alt: 'Phone' },
  { id: 6, src: '/icons/instagram.png', alt: 'Instagram' },
  { id: 7, src: '/icons/shopify.png', alt: 'Shopify' },
  // ... more logos
];

// Duplicate logos to create an infinite loop effect
const duplicatedLeftLogos = [...leftColumnLogos, ...leftColumnLogos];
const duplicatedRightLogos = [...rightColumnLogos, ...rightColumnLogos];

const SpecializationSection: NextPage = () => {
  return (
    <>

      <section className="bg-[#fafafa] py-10 md:py-14 px-6 md:px-12 font-[var(--font-poppins)]">
        {/* The grid now has items-start to align content to the top */}
        <div className="max-w-7xl mx-auto px-0 sm:px-14 grid md:grid-cols-2 gap-16 items-start">
          {/* Left Content Side */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-[36px] font-medium tracking-tight text-black leading-tight">
              Built To Specialize. Connected To Collaborate.
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed max-w-2xl">
              Exei unites support and sales into dedicated AI agents that share context
              in real time, ensuring every customer conversation moves your e-commerce 
              business forward. Reach your customers via Whatsapp, calls, and 
              social media channels.
            </p>
            <a 
              href="#" // Replace with your link
              // Button styling now matches the provided image
              className="inline-flex items-center gap-3 pl-4 pr-1 py-1 bg-[#FF5E2C] text-xs text-white font-normal rounded-full shadow-lg hover:bg-[#E64A19] transition-colors duration-300"
            >
              Set Up Exei Now
              {/* Arrow container with a subtle shadow and white arrow */}
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center]">
                <span className="text-xl">→</span>
              </div>
            </a>
          </div>

          {/* Right Animated Logos Side */}
          <div className="relative h-[300px] overflow-hidden flex gap-4 justify-center md:justify-end">
            {/* Left Column - Slides Top to Bottom */}
            <div className="w-1/2 max-w-[80px] relative">
              <motion.div
                className="flex flex-col gap-4"
                animate={{
                  y: [0, '-50%'], // Slide up by half the content height
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30, // Adjust speed for "slowly"
                    ease: "linear",
                  },
                }}
              >
                {duplicatedLeftLogos.map((logo) => (
                  <div key={logo.id} className="bg-[#F0ECE6] p-6 rounded-2xl aspect-square flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={44} // Adjust based on your logo sizes
                      height={44}
                      className="object-contain"
                    />
                  </div>
                ))}
              </motion.div>
              {/* Vingette gradient over the top and bottom to make the loop look continuous */}
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
            </div>

            {/* Right Column - Slides Bottom to Top */}
            <div className="w-1/2 max-w-[80px] relative">
              <motion.div
                className="flex flex-col gap-4"
                initial={{ y: '-50%' }} // Start offset by half the content height
                animate={{
                  y: [ '-50%', 0], // Slide down
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 35, // Adjust speed, slightly different from left for visual interest
                    ease: "linear",
                  },
                }}
              >
                {duplicatedRightLogos.map((logo) => (
                  <div key={logo.id} className="bg-[#F0ECE6] p-6 rounded-2xl aspect-square flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={44} // Adjust based on your logo sizes
                      height={44}
                      className="object-contain"
                    />
                  </div>
                ))}
              </motion.div>
                {/* Vingette gradient over the top and bottom to make the loop look continuous */}
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecializationSection;