/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  images: {
    //   domains: ['images.unsplash.com', 'tailwindui.com'],
    //   dangerouslyAllowSVG: true,
    // },
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.gravatar.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
