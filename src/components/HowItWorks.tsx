"use client";
import React from "react";
import { motion } from "framer-motion";

// Steps data (use your existing STEPS array)
const STEPS = [
  {
    number: "1",
    title: "Easy Setup",
    desc: "Integrate our lightweight SDK with just a few lines of code. No complex configuration needed.",
    details: "Our SDK is built for developers, by developers. Simple installation, comprehensive documentation, and instant support.",
  },
  {
    number: "2",
    title: "Smart Connect",
    desc: "Connect to premium ad networks instantly or let our AI choose the best partners for you.",
    details: "Access over 50+ ad networks with automated mediation. Our intelligent system optimizes for your specific audience.",
  },
  {
    number: "3",
    title: "Maximize Revenue",
    desc: "Watch your earnings grow with real-time optimization and advanced analytics dashboard.",
    details: "Our machine learning algorithms continuously optimize fill rates, eCPMs, and user experience for maximum revenue.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full py-16 bg-neutral-950 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-60 -z-10">
        <div className="absolute left-1/4 top-0 w-96 h-32 bg-cyan-700/10 blur-3xl rounded-full" />
        <div className="absolute right-0 bottom-0 w-1/2 h-36 bg-blue-600/10 blur-2xl rounded-full" />
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.38 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold font-ibrand text-center mb-10 drop-shadow text-white"
        style={{
          background: "linear-gradient(90deg,#51e7fa 20%,#3761fa 85%,#80e8fc 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 14px #1ee9ff88"
        }}
      >
        How It Works
      </motion.h2>

      {/* Grid layout */}
      <div className="relative max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {STEPS.map((step, idx) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 64 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: idx * 0.1 + 0.15, type: "spring", damping: 18 }}
            viewport={{ once: true }}
            className="relative group bg-gradient-to-br from-[#182843] via-[#1e2a4d] to-[#173063ee] border border-cyan-200/10 rounded-2xl shadow-xl px-6 py-8 flex flex-col items-center text-center backdrop-blur-md
                  hover:border-cyan-400/50 hover:shadow-cyan-400/20 transition-all cursor-cell  "
          >
            {/* Animated number badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
              <div className={`bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-800 rounded-full w-14 h-14 flex items-center justify-center shadow-lg shadow-cyan-400/30
                border-4 border-neutral-950/80 relative`}>
                <span className="text-white text-2xl font-extrabold drop-shadow">{step.number}</span>
                <span className="absolute -right-2 -bottom-2 w-5 h-5 bg-cyan-400/90 rounded-full blur-sm opacity-70" />
              </div>
            </div>
            <div className="h-8" />
            <h4 className="text-2xl  font-bold font-ibrand mb-1 bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent drop-shadow">
              {step.title}
            </h4>
            <p className="text-cyan-100/90 font-medium text-base mb-2">{step.desc}</p>
            <p className="text-blue-100 text-xs mt-1">{step.details}</p>
            {/* Arrow between steps – only on md+ screens, not after the last step */}
            {idx < STEPS.length - 1 && (
              <div className="hidden lg:block absolute right-[-33px] top-1/2 -translate-y-1/2 z-20">
                <svg width="46" height="24" viewBox="0 0 46 24" fill="none" className="">
                  <path
                    d="M2 12h40m0 0l-7-7m7 7l-7 7"
                    stroke="#38bdf8"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#glow)"
                  />
                  <defs>
                    <filter id="glow" x="0" y="0" width="46" height="24" filterUnits="userSpaceOnUse">
                      <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Mobile: arrows below cards (optional for clarity) */}
      <div className="md:hidden w-full flex flex-col items-center">
        {[0,1].map(idx => (
          <svg
            key={idx}
            width="38"
            height="30"
            viewBox="0 0 38 30"
            fill="none"
            className="my-[-12px]"
          >
            <path
              d="M19 2v24m0 0l8-8m-8 8l-8-8"
              stroke="#38bdf8"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow)"
            />
            <defs>
              <filter id="glow" x="0" y="0" width="38" height="30" filterUnits="userSpaceOnUse">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>
        ))}
      </div>
    </section>
  );
}
