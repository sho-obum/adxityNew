'use client'
import React from "react";
import {
  GlobeAltIcon,
  AdjustmentsHorizontalIcon,
  CpuChipIcon,
  FilmIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

// Import ScrollStack and ScrollStackItem from ReactBits
import { ScrollStack, ScrollStackItem } from "../blocks/Components/ScrollStack/ScrollStack";

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

export default function ScrollFeatureStack() {
  return (
    <section className="w-full px-2 md:px-0 py-16 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold font-ibrand mb-10 text-white text-center drop-shadow-lg">
        Powerful Features for{" "}
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
          Smarter Campaigns
        </span>
      </h2>
      {/* Scrollable Stack */}
      <div className="w-full max-w-2xl md:max-w-3xl xl:max-w-4xl mx-auto h-[650px] sm:h-[750px]">
        <ScrollStack
          itemDistance={70}
          itemScale={0.04}
          itemStackDistance={40}
          stackPosition="22%"
          scaleEndPosition="6%"
          baseScale={0.82}
          scaleDuration={0.8}
          blurAmount={3}
        >
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <ScrollStackItem key={i}>
              <div
                className="
                  w-full h-full flex flex-col items-center justify-center gap-4 p-2
                  bg-gradient-to-br from-[#162235cc] via-black/80 to-blue-800/90
                  backdrop-blur-xl border border-white/10 rounded-[40px]
                  shadow-2xl relative overflow-hidden group
                  hover:border-blue-400 hover:shadow-blue-400/30 transition-all
                "
              >
                {/* Icon badge with blur/gradient */}
                <span className="
                  mb-3 flex items-center justify-center w-14 h-14 rounded-2xl
                  bg-gradient-to-tr from-blue-500 to-cyan-400 backdrop-blur-md shadow-lg
                  ring-2 ring-white/10 group-hover:scale-110 group-hover:shadow-xl transition
                ">
                  <Icon className="w-8 h-8 text-white drop-shadow-md" aria-hidden="true" />
                </span>
                {/* Title */}
                <div className="text-xl md:text-2xl font-bold font-ibrand text-white/90 text-center drop-shadow-sm tracking-tight
                  group-hover:text-cyan-200 transition">
                  {title}
                </div>
                {/* Description */}
                <div className="text-blue-100 text-base md:text-lg text-center leading-tight opacity-85 px-0 md:px-2">
                  {desc}
                </div>
                {/* Decorative blur blob (bottom right) */}
                <span className="
                  pointer-events-none absolute z-0 right-0 bottom-0
                  w-36 h-24 rounded-full
                  bg-gradient-to-br from-blue-400/20 via-blue-700/20 to-cyan-300/30
                  blur-2xl opacity-70
                " />
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
