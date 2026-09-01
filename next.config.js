/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ik.imagekit.io', 'images.ctfassets.net'],
  },
}

module.exports = nextConfig