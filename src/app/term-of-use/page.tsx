"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import NavbarBlack from "@/components/NavbarBlack";

export default function LegalSectionPage() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen py-24   bg-gradient-to-br from-[#143164] via-[#0f233e] to-[#111e35] flex flex-col items-center px-2">
        <main className="w-full max-w-3xl mx-auto">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200 bg-clip-text text-transparent drop-shadow-lg"
          >
            Legal Section – Adxity
          </motion.h1>

          {/* Glass Panel */}
          <motion.section
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.45, type: "spring" }}
            className="bg-gradient-to-br from-[#182843]/85 via-[#1e2a4d]/80 to-[#173063ee] border border-cyan-200/10 rounded-2xl shadow-2xl p-6 md:p-10 backdrop-blur-lg text-white/90 text-base leading-relaxed"
          >
            {/* --- BEGIN LEGAL CONTENT --- */}
            <h2 className="text-xl md:text-2xl font-semibold my-6 text-cyan-300 text-center">
              Terms of Use
            </h2>
            <p className="mb-4">
              The Terms of Use govern your interaction with Adxity’s services,
              both on the web and via integrated advertising APIs or SDKs. By
              using Adxity, you are entering into a legal agreement with our
              company. It is essential that all users understand and accept
              these terms before proceeding to use our tools or sign up as
              partners. Use of the Adxity DSP is restricted to verified business
              entities, advertisers, and authorized representatives. During
              registration, users must provide true, complete, and current
              information. Any use of the platform for malicious purposes,
              including data scraping, fraud, or unauthorized API access, will
              result in account suspension and possible legal action. All
              content on Adxity—including the software interface, source code,
              documentation, creative templates, logo, and branding elements—is
              protected by applicable intellectual property laws. You may not
              replicate, modify, or redistribute Adxity content without explicit
              written permission. We provide access to the platform on an
              "as-is" and "as-available" basis. Adxity does not make guarantees
              regarding uptime, delivery speeds, campaign outcomes, or platform
              compatibility with external systems. While we take commercially
              reasonable steps to ensure reliability and security, technical
              glitches, third-party service outages, or internet disruptions may
              impact platform behavior. Adxity reserves the right to suspend or
              terminate access to users who violate terms, compromise system
              integrity, or harm the interests of other partners or users.
              Additionally, these Terms of Use may be updated periodically. When
              such updates occur, we will notify users either through email or
              by posting an announcement within the user interface. Continued
              use after updates implies acceptance.
            </p>
            <p className="mb-4">
              For further inquiries or to exercise your rights under these
              policies, please contact us at{" "}
              <a
                href="mailto:support@adxity.com"
                className="text-cyan-300 underline"
              >
                support@adxity.com
              </a>
              .
            </p>
            <div className="mt-8 flex justify-end">
              <span className="text-cyan-200 font-medium">
                Effective Date: July 21, 2025
              </span>
            </div>
            {/* --- END LEGAL CONTENT --- */}
          </motion.section>
        </main>
      </div>
    </div>
  );
}
