import { Blog } from "./Blogs";

function BlogCard({ blog }: { blog: Blog }) {
  return (
    <a
      href={`/blogs/${blog.slug}`}
      className="group flex flex-col border border-gray-700/60 rounded-sm hover:bg-white/5 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Thumbnail */}
      <div className="w-full h-44 overflow-hidden">
        <img
          src={blog.thumbnail}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-6 pt-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 font-mono">{blog.date}</span>
          <span className="text-xs text-gray-500 border border-gray-700/60 rounded-sm px-2 py-0.5">
            {blog.tag}
          </span>
        </div>

        <h3 className="text-white font-semibold text-base leading-snug group-hover:text-gray-200 transition-colors">
          {blog.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          {blog.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-700/40">
          <span className="text-xs text-gray-500">{blog.readTime}</span>
          <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
            Read more →
          </span>
        </div>
      </div>
    </a>
  );
}

export default BlogCard;
