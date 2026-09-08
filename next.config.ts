import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.GITHUB_ACTIONS ? "/wedding-invitation-showcase" : "",
  images: { unoptimized: true },
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
  experimental: {
    cpus: 1,
  },
};

export default nextConfig;
