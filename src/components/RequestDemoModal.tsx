import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Modal Props
type RequestDemoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

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

const RequestDemoModal: React.FC<RequestDemoModalProps> = ({
  isOpen,
  onClose,
}) => {
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

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Serialize the data
    const serializedData = {
      name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
      email: formData.workEmail.trim().toLowerCase(),
      phoneNumber: "",
      query: `Demo Request - Company: ${formData.companyName.trim()}, Role: ${formData.companyRole.trim()}, Region: ${formData.region}, Company Type: ${formData.companyType}, Expectations: ${formData.expectations.trim()}, LinkedIn: ${formData.linkedinProfile.trim() || "Not provided"}`,
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(serializedData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

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
        onClose();
      }, 2500);
    } catch (error) {
      alert("There was an error submitting your demo request. Please try again.");
      setShowSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-[2px] p-2"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 28 }}
            transition={{ type: "spring", stiffness: 150, damping: 18 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-[#101b35f7] via-[#10294bc3] to-[#12204dde] border border-cyan-400/10 shadow-2xl rounded-2xl p-0 w-full max-w-2xl max-h-[92vh] overflow-y-auto"
          >
            {!showSuccess ? (
              <div className="relative p-8 pt-7">
                {/* Close */}
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 text-cyan-300 hover:text-white transition"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                {/* Header */}
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200 bg-clip-text text-transparent mb-2">
                  Request a Demo
                </h2>
                <p className="text-cyan-100/80 mb-7">
                  Fill the form and we’ll reach out within 24 hours.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
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
                      <option value="" className="bg-[#263352]">Region *</option>
                      {regions.map((region) => (
                        <option key={region} value={region} className="bg-[#263352]">{region}</option>
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
                          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        "Submit Request"
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            ) : (
              /* Success Message */
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
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
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
                  Your demo request has been submitted.<br />
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RequestDemoModal;
