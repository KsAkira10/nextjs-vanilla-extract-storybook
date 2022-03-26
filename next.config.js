const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: 'http://localhost:3000',
  }
};

module.exports = withVanillaExtract(nextConfig);
