const path = require('path')

/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  '@babel/preset-react'
])

module.exports = withTM({
  env: {
    API_URL: 'https://localhost:7008/api'
  },
  trailingSlash: true,
  reactStrictMode: false,
  experimental: {
    esmExternals: false,
    jsconfigPaths: true
  },
  webpack: config => {
    config.resolve.alias = {
     ...config.resolve.alias
    }

    return config
  } 
})
