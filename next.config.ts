import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export so the site can still be hosted on GitHub Pages
  output: "export",
  images: { unoptimized: true },
  // Emit /contact/index.html so GitHub Pages serves /contact correctly
  trailingSlash: true,
};

export default nextConfig;
