import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Button for re-use
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

// Modal Props
type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormData = {
  name: string;
  phoneNumber: string;
  email: string;
  query: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    email: "",
    query: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, ""))) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.query.trim()) {
      newErrors.query = "Query is required";
    } else if (formData.query.trim().length < 10) {
      newErrors.query = "Query must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
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
      source: "contact_modal",
      req_url: "adpocket.ai",
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

      setFormData({ name: "", phoneNumber: "", email: "", query: "" });
      onClose();

      setTimeout(() => {
        setShowSuccess(true);
      }, 300);
    } catch (error) {
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle success popup close
  const handleSuccessClose = () => setShowSuccess(false);

  // Success popup
  const SuccessPopup = () => (
    <AnimatePresence>
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center"
          onClick={handleBackdropClick}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 50 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative bg-gradient-to-br from-[#152741ee] via-[#1a3661f3] to-[#203875ec] border border-cyan-200/10 rounded-2xl p-9 w-full max-w-md shadow-2xl text-center"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.15, type: "spring", stiffness: 150, damping: 9,
              }}
              className="mx-auto mb-5 w-14 h-14 bg-gradient-to-r from-cyan-500 to-green-400 rounded-full flex items-center justify-center"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            {/* Success Message */}
            <h3 className="text-xl font-bold text-white mb-2">
              Message Sent Successfully! 🎉
            </h3>
            <p className="text-cyan-100 mb-4">
              Thank you for reaching out! We&apos;ll get back to you within 24 hours.
            </p>
            <Button variant="primary" className="w-full" onClick={handleSuccessClose}>
              Awesome, Got It!
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Main Contact Form Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center"
            onClick={handleBackdropClick}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[3px]" />
            <motion.div
              initial={{ scale: 0.97, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.97, opacity: 0, y: 24 }}
              transition={{ duration: 0.22 }}
              className="relative bg-gradient-to-br from-[#101b35ef] via-[#12326cef] to-[#162451e3] border border-cyan-400/10 rounded-2xl shadow-2xl p-8 w-full max-w-md min-w-[320px]"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-5 top-5 text-cyan-300 hover:text-white transition focus:outline-none"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="mb-7">
                <h2 className="text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
                  Get in Touch
                </h2>
                <p className="text-cyan-100 opacity-80">
                  We&apos;d love to hear from you. Send us a message!
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#263352] border rounded-xl text-white placeholder-cyan-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                      errors.name ? "border-red-400 focus:ring-red-300" : "border-cyan-800 focus:ring-cyan-500"
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
                      errors.phoneNumber ? "border-red-400 focus:ring-red-300" : "border-cyan-800 focus:ring-cyan-500"
                    }`}
                    placeholder="Phone Number *"
                  />
                  {errors.phoneNumber && (
                    <p className="mt-1 text-xs text-red-400">{errors.phoneNumber}</p>
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
                      errors.email ? "border-red-400 focus:ring-red-300" : "border-cyan-800 focus:ring-cyan-500"
                    }`}
                    placeholder="Email Address *"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
                {/* Query */}
                <div>
                  <textarea
                    id="query"
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 bg-[#263352] border rounded-xl text-white placeholder-cyan-400 focus:outline-none focus:ring-2 transition-all duration-200 resize-none ${
                      errors.query ? "border-red-400 focus:ring-red-300" : "border-cyan-800 focus:ring-cyan-500"
                    }`}
                    placeholder="Your Message *"
                  />
                  {errors.query && (
                    <p className="mt-1 text-xs text-red-400">{errors.query}</p>
                  )}
                </div>
                {/* Submit */}
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
                        ></circle>
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
                        className="w-5 h-5"
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
          </motion.div>
        )}
      </AnimatePresence>
      {/* Success notification */}
      <SuccessPopup />
    </>
  );
};

export default ContactModal;
