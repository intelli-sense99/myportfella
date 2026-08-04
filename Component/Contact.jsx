"use client";
import axios from "axios";
import { useState } from "react";

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
                  Your Name <span className="text-red-500 ml-1">*</span>
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
                        ? "border-red-500 focus:border-red-500"
                        : "border-[var(--card-border)] focus:border-[var(--accent-primary)]"
                    }`}
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 animate-pulse">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone Input */}
              <div className="relative">
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Phone Number <span className="text-red-500 ml-1">*</span>
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <input
                    name="phone"
                    placeholder="9800040010"
                    type="tel"
                    className={`w-full pl-12 pr-4 py-3 bg-[var(--bg-tertiary)] border-2 rounded-lg focus:outline-none transition-colors text-[var(--text-primary)] placeholder:text-[var(--muted)] ${
                      errors.phone
                        ? "border-red-500 focus:border-red-500"
                        : "border-[var(--card-border)] focus:border-[var(--accent-primary)]"
                    }`}
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500 animate-pulse">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div className="relative">
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Email Address <span className="text-red-500 ml-1">*</span>
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
                        ? "border-red-500 focus:border-red-500"
                        : "border-[var(--card-border)] focus:border-[var(--accent-primary)]"
                    }`}
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 animate-pulse">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                Your Message <span className="text-red-500 ml-1">*</span>
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
                      ? "border-red-500 focus:border-red-500"
                      : "border-[var(--card-border)] focus:border-[var(--accent-primary)]"
                  }`}
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></textarea>
              </div>
              {errors.message && (
                <p className="mt-1 text-sm text-red-500 animate-pulse">
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
                      ? "text-green-500"
                      : status.includes("error") || status.includes("Failed")
                      ? "text-red-500"
                      : "text-[var(--accent-primary)]"
                  }`}
                >
                  {status}
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Contact Info Cards - Morphing Terminals */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16 max-w-5xl mx-auto">
          <div
            onClick={() => {
              if (typeof navigator !== "undefined") {
                navigator.clipboard.writeText("croxx@example.com");
                setStatus("Email copied to clipboard!");
                setTimeout(() => setStatus(""), 3000);
              }
            }}
            className="group relative h-20 w-full md:w-20 md:hover:w-80 bg-[var(--bg-secondary)] backdrop-blur-xl border border-[var(--card-border)] hover:border-[var(--accent-primary)] rounded-2xl flex items-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden cursor-pointer shadow-2xl"
          >
            {/* Icon Module */}
            <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center relative z-10 transition-transform duration-500 md:group-hover:scale-90">
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--card-border)] flex items-center justify-center md:group-hover:bg-[var(--accent-primary)] transition-all duration-500 md:group-hover:scale-110">
                <svg
                  className="w-6 h-6 text-[var(--accent-primary)] md:group-hover:text-white transition-colors"
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
            </div>

            {/* Content Reveal */}
            <div className="flex flex-col opacity-100 translate-x-0 md:opacity-0 md:-translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-500 md:delay-150 pr-8 whitespace-nowrap">
              <h3 className="font-bold text-lg text-[var(--text-primary)]">
                Email Address
              </h3>
              <div className="text-sm text-[var(--accent-secondary)] font-mono truncate">
                croxx@example.com
              </div>
            </div>
          </div>

          {/* Location Terminal */}
          <div className="group relative h-20 w-full md:w-20 md:hover:w-80 bg-[var(--bg-secondary)] backdrop-blur-xl border border-[var(--card-border)] hover:border-[var(--accent-primary)] rounded-2xl flex items-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden cursor-pointer shadow-2xl">
            {/* Icon Module */}
            <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center relative z-10 transition-transform duration-500 md:group-hover:scale-90">
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--card-border)] flex items-center justify-center md:group-hover:bg-[var(--accent-primary)] transition-all duration-500 md:group-hover:scale-110">
                <svg
                  className="w-6 h-6 text-[var(--accent-primary)] md:group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Content Reveal */}
            <div className="flex flex-col opacity-100 translate-x-0 md:opacity-0 md:-translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-500 md:delay-150 pr-8 whitespace-nowrap">
              <h3 className="font-bold text-lg text-[var(--text-primary)]">
                Location
              </h3>
              <div className="text-sm text-[var(--accent-secondary)] font-mono">
                Remote / Worldwide
              </div>
            </div>
          </div>

          {/* Response Terminal */}
          <div className="group relative h-20 w-full md:w-20 md:hover:w-80 bg-[var(--bg-secondary)] backdrop-blur-xl border border-[var(--card-border)] hover:border-[var(--accent-tertiary)] rounded-2xl flex items-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden cursor-pointer shadow-2xl">
            {/* Icon Module */}
            <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center relative z-10 transition-transform duration-500 md:group-hover:scale-90">
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--card-border)] flex items-center justify-center md:group-hover:bg-[var(--accent-tertiary)] transition-all duration-500 md:group-hover:scale-110">
                <svg
                  className="w-6 h-6 text-[var(--accent-primary)] md:group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Content Reveal */}
            <div className="flex flex-col opacity-100 translate-x-0 md:opacity-0 md:-translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-500 md:delay-150 pr-8 whitespace-nowrap">
              <h3 className="font-bold text-lg text-[var(--text-primary)]">
                Response Time
              </h3>
              <div className="text-sm text-[var(--accent-secondary)] font-mono flex items-center gap-2">
                Within 24 Hours
                {/* <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div> */}
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
