"use client";
import React, { useState, useEffect, useRef } from "react";
import { BoltIcon, UsersIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import logo from "../assets/images/logosaas.png";
import Image from "next/image";

type IconName = keyof typeof iconMap;
type NavbarProps = {
  onContactClick?: () => void;
};

const NAV_ITEMS = [
  {
    label: "Solutions",
    submenu: [
      {
        label: "Real-Time Bidding",
        href: "/rtb",
        description: "Automated ad buying in real time.",
        icon: "BoltIcon",
      },
      {
        label: "Audience Targeting",
        href: "/audience",
        description: "Reach the right users at the right time.",
        icon: "UsersIcon",
      },
      {
        label: "Analytics",
        href: "/analytics",
        description: "Measure and optimize your DSP campaigns.",
        icon: "ChartBarIcon",
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];

const iconMap = {
  BoltIcon,
  UsersIcon,
  ChartBarIcon,
};

export default function Navbar({ onContactClick }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Desktop: close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(e.target as Node)
      ) {
        setSolutionsOpen(false);
      }
    }
    if (solutionsOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [solutionsOpen]);

  function closeAll() {
    setMenuOpen(false);
    setMobileSolutionsOpen(false);
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/90" : "bg-transparent"
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Brand */}
        <a
          href="/"
          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200 bg-clip-text text-transparent drop-shadow-md select-none"
          style={{ fontFamily: "'Ibrand', sans-serif" }}
          aria-label="AdxCity home"
        >
          <div className="inline-flex justify-center items-center gap-2">
            <Image src={logo} alt="logo" className="h-8 w-auto" />
            <p>Adxity.com</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1.5">
          {/* Solutions dropdown */}
          <div className="relative" ref={solutionsRef}>
            <button
              className="flex items-center px-4 py-2 rounded-md text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring"
              aria-haspopup="true"
              aria-expanded={solutionsOpen}
              aria-controls="nav-solutions-menu"
              onClick={() => setSolutionsOpen((v) => !v)}
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
              onFocus={() => setSolutionsOpen(true)}
              onBlur={() => setSolutionsOpen(false)}
              type="button"
            >
              Solutions
              <svg
                className="w-4 h-4 ml-1 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Glassmorphic Dropdown */}
            <div
              id="nav-solutions-menu"
              className={`absolute left-0 mt-2 min-w-[320px] rounded-xl overflow-hidden shadow-2xl duration-200 origin-top backdrop-blur-lg bg-black/70 ring-1 ring-white/10
                ${
                  solutionsOpen
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                }
              `}
              role="menu"
              aria-label="Solutions Submenu"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              {NAV_ITEMS[0].submenu?.map((item) => {
                const Icon = iconMap[item.icon as IconName];
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 group px-5 py-4 hover:bg-gradient-to-r from-blue-600/40 to-transparent transition-all duration-200"
                    role="menuitem"
                    tabIndex={solutionsOpen ? 0 : -1}
                  >
                    {/* Left gradient bar with icon */}
                    <div
                      className={
                        "flex items-center justify-center w-12 h-12 rounded-lg " +
                        "bg-gradient-to-br from-blue-500 to-blue-700 " +
                        "group-hover:scale-105 group-hover:shadow-xl transition-all duration-200 " +
                        "ring-1 ring-white/10"
                      }
                    >
                      {Icon && (
                        <Icon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    {/* Text */}
                    <div>
                      <div className="text-white font-semibold text-base">
                        {item.label}
                      </div>
                      <div className="text-xs text-blue-100 opacity-90 leading-tight mt-1 pr-4">
                        {item.description}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          {/*Case Studies */}
          <a
            className="px-4 py-2 rounded-md text-white hover:bg-white/10 transition-colors"
            href="/pricing"
          >
           Case Studies
          </a>
          {/* CTA */}
          <button
            className="ml-2 px-5 py-2 rounded-md bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
            onClick={onContactClick}
            type="button"
          >
            Get in Touch
          </button>
        </div>

        {/* Hamburger */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
          type="button"
        >
          <span
            className={`w-6 h-0.5 my-0.5 bg-white rounded transition-all duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 my-0.5 bg-white rounded transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 my-0.5 bg-white rounded transition-all duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu (full screen slide down) */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-40 bg-black/90 transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"
        } flex flex-col`}
        aria-modal="true"
        role="dialog"
      >
        <button
          className="absolute top-6 right-7 text-white text-3xl"
          aria-label="Close menu"
          onClick={closeAll}
        >
          &times;
        </button>
        <nav className="w-full max-w-xs mx-auto mt-32 flex flex-col gap-5 px-7 text-white">
          {/* Solutions trigger */}
          <button
            className="flex items-center justify-between w-full px-4 py-3 rounded-md hover:bg-white/10"
            onClick={() => setMobileSolutionsOpen((v) => !v)}
            aria-expanded={mobileSolutionsOpen}
            aria-controls="mobile-solutions-dropdown"
            type="button"
          >
            <span>Solutions</span>
            <svg
              className={`w-4 h-4 ml-1 transform transition-transform ${
                mobileSolutionsOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {/* Solutions mobile submenu */}
          {mobileSolutionsOpen && (
            <div
              id="mobile-solutions-dropdown"
              role="menu"
              aria-label="Solutions submenu (mobile)"
              className="pl-2 mb-2 space-y-2"
            >
              {NAV_ITEMS[0].submenu?.map((item) => {
                const Icon = iconMap[item.icon as IconName];
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="
                      flex items-center gap-4 px-4 py-3 rounded-xl
                      bg-black/70 backdrop-blur-md ring-1 ring-white/10
                      hover:bg-gradient-to-r from-blue-600/40 to-transparent transition-all duration-200
                    "
                    role="menuitem"
                    onClick={closeAll}
                  >
                    {/* Icon */}
                    <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg ring-1 ring-white/10">
                      {Icon && (
                        <Icon
                          className="w-5 h-5 text-white"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                    <span>
                      <div className="font-semibold text-white">
                        {item.label}
                      </div>
                      <div className="text-xs text-blue-100 opacity-90">
                        {item.description}
                      </div>
                    </span>
                  </a>
                );
              })}
            </div>
          )}
          {/*Case Studies */}
          <a
            href="/pricing"
            className="px-4 py-3 rounded-md hover:bg-white/10"
            onClick={closeAll}
          >
           Case Studies
          </a>
          {/* CTA */}
          <button
            className="w-full mt-3 px-5 py-3 rounded-md bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition text-center"
            onClick={() => {
              if (onContactClick) onContactClick();
              closeAll();
            }}
            type="button"
          >
            Get Started
          </button>
        </nav>
      </div>
    </nav>
  );
}
