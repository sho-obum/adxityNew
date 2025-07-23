import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type CareersModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CareersModal: React.FC<CareersModalProps> = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-[2px] p-2"
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 28 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 28 }}
          transition={{ type: "spring", stiffness: 160, damping: 18 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-gradient-to-br from-[#101b35f7] via-[#10294bc3] to-[#12204dde] border border-cyan-400/10 rounded-2xl shadow-2xl p-8 w-full max-w-lg"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-cyan-300 hover:text-white transition"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          {/* Header */}
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200 bg-clip-text text-transparent mb-3">
            Join Our Team
          </h2>
          <p className="text-cyan-100/90 mb-4">
            We&apos;re always seeking talented, creative people who want to impact the future of ad monetization.
          </p>
          <div className="mt-6 space-y-5 text-blue-100 text-base">
            <div>
              <span className="block text-lg font-semibold text-cyan-200 mb-2">Current Openings</span>
              <ul className="list-disc list-inside opacity-90 text-blue-100 space-y-1">
                <li>Frontend React/Next.js Developer</li>
                <li>Backend Node.js/API Engineer</li>
                <li>Mobile SDK Developer</li>
                <li>Ad Operations Specialist</li>
                <li className="text-cyan-400">Don’t see your role? Pitch us!</li>
              </ul>
            </div>
            <div>
              <span className="block font-semibold text-cyan-200 mb-1">Apply to:</span>
              <a
                href="mailto:jobs@adpocket.ai"
                className="underline text-cyan-300 hover:text-cyan-200 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                jobs@adpocket.ai
              </a>
            </div>
            <div>
              <span className="block font-semibold text-cyan-200 mb-1">Tell us about yourself:</span>
              <ul className="list-disc list-inside text-blue-100/90 space-y-1 text-sm">
                <li>Your resume or LinkedIn profile</li>
                <li>What motivates you and why Adpocket?</li>
                <li>When you could start</li>
              </ul>
            </div>
            <div className="text-xs text-cyan-100/60 pt-3">
              <strong>Note:</strong> Adpocket.ai is an equal opportunity employer. All applications are confidential.
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default CareersModal;
