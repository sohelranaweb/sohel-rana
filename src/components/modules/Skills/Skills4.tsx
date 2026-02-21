// components/sections/Skills.tsx
"use client";

const technologies = [
  { name: "React", icon: "⚛️", color: "text-blue-400" },
  { name: "Next.js", icon: "▲", color: "text-white" },
  { name: "TypeScript", icon: "📘", color: "text-blue-500" },
  { name: "Node.js", icon: "🟢", color: "text-green-500" },
  { name: "Tailwind", icon: "🎨", color: "text-cyan-400" },
  { name: "MongoDB", icon: "🍃", color: "text-green-400" },
  { name: "PostgreSQL", icon: "🐘", color: "text-blue-300" },
  { name: "Git", icon: "📦", color: "text-orange-500" },
  { name: "Docker", icon: "🐳", color: "text-blue-400" },
  { name: "Prisma", icon: "💎", color: "text-purple-400" },
  { name: "Express", icon: "🚂", color: "text-gray-400" },
  { name: "JavaScript", icon: "⚡", color: "text-yellow-400" },
];

export default function Skills4() {
  return (
    <section id="skills" className="min-h-screen py-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technologies I Use
          </h2>
          <p className="text-gray-400 text-lg">
            Modern tools for building amazing products
          </p>
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:rotate-3"
              style={{
                animationDelay: `${index * 0.05}s`,
                animation: "fadeInUp 0.5s ease-out forwards",
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />

              <div className="text-center">
                <div className="text-5xl mb-3 transform group-hover:scale-125 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3
                  className={`font-semibold ${tech.color} group-hover:text-white transition-colors`}
                >
                  {tech.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
