'use client'

const projects = [
  {
    title: 'Custom Checkout Step',
    desc: 'Inserted a custom checkout step between shipping and payment to collect additional data.',
    tags: ['Magento 2', 'Backend', 'Checkout']
  },
  {
    title: 'Admin Attribute Fields',
    desc: 'Added custom adminhtml customer input fields and observer-driven logic.',
    tags: ['Magento 2', 'Admin', 'Observer']
  },
  {
    title: 'Per-page reCAPTCHA',
    desc: 'Implemented Google reCAPTCHA loading only on specific pages.',
    tags: ['Magento 2', 'Security', 'Performance']
  },
  {
    title: 'A–Z Brand Filter',
    desc: 'Frontend brand category filter with A–Z buttons.',
    tags: ['Magento 2', 'Frontend', 'UX']
  },
  {
    title: 'Swatch New Label',
    desc: 'Show "New" label on configurable swatches via child product attribute.',
    tags: ['Magento 2', 'Frontend', 'Product']
  },
  {
    title: 'Frequently Bought Together',
    desc: 'Module to suggest frequently bought together products for all users.',
    tags: ['Magento 2', 'Module', 'E-commerce']
  },
  {
    title: 'AI Content Generator',
    desc: 'Content generation module for Magento using AI integration.',
    tags: ['Magento 2', 'AI', 'Innovation']
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Featured <span className="neon-text">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto rounded-full"></div>
        <p className="text-[var(--muted)] mt-4 max-w-2xl mx-auto">
          Real-world solutions built with Magento 2, Laravel, and modern web technologies
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className="card group hover:scale-[1.03] transform transition-all duration-300 cursor-pointer relative overflow-hidden"
            style={{ animationDelay: `${i * 75}ms` }}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/0 to-[var(--accent-secondary)]/0 group-hover:from-[var(--accent-primary)]/5 group-hover:to-[var(--accent-secondary)]/5 transition-all duration-300 pointer-events-none"></div>

            <div className="relative z-10">
              {/* Project Icon */}
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-[var(--accent-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>

              <h3 className="font-semibold text-lg mb-2 neon-text group-hover:text-[var(--accent-primary)] transition-colors">
                {p.title}
              </h3>

              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                {p.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow indicator */}
              <div className="mt-4 flex items-center gap-2 text-sm text-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>View Details</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
