'use client'
import React from 'react'
import { motion, Variants } from 'framer-motion'
import {
  GlobeAltIcon,
  AdjustmentsHorizontalIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline"

const FEATURES = [
  {
    icon: GlobeAltIcon,
    title: "Agencies",
    desc: "Manage multiple advertiser accounts with sub‑account controls, unified reporting, and branded portals."
  },
  {
    icon: AdjustmentsHorizontalIcon,
    title: "App Developers",
    desc: "Acquire high‑value users with event‑based optimization and transparent supply sources.",
  },
  {
    icon: ChartBarIcon,
    title: "Brands",
    desc: "Run cross‑channel brand and performance campaigns with complete data ownership."
  },
]

// Type-safe variants for Framer Motion
const cardVariants: Variants = {
  offscreen: { opacity: 0, y: 36, scale: 0.95 },
  onscreen: (custom = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: (custom as number) * 0.1,
      type: 'spring',
      stiffness: 170,
      damping: 18,
    }
  }),
  whileHover: {
    scale: 1.04,
    boxShadow: "0 6px 40px 0 rgba(56,210,255,0.19), 0 1px 8px #1e3afb44",
    transition: { type: 'spring', stiffness: 220, damping: 13 }
  }
}

export default function FeatureCardsHorizontal() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#101B35] via-[#07213B] to-[#13264D] py-16 px-3 overflow-hidden">
      <div className="w-full max-w-4xl flex flex-col items-center mx-auto">
        {/* Header */}
        <div className="mb-10 w-full flex flex-col items-center">
          <div className="inline-block mb-3 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400/20 via-blue-400/15 to-blue-200/10 shadow-lg ring-1 ring-cyan-300/30 text-cyan-100 font-semibold text-xs tracking-wide uppercase backdrop-blur-sm animate-glow">
            Your Next Move
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-ibrand bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200 bg-clip-text text-transparent drop-shadow mb-3 text-center">
            Solutions Tailored for You
          </h2>
          <p className="max-w-2xl text-blue-100 text-base md:text-lg opacity-90 text-center">
            Select your path and unlock experiences engineered for growth and transparency.
          </p>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              custom={i}
              className="
                group relative flex flex-col justify-between items-center
                px-7 py-10 rounded-2xl shadow-2xl
                backdrop-blur-lg border border-blue-400/[0.11]
                bg-[#0d193be9]
                overflow-hidden
                transition-all duration-300
                focus-within:ring-2 focus-within:ring-cyan-500/50
              "
              initial="offscreen"
              whileInView="onscreen"
              whileHover="whileHover"
              viewport={{ once: true, margin: "-80px" }}
              variants={cardVariants}
              tabIndex={0}
            >
              {/* Background Blur Layer */}
              <div className="pointer-events-none absolute left-0 top-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-cyan-300/10 to-blue-200/0 opacity-50 blur-lg z-0" />
              <span className="relative z-10 mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400/80 to-blue-600/60 shadow-md ring-2 ring-blue-300/20 group-hover:ring-cyan-300/60 transition">
                <Icon className="w-7 h-7 text-white drop-shadow" aria-hidden="true" />
              </span>
              <h3 className="relative z-10 mb-2 text-white text-xl md:text-2xl font-bold font-ibrand drop-shadow text-center">
                {title}
              </h3>
              <p className="relative z-10 text-cyan-100 text-base text-center mb-2 opacity-90">{desc}</p>
              <span className="pointer-events-none absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-gradient-to-br from-blue-400/20 via-cyan-400/20 to-cyan-200/20 blur-2xl opacity-80 z-0" />
            </motion.div>
          ))}
        </div>
      </div>
      {/* Background blobs */}
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full blur-3xl opacity-20 bg-cyan-500 pointer-events-none z-0" />
      <div className="absolute -top-44 right-8 w-[260px] h-[260px] rounded-full blur-2xl opacity-25 bg-blue-500 pointer-events-none z-0" />
      {/* Custom glow animation for badge */}
      <style jsx global>{`
        .animate-glow {
          animation: glowAni 2.7s ease-in-out infinite alternate;
        }
        @keyframes glowAni {
          0% { box-shadow: 0 0 8px 0 #14e8ff60, 0 0 0px 0 #2563eb60; }
          100% { box-shadow: 0 0 32px 8px #1de8fbc0, 0 0 20px 4px #1e40af99; }
        }
      `}</style>
    </section>
  )
}
