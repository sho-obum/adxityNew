"use client";
import Link from "next/link";
import Lightrays from "../blocks/Backgrounds/LightRays/LightRays";
import GradientText from "../blocks/TextAnimations/GradientText/GradientText";

type HeroProps = {
  onContactClick?: () => void;
  onRequestDemoClick?: () => void;
};

export const Hero = ({ onContactClick, onRequestDemoClick }: HeroProps) => (
  <div
    style={{ position: "relative", width: "100%", height: "600px" }}
    className="bg-black"
  >
    <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
      <Lightrays />
    </div>
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 top-16">
      <h1
        className="max-w-4xl
          text-5xl md:text-7xl font-bold text-center mb-4 
          bg-gradient-to-r from-blue-400 via-blue-600 to-blue-300
          text-transparent bg-clip-text 
          drop-shadow-[0_4px_24px_rgba(51,178,255,0.8)]
        "
      >
        Empower Your Campaigns with <br />
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="font-extrabold"
        >
          Adxity DSP
        </GradientText>
      </h1>
      <p
        className="
          text-lg md:text-2xl text-blue-100/90 text-center mb-8 max-w-2xl
          drop-shadow-[0_2px_10px_rgba(73,185,255,0.7)]
        "
      >
        A self-serve platform for agencies, advertisers, and marketers to
        launch, scale, and control mobile campaigns with complete transparency
        and dazzling results.
      </p>
      <div className="flex gap-6 mt-2 flex-col sm:flex-row">
        {/* <button
          className="
            bg-gradient-to-r from-cyan-400 to-blue-600 text-white py-3 px-8 rounded-lg font-semibold text-lg shadow-lg
            transition hover:from-blue-500 hover:to-cyan-500
            hover:shadow-[0_0_20px_5px_rgba(54,206,255,0.65)]
            focus:outline-none
          "
          style={{
            boxShadow: "0 0 18px 2px rgba(54, 166, 255, 0.6)",
            textShadow: "0 2px 10px rgba(80,180,255,0.6)",
          }}
          type="button"
          onClick={onContactClick}
        >
          Get in Touch
        </button> */}
        <Link href="/request-demo">
          <button
            className="
    bg-black bg-opacity-80 border border-blue-400 text-blue-100 py-3 px-8 rounded-lg font-semibold text-lg shadow-md
    transition transform hover:scale-105 hover:text-white
    hover:shadow-[0_0_18px_5px_rgba(54,166,255,0.4)]
    focus:outline-none
  "
            style={{
              boxShadow: "0 0 16px 1.5px rgba(35,115,255,0.44)",
              textShadow: "0 2px 8px rgba(60,135,255,0.5)",
            }}
            type="button"
          >
            Request a Demo
          </button>
        </Link>
      </div>
    </div>
  </div>
);
