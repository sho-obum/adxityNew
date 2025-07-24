"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { div } from "framer-motion/client";

//---- BUTTON COMPONENT (from your code) ----//
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};
const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const base =
    "rounded-xl px-5 py-2 font-semibold transition text-sm tracking-wide";
  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-400 to-blue-600 text-white shadow hover:from-cyan-300 hover:to-blue-500",
    outline:
      "border border-cyan-400/40 text-cyan-100 hover:bg-cyan-800/25 hover:border-cyan-300",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

//---- FORM + VALIDATION ----//
type FormData = {
  name: string;
  phoneNumber: string;
  email: string;
  query: string;
};
type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    email: "",
    query: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // ----- FORM HANDLERS -----//
  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, "")))
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address";
    if (!formData.query.trim()) newErrors.query = "Message is required";
    else if (formData.query.trim().length < 10)
      newErrors.query = "Your message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    const serializedData = {
      name: formData.name.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      email: formData.email.trim().toLowerCase(),
      query: formData.query.trim(),
      timestamp: new Date().toISOString(),
      source: "contact_page",
      req_url: "adxity.com",
    };
    try {
      const response = await fetch("https://appslabs.store/db/pushdata.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(serializedData),
      });
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      setFormData({ name: "", phoneNumber: "", email: "", query: "" });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch {
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ----- SUCCESS TOAST -----
  const SuccessPopup = () => (
    <AnimatePresence>
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 40 }}
          transition={{ duration: 0.28, type: "spring" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
          <motion.div className="relative bg-gradient-to-br from-[#152741ee] via-[#1a3661f3] to-[#203875ec] border border-cyan-200/10 rounded-2xl p-8 w-full max-w-sm shadow-2xl text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="mx-auto mb-5 w-14 h-14 bg-gradient-to-r from-cyan-500 to-green-400 rounded-full flex items-center justify-center"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-cyan-100 mb-5">
              Thank you for connecting – we’ll reply within 24 hours.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // ---- INFO/CONTENT BLOCK ---- //
  const infoBlock = (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring" }}
      className="w-full max-w-lg mx-auto p-0 flex flex-col gap-5"
    >
      <h2 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-200 bg-clip-text text-transparent mb-1">
        We’d love to hear from you.
      </h2>
      <p className="text-blue-100/90">
        At Adxity, we’re always ready to connect — whether you&apos;re an advertiser
        seeking performance-driven results, a publisher exploring monetization,
        or a partner looking to collaborate. Let’s build something impactful
        together.
      </p>
      <div className="border-t border-cyan-700/30 my-3" />
      <div>
        <h3 className="text-cyan-400 font-bold mb-1 text-lg">
          General Inquiries, Sales, Support, & Partnerships
        </h3>
        <p className="text-blue-100/90 mb-2">
          For all questions — advertising, campaign onboarding, publisher
          support, partnership opportunities, or general feedback — contact us
          at:
        </p>
        <div className="flex flex-wrap gap-2 items-center mt-1 mb-2">
         
          <span className="text-cyan-600">|</span>
          <a
            href="mailto:support@adxity.com"
            className="text-cyan-300 hover:underline font-semibold rounded px-2 py-1 hover:bg-cyan-900/20"
          >
            support@adxity.com
          </a>
        </div>
    
      </div>
      <div>
        <h3 className="text-cyan-400 font-bold mb-1 text-lg">
          Need a Custom Demo?
        </h3>
        <p className="text-blue-100/90 mb-1">
          Interested in seeing how Adxity can elevate your marketing? We’d be
          happy to schedule a personalized walkthrough. Reach out:&nbsp;
          <a
            href="mailto:support@adxity.com"
            className="text-cyan-300 hover:underline font-semibold"
          >
            support@adxity.com
          </a>
        </p>
        <div className="text-blue-300 text-sm italic">
          We look forward to partnering with you.
        </div>
      </div>
    </motion.div>
  );

  // ---- MAIN LAYOUT ---- //
  return (
    <div>
      <Navbar />

      <div className="min-h-screen py-20 bg-gradient-to-br from-[#101a2c] via-[#193157] to-[#0f1d34] flex flex-col items-center justify-center px-2">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r mb-8 from-cyan-400 via-blue-400 to-blue-200 bg-clip-text text-transparent drop-shadow text-center mb-2"
        >
          Contact Us – Adxity
        </motion.h1>
        {/* Responsive Content/Form Row */}
        <div className="w-full max-w-5xl mx-auto flex flex-col-reverse md:flex-row gap-8 md:gap-14 items-start">
          {/* Info text block, comes after form on mobile */}
          <div className="w-full md:w-1/2 py-2">{infoBlock}</div>
          {/* Form (glass box) */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.47, type: "spring" }}
            className="w-full md:w-1/2 bg-gradient-to-br from-[#182843]/90 via-[#1e2a4d]/85 to-[#173063ec] border border-cyan-400/10 rounded-2xl shadow-2xl p-6 md:p-8 backdrop-blur-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#263352] border rounded-xl text-white placeholder-cyan-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.name
                      ? "border-red-400 focus:ring-red-300"
                      : "border-cyan-800 focus:ring-cyan-500"
                  }`}
                  placeholder="Full Name *"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>
              {/* Phone */}
              <div>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  autoComplete="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#263352] border rounded-xl text-white placeholder-cyan-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.phoneNumber
                      ? "border-red-400 focus:ring-red-300"
                      : "border-cyan-800 focus:ring-cyan-500"
                  }`}
                  placeholder="Phone Number *"
                />
                {errors.phoneNumber && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>
              {/* Email */}
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#263352] border rounded-xl text-white placeholder-cyan-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.email
                      ? "border-red-400 focus:ring-red-300"
                      : "border-cyan-800 focus:ring-cyan-500"
                  }`}
                  placeholder="Email Address *"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                )}
              </div>
              {/* Message */}
              <div>
                <textarea
                  id="query"
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 bg-[#263352] border rounded-xl text-white placeholder-cyan-400 focus:outline-none focus:ring-2 transition-all duration-200 resize-none ${
                    errors.query
                      ? "border-red-400 focus:ring-red-300"
                      : "border-cyan-800 focus:ring-cyan-500"
                  }`}
                  placeholder="Your Message *"
                />
                {errors.query && (
                  <p className="mt-1 text-xs text-red-400">{errors.query}</p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full py-3 flex items-center justify-center gap-2"
                disabled={isSubmitting}
                variant="primary"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="w-5 h-5 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="opacity-25"
                      />
                      <path
                        fill="currentColor"
                        className="opacity-75"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg
                      className="w-5 h-5 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
        {/* Toast popup */}
        <SuccessPopup />
      </div>
    </div>
  );
}
