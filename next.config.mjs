/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.GITHUB_PAGES === "true" ? "/StePeintre" : "",
  assetPrefix: process.env.GITHUB_PAGES === "true" ? "/StePeintre/" : "",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
