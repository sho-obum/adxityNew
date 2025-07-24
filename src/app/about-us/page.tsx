"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function AboutUsPage() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#143164] via-[#0f233e] to-[#111e35] flex flex-col items-center justify-start px-2 pt-24 ">
        <main className="w-full max-w-4xl mx-auto">
          {/* HERO SECTION */}
          <motion.section
            initial={{ opacity: 0, y: -32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, type: "spring" }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg mb-4">
              About Us
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8, type: "spring" }}
              className="text-cyan-100/90 md:text-lg font-medium max-w-2xl mx-auto mb-4"
            >
              Adxity is a next-generation Demand Side Platform (DSP) engineered
              to empower advertisers with precision, performance, and
              privacy-first advertising solutions.
            </motion.p>

            {/* <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.41, duration: 0.8, type: "spring" }}
              className="mx-auto mb-8 md:mb-6 flex justify-center"
            >
                
              <img
                src="/static/adxity_illustration.svg"
                alt="Adxity Platform Illustration"
                className="h-36 md:h-48 pointer-events-none select-none"
                style={{ filter: "drop-shadow(0 0 32px #39ffc6cc)" }}
                draggable={false}
              />
            </motion.div> */}
          </motion.section>

          {/* COMPANY OVERVIEW */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, type: "spring" }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#182843]/90 via-[#1e2a4d]/90 to-[#173063ec] border border-cyan-200/10 rounded-2xl shadow-2xl p-6 md:p-10 backdrop-blur-lg mb-10 text-white/95"
          >
            <div className="mb-5">
              <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent">
                Our Story
              </h2>
              <p>
                Headquartered in Sheridan, Wyoming (USA), Adxity serves as a
                powerful bridge between global advertisers and premium digital
                inventory, built on the foundation of cutting-edge technology,
                compliance, and real-time intelligence.
                <br />
                <br />
                Founded with a vision to revolutionize programmatic media
                buying, Adxity was built by marketers, for marketers. Our
                platform integrates RTB, AI optimization, advanced targeting,
                and privacy-safe audience activation—ensuring every impression
                delivers maximum value.
              </p>
            </div>

            <div className="mb-5">
              <h2 className="text-xl font-bold mb-1 text-cyan-300">
                Our Mission
              </h2>
              <p>
                To provide advertisers with a transparent, high-performing, and
                scalable media buying experience that respects user privacy and
                adapts to the evolving digital landscape. We simplify
                programmatic buying through a self-serve platform offering full
                control, deep insights, and measurable impact.
              </p>
            </div>

            {/* Three Principles */}
            <div className="mb-7">
              <h2 className="text-xl font-bold mb-2 text-cyan-300 flex items-center gap-1">
                What Sets Us Apart
              </h2>
              <div className="grid md:grid-cols-3 gap-6 font-semibold text-base text-cyan-100">
                <div className="p-4 rounded-xl bg-black/30 border border-cyan-500/10 shadow-md">
                  <div className="text-cyan-400 font-extrabold text-lg mb-1">
                    Performance
                  </div>
                  ROI-first approach with precision targeting and automated
                  optimization.
                </div>
                <div className="p-4 rounded-xl bg-black/30 border border-cyan-500/10 shadow-md">
                  <div className="text-cyan-400 font-extrabold text-lg mb-1">
                    Privacy
                  </div>
                  Full compliance with GDPR, CCPA, and global data regulations.
                </div>
                <div className="p-4 rounded-xl bg-black/30 border border-cyan-500/10 shadow-md">
                  <div className="text-cyan-400 font-extrabold text-lg mb-1">
                    Transparency
                  </div>
                  Real-time reporting and user control over spend, targeting,
                  and delivery.
                </div>
              </div>
            </div>

            {/* Reach, Audience, Tech */}
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-cyan-200 mb-1">
                Global Reach, Local Compliance
              </h3>
              <p>
                Access global traffic across apps, web, and CTV. We adhere to
                region-specific consent frameworks like TCF v2.2 and IAB
                guidelines, ensuring every campaign respects privacy and
                compliance standards in every market.
              </p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-cyan-200 mb-1">
                Who We Serve
              </h3>
              <ul className="list-disc list-inside text-blue-100 pl-2">
                <li>Brands seeking measurable growth via digital ads</li>
                <li>Agencies needing flexible, cross-channel media buying</li>
                <li>App developers scaling new user acquisition</li>
                <li>Ad networks accessing premium advertiser demand</li>
              </ul>
            </div>
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-cyan-200 mb-1">
                Our Technology
              </h3>
              <ul className="list-disc list-inside pl-2">
                <li>AI-driven campaign optimization</li>
                <li>Granular targeting by geo, device, OS, and behavior</li>
                <li>One SDK for mobile app monetization</li>
                <li>Real-time analytics for actionable insights</li>
                <li>Advanced fraud prevention and brand safety filters</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-200 mb-1">
                Leadership & Culture
              </h3>
              <p>
                Our team unites global expertise in advertising, data science,
                product engineering, and compliance. We foster a culture of
                continuous learning, ethical innovation, and a relentless focus
                on client success.
              </p>
            </div>
          </motion.section>

          {/* CTA / FINAL BLOCK */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, type: "spring" }}
            className="w-full flex flex-col items-center py-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent text-center mb-2">
              Let’s Build the Future of Advertising
            </h2>
            <p className="text-cyan-100/90 text-center max-w-xl mb-5 text-lg">
              At Adxity, we’re not just serving ads — we’re creating impact. If
              you&apos;re an advertiser, publisher, or partner looking to redefine
              what’s possible with programmatic, you’re in the right place.
            </p>
            <div className="flex flex-col md:flex-row gap-3 mb-4">
              <a
                href="mailto:contact@adxity.com"
                className="rounded-lg font-semibold px-7 py-3 text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-800 shadow-md hover:from-cyan-200 hover:to-blue-400 transition-all"
              >
                Contact Us
              </a>
              <a
                href="http://www.adxity.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg font-semibold px-7 py-3 text-cyan-100 border border-cyan-400/30 shadow-md bg-black/20 hover:text-white hover:bg-cyan-900/10 transition-all"
              >
                Visit Website
              </a>
            </div>
            <div className="text-sm text-cyan-200 opacity-75 text-center">
              Adxity — Advanced Digital Marketing Solutions
              <br />
              Transform your advertising with AI-powered audience targeting and
              analytics.
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
