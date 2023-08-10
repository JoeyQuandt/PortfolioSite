/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    domains: ['media.graphassets.com'],
  },
  env: {
    NEXT_PUBLIC_PAGE_URL: process.env.PAGE_URL,
    NEXT_PUBLIC_PAGE_ID: process.env.PAGE_ID,
  },
};
