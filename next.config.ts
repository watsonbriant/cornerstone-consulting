import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cpc-ms.netlify.app",
      },
    ],
  },
};

export default nextConfig;
