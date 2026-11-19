import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets you open the dev server from your phone or another device on the home network.
  allowedDevOrigins: ["192.168.1.70"],
  images: {
    unoptimized: true,
    qualities: [75, 100],
  },
};

export default nextConfig;
