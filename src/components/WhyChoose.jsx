"use client";
import React from "react";
import {
  BoltIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import DSPLogo from "../assets/images/DSPss.png";

export default function WhyChoose() {
  return (
    <section className="bg-black flex flex-col md:flex-row items-center justify-center w-full min-h-[480px] p-0 md:p-8 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 72 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true }}
        className="
          relative flex flex-col md:flex-row w-full max-w-5xl rounded-3xl
          bg-gradient-to-br from-blue-900/60 via-black/75 to-blue-600/30
          backdrop-blur-xl shadow-2xl border border-white/15 ring-1 ring-blue-200/15
          overflow-hidden
          min-h-[420px]
        "
      >
        {/* Animated Glow & Static Image with Margin */}
        <div
          className="relative md:w-1/2 w-full flex items-stretch justify-center overflow-visible m-5 "
          
        >
          {/* Glow BEHIND image */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ width: 320, height: 320, zIndex: 1 }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 51%", "0% 50%"],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 7,
              ease: "linear",
            }}
          >
            <div
              className="w-full h-full rounded-full opacity-90"
              style={{
                background:
                  "linear-gradient(120deg,#16e8d0 0%,#577bfa 50%,#1ae6ea 100%)",
                filter: "blur(56px)",
                animation: "spinGlow 8s linear infinite",
              }}
            />
          </motion.div>
          {/* --- Static image (no pan animation), with zIndex above the glow --- */}
          <div className="relative w-full h-full flex items-center justify-center z-10 object-left">
            <Image
              src={DSPLogo}
              alt="Adxity DSP Dashboard"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center left",
                userSelect: "none",
                pointerEvents: "none",
                borderRadius: "1.25rem", // equals Tailwind rounded-2xl
                boxShadow: "0 2px 24px 0 #27dae999,0 12px 48px 0 #154eaa61",
              }}
              className="w-full h-full rounded-2xl shadow-2xl"
              draggable={false}
              priority
            />
          </div>
          <style jsx>{`
            @keyframes spinGlow {
              0% {
                filter: blur(56px) hue-rotate(0deg);
              }
              100% {
                filter: blur(56px) hue-rotate(360deg);
              }
            }
          `}</style>
        </div>

        {/* RIGHT: Content and features */}
        <div className="md:w-1/2 flex flex-col justify-center p-7 md:p-12 gap-5 text-white z-[2]">
          <h2 className="text-3xl md:text-4xl font-bold font-ibrand tracking-tight drop-shadow-lg leading-tight">
            Why Agencies Choose{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Adxity
            </span>
          </h2>
          <p className="text-blue-100 text-base md:text-lg mt-2 opacity-90">
            Adxity empowers agencies with{" "}
            <span className="font-semibold text-white">complete control</span>{" "}
            over their media buying, while amplifying their{" "}
            <span className="font-semibold text-cyan-200">
              own brand identity
            </span>
            . Everything you need for efficient, secure, and data-driven
            programmatic campaigns.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-3 text-blue-100 text-base group hover:text-cyan-200 transition">
              <ShieldCheckIcon className="w-5 h-5 text-cyan-300 group-hover:animate-pulse" />
              Branded experience on your domain & transparent data
            </li>
            <li className="flex items-center gap-3 text-blue-100 text-base group hover:text-cyan-200 transition">
              <ShieldCheckIcon className="w-5 h-5 text-cyan-300 group-hover:animate-pulse" />
              Built-in fraud prevention & brand safety
            </li>
            <li className="flex items-center gap-3 text-blue-100 text-base group hover:text-cyan-200 transition">
              <SparklesIcon className="w-5 h-5 text-cyan-300 group-hover:animate-spin" />
              Seamless integrations & AI-driven optimization
            </li>
          </ul>
          <div className="w-full gap-4 flex flex-wrap mt-1 mb-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/25 text-blue-100 text-xs font-semibold font-ibrand tracking-wide backdrop-blur-blur shadow">
              <BoltIcon className="w-4 h-4" />
              Next-Gen DSP
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/25 text-blue-100 text-xs font-semibold font-ibrand tracking-wide backdrop-blur-blur shadow">
              <SparklesIcon className="w-4 h-4" />
              AI Optimization
            </div>
          </div>
          <a
            href="/get-started"
            className="
              mt-4 inline-block px-7 py-3 rounded-xl font-ibrand font-semibold text-white text-lg
              bg-gradient-to-r from-blue-600 to-teal-400 shadow-xl
              hover:scale-105 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/80
              transition text-center
            "
          >
            Get Started
          </a>
        </div>
      </motion.div>
    </section>
  );
}
