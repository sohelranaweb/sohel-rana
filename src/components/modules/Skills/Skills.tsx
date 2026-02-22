"use client";

import { useState, useRef, MouseEvent } from "react";

import { FaReact, FaNode, FaDocker, FaGitAlt, FaJs } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiExpress,
  SiMongoose,
  SiJsonwebtokens,
  SiRedux,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    icon: <FaReact className="w-12 h-12" />,
    category: "Frontend",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-12 h-12" />,
    category: "Framework",
    color: "#FFFFFF",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-12 h-12" />,
    category: "Language",
    color: "#3178C6",
  },
  {
    name: "Node.js",
    icon: <FaNode className="w-12 h-12" />,
    category: "Backend",
    color: "#339933",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="w-12 h-12" />,
    category: "CSS",
    color: "#06B6D4",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-12 h-12" />,
    category: "Database",
    color: "#F0047F",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-12 h-12" />,
    category: "Database",
    color: "#4169E1",
  },
  {
    name: "Docker",
    icon: <FaDocker className="w-12 h-12" />,
    category: "DevOps",
    color: "#2496ED",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="w-12 h-12" />,
    category: "Tools",
    color: "#F05032",
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="w-12 h-12" />,
    category: "ORM",
    color: "#5A67D8",
  },
  {
    name: "Express",
    icon: <SiExpress className="w-12 h-12" />,
    category: "Backend",
    color: "#FFFFFF",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="w-12 h-12" />,
    category: "Language",
    color: "#F7DF1E",
  },
  {
    name: "Mongoose",
    icon: <SiMongoose className="w-12 h-12" />,
    category: "ODM",
    color: "#AA0000",
  },
  {
    name: "Vercel",
    icon: <IoLogoVercel className="w-12 h-12" />,
    category: "Deployment",
    color: "#FFFFFF",
  },
  {
    name: "JWT",
    icon: <SiJsonwebtokens className="w-12 h-12" />,
    category: "Auth",
    color: "#D63AE1",
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux className="w-12 h-12" />,
    category: "State",
    color: "#764ABC",
  },
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    <section
      id="skills"
      className="min-h-screen py-10 flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Tech Arsenal
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The technologies I use to build fast, scalable, and modern web
            applications
          </p>
        </div>

        {/* Cards Container with Spotlight */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative max-w-7xl mx-auto"
        >
          {/* Spotlight Effect */}
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
            style={{
              background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
            }}
          />

          {/* Floating Cards */}
          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
                style={{
                  animation: `floatCard ${3 + (index % 3)}s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Card */}
                <div
                  className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 transition-all duration-500 hover:border-white/30 h-full"
                  style={{
                    transform:
                      hoveredIndex === index
                        ? "translateY(-10px) rotateX(10deg)"
                        : "translateY(0) rotateX(0)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Glow effect */}
                  <div
                    className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"
                    style={{
                      background: `radial-gradient(circle, ${tech.color}40, transparent)`,
                    }}
                  />

                  {/* Content - Centered Horizontally and Vertically */}
                  <div className="relative flex flex-col items-center justify-center text-center h-full">
                    <div
                      className="text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-500"
                      style={{ color: tech.color }}
                    >
                      {tech.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {tech.name}
                    </h3>
                    <span
                      className="text-xs font-medium px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: `${tech.color}20`,
                        color: tech.color,
                      }}
                    >
                      {tech.category}
                    </span>
                  </div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    <div
                      className="absolute inset-0 translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
