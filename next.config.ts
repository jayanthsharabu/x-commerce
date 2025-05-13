import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  //ignore type build issues
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
