"use client";
import { useState } from "react";
import BlogCard from "./BlogsCard";

export interface Blog {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tag: string;
  thumbnail: string;
}

const blogs: Blog[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 14",
    description:
      "A complete guide to Next.js 14 — covering App Router, Server Components, and all the new features in detail.",
    date: "Jan 12, 2025",
    readTime: "5 min read",
    tag: "Next.js",
    thumbnail: "/blogs/nextjs.png",
  },
  {
    slug: "tailwind-tips",
    title: "Tailwind CSS Tips & Tricks",
    description:
      "Some practical Tailwind CSS tips for building fast and beautiful UIs that you can use in your everyday workflow.",
    date: "Jan 28, 2025",
    readTime: "4 min read",
    tag: "CSS",
    thumbnail: "/blogs/tailwindcss.png",
  },
  {
    slug: "typescript-for-beginners",
    title: "TypeScript for Beginners",
    description:
      "Everything you need to know when moving from JavaScript to TypeScript — types, interfaces, and generics explained simply.",
    date: "Feb 5, 2025",
    readTime: "6 min read",
    tag: "TypeScript",
    thumbnail: "/blogs/typescript.png",
  },
  {
    slug: "react-performance",
    title: "React Performance Optimization",
    description:
      "Proven techniques to keep your React app fast — useMemo, useCallback, lazy loading, and more.",
    date: "Feb 14, 2025",
    readTime: "7 min read",
    tag: "React",
    thumbnail: "/blogs/react.png",
  },
  {
    slug: "git-workflow",
    title: "Git Workflow for Solo Developers",
    description:
      "How to use Git effectively in solo projects — branching strategy, commit messages, and good habits.",
    date: "Feb 19, 2025",
    readTime: "3 min read",
    tag: "Git",
    thumbnail: "/blogs/git-workflow.png",
  },
  {
    slug: "api-design-rest",
    title: "REST API Design Best Practices",
    description:
      "The conventions and patterns you should follow to build clean and maintainable REST APIs.",
    date: "Feb 22, 2025",
    readTime: "5 min read",
    tag: "Backend",
    thumbnail: "/blogs/rest-api.png",
  },
];

function Blogs() {
  const [showAll, setShowAll] = useState(false);

  const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs tracking-[0.4em] text-blue-400/60 uppercase font-mono mb-4">
            ✦ My Writtings ✦
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
            Recent{" "}
            <span className="relative inline-block">
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Posts
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-px linear-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50" />
            </span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
            Things I learn, things I build — I try to write about all of it.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {visibleBlogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>

        {/* View All Button */}
        {!showAll && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="border border-gray-700/60 rounded-sm px-6 py-2.5 text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-all duration-300"
            >
              View all blogs ({blogs.length - 3} more)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Blogs;
