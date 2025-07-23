import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Button component tailored for your theme
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "white" | "dark";
};
const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const base =
    "rounded-xl px-6 py-3 font-medium transition transform hover:scale-105";
  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-500 text-white shadow-lg hover:shadow-xl",
    outline:
      "border border-cyan-400/50 text-cyan-200 hover:bg-cyan-400/10 hover:text-white",
    white: "bg-white text-indigo-600 hover:bg-gray-100 shadow-lg",
    dark: "bg-gray-800 text-white border border-gray-700 hover:bg-gray-700",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

type PrivacyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("privacy");

  const tabs = [
    { id: "privacy", label: "Privacy Policy" },
    { id: "terms", label: "Terms of Use" },
    { id: "cookies", label: "Cookie Settings" },
    { id: "compliance", label: "Data Compliance" },
    { id: "ads", label: "Ad Standards" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-2 py-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-[#101B35F5] via-[#12326CDE] to-[#12204DE6] border border-cyan-400/10 shadow-2xl backdrop-blur-xl rounded-2xl px-0 md:px-10 py-2 md:py-8 max-w-4xl w-full max-h-[88vh] flex flex-col font-ibrand"
            >
              <div className="flex justify-between items-center mb-6 px-6 pt-5">
                <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200 bg-clip-text text-transparent">
                  Legal & Privacy
                </h2>
                <button
                  onClick={onClose}
                  className="text-cyan-300 hover:text-white transition-colors p-2 rounded-lg focus:outline-none focus:ring focus:ring-cyan-200"
                  aria-label="Close privacy modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-cyan-400/10 px-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-t-lg transition-colors text-sm font-semibold tracking-wide
                      ${activeTab === tab.id
                        ? "bg-gradient-to-tr from-cyan-600 to-blue-500 text-white shadow font-bold border-b-2 border-cyan-400"
                        : "text-cyan-200 hover:text-white hover:bg-cyan-800/30"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="flex-1 overflow-y-auto text-blue-100 px-6 space-y-6">
                {activeTab === "privacy" && (
                  <div className="space-y-6">
                    {/* ...Privacy Policy Content (same as your version)... */}
                    {/* For brevity: Use your detailed privacy sections here */}
                    <section>
                      <h3 className="text-xl font-semibold text-white mb-3">1. Data Collection</h3>
                      {/* ... */}
                    </section>
                    {/* Add all your privacy policy sections here as in your code */}
                  </div>
                )}
                {activeTab === "terms" && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Terms of Use</h3>
                    {/* ...Terms content... */}
                  </div>
                )}
                {activeTab === "cookies" && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Cookie Settings</h3>
                    {/* ...Cookies content... */}
                  </div>
                )}
                {activeTab === "compliance" && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Data Compliance</h3>
                    {/* ...Compliance content... */}
                  </div>
                )}
                {activeTab === "ads" && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Ad Standards</h3>
                    {/* ...Ad Standards content... */}
                  </div>
                )}
              </div>

              {/* Modal Footer Actions */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 pt-6 border-t border-cyan-400/10 px-6 pb-5">
                <p className="text-xs text-cyan-200/70">Last updated: January 2025</p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="text-sm py-1 px-4"
                    onClick={onClose}
                  >
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    className="text-sm py-1 px-4"
                    onClick={() => window.print()}
                  >
                    Download PDF
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PrivacyModal;
