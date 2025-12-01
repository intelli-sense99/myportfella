'use client'
import axios from 'axios'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Validate individual field
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        return ''
      case 'email':
        if (!value.trim()) return 'Email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Please enter a valid email address'
        return ''
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 10) return 'Message must be at least 10 characters'
        return ''
      default:
        return ''
    }
  }

  // Handle input change with real-time validation
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  // Handle input blur for validation
  const handleBlur = (e) => {
    const { name, value } = e.target
    const error = validateField(name, value)
    setErrors({ ...errors, [name]: error })
  }

  // Validate entire form
  const validateForm = () => {
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    }
    setErrors(newErrors)
    return !Object.values(newErrors).some(error => error !== '')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate form
    if (!validateForm()) {
      setStatus('')
      return
    }

    setIsSubmitting(true)
    setStatus('Sending...')

    try {
      const response = await axios.post('/api/queries', formData)
      console.log('Response:', response.data)

      // Success
      setStatus('Message sent successfully! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
      setErrors({ name: '', email: '', message: '' })

      // Clear success message after 5 seconds
      setTimeout(() => setStatus(''), 5000)

    } catch (error) {
      console.error('Error submitting form:', error)

      // Handle error response
      if (error.response?.data?.error) {
        setStatus(error.response.data.error)
      } else {
        setStatus('An error occurred. Please try again later.')
      }
    } finally {
      setIsSubmitting(false)
    }
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
                    className={`w-full pl-12 pr-4 py-3 bg-[var(--bg-tertiary)] border-2 rounded-lg focus:outline-none transition-colors text-[var(--text-primary)] placeholder:text-[var(--muted)] ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-[var(--card-border)] focus:border-[var(--accent-primary)]'
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
                    type="email"
                    className={`w-full pl-12 pr-4 py-3 bg-[var(--bg-tertiary)] border-2 rounded-lg focus:outline-none transition-colors text-[var(--text-primary)] placeholder:text-[var(--muted)] ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-[var(--card-border)] focus:border-[var(--accent-primary)]'
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
                  className={`w-full pl-12 pr-4 py-3 bg-[var(--bg-tertiary)] border-2 rounded-lg focus:outline-none transition-colors text-[var(--text-primary)] placeholder:text-[var(--muted)] resize-none ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-[var(--card-border)] focus:border-[var(--accent-primary)]'
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
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                className="btn-neon w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
              </button>
              {status && (
                <div className={`text-sm font-medium animate-pulse ${status.includes('success') ? 'text-green-500' : status.includes('error') || status.includes('Failed') ? 'text-red-500' : 'text-[var(--accent-primary)]'
                  }`}>
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
