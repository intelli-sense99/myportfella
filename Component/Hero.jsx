'use client'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' }
  ];

  // Track mouse movement for water effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const hero = document.getElementById('hero');
      if (hero) {
        const rect = hero.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
      return () => heroSection.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center pt-16 pb-12 relative overflow-hidden">
      {/* Water Effect Background - Follows Cursor */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}% ${mousePosition.y}%, rgba(16, 185, 129, 0.15) 0%, rgba(59, 130, 246, 0.1) 30%, transparent 70%)`,
          transition: 'background 0.3s ease-out',
          filter: 'blur(40px)',
        }}
      ></div>

      {/* Ripple Effect */}
      <div
        className="absolute w-96 h-96 rounded-full pointer-events-none z-0"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(59, 130, 246, 0.15) 40%, transparent 70%)',
          filter: 'blur(60px)',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      ></div>

      <div className="container">
        <div className="w-full grid md:grid-cols-2 gap-8 items-center relative z-10">
          {/* Left Column - Text Content */}
          <div className="space-y-4">
            <div className="inline-block">
              <span className="text-sm font-semibold text-[var(--accent-primary)] tracking-wider uppercase">
                Backend Developer
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Hi, I'm{' '}
              <span className="neon-text block mt-2">Croxx</span>
            </h1>

            <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl">
              I build <span className="text-[var(--accent-primary)] font-semibold">scalable backend systems</span> with PHP, Laravel & Magento 2
            </p>

            <p className="text-base text-[var(--muted)] max-w-xl">
              Specialized in custom modules, checkout customizations, admin UX improvements, and high-performance backend APIs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="btn-neon">
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg border-2 border-[var(--accent-primary)]/30 text-sm font-semibold hover:border-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 transition-all duration-300 hover:scale-105"
              >
                View My Work
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center hover:border-[var(--accent-primary)] hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center hover:border-[var(--accent-primary)] hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center hover:border-[var(--accent-primary)] hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </a>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="space-y-6">
            {/* Main Feature Card */}
            <div className="card group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg neon-text">Core Focus</h3>
                  <ul className="mt-3 text-sm text-[var(--muted)] space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"></span>
                      Magento 2 custom modules & checkout
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-secondary)]"></span>
                      Laravel backend & REST/GraphQL APIs
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-tertiary)]"></span>
                      Hyvä theme & admin UX optimization
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="card text-center hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl font-bold neon-text">{stat.value}</div>
                  <div className="text-xs text-[var(--muted)] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Availability Badge */}
            <div className="card bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 border-[var(--accent-primary)]/30">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-[var(--accent-primary)] animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-[var(--accent-primary)] animate-ping"></div>
                </div>
                <div>
                  <div className="font-semibold text-sm">Available for Freelance</div>
                  <div className="text-xs text-[var(--muted)]">Open to new opportunities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
