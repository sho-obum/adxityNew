"use client";
import {
  GlobeAltIcon,
  AdjustmentsHorizontalIcon,
  CpuChipIcon,
  FilmIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import SpotlightCard from "../blocks/Components/SpotlightCard/SpotlightCard";
import GradientText from "../blocks/TextAnimations/GradientText/GradientText";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const FEATURES = [
  {
    icon: GlobeAltIcon,
    title: "Global Inventory",
    desc: "Access premium supply across mobile apps, display, and CTV worldwide.",
  },
  {
    icon: AdjustmentsHorizontalIcon,
    title: "Advanced Targeting",
    desc: "Target by device, OS, geo, audience segments, or behavioral signals.",
  },
  {
    icon: CpuChipIcon,
    title: "AI Optimization",
    desc: "Machine learning to auto-optimize bids for CPI, CPA, or ROAS goals.",
  },
  {
    icon: FilmIcon,
    title: "Creative Flexibility",
    desc: "Run banners, videos, rewarded ads, native, playables, and CTV creatives.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Fraud Prevention",
    desc: "ADS.TXT compliance, anti-fraud layers, and secure brand-safe inventory.",
  },
  {
    icon: ChartBarIcon,
    title: "Real-Time Analytics",
    desc: "Log-level data and live dashboards to track performance instantly.",
  },
];

export default function GlassyFeatureGridDark() {
  return (
    <div className="bg-black">
      <section className="max-w-6xl mx-auto px-2 py-16">
        <h2 className="text-3xl md:text-4xl font-bold font-ibrand mb-12 text-white text-center drop-shadow-lg">
          Powerful Features for{" "}
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={6}
            showBorder={false}
            className="custom-class"
          >
            Smarter Campaigns
          </GradientText>
        </h2>

        {/* Mobile carousel */}
        <div className="block lg:hidden px-4">
          <Swiper
            spaceBetween={24}
            slidesPerView={1.1}
            centeredSlides={false}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="pb-8"
          >
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <SwiperSlide key={title}>
                <div className="relative group">
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-3xl z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 before:bg-[conic-gradient(from_180deg_at_50%_120%,#48c6ef_35%,#0577ef_80%,#48fce7_100%,#48c6ef_0%)] before:absolute before:inset-0 before:rounded-3xl before:blur-[6px] before:opacity-60 before:animate-gradient-move before:z-0 overflow-hidden"
                    style={{ filter: "drop-shadow(0 0 24px #18e3ffaa)" }}
                  />
                  <SpotlightCard
                    className="relative z-10 flex flex-col items-center text-center p-8 rounded-3xl shadow-lg bg-[#141826]/95 before:absolute before:inset-0 before:rounded-3xl before:bg-black/70 before:backdrop-blur-md before:z-0 overflow-hidden group-hover:shadow-[0_0_32px_8px_rgba(0,180,255,0.18)] transition-all"
                    spotlightColor="rgba(0, 229, 255, 0.38)"
                  >
                    <span className="relative z-10 mb-5 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/10 to-indigo-700/10 shadow-[0_4px_32px_0_rgba(68,200,255,0.23)] ring-2 ring-blue-400/30 group-hover:ring-cyan-400/80 transition">
                      <Icon className="w-8 h-8 text-white drop-shadow" />
                    </span>
                    <div className="relative z-10 font-bold text-white text-xl mb-2 tracking-tight font-ibrand drop-shadow">
                      {title}
                    </div>
                    <div className="relative z-10 text-blue-100 text-[15px] leading-snug">
                      {desc}
                    </div>
                    <span className="pointer-events-none absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-gradient-to-br from-blue-400/20 via-cyan-400/20 to-cyan-300/20 blur-2xl opacity-45 z-0" />
                  </SpotlightCard>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="relative group">
              <div
                aria-hidden
                className="absolute inset-0 rounded-3xl z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 before:bg-[conic-gradient(from_180deg_at_50%_120%,#48c6ef_35%,#0577ef_80%,#48fce7_100%,#48c6ef_0%)] before:absolute before:inset-0 before:rounded-3xl before:blur-[6px] before:opacity-60 before:animate-gradient-move before:z-0 overflow-hidden"
                style={{ filter: "drop-shadow(0 0 24px #18e3ffaa)" }}
              />
              <SpotlightCard
                className="relative z-10 flex flex-col items-center text-center p-8 rounded-3xl shadow-lg bg-[#141826]/95 before:absolute before:inset-0 before:rounded-3xl before:bg-black/70 before:backdrop-blur-md before:z-0 overflow-hidden group-hover:shadow-[0_0_32px_8px_rgba(0,180,255,0.18)] transition-all"
                spotlightColor="rgba(0, 229, 255, 0.38)"
              >
                <span className="relative z-10 mb-5 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/10 to-indigo-700/10 shadow-[0_4px_32px_0_rgba(68,200,255,0.23)] ring-2 ring-blue-400/30 group-hover:ring-cyan-400/80 transition">
                  <Icon className="w-8 h-8 text-white drop-shadow" />
                </span>
                <div className="relative z-10 font-bold text-white text-xl mb-2 tracking-tight font-ibrand drop-shadow">
                  {title}
                </div>
                <div className="relative z-10 text-blue-100 text-[15px] leading-snug">
                  {desc}
                </div>
                <span className="pointer-events-none absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-gradient-to-br from-blue-400/20 via-cyan-400/20 to-cyan-300/20 blur-2xl opacity-45 z-0" />
              </SpotlightCard>
            </div>
          ))}
        </div>
      </section>

      {/* Global animation style */}
      <style jsx global>{`
        .animate-gradient-move {
          animation: gradientMove 4s linear infinite;
        }
        @keyframes gradientMove {
          0% {
            background-position: 60% 40%;
          }
          100% {
            background-position: 40% 60%;
          }
        }
      `}</style>
    </div>
  );
}
