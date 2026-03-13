import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: rootDir,
  },
  async redirects() {
    return [
      {
        source: "/people",
        destination: "/team",
        permanent: true,
      },
      {
        source: "/agents",
        destination: "/team",
        permanent: true,
      },
      {
        source: "/docs",
        destination: "/memory",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
