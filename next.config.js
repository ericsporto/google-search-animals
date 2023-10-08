/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['*', 'picsum.photos', 'loremflickr.com'],
  },
};

module.exports = nextConfig;
