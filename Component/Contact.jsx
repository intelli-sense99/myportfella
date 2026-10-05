"use client";
import axios from "axios";
import { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate individual field
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))
          return "Please enter a valid email address";
        return "";
      case "phone":
        if (!value.trim()) return "Phone number is required";
        const phoneRegex = /^\+?[0-9]+$/;
        if (!phoneRegex.test(value))
          return "Please enter a valid phone number (digits only)";
        return "";
      case "message":
        if (!value.trim()) return "Message is required";
        return "";
      default:
        return "";
    }
  };

  // Handle input change with real-time validation
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Handle input blur for validation
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  // Validate entire form
  const validateForm = () => {
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      message: validateField("message", formData.message),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      setStatus("");
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      const response = await axios.post("/api/queries", formData);
      console.log("Response:", response.data);

      // Success
      setStatus("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({ name: "", email: "", phone: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);

      // Handle error response
      if (error.response?.data?.error) {
        setStatus(error.response.data.error);
      } else {
        setStatus("An error occurred. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Get In <span className="neon-text">Touch</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto rounded-full"></div>
        <p className="text-[var(--muted)] mt-4 max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how I can help bring your ideas
          to life
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name, Phone, and Email Row */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Name Input */}
              <div className="relative">
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Your Name <span className="text-[var(--accent-primary)] ml-1">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]">
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    name="name"
                    placeholder="Your Name"
                    className={`w-full pl-12 pr-4 py-3 bg-[var(--bg-tertiary)] border-2 rounded-lg focus:outline-none transition-colors text-[var(--text-primary)] placeholder:text-[var(--muted)] ${
                      errors.name
                        ? "border-rose-500/80 focus:border-rose-400"
                        : "border-[var(--card-border)] focus:border-[var(--accent-primary)]"
                    }`}
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-rose-400 animate-pulse">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone Input */}
              <div className="relative">
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Phone Number <span className="text-[var(--accent-primary)] ml-1">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <input
                    name="phone"
                    placeholder="9800040010"
                    type="tel"
                    className={`w-full pl-12 pr-4 py-3 bg-[var(--bg-tertiary)] border-2 rounded-lg focus:outline-none transition-colors text-[var(--text-primary)] placeholder:text-[var(--muted)] ${
                      errors.phone
                        ? "border-rose-500/80 focus:border-rose-400"
                        : "border-[var(--card-border)] focus:border-[var(--accent-primary)]"
                    }`}
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-rose-400 animate-pulse">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div className="relative">
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Email Address <span className="text-[var(--accent-primary)] ml-1">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    name="email"
                    placeholder="john@example.com"
                    type="email"
                    className={`w-full pl-12 pr-4 py-3 bg-[var(--bg-tertiary)] border-2 rounded-lg focus:outline-none transition-colors text-[var(--text-primary)] placeholder:text-[var(--muted)] ${
                      errors.email
                        ? "border-rose-500/80 focus:border-rose-400"
                        : "border-[var(--card-border)] focus:border-[var(--accent-primary)]"
                    }`}
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-rose-400 animate-pulse">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                Your Message <span className="text-[var(--accent-primary)] ml-1">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-4 top-4 text-[var(--muted)]">
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
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  className={`w-full pl-12 pr-4 py-3 bg-[var(--bg-tertiary)] border-2 rounded-lg focus:outline-none transition-colors text-[var(--text-primary)] placeholder:text-[var(--muted)] resize-none ${
                    errors.message
                      ? "border-rose-500/80 focus:border-rose-400"
                      : "border-[var(--card-border)] focus:border-[var(--accent-primary)]"
                  }`}
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></textarea>
              </div>
              {errors.message && (
                <p className="mt-1 text-sm text-rose-400 animate-pulse">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button and Status */}
            <div className="flex flex-col sm:flex-row-reverse items-center justify-between gap-4">
              <button
                type="submit"
                className="btn-neon w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <svg
                      className="w-5 h-5 animate-spin"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  ) : (
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
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
              </button>
              {status && (
                <div
                  className={`text-sm font-medium animate-pulse ${
                    status.includes("success")
                      ? "text-emerald-400"
                      : status.includes("error") || status.includes("Failed")
                      ? "text-rose-400"
                      : "text-[var(--accent-primary)]"
                  }`}
                >
                  {status}
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Contact Info Cards - Expanding Rounded Pills */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-16 max-w-5xl mx-auto">
          {/* Email Pill */}
          <div
            onClick={() => {
              if (typeof navigator !== "undefined") {
                navigator.clipboard.writeText("vikas1963kondal@gmail.com");
                setStatus("Email copied to clipboard!");
                setTimeout(() => setStatus(""), 3000);
              }
            }}
            className="group relative h-16 w-16 hover:w-80 bg-[var(--bg-secondary)] backdrop-blur-xl border border-[var(--card-border)] hover:border-[var(--accent-primary)] rounded-full flex items-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(0,242,157,0.25)]"
          >
            {/* Circular Icon */}
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center relative z-10">
              <div className="w-11 h-11 rounded-full bg-[var(--bg-tertiary)] border border-[var(--card-border)] flex items-center justify-center group-hover:bg-[var(--accent-primary)] transition-all duration-300 group-hover:scale-105">
                <FiMail className="text-xl text-[var(--accent-primary)] group-hover:text-[#080C0E] transition-colors duration-300" />
              </div>
            </div>

            {/* Expanding Text Content */}
            <div className="flex flex-col opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-100 pr-6 whitespace-nowrap">
              <h3 className="font-bold text-sm text-[var(--text-primary)] leading-tight">
                Email Address
              </h3>
              <div className="text-xs text-[var(--accent-secondary)] font-mono truncate">
                vikas1963kondal@gmail.com
              </div>
            </div>
          </div>

          {/* Phone Pill */}
          <div
            onClick={() => {
              if (typeof navigator !== "undefined") {
                navigator.clipboard.writeText("+91-8699129347");
                setStatus("Phone number copied to clipboard!");
                setTimeout(() => setStatus(""), 3000);
              }
            }}
            className="group relative h-16 w-16 hover:w-72 bg-[var(--bg-secondary)] backdrop-blur-xl border border-[var(--card-border)] hover:border-[var(--accent-secondary)] rounded-full flex items-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(0,210,255,0.25)]"
          >
            {/* Circular Icon */}
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center relative z-10">
              <div className="w-11 h-11 rounded-full bg-[var(--bg-tertiary)] border border-[var(--card-border)] flex items-center justify-center group-hover:bg-[var(--accent-secondary)] transition-all duration-300 group-hover:scale-105">
                <FiPhone className="text-xl text-[var(--accent-secondary)] group-hover:text-[#080C0E] transition-colors duration-300" />
              </div>
            </div>

            {/* Expanding Text Content */}
            <div className="flex flex-col opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-100 pr-6 whitespace-nowrap">
              <h3 className="font-bold text-sm text-[var(--text-primary)] leading-tight">
                Phone / WhatsApp
              </h3>
              <div className="text-xs text-[var(--accent-secondary)] font-mono">
                +91-8699129347
              </div>
            </div>
          </div>

          {/* Location Pill */}
          <div className="group relative h-16 w-16 hover:w-72 bg-[var(--bg-secondary)] backdrop-blur-xl border border-[var(--card-border)] hover:border-[var(--accent-primary)] rounded-full flex items-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(0,242,157,0.25)]">
            {/* Circular Icon */}
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center relative z-10">
              <div className="w-11 h-11 rounded-full bg-[var(--bg-tertiary)] border border-[var(--card-border)] flex items-center justify-center group-hover:bg-[var(--accent-primary)] transition-all duration-300 group-hover:scale-105">
                <FiMapPin className="text-xl text-[var(--accent-primary)] group-hover:text-[#080C0E] transition-colors duration-300" />
              </div>
            </div>

            {/* Expanding Text Content */}
            <div className="flex flex-col opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-100 pr-6 whitespace-nowrap">
              <h3 className="font-bold text-sm text-[var(--text-primary)] leading-tight">
                Location
              </h3>
              <div className="text-xs text-[var(--accent-secondary)] font-mono">
                Ludhiana, Punjab, India
              </div>
            </div>
          </div>

          {/* Response Time Pill */}
          <div className="group relative h-16 w-16 hover:w-72 bg-[var(--bg-secondary)] backdrop-blur-xl border border-[var(--card-border)] hover:border-[var(--accent-tertiary)] rounded-full flex items-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]">
            {/* Circular Icon */}
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center relative z-10">
              <div className="w-11 h-11 rounded-full bg-[var(--bg-tertiary)] border border-[var(--card-border)] flex items-center justify-center group-hover:bg-[var(--accent-tertiary)] transition-all duration-300 group-hover:scale-105">
                <FiClock className="text-xl text-[var(--accent-tertiary)] group-hover:text-[#080C0E] transition-colors duration-300" />
              </div>
            </div>

            {/* Expanding Text Content */}
            <div className="flex flex-col opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-100 pr-6 whitespace-nowrap">
              <h3 className="font-bold text-sm text-[var(--text-primary)] leading-tight">
                Response Time
              </h3>
              <div className="text-xs text-[var(--accent-secondary)] font-mono flex items-center gap-2">
                Within 24 Hours
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scan {
            0% {
              left: 0;
            }
            100% {
              left: 100%;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
