'use client'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('✅ Message sent! I\'ll get back to you soon.')
    setTimeout(() => setStatus(''), 5000)
  }

  return (
    <section id="contact" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Get In <span className="neon-text">Touch</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto rounded-full"></div>
        <p className="text-[var(--muted)] mt-4 max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how I can help bring your ideas to life
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="relative">
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-[var(--bg-tertiary)] border-2 border-[var(--card-border)] rounded-lg focus:border-[var(--accent-primary)] focus:outline-none transition-colors text-[var(--text-primary)] placeholder:text-[var(--muted)]"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="relative">
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    name="email"
                    placeholder="john@example.com"
                    required
                    type="email"
                    className="w-full pl-12 pr-4 py-3 bg-[var(--bg-tertiary)] border-2 border-[var(--card-border)] rounded-lg focus:border-[var(--accent-primary)] focus:outline-none transition-colors text-[var(--text-primary)] placeholder:text-[var(--muted)]"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                Your Message
              </label>
              <div className="relative">
                <div className="absolute left-4 top-4 text-[var(--muted)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full pl-12 pr-4 py-3 bg-[var(--bg-tertiary)] border-2 border-[var(--card-border)] rounded-lg focus:border-[var(--accent-primary)] focus:outline-none transition-colors text-[var(--text-primary)] placeholder:text-[var(--muted)] resize-none"
                  rows="6"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
            </div>

            {/* Submit Button and Status */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button type="submit" className="btn-neon w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </span>
              </button>
              {status && (
                <div className="text-sm text-[var(--accent-primary)] font-medium animate-pulse">
                  {status}
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div className="card text-center hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-[var(--accent-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-sm font-semibold">Email</div>
            <div className="text-xs text-[var(--muted)] mt-1">croxx@example.com</div>
          </div>

          <div className="card text-center hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-[var(--accent-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="text-sm font-semibold">Location</div>
            <div className="text-xs text-[var(--muted)] mt-1">Remote Worldwide</div>
          </div>

          <div className="card text-center hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-[var(--accent-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-sm font-semibold">Response Time</div>
            <div className="text-xs text-[var(--muted)] mt-1">Within 24 hours</div>
          </div>
        </div>
      </div>
    </section>
  )
}
