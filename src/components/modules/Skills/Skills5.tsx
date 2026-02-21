// components/sections/Skills.tsx
"use client";

const skills = [
  {
    name: "React",
    icon: "⚛️",
    description: "Building interactive UIs",
    gradient: "from-blue-400 to-cyan-500",
    span: "col-span-2 row-span-2",
  },
  {
    name: "Next.js",
    icon: "▲",
    description: "Full-stack framework",
    gradient: "from-gray-700 to-gray-900",
    span: "col-span-1",
  },
  {
    name: "TypeScript",
    icon: "📘",
    description: "Type-safe code",
    gradient: "from-blue-500 to-blue-700",
    span: "col-span-1",
  },
  {
    name: "Node.js",
    icon: "🟢",
    description: "Backend development",
    gradient: "from-green-500 to-emerald-600",
    span: "col-span-1",
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    description: "Utility-first styling",
    gradient: "from-cyan-400 to-blue-500",
    span: "col-span-1",
  },
  {
    name: "MongoDB",
    icon: "🍃",
    description: "NoSQL database",
    gradient: "from-green-600 to-green-800",
    span: "col-span-2",
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    description: "Relational database",
    gradient: "from-blue-400 to-indigo-600",
    span: "col-span-1",
  },
  {
    name: "Docker",
    icon: "🐳",
    description: "Containerization",
    gradient: "from-blue-500 to-blue-700",
    span: "col-span-1",
  },
  {
    name: "Git",
    icon: "📦",
    description: "Version control",
    gradient: "from-orange-500 to-red-600",
    span: "col-span-1",
  },
];

export default function Skills5() {
  return (
    <section id="skills" className="min-h-screen py-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl">
            Technologies I use to bring ideas to life
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`${skill.span} group relative overflow-hidden rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-[1.02]`}
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between">
                <div>
                  <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-500">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {skill.description}
                  </p>
                </div>

                {/* Animated border */}
                <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
