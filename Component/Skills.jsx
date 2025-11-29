'use client'

const skills = [
  { name: 'PHP', level: 90, category: 'Backend' },
  { name: 'Laravel', level: 85, category: 'Backend' },
  { name: 'Magento 2', level: 88, category: 'Backend' },
  { name: 'MySQL', level: 80, category: 'Database' },
  { name: 'REST/GraphQL APIs', level: 82, category: 'Backend' },
  { name: 'Alpine.js', level: 60, category: 'Frontend' },
  { name: 'Hyvä', level: 70, category: 'Frontend' },
  { name: 'JavaScript', level: 72, category: 'Frontend' },
  { name: 'HTML/CSS', level: 78, category: 'Frontend' },
  { name: 'Git', level: 80, category: 'Tools' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          My <span className="neon-text">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto rounded-full"></div>
        <p className="text-[var(--muted)] mt-4 max-w-2xl mx-auto">
          Expertise across backend development, databases, and modern web technologies
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((s, i) => (
          <div
            key={s.name}
            className="card group hover:scale-[1.02] transition-all duration-300"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="font-semibold text-lg">{s.name}</div>
                <div className="text-xs text-[var(--muted)] mt-1">{s.category}</div>
              </div>
              <div className="text-2xl font-bold text-[var(--accent-primary)]">{s.level}%</div>
            </div>

            {/* Animated Progress Bar */}
            <div className="relative w-full bg-[var(--bg-tertiary)] rounded-full h-2.5 overflow-hidden">
              <div
                style={{ width: `${s.level}%` }}
                className="h-2.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
