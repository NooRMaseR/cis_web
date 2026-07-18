import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/cis/media/data/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/cis/media/data/**',
      },
      new URL("https://nsw-levy-considering-fifth.trycloudflare.com/cis/media/**")
    ],
    dangerouslyAllowLocalIP: true,
  },
};

export default nextConfig;
