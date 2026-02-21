// components/sections/Skills.tsx
"use client";

import { useState } from "react";

const skillsByCategory = {
  Frontend: [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "HTML/CSS", icon: "🌐" },
  ],
  Backend: [
    { name: "Node.js", icon: "🟢" },
    { name: "Express", icon: "🚂" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Prisma", icon: "💎" },
    { name: "REST API", icon: "🔌" },
  ],
  Tools: [
    { name: "Git", icon: "📦" },
    { name: "Docker", icon: "🐳" },
    { name: "VS Code", icon: "💻" },
    { name: "Figma", icon: "🎭" },
    { name: "Linux", icon: "🐧" },
    { name: "Vercel", icon: "▲" },
  ],
};

export default function Skills3() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof skillsByCategory>("Frontend");

  return (
    <section id="skills" className="min-h-screen py-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies I'm proficient in
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.keys(skillsByCategory).map((category) => (
            <button
              key={category}
              onClick={() =>
                setActiveTab(category as keyof typeof skillsByCategory)
              }
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skillsByCategory[activeTab].map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h3 className="text-white font-semibold">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
