const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",  // Correct hostname for images
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  