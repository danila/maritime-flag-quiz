/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/maritime-flag-quiz',
  assetPrefix: '/maritime-flag-quiz/',
}

module.exports = nextConfig
