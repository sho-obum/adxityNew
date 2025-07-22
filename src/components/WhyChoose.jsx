import React from "react";
import {
  BoltIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

// Sample illustration or logo, replace with your desired <img>
const PHOTO_SRC = "/adxity-dashboard.png"; // Change to your image's path

export default function WhyChoose() {
  return (
    <section className="bg-black flex flex-col md:flex-row items-center justify-center w-full min-h-[480px] p-6 md:p-12">
      {/* Glassmorphic Card */}
      <div
        className="
        relative flex flex-col md:flex-row w-full max-w-5xl rounded-3xl
        bg-gradient-to-br from-blue-900/60 via-black/75 to-blue-600/30
        backdrop-blur-xl shadow-2xl border border-white/15 ring-1 ring-blue-200/15
        overflow-hidden
      "
      >
        {/* Left: Image */}
        <div
          className="
          relative md:w-1/2 w-full min-h-[260px] flex items-center justify-center
          bg-gradient-to-br from-blue-700/40 to-blue-800/20
        "
        >
          <Image
            src={PHOTO_SRC}
            alt="Adxity DSP Dashboard"
            width={320}
            height={320}
            className="object-contain w-80 h-80 md:w-[320px] md:h-[320px] rounded-2xl shadow-xl border border-white/10"
          />

          {/* Decorative blob */}
          <div
            className="
            absolute z-0 -left-10 -bottom-14 w-48 h-48 rounded-full
            bg-gradient-to-br from-blue-400/50 to-sky-600/30 blur-2xl
            pointer-events-none
          "
          />
        </div>

        {/* Right: Text Content */}
        <div
          className="
          md:w-1/2 flex flex-col justify-center p-8 md:p-12 gap-5
          text-white
        "
        >
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold font-ibrand tracking-tight drop-shadow-lg">
            Why Agencies Choose{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Adxity
            </span>
          </h2>
          {/* Blurb */}
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
          {/* Feature List */}
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
          {/* Badge */}
          <div className="w-full gap-4 flex">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 rounded-full bg-blue-500/25 text-blue-100 text-xs font-semibold font-ibrand tracking-wide backdrop-blur">
              <BoltIcon className="w-4 h-4" />
              Next-Gen DSP
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 rounded-full bg-blue-500/25 text-blue-100 text-xs font-semibold font-ibrand tracking-wide backdrop-blur">
              <BoltIcon className="w-4 h-4" />
              Next-Gen DSP
            </div>
          </div>
          {/* CTA */}
          <a
            href="/get-started"
            className="
              mt-6 inline-block px-7 py-3 rounded-xl font-ibrand font-semibold text-white text-lg
              bg-gradient-to-r from-blue-600 to-teal-400 shadow-xl
              hover:scale-105 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/80
              transition text-center
            "
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
