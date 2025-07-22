"use client";
import React from "react";

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
      <h2 className="text-3xl md:text-4xl font-bold font-ibrand text-white text-center mb-10 drop-shadow">
        How It Works
      </h2>

      {/* Mobile: Scroll Stack */}
      <div className="
        block md:hidden w-full max-w-xl mx-auto h-[75vh] overflow-y-auto
        snap-y snap-mandatory
        scrollbar-thin
      ">
        {STEPS.map((step, idx) => (
          <div
            key={step.title}
            className={`
              min-h-[75vh] flex flex-col justify-center items-center
              snap-center p-6 relative
              group transition-transform duration-300
            `}
          >
            {/* Animated Border/Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/15 to-blue-800/15 opacity-80 blur-[2px] z-0 pointer-events-none"></div>

            {/* Card Content */}
            <div className="
              relative z-10 w-full max-w-[90vw] bg-neutral-900/90
              border border-blue-800/30
              rounded-2xl shadow-2xl backdrop-blur-lg px-4 py-8
              flex flex-col items-center
              transition-shadow
              group-hover:shadow-blue-500/30
            ">
              <div className="text-lg font-semibold text-blue-300 mb-2   uppercase">
                Step {step.number}
              </div>
              <div className="font-bold text-white text-xl mb-3 font-ibrand drop-shadow">
                {step.title}
              </div>
              <p className="text-blue-100 text-center text-base leading-relaxed mb-2">
                {step.desc}
              </p>

              {idx === 0 && (
                <>
                  <p className="text-[15px] text-cyan-200/90 font-medium text-center px-2 md:px-5 mb-2 tracking-tight animate-pulse drop-shadow-sm">
                    {step.details}
                  </p>
                  <div className="mt-4 flex flex-col items-center">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-600/80 to-blue-800/80 text-cyan-100 shadow-md font-semibold text-xs md:text-sm tracking-wider uppercase ring-2 ring-cyan-500/30 animate-glow hover:scale-105 transition-transform">
                      <svg className="w-4 h-4 text-cyan-200 animate-bounce-slow" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v14m0 0l-4-4m4 4l4-4" />
                      </svg>
                      Scroll to learn more
                    </span>
                  </div>
                </>
              )}

              {idx > 0 && (
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed mt-2">
                  {step.details}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Row of Cards */}
      <div className="hidden md:flex flex-row gap-8 justify-center max-w-5xl mx-auto">
        {STEPS.map((step, idx) => (
          <div
            key={step.title}
            className={`
              flex-1 flex flex-col items-center px-4 py-8 bg-neutral-900/90
              rounded-2xl shadow-2xl border border-blue-800/30
              backdrop-blur-sm
              transition-transform duration-300 group
              hover:-translate-y-2 hover:shadow-blue-500/30
              relative
            `}
          >
            <div className="absolute inset-0 pointer-events-none rounded-2xl z-0 group-hover:shadow-[0_0_32px_8px_rgba(0,180,255,0.18)] transition"></div>
            <div className="text-lg font-semibold text-blue-300 mb-2 tracking-widest">
              Step {step.number}
            </div>
            <div className="font-bold text-white text-lg mb-2 font-ibrand">
              {step.title}
            </div>
            <p className="text-blue-100 text-center text-base leading-relaxed mb-2">
              {step.desc}
            </p>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed mt-2">
              {step.details}
            </p>
            {/* Connectors between cards (desktop only) */}
            {idx < STEPS.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 w-5 h-0.5 bg-gradient-to-r from-cyan-400/60 to-transparent" />
            )}
          </div>
        ))}
      </div>

      {/* Animate-glow and bounce-slow keyframes */}
      <style jsx global>{`
        .animate-glow {
          animation: glowAni 2.2s ease-in-out infinite alternate;
        }
        @keyframes glowAni {
          0% { box-shadow: 0 0 6px 0 #22d3ee60, 0 0 0px 0 #2563eb60; }
          100% { box-shadow: 0 0 18px 5px #22d3f1c0, 0 0 12px 8px #2563eb70; }
        }
        .animate-bounce-slow {
          animation: bounceSlow 1.6s infinite cubic-bezier(0.77,0,0.175,1) both;
        }
        @keyframes bounceSlow {
          0%,100% { transform: translateY(0);}
          50% { transform: translateY(4px);}
        }
      `}</style>
    </section>
  );
}
