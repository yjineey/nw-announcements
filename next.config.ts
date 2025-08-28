import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/nw-announcements' : '',
  trailingSlash: true,
  reactStrictMode: true,
}

export default nextConfig
