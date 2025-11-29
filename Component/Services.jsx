'use client'

const services = [
  {
    title: 'Magento 2 Development',
    desc: 'Custom modules, integrations, and platform support.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: 'Custom Modules',
    desc: 'Design and implement robust extension modules.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: 'Backend APIs',
    desc: 'REST/GraphQL APIs and integrations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Hyvä Theme Customization',
    desc: 'Theme work and frontend performance.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    title: 'Performance & Optimization',
    desc: 'Database & backend performance tuning.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Consulting & Support',
    desc: 'Technical guidance and ongoing maintenance.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          My <span className="neon-text">Services</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto rounded-full"></div>
        <p className="text-[var(--muted)] mt-4 max-w-2xl mx-auto">
          Comprehensive backend development services tailored to your needs
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="card group hover:scale-105 transition-all duration-300 text-center"
            style={{ animationDelay: `${i * 75}ms` }}
          >
            {/* Icon */}
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 flex items-center justify-center mx-auto mb-4 text-[var(--accent-primary)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              {s.icon}
            </div>

            <h3 className="font-semibold text-lg mb-2 neon-text">{s.title}</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">{s.desc}</p>

            {/* Decorative line */}
            <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  )
}
