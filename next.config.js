/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '', // Change to '/your-repo-name' if deploying to user/org page
}

module.exports = nextConfig
