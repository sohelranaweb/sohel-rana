// components/sections/Skills.tsx
"use client";

import { useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", icon: "⚛️", level: 90 },
      { name: "Next.js", icon: "▲", level: 85 },
      { name: "TypeScript", icon: "📘", level: 88 },
      { name: "Tailwind CSS", icon: "🎨", level: 92 },
      { name: "HTML/CSS", icon: "🌐", level: 95 },
      { name: "JavaScript", icon: "⚡", level: 90 },
    ],
  },
  {
    title: "Backend",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", icon: "🟢", level: 85 },
      { name: "Express", icon: "🚂", level: 80 },
      { name: "PostgreSQL", icon: "🐘", level: 75 },
      { name: "MongoDB", icon: "🍃", level: 82 },
      { name: "Prisma", icon: "💎", level: 78 },
      { name: "REST API", icon: "🔌", level: 88 },
    ],
  },
  {
    title: "Tools & Others",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git", icon: "📦", level: 90 },
      { name: "Docker", icon: "🐳", level: 70 },
      { name: "VS Code", icon: "💻", level: 95 },
      { name: "Figma", icon: "🎭", level: 75 },
      { name: "Linux", icon: "🐧", level: 80 },
      { name: "Vercel", icon: "▲", level: 85 },
    ],
  },
];

export default function Skills2() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="min-h-screen py-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg">
            Tools and technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="mb-6">
                <div
                  className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10`}
                >
                  <h3
                    className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                  >
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-white font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out rounded-full`}
                        style={{
                          width:
                            hoveredSkill === skill.name
                              ? `${skill.level}%`
                              : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
