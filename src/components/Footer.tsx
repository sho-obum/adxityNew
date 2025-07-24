"use client";
import Link from "next/link";
import React from "react";

type FooterProps = {
  onContactClick: () => void;
  onPrivacyClick: () => void;
  onRequestDemoClick: () => void;
  onCareersClick: () => void;
};

const Footer: React.FC<FooterProps> = ({
  onContactClick,
  onPrivacyClick,
  onRequestDemoClick,
  onCareersClick,
}) => (
  <footer className="py-14 px-4 text-center bg-gradient-to-br from-[#0b1833f7] via-[#10294bde] to-[#13264de6] border-t border-cyan-400/10 overflow-x-hidden backdrop-blur-md shadow-xl z-20 font-ibrand">
    <div className="max-w-6xl mx-auto">
      {/* Logo and Description */}
      <div className="mb-8">
        <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200 bg-clip-text text-transparent drop-shadow-md select-none">
          Adxity.com
        </span>
        <p className="text-blue-100/80 mt-2 max-w-xl mx-auto text-base md:text-lg opacity-80">
          Empowering developers to maximize app revenue through intelligent ad
          monetization.
        </p>
      </div>
      {/* Footer Links */}
      <div className="mb-8 flex flex-wrap justify-center gap-8">
        <Link href="/contact-us" target="_blank">
          <button className="text-blue-100/80 hover:text-cyan-300 font-semibold transition-colors duration-200 focus:outline-none focus:text-cyan-300">
            Contact Us
          </button>
        </Link>
        <Link href="/privacy-policy" target="_blank">
          <button className="text-blue-100/80 hover:text-cyan-300 font-semibold transition-colors duration-200 focus:outline-none focus:text-cyan-300">
            Privacy Policy
          </button>
        </Link>
        <Link href="/about-us" target="_blank">
          <button className="text-blue-100/80 hover:text-cyan-300 font-semibold transition-colors duration-200 focus:outline-none focus:text-cyan-300">
            About Us
          </button>
        </Link>
      </div>
      {/* Copyright */}
      <div className="pt-8 border-t border-cyan-400/10">
        <p className="text-blue-200/70 text-sm tracking-wide">
          © 2025 Adpocket.ai. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
