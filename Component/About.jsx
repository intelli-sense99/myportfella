"use client";

import { useState } from "react";
import { SiPostman } from "react-icons/si";
import {
  FiCpu,
  FiArchive,
  FiActivity,
  FiLayers,
  FiTerminal,
} from "react-icons/fi";

export default function About() {
  const [hoveredSpec, setHoveredSpec] = useState(null);

  const specs = [
    {
      id: "arch",
      title: "Architecture",
      value: "Scalable Systems",
      icon: FiLayers,
      desc: "Designing robust and maintainable backend structures.",
    },
    {
      id: "api",
      title: "API Design",
      value: "REST / GraphQL",
      icon: SiPostman,
      desc: "Building high-performance, documented endpoints.",
    },
    {
      id: "perf",
      title: "Performance",
      value: "Optimization",
      icon: FiActivity,
      desc: "Tuning databases and server-side logic for speed.",
    },
    {
      id: "core",
      title: "Kernel",
      value: "PHP / Laravel",
      icon: FiCpu,
      desc: "Leveraging core frameworks to their full potential.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              About <span className="neon-text">Me</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mx-auto"></div>
          </div>
          <div className="bg-[var(--bg-tertiary)] px-6 py-3 rounded-2xl border border-[var(--card-border)] flex items-center gap-4 group">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-mono text-[var(--text-secondary)]">
              Status: Fully Operational
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Side: System Bio Terminal */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-tertiary)] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative h-full bg-[#0d1117] rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col">
              {/* Terminal Header */}
              <div className="bg-[#161b22] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="flex items-center gap-2 text-[var(--muted)] text-xs font-mono">
                  <FiTerminal className="text-sm" />
                  <span>croxx_bio.sys</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-8 font-mono text-sm md:text-base leading-relaxed overflow-y-auto">
                <div className="flex gap-3 mb-4">
                  <span className="text-green-400">➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">whoami</span>
                </div>

                <p className="text-[var(--text-secondary)] mb-6">
                  <span className="text-[var(--accent-primary)] font-bold">
                    Croxx
                  </span>{" "}
                  — A high-performance backend architect specializing in robust{" "}
                  <span className="text-[var(--accent-secondary)]">PHP</span>{" "}
                  ecosystems. My focus is on engineering scalable solutions
                  through{" "}
                  <span className="text-[var(--accent-secondary)]">
                    Laravel
                  </span>{" "}
                  and{" "}
                  <span className="text-[var(--accent-secondary)]">
                    Magento 2
                  </span>
                  .
                </p>

                <div className="flex gap-3 mb-4 text-[var(--muted)]">
                  <span>// System Directive</span>
                </div>

                <p className="text-[var(--text-secondary)] italic border-l-2 border-[var(--accent-primary)] pl-6 py-2 mb-6">
                  "I don't just write code; I design systems that endure, scale,
                  and deliver technical excellence through maintainable
                  architecture."
                </p>

                <div className="flex gap-3 mb-4">
                  <span className="text-green-400">➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">ls components/focus</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[var(--accent-secondary)] opacity-80">
                  <span>[x] Custom_Modules</span>
                  <span>[x] Admin_UX_Tuning</span>
                  <span>[x] API_Integration</span>
                  <span>[x] Load_Optimization</span>
                </div>

                <div className="mt-8 flex gap-2">
                  <span className="w-2.5 h-5 bg-[var(--accent-primary)] animate-[pulse_1s_infinite]"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Technical Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {specs.map((spec) => (
              <div
                key={spec.id}
                onMouseEnter={() => setHoveredSpec(spec.id)}
                onMouseLeave={() => setHoveredSpec(null)}
                className={`card group transition-all duration-500 bg-[var(--bg-secondary)] border border-[var(--card-border)] hover:border-[var(--accent-primary)] p-6 flex flex-col justify-between overflow-hidden relative ${
                  hoveredSpec === spec.id
                    ? "translate-y-[-8px] shadow-[0_20px_40px_rgba(229,9,20,0.15)]"
                    : ""
                }`}
              >
                {/* Background Ping Effect */}
                <div
                  className={`absolute -right-4 -top-4 w-24 h-24 rounded-full bg-[var(--accent-primary)] opacity-0 blur-3xl transition-opacity duration-500 ${
                    hoveredSpec === spec.id ? "opacity-20" : ""
                  }`}
                ></div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--card-border)] flex items-center justify-center group-hover:bg-[var(--accent-primary)] transition-all duration-500">
                      <spec.icon className="text-2xl text-[var(--accent-primary)] group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-mono">
                      Module: {spec.id}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-primary)] transition-colors">
                    {spec.title}
                  </h3>
                  <div className="text-[var(--accent-secondary)] text-sm font-mono mb-4">
                    {spec.value}
                  </div>
                </div>

                <p className="text-xs text-[var(--muted)] leading-relaxed group-hover:text-[var(--text-secondary)] transition-colors">
                  {spec.desc}
                </p>

                {/* Corner Decor */}
                <div className="absolute bottom-2 right-2 opacity-10 group-hover:opacity-30 transition-opacity">
                  <FiLayers className="text-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--accent-primary)]/5 to-transparent pointer-events-none"></div>
    </section>
  );
}
