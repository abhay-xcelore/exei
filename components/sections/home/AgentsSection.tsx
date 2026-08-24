// components/sections/AgentsSection.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowRight,
  Headphones,
  ShoppingBag,
  TrendingUp,
  MoreHorizontal,
  Check,
  X,
  ChevronLeft,
  Sparkles,
} from "lucide-react";

const agentsData = [
  {
    id: 0,
    title: "Customer Service AI Agent",
    category: "Customer Service",
    tabLabel: "Customer Service Agent",
    icon: Headphones,
    description:
      "Deflect repetitive inquiries instantly. Let our Customer Service AI Agent handle order tracking, delivery alerts, and service requests so your human team can focus on complex issues.",
    bullets: [
      "90% of Queries Resolved Automatically",
      "Reduce support costs at scale",
      "Turn service into customer retention",
    ],
  },
  {
    id: 1,
    title: "Shopping Assistant",
    category: "Product Discovery",
    tabLabel: "Shopping Assistant",
    icon: ShoppingBag,
    description:
      "Deliver a 1:1 personal shopping experience at scale. Our Ecommerce Shopping agent answers product questions, compares options, and delivers tailored recommendations directly from your live catalog.",
    bullets: [
      "40% conversion uplift",
      "15% higher AOV",
      "Recover high-intent shoppers before they leave",
    ],
  },
  {
    id: 2,
    title: "Growth Agent",
    category: "Growth & Retention",
    tabLabel: "Growth Agent",
    icon: TrendingUp,
    description:
      "Turn past buyers into repeat revenue. Launch targeted campaigns, win-back inactive shoppers, automate reorder reminders, and power loyalty programs—all personalized by customer purchase history.",
    bullets: [
      "17% of Abandoned carts recovered",
      "Turn first-time buyers into repeat buyers",
      "Bring back customers who stopped buying",
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const barVariants: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ---------------------------------------------------------------------------
// ScaleToFit — MOBILE ONLY helper. Renders children at their natural/original
// design width, then uniformly scales the whole block down to fit whatever
// container it's placed in, keeping it centered. Not used anywhere in the
// desktop layout below.
// ---------------------------------------------------------------------------
function ScaleToFit({
  children,
  designWidth = 360,
}: {
  children: React.ReactNode;
  designWidth?: number;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const update = () => {
      if (!outerRef.current || !innerRef.current) return;
      const outerWidth = outerRef.current.getBoundingClientRect().width;
      const innerNaturalHeight = innerRef.current.scrollHeight;
      const nextScale = Math.min(outerWidth / designWidth, 1);
      setScale(nextScale);
      setHeight(innerNaturalHeight * nextScale);
    };

    update();
    const raf = requestAnimationFrame(update);

    const ro = new ResizeObserver(update);
    if (outerRef.current) ro.observe(outerRef.current);
    if (innerRef.current) ro.observe(innerRef.current);

    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [designWidth]);

  return (
    <div
      ref={outerRef}
      className="w-full flex items-center justify-center overflow-hidden"
      style={{ height }}
    >
      <div
        ref={innerRef}
        style={{
          width: designWidth,
          flexShrink: 0,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        {children}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// MOBILE ONLY — extracted graphic bodies, used exclusively inside the mobile
// block via ScaleToFit. Desktop keeps its own separate inline JSX untouched.
// ---------------------------------------------------------------------------
function MobileCustomerServiceGraphic() {
  return (
    <div className="relative w-[360px] flex flex-col items-center gap-2.5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120, damping: 14 }}
        className="w-full bg-white rounded-[24px] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 relative z-20"
      >
        <div className="flex items-center justify-between mb-3.5">
          <span className="bg-[#F3F4F6] text-gray-900 text-xs font-bold px-3.5 py-1 rounded-lg">Query</span>
          <div className="w-7 h-7 rounded-lg border border-gray-100 flex items-center justify-center bg-gray-50">
            <MoreHorizontal className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        <h4 className="text-base font-bold text-gray-900 mb-3 tracking-tight">Live Order Tracking Details</h4>

        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
            className="flex items-center gap-3 bg-white border border-gray-100 p-2.5 rounded-2xl shadow-xs"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">Order Confirmed</p>
              <p className="text-[11px] text-gray-600 font-medium">Order received successfully.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
            className="flex items-center gap-3 bg-white border border-gray-100 p-2.5 rounded-2xl shadow-xs"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">Package Shipped</p>
              <p className="text-[11px] text-gray-600 font-medium">Tracking activated instantly.</p>
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-end -space-x-1.5 mt-2.5 pr-1">
          <div className="relative w-5 h-5 rounded-full border-2 border-white overflow-hidden shadow-xs">
            <Image src="/images/cs1.jpg" alt="Customer Avatar 1" fill className="object-cover" />
          </div>
          <div className="relative w-5 h-5 rounded-full border-2 border-white overflow-hidden shadow-xs">
            <Image src="/images/cs2.jpg" alt="Customer Avatar 2" fill className="object-cover" />
          </div>
        </div>
      </motion.div>

      <div className="w-full flex items-center justify-center gap-2 relative z-30 -mt-3">
        <motion.div
          initial={{ opacity: 0, y: 15, rotate: -4 }}
          animate={{ opacity: 1, y: [0, -4, 0], rotate: -4 }}
          transition={{
            opacity: { duration: 0.4, delay: 0.2 },
            y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-gray-200 text-xs flex items-center gap-2"
        >
          <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0 border border-gray-100">
            <Image src="/images/cs3.jpg" alt="Keven" fill className="object-cover" />
          </div>
          <span className="text-[11px] text-gray-900 font-medium">
            <strong className="font-bold text-gray-900">Keven</strong>{" "}
            <span className="text-gray-600">Where is my order?</span>
          </span>
          <span className="text-[10px] text-gray-500 font-semibold shrink-0 ml-1">5 min ago</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15, rotate: 3 }}
          animate={{ opacity: 1, y: [0, 4, 0], rotate: 3 }}
          transition={{
            opacity: { duration: 0.4, delay: 0.3 },
            y: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
          }}
          className="bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-md border border-gray-200 text-xs flex items-center gap-1.5"
        >
          <span className="text-[11px] text-gray-600 font-medium">where is my order?</span>
          <span className="text-[10px] text-gray-500 font-semibold shrink-0">5 min ago</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35, type: "spring", stiffness: 220, damping: 18 }}
        className="bg-white rounded-full px-4 py-1.5 shadow-xl border border-gray-200 flex items-center gap-3 relative z-30 mt-1"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF5E2C] animate-pulse" />
          <span className="text-xs font-bold text-gray-900 whitespace-nowrap">18 New Notifications</span>
        </div>
        <button className="bg-[#232326] text-white text-[10px] font-bold px-3 py-1 rounded-full hover:bg-black transition-colors whitespace-nowrap">
          Mark as read
        </button>
        <X className="w-3.5 h-3.5 text-gray-500 cursor-pointer hover:text-gray-900 transition-colors shrink-0" />
      </motion.div>
    </div>
  );
}

function MobileShoppingAssistantGraphic() {
  return (
    <div className="relative w-[360px] h-[330px] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120, damping: 16 }}
        className="absolute left-0 bottom-1 w-[72%] bg-white rounded-3xl p-4 shadow-lg border border-gray-100 z-10 space-y-3"
      >
        <div className="flex items-center gap-1.5 text-gray-900 text-xs font-bold">
          <span>Agent</span>
          <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-[10px] text-gray-600 font-serif font-bold">
            i
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-2.5 border border-gray-100 space-y-1.5">
          <span className="text-[11px] font-bold text-gray-900 block">Boost AOV</span>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "81.9%" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-full"
              />
            </div>
            <span className="text-[11px] font-bold text-purple-900 bg-purple-100 px-2 py-0.5 rounded-full border border-purple-200">81.9%</span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-2.5 border border-gray-100 space-y-1.5">
          <span className="text-[11px] font-bold text-gray-900 block">Reduce Dropoff By</span>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "18.1%" }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-full"
              />
            </div>
            <span className="text-[11px] font-bold text-purple-900 bg-purple-100 px-2 py-0.5 rounded-full border border-purple-200">18.1%</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 120, damping: 16 }}
        className="absolute right-0 top-0 w-[68%] bg-white rounded-3xl p-4 shadow-xl border border-gray-100 z-20 space-y-3"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-pink-500 fill-pink-500" />
          <span className="text-xs font-bold text-gray-900">Product Upsell</span>
        </div>

        <div className="space-y-2.5">
          {[
            { name: "Hand Bag Red Velvet", price: "$1,202", border: "border-red-400", bg: "bg-rose-50", img: "/images/sa1.jpg" },
            { name: "Mayback Watch Series", price: "$9,202", border: "border-amber-400", bg: "bg-amber-50", img: "/images/sa2.jpg" },
            { name: "Balck Shirt New Balance", price: "$1,202", border: "border-sky-400", bg: "bg-sky-50", img: "/images/sa3.jpg" },
            { name: "Black Grey Skrit", price: "$202", border: "border-purple-400", bg: "bg-purple-50", img: "/images/sa4.jpg" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.2 + idx * 0.07, ease: "easeOut" }}
              className="flex items-center gap-2.5"
            >
              <div className={`w-8 h-8 rounded-full border-2 ${item.border} ${item.bg} relative shrink-0 overflow-hidden shadow-xs`}>
                <Image src={item.img} alt={item.name} fill className="object-cover" />
              </div>
              <div>
                <h5 className="text-[11px] font-bold text-gray-900 leading-tight">{item.name}</h5>
                <p className="text-[10px] text-gray-600 font-semibold">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function MobileGrowthAgentGraphic() {
  return (
    <div className="relative w-[360px] bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col">
      <div className="flex items-center gap-2 px-3.5 py-2.5 bg-white border-b border-gray-100 z-10">
        <ChevronLeft className="w-4 h-4 text-gray-700" />
        <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0 border border-gray-200">
          <Image src="/images/trendz-logo.png" alt="Trendz Logo" fill className="object-cover" />
        </div>
        <span className="text-xs font-bold text-gray-900">Trendz</span>
        <div className="w-3.5 h-3.5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[8px] font-bold">✓</div>
      </div>

      <div className="p-3.5 bg-[#F8F5EE] relative space-y-3 min-h-[270px]">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:10px_10px]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-white rounded-2xl p-3.5 shadow-sm border border-gray-200/80 max-w-[88%] space-y-1.5 relative z-10"
        >
          <p className="text-xs font-bold text-gray-900">Hi Sandhya</p>
          <p className="text-[11px] text-gray-800 leading-relaxed font-medium">
            New Arrivals Just Dropped! Explore the latest collection. Use code{" "}
            <strong className="font-extrabold text-gray-900">SAVE15</strong> at checkout.
          </p>
          <span className="text-[9px] text-gray-500 block text-right font-semibold">10:24 AM</span>
        </motion.div>

        <div className="grid grid-cols-3 gap-2 relative z-10 -mb-1">
          {[
            { id: 1, img: "/images/ga1.png" },
            { id: 2, img: "/images/ga2.png" },
            { id: 3, img: "/images/ga3.png" },
          ].map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease: "easeOut" }}
              className="flex flex-col items-center gap-1.5"
            >
              <div className="w-full h-28 rounded-2xl border border-gray-200 overflow-hidden relative group shadow-xs">
                <Image src={item.img} alt={`Campaign Product ${item.id}`} fill className="object-cover" />
              </div>
              <button className="w-full bg-white text-gray-900 text-[9px] font-bold py-1 px-1 rounded-md border border-gray-200 shadow-2xs hover:bg-gray-100 active:scale-95 transition-all">
                Add to cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileAgentGraphic({ tab }: { tab: number }) {
  if (tab === 0) return <MobileCustomerServiceGraphic />;
  if (tab === 1) return <MobileShoppingAssistantGraphic />;
  return <MobileGrowthAgentGraphic />;
}

// ---------------------------------------------------------------------------
// DESKTOP SCROLL-LOCK CONFIG
// ---------------------------------------------------------------------------
const WHEEL_THRESHOLD = 45; // accumulated deltaY needed to trigger a tab step
const ANIMATION_LOCK_MS = 900; // roughly matches the card entrance animation duration
const LAST_TAB = agentsData.length - 1;

export default function AgentsSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);

  const [isDesktop, setIsDesktop] = useState<boolean>(() =>
    typeof window !== "undefined" ? window.matchMedia("(min-width: 1024px)").matches : false
  );

  // Whether the section is currently pinned (position: fixed) to the viewport
  // while its inner tab animation plays out. Desktop only.
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (cardRef.current) {
      setCardHeight(cardRef.current.offsetHeight);
    }
  }, [activeTab]);

  // ---------------------------------------------------------------------
  // Desktop-only scroll lock. When the section's top edge reaches the top
  // of the viewport while scrolling down, the section is pinned in place
  // (position: fixed) and page scrolling is frozen. Each wheel "tick"
  // advances or retreats exactly one tab; a cooldown blocks the next tick
  // until the current tab's entrance animation has actually finished
  // playing. Once the last tab (Growth Agent) has played and the user
  // scrolls further, the section unpins and the page scrolls on past it
  // normally. Scrolling back up into a fully-played section re-pins and
  // replays it in reverse.
  // ---------------------------------------------------------------------
  const activeTabRef = useRef(activeTab);
  useEffect(() => {
    activeTabRef.current = activeTab;
  }, [activeTab]);

  const isLockedRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const hasCompletedRef = useRef(false);
  const wheelAccumRef = useRef(0);

  useEffect(() => {
    if (!isDesktop) {
      // Only reset if there was actually something locked/pinned to reset —
      // avoids calling setState unconditionally on every effect run.
      if (isLockedRef.current) {
        document.body.style.overflow = "";
        isLockedRef.current = false;
        setIsPinned(false);
      }
      return;
    }

    const section = targetRef.current;
    if (!section) return;

    const lockScroll = () => {
      if (isLockedRef.current) return;
      isLockedRef.current = true;
      document.body.style.overflow = "hidden";
      setIsPinned(true);
    };
    const unlockScroll = () => {
      if (!isLockedRef.current) return;
      isLockedRef.current = false;
      document.body.style.overflow = "";
      setIsPinned(false);
    };

    const stepTo = (nextTab: number) => {
      isAnimatingRef.current = true;
      setActiveTab(nextTab);
      window.setTimeout(() => {
        isAnimatingRef.current = false;
      }, ANIMATION_LOCK_MS);
    };

    const advance = (dir: 1 | -1) => {
      const current = activeTabRef.current;

      if (dir === 1) {
        if (current < LAST_TAB) {
          stepTo(current + 1);
        } else {
          hasCompletedRef.current = true;
          unlockScroll();
        }
      } else {
        if (current > 0) {
          stepTo(current - 1);
        } else {
          unlockScroll();
        }
      }
    };

    const onWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();
      const overlapsTop = rect.top <= 0 && rect.bottom > 0;

      if (!isLockedRef.current) {
        if (!overlapsTop) return; // section isn't at the top edge — let the page scroll normally

        if (hasCompletedRef.current) {
          // Already fully played through. Only re-engage if the user is
          // scrolling back UP into it.
          if (e.deltaY < 0) {
            hasCompletedRef.current = false;
            activeTabRef.current = LAST_TAB;
            setActiveTab(LAST_TAB);
            lockScroll();
          } else {
            return; // scrolling further down, past a finished section — let it go
          }
        } else {
          if (e.deltaY > 0) {
            lockScroll();
          } else {
            return; // scrolling up away from a not-yet-started section — let it go
          }
        }
      }

      // Locked: consume the scroll, keep the page from moving.
      e.preventDefault();
      if (isAnimatingRef.current) return;

      wheelAccumRef.current += e.deltaY;

      if (wheelAccumRef.current > WHEEL_THRESHOLD) {
        wheelAccumRef.current = 0;
        advance(1);
      } else if (wheelAccumRef.current < -WHEEL_THRESHOLD) {
        wheelAccumRef.current = 0;
        advance(-1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      document.body.style.overflow = "";
    };
  }, [isDesktop]);

  const activeAgent = agentsData[activeTab];
  const IconComponent = activeAgent.icon;

  return (
    // Outer wrapper: on desktop this always reserves a full-viewport-height
    // slot in the document flow (min-h-screen), regardless of whether the
    // inner content below is currently `relative` or pinned `fixed`. That's
    // what prevents any layout jump when pinning/unpinning.
    <div
      ref={targetRef}
      className={`relative bg-black text-white rounded-[1.5rem] ${isDesktop ? "min-h-screen" : ""}`}
    >
      <div
        className={`flex flex-col items-center px-6 overflow-hidden ${
          isDesktop && isPinned
            ? "fixed inset-0 z-[100] bg-black"
            : "relative rounded-[1.5rem] bg-black"
        } ${isDesktop ? "min-h-screen justify-center py-12" : "justify-start py-10"}`}
      >
        {/* Background Backdrop */}
        <div className="absolute inset-x-0 bottom-0 h-[70%] z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />
          <Image
            src="/images/bg-img.png"
            alt="Agents Section Backdrop"
            fill
            className="object-cover object-bottom opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-950/40 via-amber-900/20 to-transparent -z-10" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
          {/* Header Pill */}
          <div className="relative inline-flex items-center justify-center mb-6 rounded-full p-[1px] overflow-hidden">
            <div className="absolute top-0 inset-x-4 h-[1.5px] bg-gradient-to-r from-transparent via-[#F56E35] to-transparent z-20 shadow-[0_0_8px_#F56E35]" />
            <div className="relative z-10 bg-gradient-to-b from-[#141416] via-[#101012] to-[#25130A] border border-white/10 rounded-full px-4 sm:px-6 py-0.5 sm:py-1.5 shadow-2xl">
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#F56E35]/25 via-transparent to-[#999999]/10 pointer-events-none" />
              <span className="relative z-10 text-white text-xs font-normal tracking-wide">
                AI Agents
              </span>
            </div>
          </div>

          {/* Section Heading */}
          <h2 className="text-2xl md:text-[36px] font-medium text-center tracking-tight max-w-5xl mb-4 leading-tight text-white">
            Three AI Agents for Every Stage.
          </h2>

          {/* Subtitle */}
          <p className="text-gray-300 text-sm md:text-[16px] font-normal text-center max-w-5xl mb-6 leading-relaxed">
            Give your customers the right AI agent to resolve their issues. Drive instant product recommendations with the Shopping Assistant, automate 24/7 support with the Customer Service Agent, and re-engage lapsed buyers with the Growth Agent.
          </p>

          {/* =============================== DESKTOP (lg+) =============================== */}
          <div className="hidden lg:flex flex-col items-center w-full">
            {/* Tabs */}
            <div className="flex items-center gap-1.5 bg-[#18181b]/90 border border-white/15 p-1.5 rounded-full mb-6 relative backdrop-blur-xl shadow-2xl max-w-full overflow-x-auto no-scrollbar">
              {agentsData.map((agent, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={agent.id}
                    onClick={() => setActiveTab(index)}
                    className={`relative px-3.5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 z-10 whitespace-nowrap shrink-0 ${
                      isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    {agent.tabLabel}
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute inset-0 border border-orange-500/80 bg-white/10 rounded-full -z-10 shadow-lg shadow-orange-500/20"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Main Card */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative w-full flex items-center gap-6"
            >
              {/* Main Content White Container */}
              <motion.div
                ref={cardRef}
                variants={cardVariants}
                className="bg-white text-gray-900 rounded-[1.5rem] p-4 sm:p-6 md:p-8 shadow-2xl flex-1 border border-gray-100 min-h-[440px] md:max-h-[85vh] flex items-center md:overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeAgent.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full"
                  >
                    {/* Left Column Text Content */}
                    <div className="order-2 md:order-1 md:col-span-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#FF5E2C] flex items-center justify-center text-white shadow-lg shadow-orange-500/30 shrink-0">
                          <IconComponent className="w-5 h-5 stroke-[2.2]" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
                            {activeAgent.title}
                          </h3>
                          <p className="text-sm text-gray-500 font-medium">
                            {activeAgent.category}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {activeAgent.description}
                      </p>

                      <div className="space-y-2 pt-1">
                        {activeAgent.bullets.map((bullet, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2.5 bg-gray-50/90 border border-gray-200/80 px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold text-gray-800"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E2C] shrink-0" />
                            {bullet}
                          </div>
                        ))}
                      </div>

                      <div className="pt-2">
                       <button className="group relative inline-flex items-center gap-4 bg-gradient-to-b from-[#FF7235] via-[#FF5312] to-[#FF3D00] text-white text-[12px] font-normal pl-4 pr-1 py-1 rounded-full hover:brightness-105 active:scale-[0.98] transition-all duration-300">
  <span className="tracking-tight">Explore More</span>

  {/* Circular Arrow Badge */}
  <div className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-white/30 via-transparent to-black/20 overflow-hidden">
    {/* Inner subtle glow overlay */}
    <div className="absolute inset-[1px] rounded-full bg-gradient-to-b from-[#FF632A] to-[#FF4500] opacity-90" />

    <ArrowRight className="w-4 h-4 text-white stroke-[2.5] relative z-10" />
  </div>
</button>
                      </div>
                    </div>

                    {/* Right Column Interactive Motion Graphics Container */}
                    <div className="order-1 md:order-2 md:col-span-6 bg-[#FFF4EF] border border-orange-100/80 rounded-3xl p-3 sm:p-6 flex flex-col justify-center items-center relative overflow-hidden min-h-[300px] sm:min-h-[340px] md:min-h-[380px]">
                      {/* 01. CUSTOMER SERVICE AGENT MOTION GRAPHIC */}
                      {activeTab === 0 && (
                        <div className="relative w-full max-w-[360px] flex flex-col items-center gap-2.5">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 120, damping: 14 }}
                            className="w-full bg-white rounded-[24px] p-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 relative z-20"
                          >
                            <div className="flex items-center justify-between mb-3.5">
                              <span className="bg-[#F3F4F6] text-gray-900 text-xs font-bold px-3.5 py-1 rounded-lg">
                                Query
                              </span>
                              <div className="w-7 h-7 rounded-lg border border-gray-100 flex items-center justify-center bg-gray-50">
                                <MoreHorizontal className="w-4 h-4 text-gray-500" />
                              </div>
                            </div>

                            <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-3 tracking-tight">
                              Live Order Tracking Details
                            </h4>

                            <div className="space-y-2">
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
                                className="flex items-center gap-3 bg-white border border-gray-100 p-2.5 rounded-2xl shadow-xs"
                              >
                                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                  <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                                </div>
                                <div>
                                  <p className="text-xs font-bold text-gray-900">
                                    Order Confirmed
                                  </p>
                                  <p className="text-[11px] text-gray-600 font-medium">
                                    Order received successfully.
                                  </p>
                                </div>
                              </motion.div>

                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
                                className="flex items-center gap-3 bg-white border border-gray-100 p-2.5 rounded-2xl shadow-xs"
                              >
                                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                  <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                                </div>
                                <div>
                                  <p className="text-xs font-bold text-gray-900">
                                    Package Shipped
                                  </p>
                                  <p className="text-[11px] text-gray-600 font-medium">
                                    Tracking activated instantly.
                                  </p>
                                </div>
                              </motion.div>
                            </div>

                            <div className="flex items-center justify-end -space-x-1.5 mt-2.5 pr-1">
                              <div className="relative w-5 h-5 rounded-full border-2 border-white overflow-hidden shadow-xs">
                                <Image src="/images/cs1.jpg" alt="Customer Avatar 1" fill className="object-cover" />
                              </div>
                              <div className="relative w-5 h-5 rounded-full border-2 border-white overflow-hidden shadow-xs">
                                <Image src="/images/cs2.jpg" alt="Customer Avatar 2" fill className="object-cover" />
                              </div>
                            </div>
                          </motion.div>

                          <div className="w-full flex flex-col xs:flex-row items-center justify-center gap-2 relative z-30 -mt-2 sm:-mt-3">
                            <motion.div
                              initial={{ opacity: 0, y: 15, rotate: -4 }}
                              animate={{ opacity: 1, y: [0, -4, 0], rotate: -4 }}
                              transition={{
                                opacity: { duration: 0.4, delay: 0.2 },
                                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                              }}
                              className="max-w-full bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-2 rounded-2xl shadow-lg border border-gray-200 text-xs flex items-center gap-2"
                            >
                              <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0 border border-gray-100">
                                <Image src="/images/cs3.jpg" alt="Keven" fill className="object-cover" />
                              </div>
                              <span className="text-[11px] text-gray-900 font-medium truncate">
                                <strong className="font-bold text-gray-900">Keven</strong>{" "}
                                <span className="text-gray-600">Where is my order?</span>
                              </span>
                              <span className="text-[10px] text-gray-500 font-semibold shrink-0 ml-1">
                                5 min ago
                              </span>
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, y: 15, rotate: 3 }}
                              animate={{ opacity: 1, y: [0, 4, 0], rotate: 3 }}
                              transition={{
                                opacity: { duration: 0.4, delay: 0.3 },
                                y: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
                              }}
                              className="bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-md border border-gray-200 text-xs hidden sm:flex items-center gap-1.5"
                            >
                              <span className="text-[11px] text-gray-600 font-medium">where is my order?</span>
                              <span className="text-[10px] text-gray-500 font-semibold shrink-0">5 min ago</span>
                            </motion.div>
                          </div>

                          <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.35, type: "spring", stiffness: 220, damping: 18 }}
                            className="w-full max-w-full bg-white rounded-2xl sm:rounded-full px-3 sm:px-4 py-2 sm:py-1.5 shadow-xl border border-gray-200 flex flex-wrap items-center justify-center gap-2 sm:gap-3 relative z-30 mt-1"
                          >
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#FF5E2C] animate-pulse shrink-0" />
                              <span className="text-xs font-bold text-gray-900 whitespace-nowrap">
                                18 New Notifications
                              </span>
                            </div>
                            <button className="bg-[#232326] text-white text-[10px] font-bold px-3 py-1 rounded-full hover:bg-black transition-colors whitespace-nowrap">
                              Mark as read
                            </button>
                            <X className="w-3.5 h-3.5 text-gray-500 cursor-pointer hover:text-gray-900 transition-colors shrink-0" />
                          </motion.div>
                        </div>
                      )}

                      {/* 02. SHOPPING ASSISTANT MOTION GRAPHIC */}
                      {activeTab === 1 && (
                        <div className="relative w-full max-w-[360px] flex flex-col sm:block sm:h-[330px] gap-3 sm:gap-0">
                          <motion.div
                            initial={{ opacity: 0, x: 0, y: -20 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 120, damping: 16 }}
                            className="w-full sm:absolute sm:right-0 sm:top-0 sm:w-[68%] bg-white rounded-3xl p-4 shadow-xl border border-gray-100 z-20 space-y-3"
                          >
                            <div className="flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-pink-500 fill-pink-500" />
                              <span className="text-xs font-bold text-gray-900">Product Upsell</span>
                            </div>

                            <div className="space-y-2.5">
                              {[
                                { name: "Hand Bag Red Velvet", price: "$1,202", border: "border-red-400", bg: "bg-rose-50", img: "/images/sa1.jpg" },
                                { name: "Mayback Watch Series", price: "$9,202", border: "border-amber-400", bg: "bg-amber-50", img: "/images/sa2.jpg" },
                                { name: "Balck Shirt New Balance", price: "$1,202", border: "border-sky-400", bg: "bg-sky-50", img: "/images/sa3.jpg" },
                                { name: "Black Grey Skrit", price: "$202", border: "border-purple-400", bg: "bg-purple-50", img: "/images/sa4.jpg" },
                              ].map((item, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.35, delay: 0.2 + idx * 0.07, ease: "easeOut" }}
                                  className="flex items-center gap-2.5"
                                >
                                  <div className={`w-8 h-8 rounded-full border-2 ${item.border} ${item.bg} relative shrink-0 overflow-hidden shadow-xs`}>
                                    <Image src={item.img} alt={item.name} fill className="object-cover" />
                                  </div>
                                  <div>
                                    <h5 className="text-[11px] font-bold text-gray-900 leading-tight">{item.name}</h5>
                                    <p className="text-[10px] text-gray-600 font-semibold">{item.price}</p>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, x: 0, y: 20 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 120, damping: 16 }}
                            className="w-full sm:absolute sm:left-0 sm:bottom-1 sm:w-[72%] bg-white rounded-3xl p-4 shadow-lg border border-gray-100 z-10 space-y-3"
                          >
                            <div className="flex items-center gap-1.5 text-gray-900 text-xs font-bold">
                              <span>Agent</span>
                              <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-[10px] text-gray-600 font-serif font-bold">
                                i
                              </div>
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-2.5 border border-gray-100 space-y-1.5">
                              <span className="text-[11px] font-bold text-gray-900 block">Boost AOV</span>
                              <div className="flex items-center gap-2">
                                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                  <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: "81.9%" }}
                                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                    className="h-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-full"
                                  />
                                </div>
                                <span className="text-[11px] font-bold text-purple-900 bg-purple-100 px-2 py-0.5 rounded-full border border-purple-200">
                                  81.9%
                                </span>
                              </div>
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-2.5 border border-gray-100 space-y-1.5">
                              <span className="text-[11px] font-bold text-gray-900 block">Reduce Dropoff By</span>
                              <div className="flex items-center gap-2">
                                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                  <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: "18.1%" }}
                                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className="h-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-full"
                                  />
                                </div>
                                <span className="text-[11px] font-bold text-purple-900 bg-purple-100 px-2 py-0.5 rounded-full border border-purple-200">
                                  18.1%
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      )}

                      {/* 03. GROWTH AGENT MOTION GRAPHIC */}
                      {activeTab === 2 && (
                        <div className="relative w-full max-w-[360px] bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col">
                          <div className="flex items-center gap-2 px-3.5 py-2.5 bg-white border-b border-gray-100 z-10">
                            <ChevronLeft className="w-4 h-4 text-gray-700" />
                            <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0 border border-gray-200">
                              <Image src="/images/trendz-logo.png" alt="Trendz Logo" fill className="object-cover" />
                            </div>
                            <span className="text-xs font-bold text-gray-900">Trendz</span>
                            <div className="w-3.5 h-3.5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[8px] font-bold">
                              ✓
                            </div>
                          </div>

                          <div className="p-3 sm:p-3.5 bg-[#F8F5EE] relative space-y-3 min-h-[250px] sm:min-h-[270px]">
                            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:10px_10px]" />

                            <motion.div
                              initial={{ opacity: 0, scale: 0.95, y: 10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{ duration: 0.4, ease: "easeOut" }}
                              className="bg-white rounded-2xl p-3.5 shadow-sm border border-gray-200/80 max-w-full sm:max-w-[88%] space-y-1.5 relative z-10"
                            >
                              <p className="text-xs font-bold text-gray-900">Hi Sandhya</p>
                              <p className="text-[11px] text-gray-800 leading-relaxed font-medium">
                                New Arrivals Just Dropped! Explore the latest collection. Use code{" "}
                                <strong className="font-extrabold text-gray-900">SAVE15</strong> at checkout.
                              </p>
                              <span className="text-[9px] text-gray-500 block text-right font-semibold">10:24 AM</span>
                            </motion.div>

                            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 relative z-10 -mb-1">
                              {[
                                { id: 1, img: "/images/ga1.png" },
                                { id: 2, img: "/images/ga2.png" },
                                { id: 3, img: "/images/ga3.png" },
                              ].map((item, i) => (
                                <motion.div
                                  key={item.id}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease: "easeOut" }}
                                  className="flex flex-col items-center gap-1.5"
                                >
                                  <div className="w-full h-20 sm:h-28 rounded-2xl border border-gray-200 overflow-hidden relative group shadow-xs">
                                    <Image src={item.img} alt={`Campaign Product ${item.id}`} fill className="object-cover" />
                                  </div>
                                  <button className="w-full bg-white text-gray-900 text-[8px] sm:text-[9px] font-bold py-1 px-1 rounded-md border border-gray-200 shadow-2xs hover:bg-gray-100 active:scale-95 transition-all">
                                    Add to cart
                                  </button>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Right Vertical Timeline Stick Indicators */}
              <div
                className="hidden lg:flex flex-col gap-0 justify-between items-center"
                style={{ height: `${cardHeight}px` }}
              >
                {agentsData.map((_, idx) => (
                  <motion.div
                    key={idx}
                    variants={barVariants}
                    style={{ transformOrigin: "bottom" }}
                    className={`w-[2px] rounded-full transition-all duration-500 ${
                      activeTab === idx
                        ? "h-[calc(33%-1.33px)] bg-gradient-to-b from-[#FF5E2C] to-[#FF7A28] shadow-md shadow-orange-500/50"
                        : "h-[calc(33%-1.33px)] bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* =============================== MOBILE / TABLET (below lg) =============================== */}
          <div className="lg:hidden w-full flex flex-col items-center gap-4">
            <div className="flex flex-col items-stretch gap-1 w-full max-w-[280px] bg-[#18181b]/90 border border-white/10 rounded-3xl p-3 shadow-2xl backdrop-blur-xl">
              {agentsData.map((agent, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={agent.id}
                    onClick={() => setActiveTab(index)}
                    className={`relative text-center px-4 py-3 rounded-full text-sm font-semibold transition-colors duration-300 ${
                      isActive
                        ? "text-white border border-orange-500/80 bg-white/5 shadow-lg shadow-orange-500/10"
                        : "text-gray-300 border border-transparent hover:text-white"
                    }`}
                  >
                    {agent.tabLabel}
                  </button>
                );
              })}
            </div>

            <div className="w-full bg-white text-gray-900 rounded-[1.25rem] p-4 sm:p-5 shadow-2xl border border-gray-100 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeAgent.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex flex-col gap-6"
                >
                  <div className="w-full bg-[#FFF4EF] border border-orange-100/80 rounded-2xl p-3 flex items-center justify-center overflow-hidden">
                    <ScaleToFit designWidth={360}>
                      <MobileAgentGraphic tab={activeTab} />
                    </ScaleToFit>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#FF5E2C] flex items-center justify-center text-white shadow-lg shadow-orange-500/30 shrink-0">
                        <IconComponent className="w-4 h-4 stroke-[2.2]" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 leading-tight">{activeAgent.title}</h3>
                        <p className="text-xs text-gray-500 font-medium">{activeAgent.category}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-sm leading-relaxed">{activeAgent.description}</p>

                    <div className="space-y-2">
                      {activeAgent.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-center gap-2.5 bg-gray-50/90 border border-gray-200/80 px-3 py-2 rounded-full text-xs font-semibold text-gray-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E2C] shrink-0" />
                          {bullet}
                        </div>
                      ))}
                    </div>

                   <button className="group relative inline-flex items-center gap-4 bg-gradient-to-b from-[#FF7235] via-[#FF5312] to-[#FF3D00] text-white text-[12px] font-normal pl-4 pr-1 py-0.5 rounded-full hover:brightness-105 active:scale-[0.98] transition-all duration-300">
  <span className="tracking-tight">Explore More</span>
  <div className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-white/30 via-transparent to-black/20 overflow-hidden">
    <div className="absolute inset-[1px] rounded-full bg-gradient-to-b from-[#FF632A] to-[#FF4500] opacity-90" />
    <ArrowRight className="w-4 h-4 text-white stroke-[2.5] relative z-10" />
  </div>
</button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}