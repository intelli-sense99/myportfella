"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  SiPhp,
  SiLaravel,
  SiMagento,
  SiMysql,
  SiAlpinedotjs,
  SiJavascript,
  SiGit,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";
import { FaCode, FaBolt, FaDatabase, FaServer } from "react-icons/fa";

const skills = [
  // Backend
  {
    name: "PHP",
    level: 90,
    category: "Backend",
    icon: SiPhp,
    color: "#777BB4",
    description: "Server-side scripting",
  },
  {
    name: "Laravel",
    level: 85,
    category: "Backend",
    icon: SiLaravel,
    color: "#FF2D20",
    description: "PHP Framework",
  },
  {
    name: "Magento 2",
    level: 88,
    category: "Backend",
    icon: SiMagento,
    color: "#EE672F",
    description: "E-commerce Platform",
  },
  {
    name: "REST/GraphQL APIs",
    level: 82,
    category: "Backend",
    icon: FaCode,
    color: "#E10098",
    description: "API Development",
  },
  {
    name: "Node.js",
    level: 75,
    category: "Backend",
    icon: SiNodedotjs,
    color: "#339933",
    description: "JavaScript Runtime",
  },

  // Frontend
  {
    name: "JavaScript",
    level: 72,
    category: "Frontend",
    icon: SiJavascript,
    color: "#F7DF1E",
    description: "Programming Language",
  },
  {
    name: "React",
    level: 80,
    category: "Frontend",
    icon: SiReact,
    color: "#61DAFB",
    description: "UI Library",
  },
  {
    name: "HTML/CSS",
    level: 78,
    category: "Frontend",
    icon: SiHtml5,
    color: "#E34F26",
    description: "Web Fundamentals",
  },
  {
    name: "Alpine.js",
    level: 60,
    category: "Frontend",
    icon: SiAlpinedotjs,
    color: "#8BC0D0",
    description: "Lightweight Framework",
  },
  {
    name: "Hyvä",
    level: 70,
    category: "Frontend",
    icon: FaBolt,
    color: "#FFCC00",
    description: "Magento Theme",
  },
  {
    name: "Tailwind CSS",
    level: 85,
    category: "Frontend",
    icon: SiTailwindcss,
    color: "#06B6D4",
    description: "Utility-first CSS",
  },

  // Database
  {
    name: "MySQL",
    level: 80,
    category: "Database",
    icon: SiMysql,
    color: "#4479A1",
    description: "Relational Database",
  },
  {
    name: "Database Design",
    level: 78,
    category: "Database",
    icon: FaDatabase,
    color: "#FF6B6B",
    description: "Schema Architecture",
  },

  // Tools
  {
    name: "Git",
    level: 80,
    category: "Tools",
    icon: SiGit,
    color: "#F05032",
    description: "Version Control",
  },
  {
    name: "Server Management",
    level: 75,
    category: "Tools",
    icon: FaServer,
    color: "#4CAF50",
    description: "DevOps",
  },
];

export default function Skills() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: true,
      dragFree: true,
      containScroll: false,
    },
    [
      AutoScroll({
        speed: 2,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="neon-text">Skills Arsenal</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-tertiary)] mx-auto rounded-full mb-6"></div>
          <p className="text-[var(--text-secondary)] text-lg max-w-3xl mx-auto">
            Mastering cutting-edge technologies to build exceptional digital
            experiences
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-transparent border-none">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="hidden absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--card-border)] flex items-center justify-center hover:border-[var(--accent-primary)] hover:bg-[var(--accent-primary)] transition-all duration-300 group shadow-lg hover:shadow-[0_0_30px_rgba(229,9,20,0.5)]"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6 text-[var(--text-secondary)] group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            className="hidden absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--card-border)] flex items-center justify-center hover:border-[var(--accent-primary)] hover:bg-[var(--accent-primary)] transition-all duration-300 group shadow-lg hover:shadow-[0_0_30px_rgba(229,9,20,0.5)]"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6 text-[var(--text-secondary)] group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Embla Carousel */}
          <div
            className="overflow-hidden bg-transparent border-none"
            ref={emblaRef}
          >
            <div className="flex py-8">
              {skills.map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex-[0_0_240px] min-w-0 md:flex-[0_0_280px] px-3"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`relative h-full bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--card-border)] rounded-2xl p-8 transition-all duration-500 cursor-pointer group overflow-hidden ${
                      hoveredIndex === index
                        ? "scale-105 border-[var(--accent-primary)] shadow-[0_20px_60px_rgba(229,9,20,0.4)]"
                        : "hover:scale-[1.02]"
                    }`}
                    style={{
                      transform:
                        hoveredIndex === index
                          ? "translateY(-12px) rotateX(5deg)"
                          : "",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Animated Top Border */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-tertiary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Glowing Background Effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
                      style={{
                        background: `radial-gradient(circle at center, ${skill.color}, transparent)`,
                      }}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon Container */}
                      <div className="flex items-center justify-center mb-6">
                        <div
                          className={`relative w-24 h-24 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                            hoveredIndex === index ? "scale-110 rotate-6" : ""
                          }`}
                          style={{
                            background: `linear-gradient(135deg, ${skill.color}15, ${skill.color}05)`,
                            boxShadow:
                              hoveredIndex === index
                                ? `0 0 40px ${skill.color}40`
                                : "none",
                          }}
                        >
                          <skill.icon
                            className="text-5xl transition-all duration-500"
                            style={{ color: skill.color }}
                          />

                          {/* Rotating Ring */}
                          <div
                            className={`absolute inset-0 rounded-2xl border-2 transition-all duration-700 ${
                              hoveredIndex === index
                                ? "rotate-180 scale-125 opacity-0"
                                : "rotate-0 scale-100 opacity-50"
                            }`}
                            style={{ borderColor: skill.color }}
                          ></div>
                        </div>
                      </div>

                      {/* Skill Name */}
                      <h3 className="text-2xl font-bold text-center mb-2 text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                        {skill.name}
                      </h3>

                      {/* Category Badge */}
                      <div className="flex justify-center mb-4">
                        <span
                          className="px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm border transition-all duration-300"
                          style={{
                            backgroundColor: `${skill.color}15`,
                            borderColor: `${skill.color}40`,
                            color: skill.color,
                          }}
                        >
                          {skill.category}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-center text-sm text-[var(--text-secondary)] mb-6 min-h-[40px]">
                        {skill.description}
                      </p>

                      {/* Progress Bar - Hidden for now */}
                      <div className="hidden space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-[var(--text-secondary)]">
                            Proficiency
                          </span>
                          <span
                            className="text-lg font-bold"
                            style={{ color: skill.color }}
                          >
                            {skill.level}%
                          </span>
                        </div>

                        {/* Animated Progress Bar */}
                        <div className="relative w-full bg-[var(--bg-tertiary)] rounded-full h-3 overflow-hidden shadow-inner">
                          <div
                            className="h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                            style={{
                              width:
                                hoveredIndex === index
                                  ? `${skill.level}%`
                                  : "0%",
                              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}CC)`,
                              boxShadow: `0 0 20px ${skill.color}60`,
                            }}
                          >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]"></div>
                          </div>

                          {/* Glow Effect */}
                          <div
                            className="absolute top-0 left-0 h-full rounded-full blur-md transition-all duration-1000"
                            style={{
                              width:
                                hoveredIndex === index
                                  ? `${skill.level}%`
                                  : "0%",
                              background: skill.color,
                              opacity: 0.3,
                            }}
                          ></div>
                        </div>
                      </div>

                      {/* Hover Indicator */}
                      <div className="mt-6 text-center">
                        <div
                          className={`inline-flex items-center gap-2 text-xs font-medium transition-all duration-300 ${
                            hoveredIndex === index
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-2"
                          }`}
                          style={{ color: skill.color }}
                        >
                          <span
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ backgroundColor: skill.color }}
                          ></span>
                          Actively Using
                        </div>
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div
                      className="absolute bottom-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at bottom right, ${skill.color}, transparent)`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg-primary)] to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg-primary)] to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Technologies", value: skills.length, icon: "🚀" },
            { label: "Years Experience", value: "5+", icon: "⏱️" },
            { label: "Projects Completed", value: "50+", icon: "✨" },
            { label: "Happy Clients", value: "30+", icon: "😊" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="card text-center p-6 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-[var(--accent-primary)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--text-secondary)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
