/** @type {import('next').NextConfig} */
// Served from the root of https://mrghamari.github.io/ (a <user>.github.io repo),
// so no basePath is needed.
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true,
  trailingSlash: true,
};

export default nextConfig;
