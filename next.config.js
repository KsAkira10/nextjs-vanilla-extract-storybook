const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = { 
  reactStrictMode: true, 
  webpack5: true,
  images: {
    loader: 'akamai',
    path: 'http://localhost:3000',
  },
};

module.exports = withVanillaExtract(nextConfig);