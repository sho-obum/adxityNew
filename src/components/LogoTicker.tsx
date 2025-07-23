"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import GradientText from "../blocks/TextAnimations/GradientText/GradientText";

import appsflyer from "../assets/images/appflyer.png";
import singular from "../assets/images/sing.png";
import adjust from "../assets/images/adjust.png";
import branch from "../assets/images/branch.png";
import Airbridge from "../assets/images/airbridge.png";
import DreamData from "../assets/images/dreamdata.png";
import Kochava from "../assets/images/kochava.png";

import Image from "next/image";

const IMAGES = [
  { src: appsflyer, alt: "Acme Logo" },
  { src: singular, alt: "Acme Logo" },
  { src: adjust, alt: "Acme Logo" },
  { src: branch, alt: "Acme Logo" },
  { src: Airbridge, alt: "Acme Logo" },
  { src: Kochava, alt: "Acme Logo" },
  { src: DreamData, alt: "Acme Logo" },
];

const logoHeight = 80; // px, edit for your logomark height
const logoGap = 25; // px, space between logos
const speedNormal = 32; // px/sec
const speedFast = 96; // px/sec (boost on hover/scroll)

export default function LogoTicker() {
  const [paused, setPaused] = useState(false);
  const [fast, setFast] = useState(false);
  const tickerRef = useRef<HTMLDivElement>(null);
  const motionDivRef = useRef<HTMLDivElement>(null);

  // Duplicate logos for seamless loop
  const LOGOS = [...IMAGES, ...IMAGES];

  // Dynamically measure ticker width
  const [loopWidth, setLoopWidth] = useState(0);

  useEffect(() => {
    if (motionDivRef.current) {
      setLoopWidth(motionDivRef.current.scrollWidth / 2);
    }
  }, []); // Only runs on mount: IMAGES is static

  // Animation logic
  const x = useRef(0);

  useAnimationFrame((t, delta) => {
    if (!paused && loopWidth > 0) {
      const pxPerSec = fast ? speedFast : speedNormal;
      x.current -= (pxPerSec * delta) / 1000;
      if (x.current <= -loopWidth) x.current += loopWidth;
      if (motionDivRef.current) {
        motionDivRef.current.style.transform = `translateX(${x.current}px)`;
      }
    }
  });

  // Pause on hover, speed up on wheel
  const onHover = (p: boolean) => setPaused(p);
  const onWheel = () => {
    setFast(true);
    setTimeout(() => setFast(false), 800);
  };

  return (
    <section className="w-full bg-black py-10">
      <div className="max-w-6xl mx-auto px-0 md:px-12 relative">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="max-w-4xl text-4xl md:text-5xl font-bolder mb-2 leading-normal"
        >
          Seamless Integrations
        </GradientText>

        <p className="text-center text-blue-100/70 text-sm md:text-base mb-6 tracking-wide">
          Connect easily with leading Mobile Measurement Partners and data
          platforms
        </p>
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => onHover(true)}
          onMouseLeave={() => onHover(false)}
          onWheel={onWheel}
        >
          {/* Vignette gradients (left/right) */}
          <div
            className="absolute left-0 top-0 w-24 h-full z-10 pointer-events-none"
            style={{
              background: "linear-gradient(90deg, #000 75%, transparent)",
            }}
          />
          <div
            className="absolute right-0 top-0 w-24 h-full z-10 pointer-events-none"
            style={{
              background: "linear-gradient(270deg, #000 75%, transparent)",
            }}
          />
          {/* Logos row */}
          <div
            ref={tickerRef}
            className={`relative w-full flex items-center`}
            style={{ height: `${logoHeight + 20}px` }}
          >
            <motion.div
              ref={motionDivRef}
              className="flex items-center"
              style={{
                minWidth: loopWidth ? `${loopWidth * 2}px` : undefined,
                height: `${logoHeight + 2}px`,
                userSelect: "none",
                cursor: paused ? "pointer" : "grab",
                gap: `${logoGap}px`,
              }}
              aria-label="Scrolling trusted partner logos"
            >
              {LOGOS.map((logo, i) => (
                <Image
                  key={i}
                  src={(logo.src as unknown as string) || "/placeholder.svg"}
                  alt={logo.alt}
                  height={logoHeight}
                  style={{
                    height: logoHeight,
                    width: "auto",
                    filter: "brightness(0) invert(1)", // for white logos!
                    opacity: 0.93,
                    transition: "filter .3s, opacity .3s",
                  }}
                  className="block mx-5 select-none pointer-events-none"
                  draggable={false}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
