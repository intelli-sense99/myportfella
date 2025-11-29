'use client'
// import { motion } from 'framer-motion'

export default function About() {
  const highlights = [
    {
      title: 'Specialized',
      desc: 'Backend-focused PHP development',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: 'Performance',
      desc: 'Optimized & scalable solutions',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Custom',
      desc: 'Tailored modules & integrations',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          About <span className="neon-text">Me</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {highlights.map((item, index) => (
          <div
            key={item.title}
            className="card text-center hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 flex items-center justify-center mx-auto mb-4 text-[var(--accent-primary)]">
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2 text-[var(--accent-primary)]">{item.title}</h3>
            <p className="text-sm text-[var(--muted)]">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="card max-w-4xl mx-auto">
        <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
          I'm <span className="text-[var(--accent-primary)] font-semibold">Croxx</span> — a backend-focused PHP developer specialized in{' '}
          <span className="text-[var(--accent-secondary)] font-semibold">Laravel</span> and{' '}
          <span className="text-[var(--accent-secondary)] font-semibold">Magento 2</span>.
          I build robust custom modules, improve admin UX, and implement page-specific optimizations like conditional reCAPTCHA loading.
        </p>
        <p className="text-[var(--muted)] leading-relaxed mt-4">
          I care deeply about maintainable, testable, and performant backend systems. My approach combines technical excellence with practical problem-solving to deliver solutions that scale.
        </p>
      </div>
    </section>
  )
}
