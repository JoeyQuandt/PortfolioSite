/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    domains: ['media.graphassets.com'],
  },
  env: {
    PAGE_URL: process.env.PAGE_URL,
    PAGE_ID: process.env.PAGE_ID,
  },
};
