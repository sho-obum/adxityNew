"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// If you're using Next.js, use next/image; otherwise, use <img src={logo} />
import Image from "next/image";
import logo from "../../assets/images/logosaas.png";

// --- Marketing Features (feel free to adjust icons/text) ---
const marketingContent = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-cyan-300"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4v4m0 8v4m4-12h4m-12 0H4m10.2 10.2l2.8 2.8M4 12H0m2.8-2.8l2.8-2.8"
        />
      </svg>
    ),
    title: "Total Transparency",
    desc: "Get clarity on every campaign metric — from spending to real-time performance, no secrets, ever.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-cyan-300"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <rect width="20" height="12" x="2" y="6" rx="3" />
      </svg>
    ),
    title: "Full Control",
    desc: "You’re in the driver’s seat. All settings, every optimization, your way—on desktop and mobile.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-cyan-300"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <polygon points="19 21 12 17.3 5 21 7 13.6 1 8.2 8.55 7.5 12 1 15.45 7.5 23 8.2 17 13.6 19 21" />
      </svg>
    ),
    title: "Real Results",
    desc: "Maximize conversions and ROAS. Advanced bidding models deliver measurable, impactful outcomes.",
  },
];

// --- Navbar ---
const Navbar = () => (
  <nav className="w-full flex items-center justify-between px-4 md:px-10 py-3 bg-black backdrop-blur-lg border-b border-cyan-900/20 shadow-md z-50 mb-6">
    <div className="w-12 md:w-20" />
    {/* Center: Logo */}
    <a
      href="/"
      className="flex items-center gap-2 select-none"
      aria-label="Adxity home"
    >
      <Image
        src={logo}
        width={36}
        height={36}
        alt="logo"
        className="h-7 md:h-9 w-auto"
      />
      <span
        className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200 bg-clip-text text-transparent drop-shadow-lg"
        style={{ fontFamily: "'Ibrand', sans-serif" }}
      >
        Adxity.com
      </span>
    </a>
    {/* Right: Back Button */}
    <a
      href="/"
      className="text-cyan-300 hover:text-cyan-100 transition-colors flex items-center gap-2 text-base md:text-lg px-2 py-1 rounded"
    >
      
      Home
    </a>
  </nav>
);

// --- Main Heading ---
const MainHeading = () => (
  <motion.h1
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.15, type: "spring", stiffness: 62, damping: 14 }}
    className="text-xl md:text-4xl font-extrabold text-center mb-4 drop-shadow-xl"
    style={{
      background: "linear-gradient(90deg,#51e7fa 30%,#3761fa 80%,#80e8fc 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: "0 0 11px #1ee9ff77",
    }}
  >
    See AdPocket in Action <br className="hidden md:block" />Request a Demo
  </motion.h1>
);

// --- Marketing Section ---
const MarketingSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.28, duration: 0.65, type: "spring" }}
    className="flex flex-col gap-7"
  >
    {marketingContent.map((feat, idx) => (
      <motion.div
        key={feat.title}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.33 + idx * 0.08, type: "spring" }}
        className="flex items-start gap-4"
      >
        <div>{feat.icon}</div>
        <div>
          <div className="text-white font-semibold text-lg">{feat.title}</div>
          <div className="text-cyan-100/90">{feat.desc}</div>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

// --- Regions/Company Types for Form ---
const regions = [
  "North America",
  "Europe",
  "Asia Pacific",
  "Latin America",
  "Middle East & Africa",
  "Other",
];

const companyTypes = [
  "Mobile App Developer",
  "Game Studio",
  "E-commerce",
  "Media & Publishing",
  "Enterprise",
  "Agency",
  "Other",
];

// --- Full Form Component (in Glass Box) ---
type DemoFormData = {
  firstName: string;
  lastName: string;
  workEmail: string;
  companyName: string;
  companyRole: string;
  region: string;
  companyType: string;
  expectations: string;
  linkedinProfile: string;
};

const GlassForm = ({
  formData,
  handleInputChange,
  handleSubmit,
  isSubmitting,
  showSuccess,
}: {
  formData: DemoFormData;
  handleInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  handleSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  showSuccess: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98, y: 35 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 70, damping: 18, delay: 0.35 }}
    className="w-full max-w-md mx-auto bg-gradient-to-br from-[#19305be3] via-[#233a6db3] to-[#283e64ee] border border-cyan-400/10 shadow-2xl rounded-xl p-6 md:p-8 backdrop-blur-lg"
  >
    <h2 className="text-xl md:text-2xl font-bold text-center mb-1 bg-gradient-to-r from-cyan-400 to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
      Request Demo
    </h2>
    <AnimatePresence>
      {!showSuccess ? (
        <form onSubmit={handleSubmit} className="space-y-5 pt-2">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              placeholder="First Name *"
              className="w-full px-3 py-2 bg-[#263352] border border-cyan-900 rounded-lg text-white placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              placeholder="Last Name *"
              className="w-full px-3 py-2 bg-[#263352] border border-cyan-900 rounded-lg text-white placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="email"
              name="workEmail"
              value={formData.workEmail}
              onChange={handleInputChange}
              required
              placeholder="Work Email *"
              className="w-full px-3 py-2 bg-[#263352] border border-cyan-900 rounded-lg text-white placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              required
              placeholder="Company Name *"
              className="w-full px-3 py-2 bg-[#263352] border border-cyan-900 rounded-lg text-white placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="companyRole"
              value={formData.companyRole}
              onChange={handleInputChange}
              required
              placeholder="Your Role *"
              className="w-full px-3 py-2 bg-[#263352] border border-cyan-900 rounded-lg text-white placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <select
              name="region"
              value={formData.region}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 bg-[#263352] border border-cyan-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="" className="bg-[#263352]">
                Region *
              </option>
              {regions.map((region) => (
                <option key={region} value={region} className="bg-[#263352]">
                  {region}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              name="companyType"
              value={formData.companyType}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 bg-[#263352] border border-cyan-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="" className="bg-[#263352]">
                Which option best describes your company? *
              </option>
              {companyTypes.map((type) => (
                <option key={type} value={type} className="bg-[#263352]">
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <textarea
              name="expectations"
              value={formData.expectations}
              onChange={handleInputChange}
              required
              rows={3}
              placeholder="What do you expect to achieve with AdPocket? *"
              className="w-full px-3 py-2 bg-[#263352] border border-cyan-900 rounded-lg text-white placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
            />
          </div>
          <div>
            <input
              type="url"
              name="linkedinProfile"
              value={formData.linkedinProfile}
              onChange={handleInputChange}
              placeholder="LinkedIn Profile (optional)"
              className="w-full px-3 py-2 bg-[#263352] border border-cyan-900 rounded-lg text-white placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="flex justify-center pt-6">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.03 } : {}}
              whileTap={!isSubmitting ? { scale: 0.97 } : {}}
              className={`font-medium py-3 px-8 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-cyan-400 outline-none
                shadow-lg ${
                  isSubmitting
                    ? "bg-cyan-900/50 cursor-not-allowed"
                    : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500"
                } text-white`}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit Request"
              )}
            </motion.button>
          </div>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="text-center py-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30"
          >
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2"
          >
            Request sent!
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.21 }}
            className="text-blue-100/90 mb-3"
          >
            Your demo request has been submitted.
            <br />
            Our team will reach out within a day!
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-cyan-100"
          >
            Closing automatically...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

// --- Main PAGE Component ---
export default function RequestDemoPage() {
  const [formData, setFormData] = useState<DemoFormData>({
    firstName: "",
    lastName: "",
    workEmail: "",
    companyName: "",
    companyRole: "",
    region: "",
    companyType: "",
    expectations: "",
    linkedinProfile: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Serialize the data
    const serializedData = {
      name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
      email: formData.workEmail.trim().toLowerCase(),
      phoneNumber: "",
      query: `Demo Request - Company: ${formData.companyName.trim()}, Role: ${formData.companyRole.trim()}, Region: ${
        formData.region
      }, Company Type: ${
        formData.companyType
      }, Expectations: ${formData.expectations.trim()}, LinkedIn: ${
        formData.linkedinProfile.trim() || "Not provided"
      }`,
      timestamp: new Date().toISOString(),
      source: "request_demo",
      req_url: "adpocket.ai",
      companyName: formData.companyName.trim(),
      companyRole: formData.companyRole.trim(),
      region: formData.region,
      companyType: formData.companyType,
      expectations: formData.expectations.trim(),
      linkedinProfile: formData.linkedinProfile.trim(),
    };

    try {
      const response = await fetch("https://appslabs.store/db/pushdata.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(serializedData),
      });
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          firstName: "",
          lastName: "",
          workEmail: "",
          companyName: "",
          companyRole: "",
          region: "",
          companyType: "",
          expectations: "",
          linkedinProfile: "",
        });
      }, 2500);
    } catch {
      alert(
        "There was an error submitting your demo request. Please try again."
      );
      setShowSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1b37] via-[#122347] to-[#132856]">
      <Navbar />
      <section className="max-w-6xl mx-auto p-4 md:p-10 flex flex-col md:flex-row gap-10 md:gap-20 items-center">
        {/* Left (info) */}
        <div className="flex-1 mb-8 md:mb-0 md:pr-10 flex flex-col items-center md:items-start">
          <MainHeading />
          <p className="text-cyan-100/90 mt-3 mb-8 text-lg text-center md:text-left max-w-3xl">
            Fill the form to schedule your walkthrough.
            <br /> We’ll reach out within 24 hours.
          </p>
          <MarketingSection />
        </div>
        {/* Right (glass form box) */}
        <div className="flex-1 w-full">
          <GlassForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            showSuccess={showSuccess}
          />
        </div>
      </section>
    </div>
  );
}
