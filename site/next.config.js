/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Not a Cloud Kasm Technologies',
    description: 'Unofficial Description',
    icon: '/img/logo.svg',
    listUrl: 'https://monkizzle.github.io/kasm-registry/',
    contactUrl: 'https://github.com/monkizzle/kasm-registry/issues',
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
