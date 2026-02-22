import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],

    unoptimized: false,
    formats: ["image/avif", "image/webp"],
    qualities: [75, 80],
  },
};

export default nextConfig;
