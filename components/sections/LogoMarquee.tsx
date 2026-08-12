import Image from "next/image";

const clientLogos = [
  { name: "Oaktree", src: "/icons/oaktreee.png" },
  { name: "Mr Makhana", src: "/icons/makhanaa.webp" },
  { name: "ProSupps", src: "/icons/prosupps.png" },
  { name: "Recliners India", src: "/icons/recliner-india.png" },
  { name: "Neferex", src: "/icons/nefrex.png" },
  { name: "Steris", src: "/icons/steriss-logo.png" },
  { name: "Comfort Factory", src: "/icons/Comfort-Factoryy.png" },
  { name: "PN Rao", src: "/icons/pnraoo.png" },
];

export default function LogoMarquee() {
  const doubleLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="bg-[#fafafa] text-gray-900 py-8 sm:py-10 md:py-12 overflow-hidden font-[var(--font-poppins)]">
      {/* Responsive Section Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-4 sm:mb-6 md:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-[#232323]">
          Customers Who Trusted Us
        </h2>
      </div>

      {/* Marquee Wrapper with Side Blur Fades */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left Blur Fade (Narrower on mobile) */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-r from-[#f9f9f9] via-[#f9f9f9]/80 to-transparent z-10 pointer-events-none" />

        {/* Animated Track - Responsive gap scaling */}
        <div className="animate-marquee flex items-center gap-10 sm:gap-16 md:gap-24">
          {doubleLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center mix-blend-multiply grayscale opacity-80 contrast-125 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={200}
                height={80}
                /* Scales height and max-width smoothly across screen sizes */
                className="h-8 sm:h-11 md:h-14 w-auto max-w-[120px] sm:max-w-[170px] md:max-w-[220px] object-contain"
              />
            </div>
          ))}
        </div>

        {/* Right Blur Fade (Narrower on mobile) */}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-l from-[#f9f9f9] via-[#f9f9f9]/80 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}