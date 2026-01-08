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
      <div className="mx-auto px-6 relative z-10">
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
                  className="flex-[0_0_180px] min-w-0 md:flex-[0_0_220px] px-6"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className="relative group transition-all duration-500 cursor-pointer flex flex-col items-center justify-center"
                    style={{
                      transform:
                        hoveredIndex === index ? "scale(1.15)" : "scale(1)",
                    }}
                  >
                    {/* Glowing Background Effect - Subtle when hovered */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-700 blur-[40px] rounded-full"
                      style={{
                        background: `radial-gradient(circle at center, ${skill.color}, transparent)`,
                        width: "120px",
                        height: "120px",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    ></div>

                    {/* Icon Container */}
                    <div className="relative z-10 mb-5">
                      <div
                        className={`relative w-24 h-24 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                          hoveredIndex === index ? "translate-y-[-10px]" : ""
                        }`}
                      >
                        <skill.icon
                          className={`text-6xl transition-all duration-500 ${
                            hoveredIndex === index
                              ? "drop-shadow-[0_0_15px_" + skill.color + "]"
                              : ""
                          }`}
                          style={{
                            color: skill.color,
                            filter:
                              hoveredIndex === index
                                ? `drop-shadow(0 0 12px ${skill.color}80)`
                                : "none",
                          }}
                        />

                        {/* Interactive Animation on Hover */}
                        {hoveredIndex === index && (
                          <div
                            className="absolute -inset-4 border-2 rounded-full animate-[spin_4s_linear_infinite]"
                            style={{
                              borderColor: `${skill.color}20`,
                              borderTopColor: skill.color,
                            }}
                          ></div>
                        )}
                      </div>
                    </div>

                    {/* Skill Name */}
                    <h3
                      className={`relative z-10 text-xl font-bold text-center transition-all duration-500 ${
                        hoveredIndex === index
                          ? "text-white scale-110 tracking-wider"
                          : "text-[var(--text-secondary)] opacity-80"
                      }`}
                    >
                      {skill.name}
                    </h3>

                    {/* Subtle Hover Pulse */}
                    <div
                      className={`mt-3 w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                        hoveredIndex === index
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }`}
                      style={{
                        backgroundColor: skill.color,
                        boxShadow: `0 0 10px ${skill.color}`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Fade Edges */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg-primary)] to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg-primary)] to-transparent pointer-events-none z-10"></div>
           */}
        </div>

        {/* Stats Section */}
        <div className="container mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
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
