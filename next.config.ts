import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/people',
        destination: '/team',
        permanent: true,
      },
      {
        source: '/agents',
        destination: '/team',
        permanent: true,
      },
      {
        source: '/docs',
        destination: '/memory',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
