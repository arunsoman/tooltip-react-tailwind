/** @type {import('next').NextConfig} */

const repo = 'arunsoman/tooltip-react-tailwind'
/**
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`
*/

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  reactStrictMode: false,
  swcMinify: true,
  images:{
  }
}

// module.exports = nextConfig
