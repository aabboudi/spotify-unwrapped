/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thisis-images.spotifycdn.com',
        port: '',
        // pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'seed-mix-image.spotifycdn.com',
        port: '',
        // pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'image-cdn-ak.spotifycdn.com',
        port: '',
        // pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: '',
        // pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'mosaic.scdn.co',
        port: '',
        // pathname: '',
      },
    ],
  },
};

module.exports = nextConfig;
