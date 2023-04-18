/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Rogue Reality',
    description: 'Rogue Gallery of workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://roguerdev.github.io/kasm-registry/',
    contactUrl: 'https://github.com/roguerdev/kasm-registry',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
