// components/sections/Skills.tsx
"use client";

import { useState, useRef, MouseEvent } from "react";

const skillsData = [
  { name: "React", icon: "⚛️", level: "Expert" },
  { name: "Next.js", icon: "▲", level: "Advanced" },
  { name: "TypeScript", icon: "📘", level: "Expert" },
  { name: "Node.js", icon: "🟢", level: "Advanced" },
  { name: "Tailwind CSS", icon: "🎨", level: "Expert" },
  { name: "MongoDB", icon: "🍃", level: "Intermediate" },
  { name: "PostgreSQL", icon: "🐘", level: "Advanced" },
  { name: "Docker", icon: "🐳", level: "Intermediate" },
  { name: "Git", icon: "📦", level: "Expert" },
  { name: "Prisma", icon: "💎", level: "Advanced" },
  { name: "Express", icon: "🚂", level: "Advanced" },
  { name: "JavaScript", icon: "⚡", level: "Expert" },
];

export default function Skills6() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="skills" className="min-h-screen py-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 text-lg">
            Constantly learning and evolving
          </p>
        </div>

        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative max-w-5xl mx-auto"
        >
          {/* Spotlight effect */}
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
            }}
          />

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skillsData.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`,
                }}
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative text-center">
                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="text-white font-bold mb-1">{skill.name}</h3>
                    <span className="text-xs text-gray-400 font-medium">
                      {skill.level}
                    </span>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
