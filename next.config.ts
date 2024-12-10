import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ]
   // domains: ['images.unsplash.com'],  Add Unsplash domain here
  },
};

export default nextConfig;
