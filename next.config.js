/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  // swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    loader: 'akamai',
    path: '',
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/tech/opal-agri': { page: '/tech/opal-agri' },
      '/tech/gaspardo': { page: '/tech/gaspardo' },
      // '/tech/opal-agri/item/': { page: '/tech/opal-agri/item/1' },
      '/tech/opal-agri/item/id': { page: '/tech/opal-agri/item/[id]' },
      '/tech/gaspardo/item/id': { page: '/tech/gaspardo/item/[id]' },
      '/adm321': { page: '/adm321' },
      '/auth/signin': { page: '/auth/signin' },
    }
  },
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID;
    } else {
      return `${new Date().getTime()}`;
    }
  },
}

module.exports = nextConfig
