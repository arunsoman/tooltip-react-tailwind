/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/tooltip-react-tailwind/',
  env:{
    BACKEND_URL:'tooltip-react-tailwind'
  },
  reactStrictMode: false,
  swcMinify: true,
  images:{
  }
}

module.exports = nextConfig
