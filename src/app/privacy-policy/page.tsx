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
            <p className="mb-4">
              Adxity is committed to ensuring user trust, legal transparency,
              and ethical digital advertising practices. This document outlines
              the comprehensive legal policies that govern how Adxity operates
              as a Demand Side Platform (DSP), including our approach to user
              data, service terms, cookie management, global compliance
              standards, and advertising guidelines. As a registered business
              operating under the jurisdiction of Sheridan, Wyoming, United
              States (ZIP code: 82801), Adxity upholds the requirements of state
              and federal laws, and additionally complies with key international
              regulations like the General Data Protection Regulation (GDPR) and
              California Consumer Privacy Act (CCPA).
            </p>

            <h2 className="text-xl md:text-2xl font-semibold my-6 text-cyan-300">
              Privacy Policy
            </h2>
            <p className="mb-4">
              Adxity places the utmost importance on safeguarding your personal
              information. Our Privacy Policy is structured to give users
              clarity and confidence in how their data is handled, both
              automatically and manually. When users interact with our
              platform—either by visiting our website, using our DSP interface,
              or engaging with advertising campaigns delivered via our
              infrastructure—we may collect, process, and store certain
              categories of information.
            </p>
            <p className="mb-4">
              This includes direct user data such as name, business email,
              company name, country, phone number, and communication history,
              generally collected during onboarding or partnership registration.
              In parallel, we collect device-related technical data such as IP
              addresses, geolocation (approximate), browser details, operating
              system, screen resolution, and referring URLs. These are gathered
              using first-party and third-party tracking technologies including
              cookies, JavaScript pixels, and mobile device identifiers (IDFA,
              GAID).
            </p>
            <p className="mb-4">
              The primary purpose behind data collection is to optimize user
              experience, secure the platform from abuse, provide customized
              recommendations, and measure campaign performance. We also use
              collected data to improve the reliability, speed, and scalability
              of our ad delivery and analytics systems. Some of this data may be
              aggregated or anonymized for research, benchmarking, and machine
              learning improvements without compromising individual privacy.
            </p>
            <p className="mb-4">
              Adxity does not sell personally identifiable information. Data may
              be shared under strict agreements with infrastructure providers
              (hosting, analytics, fraud detection, CRM) and, where applicable,
              with advertising partners for campaign optimization. All sharing
              adheres to legal boundaries and includes mechanisms to prevent
              unauthorized access.
            </p>
            <p className="mb-4">
              Users have the right to request access to their data, seek
              correction, request deletion, and ask for data portability.
              Depending on the user’s geography, specific rights under GDPR or
              CCPA may apply. Requests can be submitted via email to{" "}
              <a
                href="mailto:support@adxity.com"
                className="text-cyan-300 underline"
              >
                support@adxity.com
              </a>
              . We aim to respond to data access and deletion requests within a
              30-day period unless an extension is legally permitted.
            </p>

           
            <p className="mb-4">
              Use of the Adxity DSP is restricted to verified business entities,
              advertisers, and authorized representatives. During registration,
              users must provide true, complete, and current information. Any
              use of the platform for malicious purposes, including data
              scraping, fraud, or unauthorized API access, will result in
              account suspension and possible legal action.
            </p>
            <p className="mb-4">
              All content on Adxity—including the software interface, source
              code, documentation, creative templates, logo, and branding
              elements—is protected by applicable intellectual property laws.
              You may not replicate, modify, or redistribute Adxity content
              without explicit written permission.
            </p>
            <p className="mb-4">
              We provide access to the platform on an "as-is" and "as-available"
              basis. Adxity does not make guarantees regarding uptime, delivery
              speeds, campaign outcomes, or platform compatibility with external
              systems. While we take commercially reasonable steps to ensure
              reliability and security, technical glitches, third-party service
              outages, or internet disruptions may impact platform behavior.
            </p>
            <p className="mb-4">
              Adxity reserves the right to suspend or terminate access to users
              who violate terms, compromise system integrity, or harm the
              interests of other partners or users. Additionally, these Terms of
              Use may be updated periodically. When such updates occur, we will
              notify users either through email or by posting an announcement
              within the user interface. Continued use after updates implies
              acceptance.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold my-6 text-cyan-300">
              Cookie Settings
            </h2>
            <p className="mb-4">
              To deliver relevant advertisements, analyze traffic trends, and
              improve user experience, Adxity employs cookies and similar
              tracking technologies. Cookies are small data files that are
              stored on your device when you visit a website or use an
              application. They help us identify returning users, save
              preferences, and serve tailored content.
            </p>
            <p className="mb-4">
              Our cookie categories include essential cookies (used for
              authentication and platform security), preference cookies (to
              remember user settings), analytics cookies (to monitor site
              usage), and marketing cookies (for ad targeting). By default, most
              browsers accept cookies automatically, but users have the option
              to manage cookie settings through their browser preferences or via
              the cookie banner on our site.
            </p>
            <p className="mb-4">
              You can opt out of non-essential cookies at any time. This
              includes choosing not to be tracked for performance analytics or
              personalized advertising. However, opting out of essential cookies
              may affect your ability to access or use certain platform
              features.
            </p>
            <p className="mb-4">
              In compliance with GDPR, users in the European Economic Area (EEA)
              are asked for explicit consent before cookies are activated.
              Similarly, we honor "Do Not Track" signals and adhere to privacy
              settings configured by users under U.S. privacy laws.
            </p>
            <p className="mb-4">
              If you wish to revoke or change your cookie preferences after
              granting consent, simply revisit the cookie banner by clicking the
              “Cookie Settings” link found at the footer of every page.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold my-6 text-cyan-300">
              Data Compliance (GDPR & CCPA)
            </h2>
            <p className="mb-4">
              Adxity is fully compliant with international data protection laws,
              most notably the General Data Protection Regulation (GDPR)
              applicable to users in the EU, and the California Consumer Privacy
              Act (CCPA) for users in the state of California, USA.
            </p>
            <p className="mb-4">
              Under the GDPR, Adxity ensures that data is collected lawfully,
              transparently, and only for specific, legitimate purposes. We
              minimize data retention, allow user consent to be withdrawn at any
              time, and offer rights such as access, correction, portability,
              and the right to object or restrict processing. For sensitive data
              operations, we conduct Data Protection Impact Assessments (DPIAs)
              and appoint a Data Protection Officer to oversee compliance.
            </p>
            <p className="mb-4">
              Our legal basis for processing may vary based on the use case. For
              example, performance of a contract, compliance with legal
              obligations, user consent, and legitimate interest are all valid
              grounds we may rely upon.
            </p>
            <p className="mb-4">
              CCPA compliance means we disclose what personal information we
              collect, how it is used, and with whom it is shared. California
              users have the right to know what data is collected, delete it
              upon request, opt-out of its sale (although we do not sell data),
              and not face discrimination for exercising their rights. To
              facilitate these rights, we provide a clear “Do Not Sell My Info”
              link and a data request portal for California residents.
            </p>
            <p className="mb-4">
              In addition to GDPR and CCPA, we stay updated with evolving global
              privacy regulations, including Virginia CDPA, Colorado CPA, and
              Brazil’s LGPD, to ensure compliance across user bases in multiple
              jurisdictions.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold my-6 text-cyan-300">
              Ad Standards & Guidelines
            </h2>
            <p className="mb-4">
              At Adxity, we maintain high standards for the quality, legality,
              and ethical value of ads served through our platform. These Ad
              Standards & Guidelines ensure a safe and trustworthy digital
              advertising environment for publishers, advertisers, and
              end-users.
            </p>
            <p className="mb-4">
              All advertisements submitted to Adxity must comply with applicable
              laws and must not promote prohibited content categories. These
              categories include, but are not limited to, hate speech, weapons,
              illegal drugs, adult content, misleading claims, spyware/malware,
              and deceptive financial schemes.
            </p>
            <p className="mb-4">
              We follow the IAB’s guidelines for ad formats, creative policies,
              and measurement standards. Ads must meet quality specifications in
              terms of size, resolution, load speed, and device compatibility.
              Animated creatives must have a limited frame rate, and
              interstitial ads must allow for clear user opt-out.
            </p>
            <p className="mb-4">
              Advertisers must ensure that landing pages are functional,
              mobile-friendly, and secure (preferably HTTPS). The content of the
              ad must be consistent with the content on the landing page, and
              there should be no automatic redirects, forced downloads, or
              disguised CTAs.
            </p>
            <p className="mb-4">
              All campaigns are subject to pre-approval and periodic reviews. We
              also use automated systems and manual audits to detect policy
              violations. Repeated offenses may lead to campaign rejection,
              account suspension, or permanent blacklisting.
            </p>
            <p className="mb-4">
              Additionally, we promote transparency through clear ad disclosures
              (e.g., “Sponsored” or “Ad” tags), discourage sensationalist
              clickbait, and demand proper targeting practices. We prohibit the
              collection of personal data via ads without user consent.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold my-6 text-cyan-300">
              Conclusion
            </h2>
            <p className="mb-4">
              This Legal Section reflects Adxity’s commitment to legal
              integrity, platform security, user data privacy, and responsible
              advertising. These policies are designed not only to comply with
              the law but to foster trust among our partners and users. We
              recommend that all users review these policies regularly to stay
              informed of their rights and responsibilities.
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
